/**
 * @license
 * Copyright 2020 Google LLC
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
import * as legacy from '@firebase/firestore-types';
import * as exp from '../';
import { FieldPath as FieldPathExp } from '../../exp/index.node';
export { GeoPoint, Blob, Timestamp } from '../index.node';
export declare class FirebaseFirestore implements legacy.FirebaseFirestore {
    private readonly _delegate;
    constructor(_delegate: exp.FirebaseFirestore);
    app: import("@firebase/app-types-exp").FirebaseApp;
    settings(settings: legacy.Settings): void;
    enablePersistence(settings?: legacy.PersistenceSettings): Promise<void>;
    collection(collectionPath: string): CollectionReference<legacy.DocumentData>;
    doc(documentPath: string): DocumentReference<legacy.DocumentData>;
    collectionGroup(collectionId: string): Query<legacy.DocumentData>;
    runTransaction<T>(updateFunction: (transaction: legacy.Transaction) => Promise<T>): Promise<T>;
    batch(): legacy.WriteBatch;
    clearPersistence(): Promise<void>;
    enableNetwork(): Promise<void>;
    disableNetwork(): Promise<void>;
    waitForPendingWrites(): Promise<void>;
    onSnapshotsInSync(observer: {
        next?: (value: void) => void;
        error?: (error: Error) => void;
        complete?: () => void;
    }): () => void;
    onSnapshotsInSync(onSync: () => void): () => void;
    terminate(): Promise<void>;
    INTERNAL: {
        delete: () => Promise<void>;
    };
}
export declare class Transaction implements legacy.Transaction {
    private readonly _delegate;
    constructor(_delegate: exp.Transaction);
    get<T>(documentRef: DocumentReference<T>): Promise<DocumentSnapshot<T>>;
    set<T>(documentRef: DocumentReference<T>, data: T, options?: legacy.SetOptions): Transaction;
    update(documentRef: DocumentReference<any>, data: legacy.UpdateData): Transaction;
    update(documentRef: DocumentReference<any>, field: string | FieldPath, value: any, ...moreFieldsAndValues: any[]): Transaction;
    delete(documentRef: DocumentReference<any>): Transaction;
}
export declare class WriteBatch implements legacy.WriteBatch {
    private readonly _delegate;
    constructor(_delegate: exp.WriteBatch);
    set<T>(documentRef: DocumentReference<T>, data: T, options?: legacy.SetOptions): WriteBatch;
    update(documentRef: DocumentReference<any>, data: legacy.UpdateData): WriteBatch;
    update(documentRef: DocumentReference<any>, field: string | FieldPath, value: any, ...moreFieldsAndValues: any[]): WriteBatch;
    delete(documentRef: DocumentReference<any>): WriteBatch;
    commit(): Promise<void>;
}
export declare class DocumentReference<T = legacy.DocumentData> implements legacy.DocumentReference<T> {
    readonly _delegate: exp.DocumentReference<T>;
    constructor(_delegate: exp.DocumentReference<T>);
    readonly id: string;
    readonly firestore: FirebaseFirestore;
    readonly path: string;
    get parent(): legacy.CollectionReference<T>;
    collection(collectionPath: string): legacy.CollectionReference<legacy.DocumentData>;
    isEqual(other: DocumentReference<T>): boolean;
    set(data: Partial<T>, options?: legacy.SetOptions): Promise<void>;
    update(data: legacy.UpdateData): Promise<void>;
    update(field: string | FieldPath, value: any, ...moreFieldsAndValues: any[]): Promise<void>;
    delete(): Promise<void>;
    get(options?: legacy.GetOptions): Promise<DocumentSnapshot<T>>;
    onSnapshot(observer: {
        next?: (snapshot: DocumentSnapshot<T>) => void;
        error?: (error: legacy.FirestoreError) => void;
        complete?: () => void;
    }): () => void;
    onSnapshot(options: legacy.SnapshotListenOptions, observer: {
        next?: (snapshot: DocumentSnapshot<T>) => void;
        error?: (error: Error) => void;
        complete?: () => void;
    }): () => void;
    onSnapshot(onNext: (snapshot: DocumentSnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
    onSnapshot(options: legacy.SnapshotListenOptions, onNext: (snapshot: DocumentSnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
    withConverter<U>(converter: legacy.FirestoreDataConverter<U>): DocumentReference<U>;
}
export declare class DocumentSnapshot<T = legacy.DocumentData> implements legacy.DocumentSnapshot<T> {
    readonly _delegate: exp.DocumentSnapshot<T>;
    constructor(_delegate: exp.DocumentSnapshot<T>);
    readonly ref: DocumentReference<T>;
    readonly id: string;
    readonly metadata: exp.SnapshotMetadata;
    get exists(): boolean;
    data(options?: legacy.SnapshotOptions): T | undefined;
    get(fieldPath: string | FieldPath, options?: legacy.SnapshotOptions): any;
    isEqual(other: DocumentSnapshot<T>): boolean;
}
export declare class QueryDocumentSnapshot<T = legacy.DocumentData> extends DocumentSnapshot<T> implements legacy.QueryDocumentSnapshot<T> {
    readonly _delegate: exp.QueryDocumentSnapshot<T>;
    constructor(_delegate: exp.QueryDocumentSnapshot<T>);
    data(options?: legacy.SnapshotOptions): T;
}
export declare class Query<T = legacy.DocumentData> implements legacy.Query<T> {
    readonly _delegate: exp.Query<T>;
    constructor(_delegate: exp.Query<T>);
    readonly firestore: FirebaseFirestore;
    where(fieldPath: string | FieldPath, opStr: legacy.WhereFilterOp, value: any): Query<T>;
    orderBy(fieldPath: string | FieldPath, directionStr?: legacy.OrderByDirection): Query<T>;
    limit(limit: number): Query<T>;
    limitToLast(limit: number): Query<T>;
    startAt(...args: any[]): Query<T>;
    startAfter(...args: any[]): Query<T>;
    endBefore(...args: any[]): Query<T>;
    endAt(...args: any[]): Query<T>;
    isEqual(other: legacy.Query<T>): boolean;
    get(options?: legacy.GetOptions): Promise<QuerySnapshot<T>>;
    onSnapshot(observer: {
        next?: (snapshot: QuerySnapshot<T>) => void;
        error?: (error: Error) => void;
        complete?: () => void;
    }): () => void;
    onSnapshot(options: legacy.SnapshotListenOptions, observer: {
        next?: (snapshot: QuerySnapshot<T>) => void;
        error?: (error: Error) => void;
        complete?: () => void;
    }): () => void;
    onSnapshot(onNext: (snapshot: QuerySnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
    onSnapshot(options: legacy.SnapshotListenOptions, onNext: (snapshot: QuerySnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
    withConverter<U>(converter: legacy.FirestoreDataConverter<U>): Query<U>;
}
export declare class QuerySnapshot<T = legacy.DocumentData> implements legacy.QuerySnapshot<T> {
    readonly _delegate: exp.QuerySnapshot<T>;
    constructor(_delegate: exp.QuerySnapshot<T>);
    readonly query: Query<T>;
    readonly metadata: exp.SnapshotMetadata;
    readonly size: number;
    readonly empty: boolean;
    get docs(): Array<QueryDocumentSnapshot<T>>;
    docChanges(options?: legacy.SnapshotListenOptions): Array<DocumentChange<T>>;
    forEach(callback: (result: QueryDocumentSnapshot<T>) => void, thisArg?: any): void;
    isEqual(other: QuerySnapshot<T>): boolean;
}
export declare class DocumentChange<T = legacy.DocumentData> implements legacy.DocumentChange<T> {
    private readonly _delegate;
    constructor(_delegate: exp.DocumentChange<T>);
    readonly type: exp.DocumentChangeType;
    readonly doc: QueryDocumentSnapshot<T>;
    readonly oldIndex: number;
    readonly newIndex: number;
}
export declare class CollectionReference<T = legacy.DocumentData> extends Query<T> implements legacy.CollectionReference<T> {
    readonly _delegate: exp.CollectionReference<T>;
    constructor(_delegate: exp.CollectionReference<T>);
    readonly id: string;
    readonly path: string;
    get parent(): DocumentReference<legacy.DocumentData> | null;
    doc(documentPath?: string): DocumentReference<T>;
    add(data: T): Promise<DocumentReference<T>>;
    isEqual(other: CollectionReference<T>): boolean;
    withConverter<U>(converter: legacy.FirestoreDataConverter<U>): CollectionReference<U>;
}
export declare class FieldValue implements legacy.FieldValue {
    readonly _delegate: exp.FieldValue;
    constructor(_delegate: exp.FieldValue);
    static serverTimestamp(): FieldValue;
    static delete(): FieldValue;
    static arrayUnion(...elements: any[]): FieldValue;
    static arrayRemove(...elements: any[]): FieldValue;
    static increment(n: number): FieldValue;
    isEqual(other: FieldValue): boolean;
}
export declare class FieldPath implements legacy.FieldPath {
    private readonly fieldNames;
    constructor(...fieldNames: string[]);
    get _delegate(): FieldPathExp;
    static documentId(): FieldPath;
    isEqual(other: FieldPath): boolean;
}
