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
import { Request } from './request';
export declare class RequestMap {
    private readonly map;
    private id;
    constructor();
    /**
     * Registers the given request with this map.
     * The request is unregistered when it completes.
     *
     * @param request The request to register.
     */
    addRequest(request: Request<unknown>): void;
    /**
     * Cancels all registered requests.
     */
    clear(): void;
}
