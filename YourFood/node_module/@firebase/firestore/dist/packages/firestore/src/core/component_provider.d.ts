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
import { ClientId, SharedClientState } from '../local/shared_client_state';
import { LocalStore, MultiTabLocalStore } from '../local/local_store';
import { MultiTabSyncEngine, SyncEngine } from './sync_engine';
import { RemoteStore } from '../remote/remote_store';
import { EventManager } from './event_manager';
import { AsyncQueue } from '../util/async_queue';
import { DatabaseId, DatabaseInfo } from './database_info';
import { Datastore } from '../remote/datastore';
import { User } from '../auth/user';
import { PersistenceSettings } from './firestore_client';
import { GarbageCollectionScheduler, Persistence } from '../local/persistence';
import { IndexedDbPersistence } from '../local/indexeddb_persistence';
export interface ComponentConfiguration {
    asyncQueue: AsyncQueue;
    databaseInfo: DatabaseInfo;
    datastore: Datastore;
    clientId: ClientId;
    initialUser: User;
    maxConcurrentLimboResolutions: number;
    persistenceSettings: PersistenceSettings;
}
/**
 * Initializes and wires up all core components for Firestore. Implementations
 * override `initialize()` to provide all components.
 */
export interface ComponentProvider {
    persistence: Persistence;
    sharedClientState: SharedClientState;
    localStore: LocalStore;
    syncEngine: SyncEngine;
    gcScheduler: GarbageCollectionScheduler | null;
    remoteStore: RemoteStore;
    eventManager: EventManager;
    initialize(cfg: ComponentConfiguration): Promise<void>;
    clearPersistence(databaseId: DatabaseId, persistenceKey: string): Promise<void>;
}
/**
 * Provides all components needed for Firestore with in-memory persistence.
 * Uses EagerGC garbage collection.
 */
export declare class MemoryComponentProvider implements ComponentProvider {
    persistence: Persistence;
    sharedClientState: SharedClientState;
    localStore: LocalStore;
    syncEngine: SyncEngine;
    gcScheduler: GarbageCollectionScheduler | null;
    remoteStore: RemoteStore;
    eventManager: EventManager;
    initialize(cfg: ComponentConfiguration): Promise<void>;
    createEventManager(cfg: ComponentConfiguration): EventManager;
    createGarbageCollectionScheduler(cfg: ComponentConfiguration): GarbageCollectionScheduler | null;
    createLocalStore(cfg: ComponentConfiguration): LocalStore;
    createPersistence(cfg: ComponentConfiguration): Persistence;
    createRemoteStore(cfg: ComponentConfiguration): RemoteStore;
    createSharedClientState(cfg: ComponentConfiguration): SharedClientState;
    createSyncEngine(cfg: ComponentConfiguration): SyncEngine;
    clearPersistence(databaseId: DatabaseId, persistenceKey: string): Promise<void>;
}
/**
 * Provides all components needed for Firestore with IndexedDB persistence.
 */
export declare class IndexedDbComponentProvider extends MemoryComponentProvider {
    persistence: IndexedDbPersistence;
    createLocalStore(cfg: ComponentConfiguration): LocalStore;
    createSyncEngine(cfg: ComponentConfiguration): SyncEngine;
    createGarbageCollectionScheduler(cfg: ComponentConfiguration): GarbageCollectionScheduler | null;
    createPersistence(cfg: ComponentConfiguration): Persistence;
    createSharedClientState(cfg: ComponentConfiguration): SharedClientState;
    clearPersistence(databaseId: DatabaseId, persistenceKey: string): Promise<void>;
}
/**
 * Provides all components needed for Firestore with multi-tab IndexedDB
 * persistence.
 *
 * In the legacy client, this provider is used to provide both multi-tab and
 * non-multi-tab persistence since we cannot tell at build time whether
 * `synchronizeTabs` will be enabled.
 */
export declare class MultiTabIndexedDbComponentProvider extends IndexedDbComponentProvider {
    localStore: MultiTabLocalStore;
    syncEngine: MultiTabSyncEngine;
    initialize(cfg: ComponentConfiguration): Promise<void>;
    createLocalStore(cfg: ComponentConfiguration): LocalStore;
    createSyncEngine(cfg: ComponentConfiguration): SyncEngine;
    createSharedClientState(cfg: ComponentConfiguration): SharedClientState;
}
