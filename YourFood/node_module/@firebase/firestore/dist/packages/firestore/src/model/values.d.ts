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
import * as api from '../protos/firestore_proto_api';
import { TypeOrder } from './object_value';
import { ByteString } from '../util/byte_string';
import { DocumentKey } from './document_key';
import { DatabaseId } from '../core/database_info';
/** Extracts the backend's type order for the provided value. */
export declare function typeOrder(value: api.Value): TypeOrder;
/** Tests `left` and `right` for equality based on the backend semantics. */
export declare function valueEquals(left: api.Value, right: api.Value): boolean;
export declare function numberEquals(left: api.Value, right: api.Value): boolean;
/** Returns true if the ArrayValue contains the specified element. */
export declare function arrayValueContains(haystack: api.ArrayValue, needle: api.Value): boolean;
export declare function valueCompare(left: api.Value, right: api.Value): number;
/**
 * Generates the canonical ID for the provided field value (as used in Target
 * serialization).
 */
export declare function canonicalId(value: api.Value): string;
/**
 * Returns an approximate (and wildly inaccurate) in-memory size for the field
 * value.
 *
 * The memory size takes into account only the actual user data as it resides
 * in memory and ignores object overhead.
 */
export declare function estimateByteSize(value: api.Value): number;
/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */
export declare function normalizeTimestamp(date: api.Timestamp): {
    seconds: number;
    nanos: number;
};
/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */
export declare function normalizeNumber(value: number | string | undefined): number;
/** Converts the possible Proto types for Blobs into a ByteString. */
export declare function normalizeByteString(blob: string | Uint8Array): ByteString;
/** Returns a reference value for the provided database and key. */
export declare function refValue(databaseId: DatabaseId, key: DocumentKey): api.Value;
/** Returns true if `value` is an IntegerValue . */
export declare function isInteger(value?: api.Value | null): value is {
    integerValue: string | number;
};
/** Returns true if `value` is a DoubleValue. */
export declare function isDouble(value?: api.Value | null): value is {
    doubleValue: string | number;
};
/** Returns true if `value` is either an IntegerValue or a DoubleValue. */
export declare function isNumber(value?: api.Value | null): boolean;
/** Returns true if `value` is an ArrayValue. */
export declare function isArray(value?: api.Value | null): value is {
    arrayValue: api.ArrayValue;
};
/** Returns true if `value` is a ReferenceValue. */
export declare function isReferenceValue(value?: api.Value | null): value is {
    referenceValue: string;
};
/** Returns true if `value` is a NullValue. */
export declare function isNullValue(value?: api.Value | null): value is {
    nullValue: 'NULL_VALUE';
};
/** Returns true if `value` is NaN. */
export declare function isNanValue(value?: api.Value | null): value is {
    doubleValue: 'NaN' | number;
};
/** Returns true if `value` is a MapValue. */
export declare function isMapValue(value?: api.Value | null): value is {
    mapValue: api.MapValue;
};
