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
import * as firestore from '../../index';
import { DocumentKey } from '../../../src/model/document_key';
import { Document } from '../../../src/model/document';
import { DocumentSnapshot as LiteDocumentSnapshot } from '../../../lite/src/api/snapshot';
import { Firestore } from './database';
import { Query } from '../../../lite/src/api/reference';
import { SnapshotMetadata } from '../../../src/api/database';
import { ViewSnapshot } from '../../../src/core/view_snapshot';
export declare class DocumentSnapshot<T = firestore.DocumentData> extends LiteDocumentSnapshot<T> implements firestore.DocumentSnapshot<T> {
    readonly _firestore: Firestore;
    readonly metadata: firestore.SnapshotMetadata;
    private readonly _firestoreImpl;
    constructor(_firestore: Firestore, key: DocumentKey, document: Document | null, metadata: firestore.SnapshotMetadata, converter: firestore.FirestoreDataConverter<T> | null);
    exists(): this is firestore.QueryDocumentSnapshot<T>;
    data(options?: firestore.SnapshotOptions): T | undefined;
    get(fieldPath: string | firestore.FieldPath, options?: firestore.SnapshotOptions): unknown;
}
export declare class QueryDocumentSnapshot<T = firestore.DocumentData> extends DocumentSnapshot<T> implements firestore.QueryDocumentSnapshot<T> {
    data(options?: firestore.SnapshotOptions): T;
}
export declare class QuerySnapshot<T = firestore.DocumentData> implements firestore.QuerySnapshot<T> {
    readonly _firestore: Firestore;
    readonly query: Query<T>;
    readonly _snapshot: ViewSnapshot;
    readonly metadata: SnapshotMetadata;
    private _cachedChanges?;
    private _cachedChangesIncludeMetadataChanges?;
    constructor(_firestore: Firestore, query: Query<T>, _snapshot: ViewSnapshot);
    get docs(): Array<firestore.QueryDocumentSnapshot<T>>;
    get size(): number;
    get empty(): boolean;
    forEach(callback: (result: firestore.QueryDocumentSnapshot<T>) => void, thisArg?: unknown): void;
    docChanges(options?: firestore.SnapshotListenOptions): Array<firestore.DocumentChange<T>>;
    private _convertToDocumentSnapshot;
}
export declare function snapshotEqual<T>(left: firestore.DocumentSnapshot<T> | firestore.QuerySnapshot<T>, right: firestore.DocumentSnapshot<T> | firestore.QuerySnapshot<T>): boolean;
