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
import { SnapshotVersion } from '../core/snapshot_version';
import { MaybeDocument } from '../model/document';
import { MutationBatch } from '../model/mutation_batch';
import { JsonProtoSerializer } from '../remote/serializer';
import { DbMutationBatch, DbRemoteDocument, DbTarget, DbTimestampKey } from './indexeddb_schema';
import { TargetData } from './target_data';
/** Serializer for values stored in the LocalStore. */
export declare class LocalSerializer {
    readonly remoteSerializer: JsonProtoSerializer;
    constructor(remoteSerializer: JsonProtoSerializer);
}
/** Decodes a remote document from storage locally to a Document. */
export declare function fromDbRemoteDocument(localSerializer: LocalSerializer, remoteDoc: DbRemoteDocument): MaybeDocument;
/** Encodes a document for storage locally. */
export declare function toDbRemoteDocument(localSerializer: LocalSerializer, maybeDoc: MaybeDocument, readTime: SnapshotVersion): DbRemoteDocument;
export declare function toDbTimestampKey(snapshotVersion: SnapshotVersion): DbTimestampKey;
export declare function fromDbTimestampKey(dbTimestampKey: DbTimestampKey): SnapshotVersion;
/** Encodes a batch of mutations into a DbMutationBatch for local storage. */
export declare function toDbMutationBatch(localSerializer: LocalSerializer, userId: string, batch: MutationBatch): DbMutationBatch;
/** Decodes a DbMutationBatch into a MutationBatch */
export declare function fromDbMutationBatch(localSerializer: LocalSerializer, dbBatch: DbMutationBatch): MutationBatch;
/** Decodes a DbTarget into TargetData */
export declare function fromDbTarget(dbTarget: DbTarget): TargetData;
/** Encodes TargetData into a DbTarget for storage locally. */
export declare function toDbTarget(localSerializer: LocalSerializer, targetData: TargetData): DbTarget;
