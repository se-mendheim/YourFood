/**
 * @license
 * Copyright 2018 Google LLC
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
import * as api from '../protos/firestore_proto_api';
import { Timestamp } from '../api/timestamp';
import { JsonProtoSerializer } from '../remote/serializer';
/** Represents a transform within a TransformMutation. */
export declare class TransformOperation {
    private _;
}
/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */
export declare function applyTransformOperationToLocalView(transform: TransformOperation, previousValue: api.Value | null, localWriteTime: Timestamp): api.Value;
/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */
export declare function applyTransformOperationToRemoteDocument(transform: TransformOperation, previousValue: api.Value | null, transformResult: api.Value | null): api.Value;
/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @return a base value to store along with the mutation, or null for
 * idempotent transforms.
 */
export declare function computeTransformOperationBaseValue(transform: TransformOperation, previousValue: api.Value | null): api.Value | null;
export declare function transformOperationEquals(left: TransformOperation, right: TransformOperation): boolean;
/** Transforms a value into a server-generated timestamp. */
export declare class ServerTimestampTransform extends TransformOperation {
}
/** Transforms an array value via a union operation. */
export declare class ArrayUnionTransformOperation extends TransformOperation {
    readonly elements: api.Value[];
    constructor(elements: api.Value[]);
}
/** Transforms an array value via a remove operation. */
export declare class ArrayRemoveTransformOperation extends TransformOperation {
    readonly elements: api.Value[];
    constructor(elements: api.Value[]);
}
/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */
export declare class NumericIncrementTransformOperation extends TransformOperation {
    readonly serializer: JsonProtoSerializer;
    readonly operand: api.Value;
    constructor(serializer: JsonProtoSerializer, operand: api.Value);
}
export declare function applyNumericIncrementTransformOperationToLocalView(transform: NumericIncrementTransformOperation, previousValue: api.Value | null): api.Value;
