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
import { Query } from '../core/query';
import { DocumentKeySet, DocumentMap, DocumentSizeEntries, DocumentSizeEntry, MaybeDocumentMap, NullableMaybeDocumentMap } from '../model/collections';
import { MaybeDocument } from '../model/document';
import { DocumentKey } from '../model/document_key';
import { SnapshotVersion } from '../core/snapshot_version';
import { IndexManager } from './index_manager';
import { DbRemoteDocument } from './indexeddb_schema';
import { LocalSerializer } from './local_serializer';
import { PersistenceTransaction } from './persistence';
import { PersistencePromise } from './persistence_promise';
import { RemoteDocumentCache } from './remote_document_cache';
import { RemoteDocumentChangeBuffer } from './remote_document_change_buffer';
export declare class IndexedDbRemoteDocumentCache implements RemoteDocumentCache {
    readonly serializer: LocalSerializer;
    private readonly indexManager;
    /**
     * @param {LocalSerializer} serializer The document serializer.
     * @param {IndexManager} indexManager The query indexes that need to be maintained.
     */
    constructor(serializer: LocalSerializer, indexManager: IndexManager);
    /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */
    private addEntry;
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */
    private removeEntry;
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */
    private updateMetadata;
    getEntry(transaction: PersistenceTransaction, documentKey: DocumentKey): PersistencePromise<MaybeDocument | null>;
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey The key of the entry to look up.
     * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
     */
    getSizedEntry(transaction: PersistenceTransaction, documentKey: DocumentKey): PersistencePromise<DocumentSizeEntry | null>;
    getEntries(transaction: PersistenceTransaction, documentKeys: DocumentKeySet): PersistencePromise<NullableMaybeDocumentMap>;
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys The set of keys entries to look up.
     * @return A map of MaybeDocuments indexed by key (if a document cannot be
     *     found, the key will be mapped to null) and a map of sizes indexed by
     *     key (zero if the key cannot be found).
     */
    getSizedEntries(transaction: PersistenceTransaction, documentKeys: DocumentKeySet): PersistencePromise<DocumentSizeEntries>;
    private forEachDbEntry;
    getDocumentsMatchingQuery(transaction: PersistenceTransaction, query: Query, sinceReadTime: SnapshotVersion): PersistencePromise<DocumentMap>;
    /**
     * Returns the set of documents that have changed since the specified read
     * time.
     */
    getNewDocumentChanges(transaction: PersistenceTransaction, sinceReadTime: SnapshotVersion): PersistencePromise<{
        changedDocs: MaybeDocumentMap;
        readTime: SnapshotVersion;
    }>;
    /**
     * Returns the read time of the most recently read document in the cache, or
     * SnapshotVersion.min() if not available.
     */
    getLastReadTime(transaction: PersistenceTransaction): PersistencePromise<SnapshotVersion>;
    newChangeBuffer(options?: {
        trackRemovals: boolean;
    }): RemoteDocumentChangeBuffer;
    getSize(txn: PersistenceTransaction): PersistencePromise<number>;
    private getMetadata;
    private setMetadata;
    /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */
    private maybeDecodeDocument;
    /**
     * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
     *
     * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
     * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
     * when we apply the changes.
     */
    private static RemoteDocumentChangeBuffer;
}
/**
 * Retrusn an approximate size for the given document.
 */
export declare function dbDocumentSize(doc: DbRemoteDocument): number;
