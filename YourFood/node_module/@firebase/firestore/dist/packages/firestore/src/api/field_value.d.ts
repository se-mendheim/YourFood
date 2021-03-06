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
import { FieldTransform } from '../model/mutation';
import { ParseContext } from './user_data_reader';
/**
 * An opaque base class for FieldValue sentinel objects in our public API that
 * is shared between the full, lite and legacy SDK.
 */
export declare abstract class SerializableFieldValue {
    /** The public API endpoint that returns this class. */
    abstract readonly _methodName: string;
    /** A pointer to the implementing class. */
    readonly _delegate: SerializableFieldValue;
    abstract _toFieldTransform(context: ParseContext): FieldTransform | null;
    abstract isEqual(other: SerializableFieldValue): boolean;
}
export declare class DeleteFieldValueImpl extends SerializableFieldValue {
    readonly _methodName: string;
    constructor(_methodName: string);
    _toFieldTransform(context: ParseContext): null;
    isEqual(other: FieldValue): boolean;
}
export declare class ServerTimestampFieldValueImpl extends SerializableFieldValue {
    readonly _methodName: string;
    constructor(_methodName: string);
    _toFieldTransform(context: ParseContext): FieldTransform;
    isEqual(other: FieldValue): boolean;
}
export declare class ArrayUnionFieldValueImpl extends SerializableFieldValue {
    readonly _methodName: string;
    private readonly _elements;
    constructor(_methodName: string, _elements: unknown[]);
    _toFieldTransform(context: ParseContext): FieldTransform;
    isEqual(other: FieldValue): boolean;
}
export declare class ArrayRemoveFieldValueImpl extends SerializableFieldValue {
    readonly _methodName: string;
    readonly _elements: unknown[];
    constructor(_methodName: string, _elements: unknown[]);
    _toFieldTransform(context: ParseContext): FieldTransform;
    isEqual(other: FieldValue): boolean;
}
export declare class NumericIncrementFieldValueImpl extends SerializableFieldValue {
    readonly _methodName: string;
    private readonly _operand;
    constructor(_methodName: string, _operand: number);
    _toFieldTransform(context: ParseContext): FieldTransform;
    isEqual(other: FieldValue): boolean;
}
/** The public FieldValue class of the lite API. */
export declare abstract class FieldValue extends SerializableFieldValue implements firestore.FieldValue {
    protected constructor();
    static delete(): firestore.FieldValue;
    static serverTimestamp(): firestore.FieldValue;
    static arrayUnion(...elements: unknown[]): firestore.FieldValue;
    static arrayRemove(...elements: unknown[]): firestore.FieldValue;
    static increment(n: number): firestore.FieldValue;
}
