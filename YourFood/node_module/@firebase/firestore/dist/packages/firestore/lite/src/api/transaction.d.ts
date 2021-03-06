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
import * as firestore from '../../';
import { Transaction as InternalTransaction } from '../../../src/core/transaction';
import { DocumentSnapshot } from './snapshot';
import { Firestore } from './database';
import { FieldPath as ExternalFieldPath } from '../../../src/api/field_path';
export declare class Transaction {
    protected readonly _firestore: Firestore;
    private readonly _transaction;
    private readonly _dataReader;
    constructor(_firestore: Firestore, _transaction: InternalTransaction);
    get<T>(documentRef: firestore.DocumentReference<T>): Promise<DocumentSnapshot<T>>;
    set<T>(documentRef: firestore.DocumentReference<T>, value: T): this;
    set<T>(documentRef: firestore.DocumentReference<T>, value: Partial<T>, options: firestore.SetOptions): this;
    update(documentRef: firestore.DocumentReference<unknown>, value: firestore.UpdateData): this;
    update(documentRef: firestore.DocumentReference<unknown>, field: string | ExternalFieldPath, value: unknown, ...moreFieldsAndValues: unknown[]): this;
    delete(documentRef: firestore.DocumentReference<unknown>): this;
}
export declare function runTransaction<T>(firestore: firestore.FirebaseFirestore, updateFunction: (transaction: firestore.Transaction) => Promise<T>): Promise<T>;
