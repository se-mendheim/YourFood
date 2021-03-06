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
import { QuerySnapshot } from './snapshot';
import { Unsubscribe } from '../../../src/api/observer';
export declare function getDoc<T>(reference: firestore.DocumentReference<T>): Promise<firestore.DocumentSnapshot<T>>;
export declare function getDocFromCache<T>(reference: firestore.DocumentReference<T>): Promise<firestore.DocumentSnapshot<T>>;
export declare function getDocFromServer<T>(reference: firestore.DocumentReference<T>): Promise<firestore.DocumentSnapshot<T>>;
export declare function getQuery<T>(query: firestore.Query<T>): Promise<QuerySnapshot<T>>;
export declare function getQueryFromCache<T>(query: firestore.Query<T>): Promise<QuerySnapshot<T>>;
export declare function getQueryFromServer<T>(query: firestore.Query<T>): Promise<QuerySnapshot<T>>;
export declare function setDoc<T>(reference: firestore.DocumentReference<T>, data: T): Promise<void>;
export declare function setDoc<T>(reference: firestore.DocumentReference<T>, data: Partial<T>, options: firestore.SetOptions): Promise<void>;
export declare function updateDoc(reference: firestore.DocumentReference<unknown>, data: firestore.UpdateData): Promise<void>;
export declare function updateDoc(reference: firestore.DocumentReference<unknown>, field: string | firestore.FieldPath, value: unknown, ...moreFieldsAndValues: unknown[]): Promise<void>;
export declare function deleteDoc(reference: firestore.DocumentReference): Promise<void>;
export declare function addDoc<T>(reference: firestore.CollectionReference<T>, data: T): Promise<firestore.DocumentReference<T>>;
export declare function onSnapshot<T>(reference: firestore.DocumentReference<T>, observer: {
    next?: (snapshot: firestore.DocumentSnapshot<T>) => void;
    error?: (error: firestore.FirestoreError) => void;
    complete?: () => void;
}): Unsubscribe;
export declare function onSnapshot<T>(reference: firestore.DocumentReference<T>, options: firestore.SnapshotListenOptions, observer: {
    next?: (snapshot: firestore.DocumentSnapshot<T>) => void;
    error?: (error: firestore.FirestoreError) => void;
    complete?: () => void;
}): Unsubscribe;
export declare function onSnapshot<T>(reference: firestore.DocumentReference<T>, onNext: (snapshot: firestore.DocumentSnapshot<T>) => void, onError?: (error: firestore.FirestoreError) => void, onCompletion?: () => void): Unsubscribe;
export declare function onSnapshot<T>(reference: firestore.DocumentReference<T>, options: firestore.SnapshotListenOptions, onNext: (snapshot: firestore.DocumentSnapshot<T>) => void, onError?: (error: firestore.FirestoreError) => void, onCompletion?: () => void): Unsubscribe;
export declare function onSnapshot<T>(query: firestore.Query<T>, observer: {
    next?: (snapshot: firestore.QuerySnapshot<T>) => void;
    error?: (error: firestore.FirestoreError) => void;
    complete?: () => void;
}): Unsubscribe;
export declare function onSnapshot<T>(query: firestore.Query<T>, options: firestore.SnapshotListenOptions, observer: {
    next?: (snapshot: firestore.QuerySnapshot<T>) => void;
    error?: (error: firestore.FirestoreError) => void;
    complete?: () => void;
}): Unsubscribe;
export declare function onSnapshot<T>(query: firestore.Query<T>, onNext: (snapshot: firestore.QuerySnapshot<T>) => void, onError?: (error: firestore.FirestoreError) => void, onCompletion?: () => void): Unsubscribe;
export declare function onSnapshot<T>(query: firestore.Query<T>, options: firestore.SnapshotListenOptions, onNext: (snapshot: firestore.QuerySnapshot<T>) => void, onError?: (error: firestore.FirestoreError) => void, onCompletion?: () => void): Unsubscribe;
export declare function onSnapshotsInSync(firestore: firestore.FirebaseFirestore, observer: {
    next?: (value: void) => void;
    error?: (error: firestore.FirestoreError) => void;
    complete?: () => void;
}): Unsubscribe;
export declare function onSnapshotsInSync(firestore: firestore.FirebaseFirestore, onSync: () => void): Unsubscribe;
