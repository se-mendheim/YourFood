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
import * as firestore from '@firebase/firestore-types';
import { FirebaseApp } from '@firebase/app-types';
import { FirebaseService } from '@firebase/app-types/private';
import { DatabaseId } from '../core/database_info';
import { ListenOptions } from '../core/event_manager';
import { ComponentProvider } from '../core/component_provider';
import { FirestoreClient } from '../core/firestore_client';
import { Bound, Direction, FieldFilter, Operator, OrderBy, Query as InternalQuery } from '../core/query';
import { Transaction as InternalTransaction } from '../core/transaction';
import { ViewSnapshot } from '../core/view_snapshot';
import { Document } from '../model/document';
import { DocumentKey } from '../model/document_key';
import { FieldPath, ResourcePath } from '../model/path';
import { AsyncQueue } from '../util/async_queue';
import { FieldPath as ExternalFieldPath } from './field_path';
import { CompleteFn, ErrorFn, NextFn, PartialObserver, Unsubscribe } from './observer';
import { DocumentKeyReference, UntypedFirestoreDataConverter, UserDataReader } from './user_data_reader';
import { FirebaseAuthInternalName } from '@firebase/auth-interop-types';
import { Provider } from '@firebase/component';
/**
 * Constant used to indicate the LRU garbage collection should be disabled.
 * Set this value as the `cacheSizeBytes` on the settings passed to the
 * `Firestore` instance.
 */
export declare const CACHE_SIZE_UNLIMITED = -1;
/**
 * Options that can be provided in the Firestore constructor when not using
 * Firebase (aka standalone mode).
 */
export interface FirestoreDatabase {
    projectId: string;
    database?: string;
}
/**
 * The root reference to the database.
 */
export declare class Firestore implements firestore.FirebaseFirestore, FirebaseService {
    readonly _databaseId: DatabaseId;
    private readonly _persistenceKey;
    private readonly _componentProvider;
    private _credentials;
    private readonly _firebaseApp;
    private _settings;
    private _firestoreClient;
    readonly _queue: AsyncQueue;
    _userDataReader: UserDataReader | undefined;
    constructor(databaseIdOrApp: FirestoreDatabase | FirebaseApp, authProvider: Provider<FirebaseAuthInternalName>, componentProvider?: ComponentProvider);
    get _dataReader(): UserDataReader;
    settings(settingsLiteral: firestore.Settings): void;
    enableNetwork(): Promise<void>;
    disableNetwork(): Promise<void>;
    enablePersistence(settings?: firestore.PersistenceSettings): Promise<void>;
    clearPersistence(): Promise<void>;
    terminate(): Promise<void>;
    get _isTerminated(): boolean;
    waitForPendingWrites(): Promise<void>;
    onSnapshotsInSync(observer: PartialObserver<void>): Unsubscribe;
    onSnapshotsInSync(onSync: () => void): Unsubscribe;
    ensureClientConfigured(): FirestoreClient;
    private makeDatabaseInfo;
    private configureClient;
    private static databaseIdFromApp;
    get app(): FirebaseApp;
    INTERNAL: {
        delete: () => Promise<void>;
    };
    collection(pathString: string): firestore.CollectionReference;
    doc(pathString: string): firestore.DocumentReference;
    collectionGroup(collectionId: string): firestore.Query;
    runTransaction<T>(updateFunction: (transaction: firestore.Transaction) => Promise<T>): Promise<T>;
    batch(): firestore.WriteBatch;
    static get logLevel(): firestore.LogLevel;
    static setLogLevel(level: firestore.LogLevel): void;
    _areTimestampsInSnapshotsEnabled(): boolean;
}
/** Registers the listener for onSnapshotsInSync() */
export declare function addSnapshotsInSyncListener(firestoreClient: FirestoreClient, observer: PartialObserver<void>): Unsubscribe;
/**
 * A reference to a transaction.
 */
export declare class Transaction implements firestore.Transaction {
    private _firestore;
    private _transaction;
    constructor(_firestore: Firestore, _transaction: InternalTransaction);
    get<T>(documentRef: firestore.DocumentReference<T>): Promise<firestore.DocumentSnapshot<T>>;
    set<T>(documentRef: DocumentReference<T>, data: Partial<T>, options: firestore.SetOptions): Transaction;
    set<T>(documentRef: DocumentReference<T>, data: T): Transaction;
    update(documentRef: firestore.DocumentReference<unknown>, value: firestore.UpdateData): Transaction;
    update(documentRef: firestore.DocumentReference<unknown>, field: string | ExternalFieldPath, value: unknown, ...moreFieldsAndValues: unknown[]): Transaction;
    delete(documentRef: firestore.DocumentReference<unknown>): Transaction;
}
export declare class WriteBatch implements firestore.WriteBatch {
    private _firestore;
    private _mutations;
    private _committed;
    constructor(_firestore: Firestore);
    set<T>(documentRef: DocumentReference<T>, data: Partial<T>, options: firestore.SetOptions): WriteBatch;
    set<T>(documentRef: DocumentReference<T>, data: T): WriteBatch;
    update(documentRef: firestore.DocumentReference<unknown>, value: firestore.UpdateData): WriteBatch;
    update(documentRef: firestore.DocumentReference<unknown>, field: string | ExternalFieldPath, value: unknown, ...moreFieldsAndValues: unknown[]): WriteBatch;
    delete(documentRef: firestore.DocumentReference<unknown>): WriteBatch;
    commit(): Promise<void>;
    private verifyNotCommitted;
}
/**
 * A reference to a particular document in a collection in the database.
 */
export declare class DocumentReference<T = firestore.DocumentData> extends DocumentKeyReference<T> implements firestore.DocumentReference<T> {
    _key: DocumentKey;
    readonly firestore: Firestore;
    readonly _converter: firestore.FirestoreDataConverter<T> | null;
    private _firestoreClient;
    constructor(_key: DocumentKey, firestore: Firestore, _converter: firestore.FirestoreDataConverter<T> | null);
    static forPath<U>(path: ResourcePath, firestore: Firestore, converter: firestore.FirestoreDataConverter<U> | null): DocumentReference<U>;
    get id(): string;
    get parent(): firestore.CollectionReference<T>;
    get path(): string;
    collection(pathString: string): firestore.CollectionReference<firestore.DocumentData>;
    isEqual(other: firestore.DocumentReference<T>): boolean;
    set(value: Partial<T>, options: firestore.SetOptions): Promise<void>;
    set(value: T): Promise<void>;
    update(value: firestore.UpdateData): Promise<void>;
    update(field: string | ExternalFieldPath, value: unknown, ...moreFieldsAndValues: unknown[]): Promise<void>;
    delete(): Promise<void>;
    onSnapshot(observer: PartialObserver<firestore.DocumentSnapshot<T>>): Unsubscribe;
    onSnapshot(options: firestore.SnapshotListenOptions, observer: PartialObserver<firestore.DocumentSnapshot<T>>): Unsubscribe;
    onSnapshot(onNext: NextFn<firestore.DocumentSnapshot<T>>, onError?: ErrorFn, onCompletion?: CompleteFn): Unsubscribe;
    onSnapshot(options: firestore.SnapshotListenOptions, onNext: NextFn<firestore.DocumentSnapshot<T>>, onError?: ErrorFn, onCompletion?: CompleteFn): Unsubscribe;
    get(options?: firestore.GetOptions): Promise<firestore.DocumentSnapshot<T>>;
    withConverter<U>(converter: firestore.FirestoreDataConverter<U>): firestore.DocumentReference<U>;
    /**
     * Converts a ViewSnapshot that contains the current document to a
     * DocumentSnapshot.
     */
    private _convertToDocSnapshot;
}
/** Registers an internal snapshot listener for `ref`. */
export declare function addDocSnapshotListener(firestoreClient: FirestoreClient, key: DocumentKey, options: ListenOptions, observer: PartialObserver<ViewSnapshot>): Unsubscribe;
/**
 * Retrieves a latency-compensated document from the backend via a
 * SnapshotListener.
 */
export declare function getDocViaSnapshotListener(firestoreClient: FirestoreClient, key: DocumentKey, options?: firestore.GetOptions): Promise<ViewSnapshot>;
export declare class SnapshotMetadata implements firestore.SnapshotMetadata {
    readonly hasPendingWrites: boolean;
    readonly fromCache: boolean;
    constructor(hasPendingWrites: boolean, fromCache: boolean);
    isEqual(other: firestore.SnapshotMetadata): boolean;
}
/**
 * Options interface that can be provided to configure the deserialization of
 * DocumentSnapshots.
 */
export interface SnapshotOptions extends firestore.SnapshotOptions {
}
export declare class DocumentSnapshot<T = firestore.DocumentData> implements firestore.DocumentSnapshot<T> {
    private _firestore;
    private _key;
    _document: Document | null;
    private _fromCache;
    private _hasPendingWrites;
    private readonly _converter;
    constructor(_firestore: Firestore, _key: DocumentKey, _document: Document | null, _fromCache: boolean, _hasPendingWrites: boolean, _converter: firestore.FirestoreDataConverter<T> | null);
    data(options?: firestore.SnapshotOptions): T | undefined;
    get(fieldPath: string | ExternalFieldPath, options?: firestore.SnapshotOptions): unknown;
    get id(): string;
    get ref(): firestore.DocumentReference<T>;
    get exists(): boolean;
    get metadata(): firestore.SnapshotMetadata;
    isEqual(other: firestore.DocumentSnapshot<T>): boolean;
}
export declare class QueryDocumentSnapshot<T = firestore.DocumentData> extends DocumentSnapshot<T> implements firestore.QueryDocumentSnapshot<T> {
    data(options?: SnapshotOptions): T;
}
/** The query class that is shared between the full, lite and legacy SDK. */
export declare class BaseQuery {
    protected _databaseId: DatabaseId;
    protected _dataReader: UserDataReader;
    protected _query: InternalQuery;
    constructor(_databaseId: DatabaseId, _dataReader: UserDataReader, _query: InternalQuery);
    protected createFilter(fieldPath: FieldPath, op: Operator, value: unknown): FieldFilter;
    protected createOrderBy(fieldPath: FieldPath, direction: Direction): OrderBy;
    /**
     * Create a Bound from a query and a document.
     *
     * Note that the Bound will always include the key of the document
     * and so only the provided document will compare equal to the returned
     * position.
     *
     * Will throw if the document does not contain all fields of the order by
     * of the query or if any of the fields in the order by are an uncommitted
     * server timestamp.
     */
    protected boundFromDocument(methodName: string, doc: Document | null, before: boolean): Bound;
    /**
     * Converts a list of field values to a Bound for the given query.
     */
    protected boundFromFields(methodName: string, values: unknown[], before: boolean): Bound;
    /**
     * Parses the given documentIdValue into a ReferenceValue, throwing
     * appropriate errors if the value is anything other than a DocumentReference
     * or String, or if the string is malformed.
     */
    private parseDocumentIdValue;
    /**
     * Validates that the value passed into a disjunctrive filter satisfies all
     * array requirements.
     */
    private validateDisjunctiveFilterElements;
    private validateNewFilter;
    private validateNewOrderBy;
    private validateOrderByAndInequalityMatch;
}
export declare function validateHasExplicitOrderByForLimitToLast(query: InternalQuery): void;
export declare class Query<T = firestore.DocumentData> extends BaseQuery implements firestore.Query<T> {
    _query: InternalQuery;
    readonly firestore: Firestore;
    protected readonly _converter: firestore.FirestoreDataConverter<T> | null;
    constructor(_query: InternalQuery, firestore: Firestore, _converter: firestore.FirestoreDataConverter<T> | null);
    where(field: string | ExternalFieldPath, opStr: firestore.WhereFilterOp, value: unknown): firestore.Query<T>;
    orderBy(field: string | ExternalFieldPath, directionStr?: firestore.OrderByDirection): firestore.Query<T>;
    limit(n: number): firestore.Query<T>;
    limitToLast(n: number): firestore.Query<T>;
    startAt(docOrField: unknown | firestore.DocumentSnapshot<unknown>, ...fields: unknown[]): firestore.Query<T>;
    startAfter(docOrField: unknown | firestore.DocumentSnapshot<unknown>, ...fields: unknown[]): firestore.Query<T>;
    endBefore(docOrField: unknown | firestore.DocumentSnapshot<unknown>, ...fields: unknown[]): firestore.Query<T>;
    endAt(docOrField: unknown | firestore.DocumentSnapshot<unknown>, ...fields: unknown[]): firestore.Query<T>;
    isEqual(other: firestore.Query<T>): boolean;
    withConverter<U>(converter: firestore.FirestoreDataConverter<U>): firestore.Query<U>;
    /** Helper function to create a bound from a document or fields */
    private boundFromDocOrFields;
    onSnapshot(observer: PartialObserver<firestore.QuerySnapshot<T>>): Unsubscribe;
    onSnapshot(options: firestore.SnapshotListenOptions, observer: PartialObserver<firestore.QuerySnapshot<T>>): Unsubscribe;
    onSnapshot(onNext: NextFn<firestore.QuerySnapshot<T>>, onError?: ErrorFn, onCompletion?: CompleteFn): Unsubscribe;
    onSnapshot(options: firestore.SnapshotListenOptions, onNext: NextFn<firestore.QuerySnapshot<T>>, onError?: ErrorFn, onCompletion?: CompleteFn): Unsubscribe;
    get(options?: firestore.GetOptions): Promise<firestore.QuerySnapshot<T>>;
}
/**
 * Retrieves a latency-compensated query snapshot from the backend via a
 * SnapshotListener.
 */
export declare function getDocsViaSnapshotListener(firestore: FirestoreClient, query: InternalQuery, options?: firestore.GetOptions): Promise<ViewSnapshot>;
/** Registers an internal snapshot listener for `query`. */
export declare function addQuerySnapshotListener(firestore: FirestoreClient, query: InternalQuery, options: ListenOptions, observer: PartialObserver<ViewSnapshot>): Unsubscribe;
export declare class QuerySnapshot<T = firestore.DocumentData> implements firestore.QuerySnapshot<T> {
    private readonly _firestore;
    private readonly _originalQuery;
    private readonly _snapshot;
    private readonly _converter;
    private _cachedChanges;
    private _cachedChangesIncludeMetadataChanges;
    readonly metadata: firestore.SnapshotMetadata;
    constructor(_firestore: Firestore, _originalQuery: InternalQuery, _snapshot: ViewSnapshot, _converter: firestore.FirestoreDataConverter<T> | null);
    get docs(): Array<firestore.QueryDocumentSnapshot<T>>;
    get empty(): boolean;
    get size(): number;
    forEach(callback: (result: firestore.QueryDocumentSnapshot<T>) => void, thisArg?: unknown): void;
    get query(): firestore.Query<T>;
    docChanges(options?: firestore.SnapshotListenOptions): Array<firestore.DocumentChange<T>>;
    /** Check the equality. The call can be very expensive. */
    isEqual(other: firestore.QuerySnapshot<T>): boolean;
    private convertToDocumentImpl;
}
export declare class CollectionReference<T = firestore.DocumentData> extends Query<T> implements firestore.CollectionReference<T> {
    readonly _path: ResourcePath;
    constructor(_path: ResourcePath, firestore: Firestore, _converter: firestore.FirestoreDataConverter<T> | null);
    get id(): string;
    get parent(): firestore.DocumentReference<firestore.DocumentData> | null;
    get path(): string;
    doc(pathString?: string): firestore.DocumentReference<T>;
    add(value: T): Promise<firestore.DocumentReference<T>>;
    withConverter<U>(converter: firestore.FirestoreDataConverter<U>): firestore.CollectionReference<U>;
}
/**
 * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
 *
 * Exported for testing.
 *
 * @param snapshot The ViewSnapshot that represents the expected state.
 * @param includeMetadataChanges Whether to include metadata changes.
 * @param converter A factory function that returns a QueryDocumentSnapshot.
 * @return An objecyt that matches the firestore.DocumentChange API.
 */
export declare function changesFromSnapshot<DocSnap>(snapshot: ViewSnapshot, includeMetadataChanges: boolean, converter: (doc: Document, fromCache: boolean, hasPendingWrite: boolean) => DocSnap): Array<{
    type: firestore.DocumentChangeType;
    doc: DocSnap;
    oldIndex: number;
    newIndex: number;
}>;
/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */
export declare function applyFirestoreDataConverter<T>(converter: UntypedFirestoreDataConverter<T> | null, value: T, options?: firestore.SetOptions): firestore.DocumentData;
