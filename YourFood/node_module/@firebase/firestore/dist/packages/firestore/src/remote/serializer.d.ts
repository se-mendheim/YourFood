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
import { Blob } from '../api/blob';
import { Timestamp } from '../api/timestamp';
import { DatabaseId } from '../core/database_info';
import { Direction, FieldFilter, Filter, Operator, OrderBy } from '../core/query';
import { SnapshotVersion } from '../core/snapshot_version';
import { Target } from '../core/target';
import { TargetData } from '../local/target_data';
import { Document, MaybeDocument } from '../model/document';
import { DocumentKey } from '../model/document_key';
import { ObjectValue } from '../model/object_value';
import { FieldMask, Mutation, MutationResult } from '../model/mutation';
import { FieldPath, ResourcePath } from '../model/path';
import * as api from '../protos/firestore_proto_api';
import { ByteString } from '../util/byte_string';
import { WatchChange } from './watch_change';
import { WriteResult } from '../protos/firestore_proto_api';
/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
export declare class JsonProtoSerializer {
    readonly databaseId: DatabaseId;
    readonly useProto3Json: boolean;
    constructor(databaseId: DatabaseId, useProto3Json: boolean);
}
/**
 * Returns an IntegerValue for `value`.
 */
export declare function toInteger(value: number): api.Value;
/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */
export declare function toDouble(serializer: JsonProtoSerializer, value: number): api.Value;
/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */
export declare function toNumber(serializer: JsonProtoSerializer, value: number): api.Value;
/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */
export declare function toTimestamp(serializer: JsonProtoSerializer, timestamp: Timestamp): api.Timestamp;
/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */
export declare function toBytes(serializer: JsonProtoSerializer, bytes: Blob | ByteString): string | Uint8Array;
/**
 * Returns a ByteString based on the proto string value.
 */
export declare function fromBytes(serializer: JsonProtoSerializer, value: string | Uint8Array | undefined): ByteString;
export declare function toVersion(serializer: JsonProtoSerializer, version: SnapshotVersion): api.Timestamp;
export declare function fromVersion(version: api.Timestamp): SnapshotVersion;
export declare function toResourceName(databaseId: DatabaseId, path: ResourcePath): string;
export declare function toName(serializer: JsonProtoSerializer, key: DocumentKey): string;
export declare function fromName(serializer: JsonProtoSerializer, name: string): DocumentKey;
export declare function getEncodedDatabaseId(serializer: JsonProtoSerializer): string;
/** Creates an api.Document from key and fields (but no create/update time) */
export declare function toMutationDocument(serializer: JsonProtoSerializer, key: DocumentKey, fields: ObjectValue): api.Document;
export declare function toDocument(serializer: JsonProtoSerializer, document: Document): api.Document;
export declare function fromDocument(serializer: JsonProtoSerializer, document: api.Document, hasCommittedMutations?: boolean): Document;
export declare function fromMaybeDocument(serializer: JsonProtoSerializer, result: api.BatchGetDocumentsResponse): MaybeDocument;
export declare function fromWatchChange(serializer: JsonProtoSerializer, change: api.ListenResponse): WatchChange;
export declare function versionFromListenResponse(change: api.ListenResponse): SnapshotVersion;
export declare function toMutation(serializer: JsonProtoSerializer, mutation: Mutation): api.Write;
export declare function fromMutation(serializer: JsonProtoSerializer, proto: api.Write): Mutation;
export declare function fromWriteResults(protos: WriteResult[] | undefined, commitTime?: api.Timestamp): MutationResult[];
export declare function toDocumentsTarget(serializer: JsonProtoSerializer, target: Target): api.DocumentsTarget;
export declare function fromDocumentsTarget(documentsTarget: api.DocumentsTarget): Target;
export declare function toQueryTarget(serializer: JsonProtoSerializer, target: Target): api.QueryTarget;
export declare function fromQueryTarget(target: api.QueryTarget): Target;
export declare function toListenRequestLabels(serializer: JsonProtoSerializer, targetData: TargetData): api.ApiClientObjectMap<string> | null;
export declare function toTarget(serializer: JsonProtoSerializer, targetData: TargetData): api.Target;
export declare function toDirection(dir: Direction): api.OrderDirection;
export declare function fromDirection(dir: api.OrderDirection | undefined): Direction | undefined;
export declare function toOperatorName(op: Operator): api.FieldFilterOp;
export declare function fromOperatorName(op: api.FieldFilterOp): Operator;
export declare function toFieldPathReference(path: FieldPath): api.FieldReference;
export declare function fromFieldPathReference(fieldReference: api.FieldReference): FieldPath;
export declare function toPropertyOrder(orderBy: OrderBy): api.Order;
export declare function fromPropertyOrder(orderBy: api.Order): OrderBy;
export declare function fromFieldFilter(filter: api.Filter): Filter;
export declare function toUnaryOrFieldFilter(filter: FieldFilter): api.Filter;
export declare function fromUnaryFilter(filter: api.Filter): Filter;
export declare function toDocumentMask(fieldMask: FieldMask): api.DocumentMask;
export declare function fromDocumentMask(proto: api.DocumentMask): FieldMask;
export declare function isValidResourceName(path: ResourcePath): boolean;
