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
import { Mutation } from '../../../src/model/mutation';
import { DocumentReference } from './reference';
import { Firestore } from './database';
export declare class WriteBatch implements firestore.WriteBatch {
    private readonly _firestore;
    private readonly _commitHandler;
    private readonly _dataReader;
    private _mutations;
    private _committed;
    constructor(_firestore: Firestore, _commitHandler: (m: Mutation[]) => Promise<void>);
    set<T>(documentRef: firestore.DocumentReference<T>, value: T): WriteBatch;
    set<T>(documentRef: firestore.DocumentReference<T>, value: Partial<T>, options: firestore.SetOptions): WriteBatch;
    update(documentRef: firestore.DocumentReference<unknown>, value: firestore.UpdateData): WriteBatch;
    update(documentRef: firestore.DocumentReference<unknown>, field: string | firestore.FieldPath, value: unknown, ...moreFieldsAndValues: unknown[]): WriteBatch;
    delete(documentRef: firestore.DocumentReference<unknown>): WriteBatch;
    commit(): Promise<void>;
    private verifyNotCommitted;
}
export declare function validateReference<T>(documentRef: firestore.DocumentReference<T>, firestore: Firestore): DocumentReference<T>;
export declare function writeBatch(firestore: firestore.FirebaseFirestore): firestore.WriteBatch;
