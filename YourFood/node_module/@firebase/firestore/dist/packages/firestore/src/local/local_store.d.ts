/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { User } from '../auth/user';
import { Query } from '../core/query';
import { SnapshotVersion } from '../core/snapshot_version';
import { Target } from '../core/target';
import { BatchId, TargetId } from '../core/types';
import { DocumentKeySet, DocumentMap, MaybeDocumentMap } from '../model/collections';
import { MaybeDocument } from '../model/document';
import { DocumentKey } from '../model/document_key';
import { Mutation } from '../model/mutation';
import { MutationBatch, MutationBatchResult } from '../model/mutation_batch';
import { RemoteEvent } from '../remote/remote_event';
import { FirestoreError } from '../util/error';
import { LocalViewChanges } from './local_view_changes';
import { LruGarbageCollector, LruResults } from './lru_garbage_collector';
import { Persistence, PersistenceTransaction } from './persistence';
import { PersistencePromise } from './persistence_promise';
import { QueryEngine } from './query_engine';
import { ClientId } from './shared_client_state';
import { TargetData } from './target_data';
import { IndexedDbPersistence } from './indexeddb_persistence';
/** The result of a write to the local store. */
export interface LocalWriteResult {
    batchId: BatchId;
    changes: MaybeDocumentMap;
}
/** The result of a user-change operation in the local store. */
export interface UserChangeResult {
    readonly affectedDocuments: MaybeDocumentMap;
    readonly removedBatchIds: BatchId[];
    readonly addedBatchIds: BatchId[];
}
/** The result of executing a query against the local store. */
export interface QueryResult {
    readonly documents: DocumentMap;
    readonly remoteKeys: DocumentKeySet;
}
/**
 * Local storage in the Firestore client. Coordinates persistence components
 * like the mutation queue and remote document cache to present a
 * latency-compensated view of stored data.
 *
 * The LocalStore is responsible for accepting mutations from the Sync Engine.
 * Writes from the client are put into a queue as provisional Mutations until
 * they are processed by the RemoteStore and confirmed as having been written
 * to the server.
 *
 * The local store provides the local version of documents that have been
 * modified locally. It maintains the constraint:
 *
 *   LocalDocument = RemoteDocument + Active(LocalMutations)
 *
 * (Active mutations are those that are enqueued and have not been previously
 * acknowledged or rejected).
 *
 * The RemoteDocument ("ground truth") state is provided via the
 * applyChangeBatch method. It will be some version of a server-provided
 * document OR will be a server-provided document PLUS acknowledged mutations:
 *
 *   RemoteDocument' = RemoteDocument + Acknowledged(LocalMutations)
 *
 * Note that this "dirty" version of a RemoteDocument will not be identical to a
 * server base version, since it has LocalMutations added to it pending getting
 * an authoritative copy from the server.
 *
 * Since LocalMutations can be rejected by the server, we have to be able to
 * revert a LocalMutation that has already been applied to the LocalDocument
 * (typically done by replaying all remaining LocalMutations to the
 * RemoteDocument to re-apply).
 *
 * The LocalStore is responsible for the garbage collection of the documents it
 * contains. For now, it every doc referenced by a view, the mutation queue, or
 * the RemoteStore.
 *
 * It also maintains the persistence of mapping queries to resume tokens and
 * target ids. It needs to know this data about queries to properly know what
 * docs it would be allowed to garbage collect.
 *
 * The LocalStore must be able to efficiently execute queries against its local
 * cache of the documents, to provide the initial set of results before any
 * remote changes have been received.
 *
 * Note: In TypeScript, most methods return Promises since the implementation
 * may rely on fetching data from IndexedDB which is async.
 * These Promises will only be rejected on an I/O error or other internal
 * (unexpected) failure (e.g. failed assert) and always represent an
 * unrecoverable error (should be caught / reported by the async_queue).
 */
export interface LocalStore {
    /** Starts the LocalStore. */
    start(): Promise<void>;
    /**
     * Tells the LocalStore that the currently authenticated user has changed.
     *
     * In response the local store switches the mutation queue to the new user and
     * returns any resulting document changes.
     */
    handleUserChange(user: User): Promise<UserChangeResult>;
    localWrite(mutations: Mutation[]): Promise<LocalWriteResult>;
    /**
     * Acknowledge the given batch.
     *
     * On the happy path when a batch is acknowledged, the local store will
     *
     *  + remove the batch from the mutation queue;
     *  + apply the changes to the remote document cache;
     *  + recalculate the latency compensated view implied by those changes (there
     *    may be mutations in the queue that affect the documents but haven't been
     *    acknowledged yet); and
     *  + give the changed documents back the sync engine
     *
     * @returns The resulting (modified) documents.
     */
    acknowledgeBatch(batchResult: MutationBatchResult): Promise<MaybeDocumentMap>;
    /**
     * Remove mutations from the MutationQueue for the specified batch;
     * LocalDocuments will be recalculated.
     *
     * @returns The resulting modified documents.
     */
    rejectBatch(batchId: BatchId): Promise<MaybeDocumentMap>;
    /**
     * Returns the largest (latest) batch id in mutation queue that is pending
     * server response.
     *
     * Returns `BATCHID_UNKNOWN` if the queue is empty.
     */
    getHighestUnacknowledgedBatchId(): Promise<BatchId>;
    /**
     * Returns the last consistent snapshot processed (used by the RemoteStore to
     * determine whether to buffer incoming snapshots from the backend).
     */
    getLastRemoteSnapshotVersion(): Promise<SnapshotVersion>;
    /**
     * Update the "ground-state" (remote) documents. We assume that the remote
     * event reflects any write batches that have been acknowledged or rejected
     * (i.e. we do not re-apply local mutations to updates from this event).
     *
     * LocalDocuments are re-calculated if there are remaining mutations in the
     * queue.
     */
    applyRemoteEvent(remoteEvent: RemoteEvent): Promise<MaybeDocumentMap>;
    /**
     * Notify local store of the changed views to locally pin documents.
     */
    notifyLocalViewChanges(viewChanges: LocalViewChanges[]): Promise<void>;
    /**
     * Gets the mutation batch after the passed in batchId in the mutation queue
     * or null if empty.
     * @param afterBatchId If provided, the batch to search after.
     * @returns The next mutation or null if there wasn't one.
     */
    nextMutationBatch(afterBatchId?: BatchId): Promise<MutationBatch | null>;
    /**
     * Read the current value of a Document with a given key or null if not
     * found - used for testing.
     */
    readDocument(key: DocumentKey): Promise<MaybeDocument | null>;
    /**
     * Assigns the given target an internal ID so that its results can be pinned so
     * they don't get GC'd. A target must be allocated in the local store before
     * the store can be used to manage its view.
     *
     * Allocating an already allocated `Target` will return the existing `TargetData`
     * for that `Target`.
     */
    allocateTarget(target: Target): Promise<TargetData>;
    /**
     * Returns the TargetData as seen by the LocalStore, including updates that may
     * have not yet been persisted to the TargetCache.
     */
    getTargetData(transaction: PersistenceTransaction, target: Target): PersistencePromise<TargetData | null>;
    /**
     * Unpin all the documents associated with the given target. If
     * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
     * directly removes the associated target data from the target cache.
     *
     * Releasing a non-existing `Target` is a no-op.
     */
    releaseTarget(targetId: number, keepPersistedTargetData: boolean): Promise<void>;
    /**
     * Runs the specified query against the local store and returns the results,
     * potentially taking advantage of query data from previous executions (such
     * as the set of remote keys).
     *
     * @param usePreviousResults Whether results from previous executions can
     * be used to optimize this query execution.
     */
    executeQuery(query: Query, usePreviousResults: boolean): Promise<QueryResult>;
    collectGarbage(garbageCollector: LruGarbageCollector): Promise<LruResults>;
}
export declare function newLocalStore(
/** Manages our in-memory or durable persistence. */
persistence: Persistence, queryEngine: QueryEngine, initialUser: User): LocalStore;
/**
 * An interface on top of LocalStore that provides additional functionality
 * for MultiTabSyncEngine.
 */
export interface MultiTabLocalStore extends LocalStore {
    /** Returns the local view of the documents affected by a mutation batch. */
    lookupMutationDocuments(batchId: BatchId): Promise<MaybeDocumentMap | null>;
    removeCachedMutationBatchMetadata(batchId: BatchId): void;
    setNetworkEnabled(networkEnabled: boolean): void;
    getActiveClients(): Promise<ClientId[]>;
    getTarget(targetId: TargetId): Promise<Target | null>;
    /**
     * Returns the set of documents that have been updated since the last call.
     * If this is the first call, returns the set of changes since client
     * initialization. Further invocations will return document changes since
     * the point of rejection.
     */
    getNewDocumentChanges(): Promise<MaybeDocumentMap>;
    /**
     * Reads the newest document change from persistence and forwards the internal
     * synchronization marker so that calls to `getNewDocumentChanges()`
     * only return changes that happened after client initialization.
     */
    synchronizeLastDocumentChangeReadTime(): Promise<void>;
}
export declare function newMultiTabLocalStore(
/** Manages our in-memory or durable persistence. */
persistence: IndexedDbPersistence, queryEngine: QueryEngine, initialUser: User): MultiTabLocalStore;
/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err An error returned by a LocalStore operation.
 * @return A Promise that resolves after we recovered, or the original error.
 */
export declare function ignoreIfPrimaryLeaseLoss(err: FirestoreError): Promise<void>;
