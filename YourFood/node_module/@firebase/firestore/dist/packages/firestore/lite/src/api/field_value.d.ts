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
import { SerializableFieldValue } from '../../../src/api/field_value';
/** The public FieldValue class of the lite API. */
export declare abstract class FieldValue extends SerializableFieldValue implements firestore.FieldValue {
}
export declare function deleteField(): firestore.FieldValue;
export declare function serverTimestamp(): firestore.FieldValue;
export declare function arrayUnion(...elements: unknown[]): firestore.FieldValue;
export declare function arrayRemove(...elements: unknown[]): firestore.FieldValue;
export declare function increment(n: number): firestore.FieldValue;
