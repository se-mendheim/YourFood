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
import { Firestore } from './database';
import { DocumentKey } from '../../../src/model/document_key';
import { Document } from '../../../src/model/document';
import { FieldPath as InternalFieldPath } from '../../../src/model/path';
import { UntypedFirestoreDataConverter } from '../../../src/api/user_data_reader';
export declare class DocumentSnapshot<T = firestore.DocumentData> implements firestore.DocumentSnapshot<T> {
    _firestore: Firestore;
    _key: DocumentKey;
    _document: Document | null;
    _converter: UntypedFirestoreDataConverter<T> | null;
    constructor(_firestore: Firestore, _key: DocumentKey, _document: Document | null, _converter: UntypedFirestoreDataConverter<T> | null);
    get id(): string;
    get ref(): firestore.DocumentReference<T>;
    exists(): this is firestore.QueryDocumentSnapshot<T>;
    data(): T | undefined;
    get(fieldPath: string | firestore.FieldPath): unknown;
}
export declare class QueryDocumentSnapshot<T = firestore.DocumentData> extends DocumentSnapshot<T> implements firestore.QueryDocumentSnapshot<T> {
    data(): T;
}
export declare class QuerySnapshot<T = firestore.DocumentData> implements firestore.QuerySnapshot<T> {
    readonly query: firestore.Query<T>;
    readonly _docs: Array<QueryDocumentSnapshot<T>>;
    constructor(query: firestore.Query<T>, _docs: Array<QueryDocumentSnapshot<T>>);
    get docs(): Array<firestore.QueryDocumentSnapshot<T>>;
    get size(): number;
    get empty(): boolean;
    forEach(callback: (result: firestore.QueryDocumentSnapshot<T>) => void, thisArg?: unknown): void;
}
export declare function snapshotEqual<T>(left: firestore.DocumentSnapshot<T> | firestore.QuerySnapshot<T>, right: firestore.DocumentSnapshot<T> | firestore.QuerySnapshot<T>): boolean;
/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */
export declare function fieldPathFromArgument(methodName: string, arg: string | firestore.FieldPath): InternalFieldPath;
