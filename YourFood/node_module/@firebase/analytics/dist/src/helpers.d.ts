/**
 * @license
 * Copyright 2019 Google LLC
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
import { FirebaseApp } from '@firebase/app-types';
import { DataLayer, Gtag } from '@firebase/analytics-types';
import { FirebaseInstallations } from '@firebase/installations-types';
/**
 * Initialize the analytics instance in gtag.js by calling config command with fid.
 *
 * NOTE: We combine analytics initialization and setting fid together because we want fid to be
 * part of the `page_view` event that's sent during the initialization
 * @param app Firebase app
 * @param gtagCore The gtag function that's not wrapped.
 */
export declare function initializeGAId(app: FirebaseApp, installations: FirebaseInstallations, gtagCore: Gtag): Promise<void>;
export declare function insertScriptTag(dataLayerName: string): void;
/** Get reference to, or create, global datalayer.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer")
 */
export declare function getOrCreateDataLayer(dataLayerName: string): DataLayer;
/**
 * Creates global gtag function or wraps existing one if found.
 * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
 * 'event' calls that belong to the GAID associated with this Firebase instance.
 *
 * @param initializedIdPromisesMap Map of gaId to initialization promises.
 * @param dataLayerName Name of global GA datalayer array.
 * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified)
 */
export declare function wrapOrCreateGtag(initializedIdPromisesMap: {
    [gaId: string]: Promise<void>;
}, dataLayerName: string, gtagFunctionName: string): {
    gtagCore: Gtag;
    wrappedGtag: Gtag;
};
/**
 * Returns first script tag in DOM matching our gtag url pattern.
 */
export declare function findGtagScriptOnPage(): HTMLScriptElement | null;
