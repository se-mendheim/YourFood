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
import { Firestore } from './database';
import { DocumentKeyReference, UserDataReader } from '../../../src/api/user_data_reader';
import { Query as InternalQuery } from '../../../src/core/query';
import { ResourcePath } from '../../../src/model/path';
import { BaseQuery } from '../../../src/api/database';
import { FieldPath as ExternalFieldPath } from '../../../src/api/field_path';
/**
 * A reference to a particular document in a collection in the database.
 */
export declare class DocumentReference<T = firestore.DocumentData> extends DocumentKeyReference<T> implements firestore.DocumentReference<T> {
    readonly firestore: Firestore;
    readonly _converter: firestore.FirestoreDataConverter<T> | null;
    readonly type = "document";
    constructor(firestore: Firestore, key: DocumentKey, _converter: firestore.FirestoreDataConverter<T> | null);
    get id(): string;
    get path(): string;
    withConverter<U>(converter: firestore.FirestoreDataConverter<U>): firestore.DocumentReference<U>;
}
export declare class Query<T = firestore.DocumentData> extends BaseQuery implements firestore.Query<T> {
    readonly firestore: Firestore;
    readonly _query: InternalQuery;
    readonly _converter: firestore.FirestoreDataConverter<T> | null;
    readonly type: 'query' | 'collection';
    constructor(firestore: Firestore, _query: InternalQuery, _converter: firestore.FirestoreDataConverter<T> | null);
    where(fieldPath: string | firestore.FieldPath, opStr: firestore.WhereFilterOp, value: unknown): firestore.Query<T>;
    orderBy(field: string | ExternalFieldPath, directionStr?: firestore.OrderByDirection): firestore.Query<T>;
    limit(n: number): firestore.Query<T>;
    limitToLast(n: number): firestore.Query<T>;
    startAt(docOrField: unknown | firestore.DocumentSnapshot<unknown>, ...fields: unknown[]): firestore.Query<T>;
    startAfter(docOrField: unknown | firestore.DocumentSnapshot<unknown>, ...fields: unknown[]): firestore.Query<T>;
    endBefore(docOrField: unknown | firestore.DocumentSnapshot<unknown>, ...fields: unknown[]): firestore.Query<T>;
    endAt(docOrField: unknown | firestore.DocumentSnapshot<unknown>, ...fields: unknown[]): firestore.Query<T>;
    /** Helper function to create a bound from a document or fields */
    private boundFromDocOrFields;
    withConverter<U>(converter: firestore.FirestoreDataConverter<U>): firestore.Query<U>;
}
export declare class CollectionReference<T = firestore.DocumentData> extends Query<T> implements firestore.CollectionReference<T> {
    readonly firestore: Firestore;
    readonly _path: ResourcePath;
    readonly _converter: firestore.FirestoreDataConverter<T> | null;
    readonly type = "collection";
    constructor(firestore: Firestore, _path: ResourcePath, _converter: firestore.FirestoreDataConverter<T> | null);
    get id(): string;
    get path(): string;
    withConverter<U>(converter: firestore.FirestoreDataConverter<U>): firestore.CollectionReference<U>;
}
export declare function collection(firestore: firestore.FirebaseFirestore, collectionPath: string): CollectionReference<firestore.DocumentData>;
export declare function collection(reference: firestore.DocumentReference, collectionPath: string): CollectionReference<firestore.DocumentData>;
export declare function collectionGroup(firestore: firestore.FirebaseFirestore, collectionId: string): Query<firestore.DocumentData>;
export declare function doc(firestore: firestore.FirebaseFirestore, documentPath: string): DocumentReference<firestore.DocumentData>;
export declare function doc<T>(reference: firestore.CollectionReference<T>, documentPath?: string): DocumentReference<T>;
export declare function parent(reference: firestore.CollectionReference<unknown>): DocumentReference<firestore.DocumentData> | null;
export declare function parent<T>(reference: firestore.DocumentReference<T>): CollectionReference<T>;
export declare function getDoc<T>(reference: firestore.DocumentReference<T>): Promise<firestore.DocumentSnapshot<T>>;
export declare function getQuery<T>(query: firestore.Query<T>): Promise<firestore.QuerySnapshot<T>>;
export declare function setDoc<T>(reference: firestore.DocumentReference<T>, data: T): Promise<void>;
export declare function setDoc<T>(reference: firestore.DocumentReference<T>, data: Partial<T>, options: firestore.SetOptions): Promise<void>;
export declare function updateDoc(reference: firestore.DocumentReference<unknown>, data: firestore.UpdateData): Promise<void>;
export declare function updateDoc(reference: firestore.DocumentReference<unknown>, field: string | firestore.FieldPath, value: unknown, ...moreFieldsAndValues: unknown[]): Promise<void>;
export declare function deleteDoc(reference: firestore.DocumentReference): Promise<void>;
export declare function addDoc<T>(reference: firestore.CollectionReference<T>, data: T): Promise<firestore.DocumentReference<T>>;
export declare function refEqual<T>(left: firestore.DocumentReference<T> | firestore.CollectionReference<T>, right: firestore.DocumentReference<T> | firestore.CollectionReference<T>): boolean;
export declare function queryEqual<T>(left: firestore.Query<T>, right: firestore.Query<T>): boolean;
export declare function newUserDataReader(firestore: Firestore): UserDataReader;
