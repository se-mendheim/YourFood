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
import * as firestore from '../index';
export declare function withTestDbSettings(projectId: string, settings: firestore.Settings, fn: (db: firestore.FirebaseFirestore) => void | Promise<void>): Promise<void>;
export declare function withTestDb(fn: (db: firestore.FirebaseFirestore) => void | Promise<void>): Promise<void>;
export declare function withTestDoc(fn: (doc: firestore.DocumentReference) => void | Promise<void>): Promise<void>;
export declare function withTestDocAndInitialData(data: firestore.DocumentData, fn: (doc: firestore.DocumentReference) => void | Promise<void>): Promise<void>;
export declare function withTestCollectionAndInitialData(data: firestore.DocumentData[], fn: (collRef: firestore.CollectionReference) => void | Promise<void>): Promise<void>;
export declare function withTestCollection(fn: (collRef: firestore.CollectionReference) => void | Promise<void>): Promise<void>;
export declare class Post {
    readonly title: string;
    readonly author: string;
    constructor(title: string, author: string);
    byline(): string;
}
export declare const postConverter: {
    toFirestore(post: Post): firestore.DocumentData;
    fromFirestore(snapshot: firestore.QueryDocumentSnapshot): Post;
};
export declare const postConverterMerge: {
    toFirestore(post: Partial<Post>, options?: {
        readonly merge?: boolean | undefined;
    } | {
        readonly mergeFields?: (string | firestore.FieldPath)[] | undefined;
    } | undefined): firestore.DocumentData;
    fromFirestore(snapshot: firestore.QueryDocumentSnapshot): Post;
};
