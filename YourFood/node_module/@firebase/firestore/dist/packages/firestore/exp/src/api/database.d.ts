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
import { FirebaseApp, _FirebaseService } from '@firebase/app-types-exp';
import { Provider } from '@firebase/component';
import { FirebaseAuthInternalName } from '@firebase/auth-interop-types';
import { FirestoreClient, PersistenceSettings } from '../../../src/core/firestore_client';
import { ComponentProvider } from '../../../src/core/component_provider';
import { Firestore as LiteFirestore } from '../../../lite/src/api/database';
import { DatabaseId, DatabaseInfo } from '../../../src/core/database_info';
/**
 * The root reference to the Firestore database and the entry point for the
 * tree-shakeable SDK.
 */
export declare class Firestore extends LiteFirestore implements firestore.FirebaseFirestore, _FirebaseService {
    private readonly _queue;
    private readonly _firestoreClient;
    private readonly _persistenceKey;
    private _componentProvider;
    private _deferredInitialization?;
    protected _persistenceSettings: PersistenceSettings;
    protected _settings?: firestore.Settings;
    private _terminated;
    constructor(app: FirebaseApp, authProvider: Provider<FirebaseAuthInternalName>);
    _getSettings(): firestore.Settings;
    _getFirestoreClient(): Promise<FirestoreClient>;
    _enablePersistence(persistenceProvider: ComponentProvider, synchronizeTabs: boolean): Promise<void>;
    delete(): Promise<void>;
    /**
     * Verifies that the client is not running and clears persistence by invoking
     * `delegate` on the async queue.
     *
     * @param delegate A function that clears the clients
     * backing storage.
     */
    _clearPersistence(delegate: (databaseId: DatabaseId, persistenceKey: string) => Promise<void>): Promise<void>;
    protected _makeDatabaseInfo(host?: string, ssl?: boolean, forceLongPolling?: boolean): DatabaseInfo;
    _terminate(): Promise<void>;
}
export declare function initializeFirestore(app: FirebaseApp, settings: firestore.Settings): Firestore;
export declare function getFirestore(app: FirebaseApp): Firestore;
export declare function enableIndexedDbPersistence(firestore: firestore.FirebaseFirestore): Promise<void>;
export declare function enableMultiTabIndexedDbPersistence(firestore: firestore.FirebaseFirestore): Promise<void>;
export declare function clearIndexedDbPersistence(firestore: firestore.FirebaseFirestore): Promise<void>;
export declare function waitForPendingWrites(firestore: firestore.FirebaseFirestore): Promise<void>;
export declare function enableNetwork(firestore: firestore.FirebaseFirestore): Promise<void>;
export declare function disableNetwork(firestore: firestore.FirebaseFirestore): Promise<void>;
export declare function terminate(firestore: firestore.FirebaseFirestore): Promise<void>;
