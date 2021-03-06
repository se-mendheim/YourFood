import t from "@firebase/app";

import { Logger as e, LogLevel as n } from "@firebase/logger";

import { getUA as s, isMobileCordova as i, isReactNative as r, isElectron as o, isIE as h, isUWP as a, isBrowserExtension as u } from "@firebase/util";

import { XhrIo as c, EventType as l, ErrorCode as _, createWebChannelTransport as f, WebChannel as d } from "@firebase/webchannel-wrapper";

import { Component as w } from "@firebase/component";

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
/** The semver (www.semver.org) version of the SDK. */ const T = t.SDK_VERSION;

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
/** Formats an object as a JSON string, suitable for logging. */
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
const E = new e("@firebase/firestore");

// Helper methods are needed because variables can't be exported as read/write
function I() {
    return E.logLevel;
}

function m(t, ...e) {
    if (E.logLevel <= n.DEBUG) {
        const n = e.map(R);
        E.debug(`Firestore (${T}): ${t}`, ...n);
    }
}

function A(t, ...e) {
    if (E.logLevel <= n.ERROR) {
        const n = e.map(R);
        E.error(`Firestore (${T}): ${t}`, ...n);
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */
function R(t) {
    if ("string" == typeof t) return t;
    try {
        return e = t, JSON.stringify(e);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
    var e;
}

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
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function P(t = "Unexpected state") {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    const e = `FIRESTORE (${T}) INTERNAL ASSERTION FAILED: ` + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
    throw A(e), new Error(e);
}

/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */ function V(t, e) {
    t || P();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function g(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    return t;
}

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
/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function y(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    const e = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
    if (e) e.getRandomValues(n); else 
    // Falls back to Math.random
    for (let e = 0; e < t; e++) n[e] = Math.floor(256 * Math.random());
    return n;
}

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
 */ class p {
    static t() {
        // Alphanumeric characters
        const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length;
        // The largest byte value that is a multiple of `char.length`.
                let n = "";
        for (;n.length < 20; ) {
            const s = y(40);
            for (let i = 0; i < s.length; ++i) 
            // Only accept values that are [0, maxMultiple), this ensures they can
            // be evenly mapped to indices of `chars` via a modulo operation.
            n.length < 20 && s[i] < e && (n += t.charAt(s[i] % t.length));
        }
        return n;
    }
}

function b(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function v(t, e, n) {
    return t.length === e.length && t.every((t, s) => n(t, e[s]));
}

/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */ function S(t) {
    // Return the input string, with an additional NUL byte appended.
    return t + "\0";
}

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
 */ class D {
    /**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId The database to use.
     * @param persistenceKey A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host The Firestore backend host to connect to.
     * @param ssl Whether to use SSL when connecting.
     * @param forceLongPolling Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     */
    constructor(t, e, n, s, i) {
        this.s = t, this.persistenceKey = e, this.host = n, this.ssl = s, this.forceLongPolling = i;
    }
}

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */
class C {
    constructor(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    get i() {
        return "(default)" === this.database;
    }
    isEqual(t) {
        return t instanceof C && t.projectId === this.projectId && t.database === this.database;
    }
    o(t) {
        return b(this.projectId, t.projectId) || b(this.database, t.database);
    }
}

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
 */ function F(t) {
    let e = 0;
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function N(t, e) {
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function $(t) {
    for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

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
/**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ class k {
    constructor(t, e) {
        this.h = t, this.u = e, 
        /**
         * The inner map for a key -> value pair. Due to the possibility of
         * collisions we keep a list of entries that we do a linear search through
         * to find an actual match. Note that collisions should be rare, so we still
         * expect near constant time lookups in practice.
         */
        this.l = {};
    }
    /** Get a value for this key, or undefined if it does not exist. */    get(t) {
        const e = this.h(t), n = this.l[e];
        if (void 0 !== n) for (const [e, s] of n) if (this.u(e, t)) return s;
    }
    has(t) {
        return void 0 !== this.get(t);
    }
    /** Put this key and value in the map. */    set(t, e) {
        const n = this.h(t), s = this.l[n];
        if (void 0 !== s) {
            for (let n = 0; n < s.length; n++) if (this.u(s[n][0], t)) return void (s[n] = [ t, e ]);
            s.push([ t, e ]);
        } else this.l[n] = [ [ t, e ] ];
    }
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */    delete(t) {
        const e = this.h(t), n = this.l[e];
        if (void 0 === n) return !1;
        for (let s = 0; s < n.length; s++) if (this.u(n[s][0], t)) return 1 === n.length ? delete this.l[e] : n.splice(s, 1), 
        !0;
        return !1;
    }
    forEach(t) {
        N(this.l, (e, n) => {
            for (const [e, s] of n) t(e, s);
        });
    }
    _() {
        return $(this.l);
    }
}

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
 */ const x = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
};

/**
 * An error class used for Firestore-generated errors. Ideally we should be
 * using FirebaseError, but integrating with it is overly arduous at the moment,
 * so we define our own compatible error class (with a `name` of 'FirebaseError'
 * and compatible `code` and `message` fields.)
 */ class M extends Error {
    constructor(t, e) {
        super(e), this.code = t, this.message = e, this.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
    }
}

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
// The earlist date supported by Firestore timestamps (0001-01-01T00:00:00Z).
class O {
    constructor(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new M(x.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new M(x.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new M(x.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new M(x.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    static now() {
        return O.fromMillis(Date.now());
    }
    static fromDate(t) {
        return O.fromMillis(t.getTime());
    }
    static fromMillis(t) {
        const e = Math.floor(t / 1e3);
        return new O(e, 1e6 * (t - 1e3 * e));
    }
    toDate() {
        return new Date(this.toMillis());
    }
    toMillis() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }
    T(t) {
        return this.seconds === t.seconds ? b(this.nanoseconds, t.nanoseconds) : b(this.seconds, t.seconds);
    }
    isEqual(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }
    toString() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }
    valueOf() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        const t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }
}

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
/**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class L {
    constructor(t) {
        this.timestamp = t;
    }
    static I(t) {
        return new L(t);
    }
    static min() {
        return new L(new O(0, 0));
    }
    o(t) {
        return this.timestamp.T(t.timestamp);
    }
    isEqual(t) {
        return this.timestamp.isEqual(t.timestamp);
    }
    /** Returns a number representation of the version for use in spec tests. */    m() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }
    toString() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }
    A() {
        return this.timestamp;
    }
}

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
/**
 * Path represents an ordered sequence of string segments.
 */
class B {
    constructor(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && P(), void 0 === n ? n = t.length - e : n > t.length - e && P(), 
        this.segments = t, this.offset = e, this.R = n;
    }
    get length() {
        return this.R;
    }
    isEqual(t) {
        return 0 === B.P(this, t);
    }
    child(t) {
        const e = this.segments.slice(this.offset, this.limit());
        return t instanceof B ? t.forEach(t => {
            e.push(t);
        }) : e.push(t), this.V(e);
    }
    /** The index of one past the last segment of the path. */    limit() {
        return this.offset + this.length;
    }
    g(t) {
        return t = void 0 === t ? 1 : t, this.V(this.segments, this.offset + t, this.length - t);
    }
    p() {
        return this.V(this.segments, this.offset, this.length - 1);
    }
    v() {
        return this.segments[this.offset];
    }
    S() {
        return this.get(this.length - 1);
    }
    get(t) {
        return this.segments[this.offset + t];
    }
    _() {
        return 0 === this.length;
    }
    D(t) {
        if (t.length < this.length) return !1;
        for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }
    C(t) {
        if (this.length + 1 !== t.length) return !1;
        for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }
    forEach(t) {
        for (let e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }
    F() {
        return this.segments.slice(this.offset, this.limit());
    }
    static P(t, e) {
        const n = Math.min(t.length, e.length);
        for (let s = 0; s < n; s++) {
            const n = t.get(s), i = e.get(s);
            if (n < i) return -1;
            if (n > i) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }
}

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 */ class q extends B {
    V(t, e, n) {
        return new q(t, e, n);
    }
    N() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.F().join("/");
    }
    toString() {
        return this.N();
    }
    /**
     * Creates a resource path from the given slash-delimited string.
     */    static $(t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (t.indexOf("//") >= 0) throw new M(x.INVALID_ARGUMENT, `Invalid path (${t}). Paths must not contain // in them.`);
        // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).
                const e = t.split("/").filter(t => t.length > 0);
        return new q(e);
    }
    static k() {
        return new q([]);
    }
}

const U = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

/** A dot-separated path for navigating sub-objects within a document. */ class Q extends B {
    V(t, e, n) {
        return new Q(t, e, n);
    }
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */    static M(t) {
        return U.test(t);
    }
    N() {
        return this.F().map(t => (t = t.replace("\\", "\\\\").replace("`", "\\`"), Q.M(t) || (t = "`" + t + "`"), 
        t)).join(".");
    }
    toString() {
        return this.N();
    }
    /**
     * Returns true if this field references the key of a document.
     */    O() {
        return 1 === this.length && "__name__" === this.get(0);
    }
    /**
     * The field designating the key of a document.
     */    static L() {
        return new Q([ "__name__" ]);
    }
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */    static B(t) {
        const e = [];
        let n = "", s = 0;
        const i = () => {
            if (0 === n.length) throw new M(x.INVALID_ARGUMENT, `Invalid field path (${t}). Paths must not be empty, begin ` + "with '.', end with '.', or contain '..'");
            e.push(n), n = "";
        };
        let r = !1;
        for (;s < t.length; ) {
            const e = t[s];
            if ("\\" === e) {
                if (s + 1 === t.length) throw new M(x.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                const e = t[s + 1];
                if ("\\" !== e && "." !== e && "`" !== e) throw new M(x.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                n += e, s += 2;
            } else "`" === e ? (r = !r, s++) : "." !== e || r ? (n += e, s++) : (i(), s++);
        }
        if (i(), r) throw new M(x.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new Q(e);
    }
    static k() {
        return new Q([]);
    }
}

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
 */ class W {
    constructor(t) {
        this.path = t;
    }
    static q(t) {
        return new W(q.$(t).g(5));
    }
    /** Returns true if the document is in the specified collectionId. */    U(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }
    isEqual(t) {
        return null !== t && 0 === q.P(this.path, t.path);
    }
    toString() {
        return this.path.toString();
    }
    static P(t, e) {
        return q.P(t.path, e.path);
    }
    static W(t) {
        return t.length % 2 == 0;
    }
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments The segments of the path to the document
     * @return A new instance of DocumentKey
     */    static j(t) {
        return new W(new q(t.slice()));
    }
}

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
/**
 * Returns whether a variable is either undefined or null.
 */ function j(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function K(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return -0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */ function G(t) {
    return "number" == typeof t && Number.isInteger(t) && !K(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}

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
// Visible for testing
class z {
    constructor(t, e = null, n = [], s = [], i = null, r = null, o = null) {
        this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = s, this.limit = i, 
        this.startAt = r, this.endAt = o, this.K = null;
    }
}

/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */ function H(t, e = null, n = [], s = [], i = null, r = null, o = null) {
    return new z(t, e, n, s, i, r, o);
}

function Y(t) {
    const e = g(t);
    if (null === e.K) {
        let t = e.path.N();
        null !== e.collectionGroup && (t += "|cg:" + e.collectionGroup), t += "|f:", t += e.filters.map(t => vn(t)).join(","), 
        t += "|ob:", t += e.orderBy.map(t => {
            return (e = t).field.N() + e.dir;
            var e;
        }).join(","), j(e.limit) || (t += "|l:", t += e.limit), e.startAt && (t += "|lb:", 
        t += kn(e.startAt)), e.endAt && (t += "|ub:", t += kn(e.endAt)), e.K = t;
    }
    return e.K;
}

function J(t) {
    let e = t.path.N();
    return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), 
    t.filters.length > 0 && (e += `, filters: [${t.filters.map(t => {
        return `${(e = t).field.N()} ${e.op} ${Ut(e.value)}`;
        /** Returns a debug description for `filter`. */
        var e;
        /** Filter that matches on key fields (i.e. '__name__'). */    }).join(", ")}]`), 
    j(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += `, orderBy: [${t.orderBy.map(t => {
        return `${(e = t).field.N()} (${e.dir})`;
        var e;
    }).join(", ")}]`), t.startAt && (e += ", startAt: " + kn(t.startAt)), t.endAt && (e += ", endAt: " + kn(t.endAt)), 
    `Target(${e})`;
}

function X(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (let n = 0; n < t.orderBy.length; n++) if (!Bn(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (let i = 0; i < t.filters.length; i++) if (n = t.filters[i], s = e.filters[i], 
    !(n instanceof bn && s instanceof bn && n.op === s.op && n.field.isEqual(s.field) && Ot(n.value, s.value))) return !1;
    var n, s;
    return t.collectionGroup === e.collectionGroup && (!!t.path.isEqual(e.path) && (!!Mn(t.startAt, e.startAt) && Mn(t.endAt, e.endAt)));
}

function Z(t) {
    return W.W(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}

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
/** Converts a Base64 encoded string to a binary string. */
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
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */
class tt {
    constructor(t) {
        this.G = t;
    }
    static fromBase64String(t) {
        const e = atob(t);
        return new tt(e);
    }
    static fromUint8Array(t) {
        const e = 
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            let e = "";
            for (let n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }
        /**
 * Helper function to convert a binary string to an Uint8Array.
 */ (t);
        return new tt(e);
    }
    toBase64() {
        return t = this.G, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */
        var t;
        /** True if and only if the Base64 conversion functions are available. */    }
    toUint8Array() {
        return function(t) {
            const e = new Uint8Array(t.length);
            for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }
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
        /**
 * An immutable set of metadata that the local store tracks for each target.
 */ (this.G);
    }
    H() {
        return 2 * this.G.length;
    }
    o(t) {
        return b(this.G, t.G);
    }
    isEqual(t) {
        return this.G === t.G;
    }
}

tt.Y = new tt("");

class et {
    constructor(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    s, 
    /** The latest snapshot version seen for this target. */
    i = L.min()
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , r = L.min()
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , o = tt.Y) {
        this.target = t, this.targetId = e, this.J = n, this.sequenceNumber = s, this.X = i, 
        this.lastLimboFreeSnapshotVersion = r, this.resumeToken = o;
    }
    /** Creates a new target data instance with an updated sequence number. */    Z(t) {
        return new et(this.target, this.targetId, this.J, t, this.X, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */    tt(t, e) {
        return new et(this.target, this.targetId, this.J, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t);
    }
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */    et(t) {
        return new et(this.target, this.targetId, this.J, this.sequenceNumber, this.X, t, this.resumeToken);
    }
}

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
 */ class nt {
    // TODO(b/33078163): just use simplest form of existence filter for now
    constructor(t) {
        this.count = t;
    }
}

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
/**
 * Error Codes describing the different ways GRPC can fail. These are copied
 * directly from GRPC's sources here:
 *
 * https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
 *
 * Important! The names of these identifiers matter because the string forms
 * are used for reverse lookups from the webchannel stream. Do NOT change the
 * names of these identifiers or change this into a const enum.
 */ var st, it;

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function rt(t) {
    switch (t) {
      case x.OK:
        return P();

      case x.CANCELLED:
      case x.UNKNOWN:
      case x.DEADLINE_EXCEEDED:
      case x.RESOURCE_EXHAUSTED:
      case x.INTERNAL:
      case x.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case x.UNAUTHENTICATED:
        return !1;

      case x.INVALID_ARGUMENT:
      case x.NOT_FOUND:
      case x.ALREADY_EXISTS:
      case x.PERMISSION_DENIED:
      case x.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case x.ABORTED:
      case x.OUT_OF_RANGE:
      case x.UNIMPLEMENTED:
      case x.DATA_LOSS:
        return !0;

      default:
        return P();
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */
function ot(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return A("GRPC error has no .code"), x.UNKNOWN;
    switch (t) {
      case st.OK:
        return x.OK;

      case st.CANCELLED:
        return x.CANCELLED;

      case st.UNKNOWN:
        return x.UNKNOWN;

      case st.DEADLINE_EXCEEDED:
        return x.DEADLINE_EXCEEDED;

      case st.RESOURCE_EXHAUSTED:
        return x.RESOURCE_EXHAUSTED;

      case st.INTERNAL:
        return x.INTERNAL;

      case st.UNAVAILABLE:
        return x.UNAVAILABLE;

      case st.UNAUTHENTICATED:
        return x.UNAUTHENTICATED;

      case st.INVALID_ARGUMENT:
        return x.INVALID_ARGUMENT;

      case st.NOT_FOUND:
        return x.NOT_FOUND;

      case st.ALREADY_EXISTS:
        return x.ALREADY_EXISTS;

      case st.PERMISSION_DENIED:
        return x.PERMISSION_DENIED;

      case st.FAILED_PRECONDITION:
        return x.FAILED_PRECONDITION;

      case st.ABORTED:
        return x.ABORTED;

      case st.OUT_OF_RANGE:
        return x.OUT_OF_RANGE;

      case st.UNIMPLEMENTED:
        return x.UNIMPLEMENTED;

      case st.DATA_LOSS:
        return x.DATA_LOSS;

      default:
        return P();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (it = st || (st = {}))[it.OK = 0] = "OK", it[it.CANCELLED = 1] = "CANCELLED", 
it[it.UNKNOWN = 2] = "UNKNOWN", it[it.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
it[it.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", it[it.NOT_FOUND = 5] = "NOT_FOUND", 
it[it.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", it[it.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
it[it.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", it[it.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
it[it.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", it[it.ABORTED = 10] = "ABORTED", 
it[it.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", it[it.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
it[it.INTERNAL = 13] = "INTERNAL", it[it.UNAVAILABLE = 14] = "UNAVAILABLE", it[it.DATA_LOSS = 15] = "DATA_LOSS";

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
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
class ht {
    constructor(t, e) {
        this.P = t, this.root = e || ut.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
    nt(t, e) {
        return new ht(this.P, this.root.nt(t, e, this.P).copy(null, null, ut.st, null, null));
    }
    // Returns a copy of the map, with the specified key removed.
    remove(t) {
        return new ht(this.P, this.root.remove(t, this.P).copy(null, null, ut.st, null, null));
    }
    // Returns the value of the node with the given key, or null.
    get(t) {
        let e = this.root;
        for (;!e._(); ) {
            const n = this.P(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    indexOf(t) {
        // Number of nodes that were pruned when descending right
        let e = 0, n = this.root;
        for (;!n._(); ) {
            const s = this.P(t, n.key);
            if (0 === s) return e + n.left.size;
            s < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }
    _() {
        return this.root._();
    }
    // Returns the total number of nodes in the map.
    get size() {
        return this.root.size;
    }
    // Returns the minimum key in the map.
    it() {
        return this.root.it();
    }
    // Returns the maximum key in the map.
    rt() {
        return this.root.rt();
    }
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    ot(t) {
        return this.root.ot(t);
    }
    forEach(t) {
        this.ot((e, n) => (t(e, n), !1));
    }
    toString() {
        const t = [];
        return this.ot((e, n) => (t.push(`${e}:${n}`), !1)), `{${t.join(", ")}}`;
    }
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    ht(t) {
        return this.root.ht(t);
    }
    // Returns an iterator over the SortedMap.
    at() {
        return new at(this.root, null, this.P, !1);
    }
    ut(t) {
        return new at(this.root, t, this.P, !1);
    }
    ct() {
        return new at(this.root, null, this.P, !0);
    }
    lt(t) {
        return new at(this.root, t, this.P, !0);
    }
}

 // end SortedMap
// An iterator over an LLRBNode.
class at {
    constructor(t, e, n, s) {
        this._t = s, this.ft = [];
        let i = 1;
        for (;!t._(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        s && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this._t ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.ft.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
            this.ft.push(t), t = this._t ? t.right : t.left;
        }
    }
    dt() {
        let t = this.ft.pop();
        const e = {
            key: t.key,
            value: t.value
        };
        if (this._t) for (t = t.left; !t._(); ) this.ft.push(t), t = t.right; else for (t = t.right; !t._(); ) this.ft.push(t), 
        t = t.left;
        return e;
    }
    wt() {
        return this.ft.length > 0;
    }
    Tt() {
        if (0 === this.ft.length) return null;
        const t = this.ft[this.ft.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }
}

 // end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
class ut {
    constructor(t, e, n, s, i) {
        this.key = t, this.value = e, this.color = null != n ? n : ut.RED, this.left = null != s ? s : ut.EMPTY, 
        this.right = null != i ? i : ut.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
    copy(t, e, n, s, i) {
        return new ut(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != s ? s : this.left, null != i ? i : this.right);
    }
    _() {
        return !1;
    }
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    ot(t) {
        return this.left.ot(t) || t(this.key, this.value) || this.right.ot(t);
    }
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    ht(t) {
        return this.right.ht(t) || t(this.key, this.value) || this.left.ht(t);
    }
    // Returns the minimum node in the tree.
    min() {
        return this.left._() ? this : this.left.min();
    }
    // Returns the maximum key in the tree.
    it() {
        return this.min().key;
    }
    // Returns the maximum key in the tree.
    rt() {
        return this.right._() ? this.key : this.right.rt();
    }
    // Returns new tree, with the key/value added.
    nt(t, e, n) {
        let s = this;
        const i = n(t, s.key);
        return s = i < 0 ? s.copy(null, null, null, s.left.nt(t, e, n), null) : 0 === i ? s.copy(null, e, null, null, null) : s.copy(null, null, null, null, s.right.nt(t, e, n)), 
        s.Et();
    }
    It() {
        if (this.left._()) return ut.EMPTY;
        let t = this;
        return t.left.At() || t.left.left.At() || (t = t.Rt()), t = t.copy(null, null, null, t.left.It(), null), 
        t.Et();
    }
    // Returns new tree, with the specified item removed.
    remove(t, e) {
        let n, s = this;
        if (e(t, s.key) < 0) s.left._() || s.left.At() || s.left.left.At() || (s = s.Rt()), 
        s = s.copy(null, null, null, s.left.remove(t, e), null); else {
            if (s.left.At() && (s = s.Pt()), s.right._() || s.right.At() || s.right.left.At() || (s = s.Vt()), 
            0 === e(t, s.key)) {
                if (s.right._()) return ut.EMPTY;
                n = s.right.min(), s = s.copy(n.key, n.value, null, null, s.right.It());
            }
            s = s.copy(null, null, null, null, s.right.remove(t, e));
        }
        return s.Et();
    }
    At() {
        return this.color;
    }
    // Returns new tree after performing any needed rotations.
    Et() {
        let t = this;
        return t.right.At() && !t.left.At() && (t = t.gt()), t.left.At() && t.left.left.At() && (t = t.Pt()), 
        t.left.At() && t.right.At() && (t = t.yt()), t;
    }
    Rt() {
        let t = this.yt();
        return t.right.left.At() && (t = t.copy(null, null, null, null, t.right.Pt()), t = t.gt(), 
        t = t.yt()), t;
    }
    Vt() {
        let t = this.yt();
        return t.left.left.At() && (t = t.Pt(), t = t.yt()), t;
    }
    gt() {
        const t = this.copy(null, null, ut.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, t, null);
    }
    Pt() {
        const t = this.copy(null, null, ut.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, t);
    }
    yt() {
        const t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
    }
    // For testing.
    pt() {
        const t = this.bt();
        return Math.pow(2, t) <= this.size + 1;
    }
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    bt() {
        if (this.At() && this.left.At()) throw P();
        if (this.right.At()) throw P();
        const t = this.left.bt();
        if (t !== this.right.bt()) throw P();
        return t + (this.At() ? 0 : 1);
    }
}

 // end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
ut.EMPTY = null, ut.RED = !0, ut.st = !1;

// end LLRBEmptyNode
ut.EMPTY = new 
// Represents an empty node (a leaf node in the Red-Black Tree).
class {
    constructor() {
        this.size = 0;
    }
    get key() {
        throw P();
    }
    get value() {
        throw P();
    }
    get color() {
        throw P();
    }
    get left() {
        throw P();
    }
    get right() {
        throw P();
    }
    // Returns a copy of the current node.
    copy(t, e, n, s, i) {
        return this;
    }
    // Returns a copy of the tree, with the specified key/value added.
    nt(t, e, n) {
        return new ut(t, e);
    }
    // Returns a copy of the tree, with the specified key removed.
    remove(t, e) {
        return this;
    }
    _() {
        return !0;
    }
    ot(t) {
        return !1;
    }
    ht(t) {
        return !1;
    }
    it() {
        return null;
    }
    rt() {
        return null;
    }
    At() {
        return !1;
    }
    // For testing.
    pt() {
        return !0;
    }
    bt() {
        return 0;
    }
};

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
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
class ct {
    constructor(t) {
        this.P = t, this.data = new ht(this.P);
    }
    has(t) {
        return null !== this.data.get(t);
    }
    first() {
        return this.data.it();
    }
    last() {
        return this.data.rt();
    }
    get size() {
        return this.data.size;
    }
    indexOf(t) {
        return this.data.indexOf(t);
    }
    /** Iterates elements in order defined by "comparator" */    forEach(t) {
        this.data.ot((e, n) => (t(e), !1));
    }
    /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */    vt(t, e) {
        const n = this.data.ut(t[0]);
        for (;n.wt(); ) {
            const s = n.dt();
            if (this.P(s.key, t[1]) >= 0) return;
            e(s.key);
        }
    }
    /**
     * Iterates over `elem`s such that: start <= elem until false is returned.
     */    St(t, e) {
        let n;
        for (n = void 0 !== e ? this.data.ut(e) : this.data.at(); n.wt(); ) {
            if (!t(n.dt().key)) return;
        }
    }
    /** Finds the least element greater than or equal to `elem`. */    Dt(t) {
        const e = this.data.ut(t);
        return e.wt() ? e.dt().key : null;
    }
    at() {
        return new lt(this.data.at());
    }
    ut(t) {
        return new lt(this.data.ut(t));
    }
    /** Inserts or updates an element */    add(t) {
        return this.copy(this.data.remove(t).nt(t, !0));
    }
    /** Deletes an element */    delete(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }
    _() {
        return this.data._();
    }
    Ct(t) {
        let e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach(t => {
            e = e.add(t);
        }), e;
    }
    isEqual(t) {
        if (!(t instanceof ct)) return !1;
        if (this.size !== t.size) return !1;
        const e = this.data.at(), n = t.data.at();
        for (;e.wt(); ) {
            const t = e.dt().key, s = n.dt().key;
            if (0 !== this.P(t, s)) return !1;
        }
        return !0;
    }
    F() {
        const t = [];
        return this.forEach(e => {
            t.push(e);
        }), t;
    }
    toString() {
        const t = [];
        return this.forEach(e => t.push(e)), "SortedSet(" + t.toString() + ")";
    }
    copy(t) {
        const e = new ct(this.P);
        return e.data = t, e;
    }
}

class lt {
    constructor(t) {
        this.Ft = t;
    }
    dt() {
        return this.Ft.dt().key;
    }
    wt() {
        return this.Ft.wt();
    }
}

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
 */ const _t = new ht(W.P);

function ft() {
    return _t;
}

function dt() {
    return ft();
}

const wt = new ht(W.P);

function Tt() {
    return wt;
}

const Et = new ht(W.P);

const It = new ct(W.P);

function mt(...t) {
    let e = It;
    for (const n of t) e = e.add(n);
    return e;
}

const At = new ct(b);

function Rt() {
    return At;
}

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
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ class Pt {
    /** The default ordering is by key if the comparator is omitted */
    constructor(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.P = t ? (e, n) => t(e, n) || W.P(e.key, n.key) : (t, e) => W.P(t.key, e.key), 
        this.Nt = Tt(), this.$t = new ht(this.P);
    }
    /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */    static kt(t) {
        return new Pt(t.P);
    }
    has(t) {
        return null != this.Nt.get(t);
    }
    get(t) {
        return this.Nt.get(t);
    }
    first() {
        return this.$t.it();
    }
    last() {
        return this.$t.rt();
    }
    _() {
        return this.$t._();
    }
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */    indexOf(t) {
        const e = this.Nt.get(t);
        return e ? this.$t.indexOf(e) : -1;
    }
    get size() {
        return this.$t.size;
    }
    /** Iterates documents in order defined by "comparator" */    forEach(t) {
        this.$t.ot((e, n) => (t(e), !1));
    }
    /** Inserts or updates a document with the same key */    add(t) {
        // First remove the element if we have it.
        const e = this.delete(t.key);
        return e.copy(e.Nt.nt(t.key, t), e.$t.nt(t, null));
    }
    /** Deletes a document with a given key */    delete(t) {
        const e = this.get(t);
        return e ? this.copy(this.Nt.remove(t), this.$t.remove(e)) : this;
    }
    isEqual(t) {
        if (!(t instanceof Pt)) return !1;
        if (this.size !== t.size) return !1;
        const e = this.$t.at(), n = t.$t.at();
        for (;e.wt(); ) {
            const t = e.dt().key, s = n.dt().key;
            if (!t.isEqual(s)) return !1;
        }
        return !0;
    }
    toString() {
        const t = [];
        return this.forEach(e => {
            t.push(e.toString());
        }), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }
    copy(t, e) {
        const n = new Pt;
        return n.P = this.P, n.Nt = t, n.$t = e, n;
    }
}

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
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ class Vt {
    constructor() {
        this.xt = new ht(W.P);
    }
    track(t) {
        const e = t.doc.key, n = this.xt.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.xt = this.xt.nt(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.xt = this.xt.nt(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.xt = this.xt.nt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.xt = this.xt.nt(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.xt = this.xt.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.xt = this.xt.nt(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.xt = this.xt.nt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        P() : this.xt = this.xt.nt(e, t);
    }
    Mt() {
        const t = [];
        return this.xt.ot((e, n) => {
            t.push(n);
        }), t;
    }
}

class gt {
    constructor(t, e, n, s, i, r, o, h) {
        this.query = t, this.docs = e, this.Ot = n, this.docChanges = s, this.Lt = i, this.fromCache = r, 
        this.Bt = o, this.qt = h;
    }
    /** Returns a view snapshot as if all documents in the snapshot were added. */    static Ut(t, e, n, s) {
        const i = [];
        return e.forEach(t => {
            i.push({
                type: 0 /* Added */ ,
                doc: t
            });
        }), new gt(t, e, Pt.kt(e), i, n, s, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }
    get hasPendingWrites() {
        return !this.Lt._();
    }
    isEqual(t) {
        if (!(this.fromCache === t.fromCache && this.Bt === t.Bt && this.Lt.isEqual(t.Lt) && Pn(this.query, t.query) && this.docs.isEqual(t.docs) && this.Ot.isEqual(t.Ot))) return !1;
        const e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (let t = 0; t < e.length; t++) if (e[t].type !== n[t].type || !e[t].doc.isEqual(n[t].doc)) return !1;
        return !0;
    }
}

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
/**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */ class yt {
    constructor(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    s, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.X = t, this.Qt = e, this.Wt = n, this.jt = s, this.Kt = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
    static Gt(t, e) {
        const n = new Map;
        return n.set(t, pt.zt(t, e)), new yt(L.min(), n, Rt(), ft(), mt());
    }
}

/**
 * A TargetChange specifies the set of changes for a specific target as part of
 * a RemoteEvent. These changes track which documents are added, modified or
 * removed, as well as the target's resume token and whether the target is
 * marked CURRENT.
 * The actual changes *to* documents are not part of the TargetChange since
 * documents may be part of multiple targets.
 */ class pt {
    constructor(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    s, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.Ht = e, this.Yt = n, this.Jt = s, this.Xt = i;
    }
    /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */    static zt(t, e) {
        return new pt(tt.Y, e, mt(), mt(), mt());
    }
}

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
/**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */ class bt {
    constructor(
    /** The new document applies to all of these targets. */
    t, 
    /** The new document is removed from all of these targets. */
    e, 
    /** The key of the document for this change. */
    n, 
    /**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
    s) {
        this.Zt = t, this.removedTargetIds = e, this.key = n, this.te = s;
    }
}

class vt {
    constructor(t, e) {
        this.targetId = t, this.ee = e;
    }
}

class St {
    constructor(
    /** What kind of change occurred to the watch target. */
    t, 
    /** The target IDs that were added/removed/set. */
    e, 
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
    n = tt.Y
    /** An RPC error indicating why the watch failed. */ , s = null) {
        this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = s;
    }
}

/** Tracks the internal state of a Watch target. */ class Dt {
    constructor() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.ne = 0, 
        /**
         * Keeps track of the document changes since the last raised snapshot.
         *
         * These changes are continuously updated as we receive document updates and
         * always reflect the current set of changes against the last issued snapshot.
         */
        this.se = Nt(), 
        /** See public getters for explanations of these fields. */
        this.ie = tt.Y, this.re = !1, 
        /**
         * Whether this target state should be included in the next snapshot. We
         * initialize to true so that newly-added targets are included in the next
         * RemoteEvent.
         */
        this.oe = !0;
    }
    /**
     * Whether this target has been marked 'current'.
     *
     * 'Current' has special meaning in the RPC protocol: It implies that the
     * Watch backend has sent us all changes up to the point at which the target
     * was added and that the target is consistent with the rest of the watch
     * stream.
     */    get Ht() {
        return this.re;
    }
    /** The last resume token sent to us for this target. */    get resumeToken() {
        return this.ie;
    }
    /** Whether this target has pending target adds or target removes. */    get he() {
        return 0 !== this.ne;
    }
    /** Whether we have modified any state that should trigger a snapshot. */    get ae() {
        return this.oe;
    }
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */    ue(t) {
        t.H() > 0 && (this.oe = !0, this.ie = t);
    }
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */    ce() {
        let t = mt(), e = mt(), n = mt();
        return this.se.forEach((s, i) => {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(s);
                break;

              case 2 /* Modified */ :
                e = e.add(s);
                break;

              case 1 /* Removed */ :
                n = n.add(s);
                break;

              default:
                P();
            }
        }), new pt(this.ie, this.re, t, e, n);
    }
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */    le() {
        this.oe = !1, this.se = Nt();
    }
    _e(t, e) {
        this.oe = !0, this.se = this.se.nt(t, e);
    }
    fe(t) {
        this.oe = !0, this.se = this.se.remove(t);
    }
    de() {
        this.ne += 1;
    }
    we() {
        this.ne -= 1;
    }
    Te() {
        this.oe = !0, this.re = !0;
    }
}

/**
 * A helper class to accumulate watch changes into a RemoteEvent.
 */
class Ct {
    constructor(t) {
        this.Ee = t, 
        /** The internal state of all tracked targets. */
        this.Ie = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.me = ft(), 
        /** A mapping of document keys to their set of target IDs. */
        this.Ae = Ft(), 
        /**
         * A list of targets with existence filter mismatches. These targets are
         * known to be inconsistent and their listens needs to be re-established by
         * RemoteStore.
         */
        this.Re = new ct(b);
    }
    /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */    Pe(t) {
        for (const e of t.Zt) t.te instanceof In ? this.Ve(e, t.te) : t.te instanceof mn && this.ge(e, t.key, t.te);
        for (const e of t.removedTargetIds) this.ge(e, t.key, t.te);
    }
    /** Processes and adds the WatchTargetChange to the current set of changes. */    ye(t) {
        this.pe(t, e => {
            const n = this.be(e);
            switch (t.state) {
              case 0 /* NoChange */ :
                this.ve(e) && n.ue(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                n.we(), n.he || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                n.le(), n.ue(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                n.we(), n.he || this.removeTarget(e);
                break;

              case 3 /* Current */ :
                this.ve(e) && (n.Te(), n.ue(t.resumeToken));
                break;

              case 4 /* Reset */ :
                this.ve(e) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                this.Se(e), n.ue(t.resumeToken));
                break;

              default:
                P();
            }
        });
    }
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */    pe(t, e) {
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Ie.forEach((t, n) => {
            this.ve(n) && e(n);
        });
    }
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */    De(t) {
        const e = t.targetId, n = t.ee.count, s = this.Ce(e);
        if (s) {
            const t = s.target;
            if (Z(t)) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                const n = new W(t.path);
                this.ge(e, n, new mn(n, L.min()));
            } else V(1 === n); else {
                this.Fe(e) !== n && (
                // Existence filter mismatch: We reset the mapping and raise a new
                // snapshot with `isFromCache:true`.
                this.Se(e), this.Re = this.Re.add(e));
            }
        }
    }
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */    Ne(t) {
        const e = new Map;
        this.Ie.forEach((n, s) => {
            const i = this.Ce(s);
            if (i) {
                if (n.Ht && Z(i.target)) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    const e = new W(i.target.path);
                    null !== this.me.get(e) || this.$e(s, e) || this.ge(s, e, new mn(e, t));
                }
                n.ae && (e.set(s, n.ce()), n.le());
            }
        });
        let n = mt();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.Ae.forEach((t, e) => {
            let s = !0;
            e.St(t => {
                const e = this.Ce(t);
                return !e || 2 /* LimboResolution */ === e.J || (s = !1, !1);
            }), s && (n = n.add(t));
        });
        const s = new yt(t, e, this.Re, this.me, n);
        return this.me = ft(), this.Ae = Ft(), this.Re = new ct(b), s;
    }
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    Ve(t, e) {
        if (!this.ve(t)) return;
        const n = this.$e(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
        this.be(t)._e(e.key, n), this.me = this.me.nt(e.key, e), this.Ae = this.Ae.nt(e.key, this.ke(e.key).add(t));
    }
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    ge(t, e, n) {
        if (!this.ve(t)) return;
        const s = this.be(t);
        this.$e(t, e) ? s._e(e, 1 /* Removed */) : 
        // The document may have entered and left the target before we raised a
        // snapshot, so we can just ignore the change.
        s.fe(e), this.Ae = this.Ae.nt(e, this.ke(e).delete(t)), n && (this.me = this.me.nt(e, n));
    }
    removeTarget(t) {
        this.Ie.delete(t);
    }
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */    Fe(t) {
        const e = this.be(t).ce();
        return this.Ee.xe(t).size + e.Yt.size - e.Xt.size;
    }
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */    de(t) {
        this.be(t).de();
    }
    be(t) {
        let e = this.Ie.get(t);
        return e || (e = new Dt, this.Ie.set(t, e)), e;
    }
    ke(t) {
        let e = this.Ae.get(t);
        return e || (e = new ct(b), this.Ae = this.Ae.nt(t, e)), e;
    }
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */    ve(t) {
        const e = null !== this.Ce(t);
        return e || m("WatchChangeAggregator", "Detected inactive target", t), e;
    }
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */    Ce(t) {
        const e = this.Ie.get(t);
        return e && e.he ? null : this.Ee.Me(t);
    }
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */    Se(t) {
        this.Ie.set(t, new Dt), this.Ee.xe(t).forEach(e => {
            this.ge(t, e, /*updatedDocument=*/ null);
        });
    }
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */    $e(t, e) {
        return this.Ee.xe(t).has(e);
    }
}

function Ft() {
    return new ht(W.P);
}

function Nt() {
    return new ht(W.P);
}

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
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
 *   the local view of a document. Therefore they do not need to be parsed or
 *   serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function $t(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the local time at which this timestamp was first set.
 */
function kt(t) {
    const e = Wt(t.mapValue.fields.__local_write_time__.timestampValue);
    return new O(e.seconds, e.nanos);
}

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
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
const xt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/** Extracts the backend's type order for the provided value. */ function Mt(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? $t(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : P();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function Ot(t, e) {
    const n = Mt(t);
    if (n !== Mt(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return kt(t).isEqual(kt(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            const n = Wt(t.timestampValue), s = Wt(e.timestampValue);
            return n.seconds === s.seconds && n.nanos === s.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return Kt(t.bytesValue).isEqual(Kt(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return jt(t.geoPointValue.latitude) === jt(e.geoPointValue.latitude) && jt(t.geoPointValue.longitude) === jt(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return jt(t.integerValue) === jt(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                const n = jt(t.doubleValue), s = jt(e.doubleValue);
                return n === s ? K(n) === K(s) : isNaN(n) && isNaN(s);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return v(t.arrayValue.values || [], e.arrayValue.values || [], Ot);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            const n = t.mapValue.fields || {}, s = e.mapValue.fields || {};
            if (F(n) !== F(s)) return !1;
            for (const t in n) if (n.hasOwnProperty(t) && (void 0 === s[t] || !Ot(n[t], s[t]))) return !1;
            return !0;
        }
        /** Returns true if the ArrayValue contains the specified element. */ (t, e);

      default:
        return P();
    }
}

function Lt(t, e) {
    return void 0 !== (t.values || []).find(t => Ot(t, e));
}

function Bt(t, e) {
    const n = Mt(t), s = Mt(e);
    if (n !== s) return b(n, s);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return b(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            const n = jt(t.integerValue || t.doubleValue), s = jt(e.integerValue || e.doubleValue);
            return n < s ? -1 : n > s ? 1 : n === s ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(s) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return qt(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return qt(kt(t), kt(e));

      case 5 /* StringValue */ :
        return b(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            const n = Kt(t), s = Kt(e);
            return n.o(s);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            const n = t.split("/"), s = e.split("/");
            for (let t = 0; t < n.length && t < s.length; t++) {
                const e = b(n[t], s[t]);
                if (0 !== e) return e;
            }
            return b(n.length, s.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            const n = b(jt(t.latitude), jt(e.latitude));
            if (0 !== n) return n;
            return b(jt(t.longitude), jt(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            const n = t.values || [], s = e.values || [];
            for (let t = 0; t < n.length && t < s.length; ++t) {
                const e = Bt(n[t], s[t]);
                if (e) return e;
            }
            return b(n.length, s.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            const n = t.fields || {}, s = Object.keys(n), i = e.fields || {}, r = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
            s.sort(), r.sort();
            for (let t = 0; t < s.length && t < r.length; ++t) {
                const e = b(s[t], r[t]);
                if (0 !== e) return e;
                const o = Bt(n[s[t]], i[r[t]]);
                if (0 !== o) return o;
            }
            return b(s.length, r.length);
        }
        /**
 * Generates the canonical ID for the provided field value (as used in Target
 * serialization).
 */ (t.mapValue, e.mapValue);

      default:
        throw P();
    }
}

function qt(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return b(t, e);
    const n = Wt(t), s = Wt(e), i = b(n.seconds, s.seconds);
    return 0 !== i ? i : b(n.nanos, s.nanos);
}

function Ut(t) {
    return Qt(t);
}

function Qt(t) {
    return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(t) {
        const e = Wt(t);
        return `time(${e.seconds},${e.nanos})`;
    }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? Kt(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, 
    W.q(n).toString()) : "geoPointValue" in t ? `geo(${(e = t.geoPointValue).latitude},${e.longitude})` : "arrayValue" in t ? function(t) {
        let e = "[", n = !0;
        for (const s of t.values || []) n ? n = !1 : e += ",", e += Qt(s);
        return e + "]";
    }
    /**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */ (t.arrayValue) : "mapValue" in t ? function(t) {
        // Iteration order in JavaScript is not guaranteed. To ensure that we generate
        // matching canonical IDs for identical maps, we need to sort the keys.
        const e = Object.keys(t.fields || {}).sort();
        let n = "{", s = !0;
        for (const i of e) s ? s = !1 : n += ",", n += `${i}:${Qt(t.fields[i])}`;
        return n + "}";
    }(t.mapValue) : P();
    var e, n;
}

function Wt(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (V(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        let e = 0;
        const n = xt.exec(t);
        if (V(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            let t = n[1];
            t = (t + "000000000").substr(0, 9), e = Number(t);
        }
        // Parse the date to get the seconds.
                const s = new Date(t);
        return {
            seconds: Math.floor(s.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: jt(t.seconds),
        nanos: jt(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function jt(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function Kt(t) {
    return "string" == typeof t ? tt.fromBase64String(t) : tt.fromUint8Array(t);
}

/** Returns a reference value for the provided database and key. */ function Gt(t, e) {
    return {
        referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${e.path.N()}`
    };
}

/** Returns true if `value` is an IntegerValue . */ function zt(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */
function Ht(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function Yt(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function Jt(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function Xt(t) {
    return !!t && "mapValue" in t;
}

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
 */ const Zt = (() => {
    const t = {
        asc: "ASCENDING",
        desc: "DESCENDING"
    };
    return t;
})(), te = (() => {
    const t = {
        "<": "LESS_THAN",
        "<=": "LESS_THAN_OR_EQUAL",
        ">": "GREATER_THAN",
        ">=": "GREATER_THAN_OR_EQUAL",
        "==": "EQUAL",
        "array-contains": "ARRAY_CONTAINS",
        in: "IN",
        "array-contains-any": "ARRAY_CONTAINS_ANY"
    };
    return t;
})();

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
class ee {
    constructor(t, e) {
        this.s = t, this.Oe = e;
    }
}

/**
 * Returns an IntegerValue for `value`.
 */
function ne(t) {
    return {
        integerValue: "" + t
    };
}

/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function se(t, e) {
    if (t.Oe) {
        if (isNaN(e)) return {
            doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
            doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
            doubleValue: "-Infinity"
        };
    }
    return {
        doubleValue: K(e) ? "-0" : e
    };
}

/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function ie(t, e) {
    return G(e) ? ne(e) : se(t, e);
}

/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */ function re(t, e) {
    if (t.Oe) {
        return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
    }
    return {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */
function oe(t, e) {
    return t.Oe ? e.toBase64() : e.toUint8Array();
}

/**
 * Returns a ByteString based on the proto string value.
 */ function he(t, e) {
    return re(t, e.A());
}

function ae(t) {
    return V(!!t), L.I(function(t) {
        const e = Wt(t);
        return new O(e.seconds, e.nanos);
    }(t));
}

function ue(t, e) {
    return function(t) {
        return new q([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).N();
}

function ce(t) {
    const e = q.$(t);
    return V($e(e)), e;
}

function le(t, e) {
    return ue(t.s, e.path);
}

function _e(t, e) {
    const n = ce(e);
    return V(n.get(1) === t.s.projectId), V(!n.get(3) && !t.s.database || n.get(3) === t.s.database), 
    new W(Te(n));
}

function fe(t, e) {
    return ue(t.s, e);
}

function de(t) {
    const e = ce(t);
    // In v1beta1 queries for collections at the root did not have a trailing
    // "/documents". In v1 all resource paths contain "/documents". Preserve the
    // ability to read the v1beta1 form for compatibility with queries persisted
    // in the local target cache.
        return 4 === e.length ? q.k() : Te(e);
}

function we(t) {
    return new q([ "projects", t.s.projectId, "databases", t.s.database ]).N();
}

function Te(t) {
    return V(t.length > 4 && "documents" === t.get(4)), t.g(5);
}

/** Creates an api.Document from key and fields (but no create/update time) */ function Ee(t, e, n) {
    return {
        name: le(t, e),
        fields: n.proto.mapValue.fields
    };
}

function Ie(t, e) {
    return "found" in e ? function(t, e) {
        V(!!e.found), e.found.name, e.found.updateTime;
        const n = _e(t, e.found.name), s = ae(e.found.updateTime), i = new dn({
            mapValue: {
                fields: e.found.fields
            }
        });
        return new In(n, s, i, {});
    }(t, e) : "missing" in e ? function(t, e) {
        V(!!e.missing), V(!!e.readTime);
        const n = _e(t, e.missing), s = ae(e.readTime);
        return new mn(n, s);
    }(t, e) : P();
}

function me(t, e) {
    let n;
    if ("targetChange" in e) {
        e.targetChange;
        // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
        // if unset
        const s = function(t) {
            return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : P();
        }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], r = function(t, e) {
            return t.Oe ? (V(void 0 === e || "string" == typeof e), tt.fromBase64String(e || "")) : (V(void 0 === e || e instanceof Uint8Array), 
            tt.fromUint8Array(e || new Uint8Array));
        }(t, e.targetChange.resumeToken), o = e.targetChange.cause, h = o && function(t) {
            const e = void 0 === t.code ? x.UNKNOWN : ot(t.code);
            return new M(e, t.message || "");
        }
        /**
 * Returns a value for a number (or null) that's appropriate to put into
 * a google.protobuf.Int32Value proto.
 * DO NOT USE THIS FOR ANYTHING ELSE.
 * This method cheats. It's typed as returning "number" because that's what
 * our generated proto interfaces say Int32Value must be. But GRPC actually
 * expects a { value: <number> } struct.
 */ (o);
        n = new St(s, i, r, h || null);
    } else if ("documentChange" in e) {
        e.documentChange;
        const s = e.documentChange;
        s.document, s.document.name, s.document.updateTime;
        const i = _e(t, s.document.name), r = ae(s.document.updateTime), o = new dn({
            mapValue: {
                fields: s.document.fields
            }
        }), h = new In(i, r, o, {}), a = s.targetIds || [], u = s.removedTargetIds || [];
        n = new bt(a, u, h.key, h);
    } else if ("documentDelete" in e) {
        e.documentDelete;
        const s = e.documentDelete;
        s.document;
        const i = _e(t, s.document), r = s.readTime ? ae(s.readTime) : L.min(), o = new mn(i, r), h = s.removedTargetIds || [];
        n = new bt([], h, o.key, o);
    } else if ("documentRemove" in e) {
        e.documentRemove;
        const s = e.documentRemove;
        s.document;
        const i = _e(t, s.document), r = s.removedTargetIds || [];
        n = new bt([], r, i, null);
    } else {
        if (!("filter" in e)) return P();
        {
            e.filter;
            const t = e.filter;
            t.targetId;
            const s = t.count || 0, i = new nt(s), r = t.targetId;
            n = new vt(r, i);
        }
    }
    return n;
}

function Ae(t, e) {
    let n;
    if (e instanceof on) n = {
        update: Ee(t, e.key, e.value)
    }; else if (e instanceof _n) n = {
        delete: le(t, e.key)
    }; else if (e instanceof hn) n = {
        update: Ee(t, e.key, e.data),
        updateMask: Ne(e.Le)
    }; else if (e instanceof un) n = {
        transform: {
            document: le(t, e.key),
            fieldTransforms: e.fieldTransforms.map(t => function(t, e) {
                const n = e.transform;
                if (n instanceof Le) return {
                    fieldPath: e.field.N(),
                    setToServerValue: "REQUEST_TIME"
                };
                if (n instanceof Be) return {
                    fieldPath: e.field.N(),
                    appendMissingElements: {
                        values: n.elements
                    }
                };
                if (n instanceof Ue) return {
                    fieldPath: e.field.N(),
                    removeAllFromArray: {
                        values: n.elements
                    }
                };
                if (n instanceof We) return {
                    fieldPath: e.field.N(),
                    increment: n.Be
                };
                throw P();
            }(0, t))
        }
    }; else {
        if (!(e instanceof fn)) return P();
        n = {
            verify: le(t, e.key)
        };
    }
    return e.Ue.qe || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: he(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : P();
    }(t, e.Ue)), n;
}

function Re(t, e) {
    const n = e.currentDocument ? function(t) {
        return void 0 !== t.updateTime ? Je.updateTime(ae(t.updateTime)) : void 0 !== t.exists ? Je.exists(t.exists) : Je.Qe();
    }(e.currentDocument) : Je.Qe();
    if (e.update) {
        e.update.name;
        const s = _e(t, e.update.name), i = new dn({
            mapValue: {
                fields: e.update.fields
            }
        });
        if (e.updateMask) {
            const t = function(t) {
                const e = t.fieldPaths || [];
                return new Ge(e.map(t => Q.B(t)));
            }(e.updateMask);
            return new hn(s, i, t, n);
        }
        return new on(s, i, n);
    }
    if (e.delete) {
        const s = _e(t, e.delete);
        return new _n(s, n);
    }
    if (e.transform) {
        const s = _e(t, e.transform.document), i = e.transform.fieldTransforms.map(e => function(t, e) {
            let n = null;
            if ("setToServerValue" in e) V("REQUEST_TIME" === e.setToServerValue), n = new Le; else if ("appendMissingElements" in e) {
                const t = e.appendMissingElements.values || [];
                n = new Be(t);
            } else if ("removeAllFromArray" in e) {
                const t = e.removeAllFromArray.values || [];
                n = new Ue(t);
            } else "increment" in e ? n = new We(t, e.increment) : P();
            const s = Q.B(e.fieldPath);
            return new ze(s, n);
        }(t, e));
        return V(!0 === n.exists), new un(s, i);
    }
    if (e.verify) {
        const s = _e(t, e.verify);
        return new fn(s, n);
    }
    return P();
}

function Pe(t, e) {
    return t && t.length > 0 ? (V(void 0 !== e), t.map(t => function(t, e) {
        // NOTE: Deletes don't have an updateTime.
        let n = t.updateTime ? ae(t.updateTime) : ae(e);
        n.isEqual(L.min()) && (
        // The Firestore Emulator currently returns an update time of 0 for
        // deletes of non-existing documents (rather than null). This breaks the
        // test "get deleted doc while offline with source=cache" as NoDocuments
        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
        // TODO(#2149): Remove this when Emulator is fixed
        n = ae(e));
        let s = null;
        return t.transformResults && t.transformResults.length > 0 && (s = t.transformResults), 
        new Ye(n, s);
    }(t, e))) : [];
}

function Ve(t, e) {
    return {
        documents: [ fe(t, e.path) ]
    };
}

function ge(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    const n = {
        structuredQuery: {}
    }, s = e.path;
    null !== e.collectionGroup ? (n.parent = fe(t, s), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = fe(t, s.p()), n.structuredQuery.from = [ {
        collectionId: s.S()
    } ]);
    const i = function(t) {
        if (0 === t.length) return;
        const e = t.map(t => t instanceof bn ? 
        // visible for testing
        function(t) {
            if ("==" /* EQUAL */ === t.op) {
                if (Jt(t.value)) return {
                    unaryFilter: {
                        field: Se(t.field),
                        op: "IS_NAN"
                    }
                };
                if (Yt(t.value)) return {
                    unaryFilter: {
                        field: Se(t.field),
                        op: "IS_NULL"
                    }
                };
            }
            return {
                fieldFilter: {
                    field: Se(t.field),
                    op: (e = t.op, te[e]),
                    value: t.value
                }
            };
            // visible for testing
            var e;
        }(t) : P());
        if (1 === e.length) return e[0];
        return {
            compositeFilter: {
                op: "AND",
                filters: e
            }
        };
    }(e.filters);
    i && (n.structuredQuery.where = i);
    const r = function(t) {
        if (0 === t.length) return;
        return t.map(t => {
            return {
                field: Se((e = t).field),
                direction: (n = e.dir, Zt[n])
            };
            // visible for testing
            var e, n;
        });
    }(e.orderBy);
    r && (n.structuredQuery.orderBy = r);
    const o = function(t, e) {
        return t.Oe || j(e) ? e : {
            value: e
        };
    }
    /**
 * Returns a number (or null) from a google.protobuf.Int32Value proto.
 */ (t, e.limit);
    return null !== o && (n.structuredQuery.limit = o), e.startAt && (n.structuredQuery.startAt = be(e.startAt)), 
    e.endAt && (n.structuredQuery.endAt = be(e.endAt)), n;
}

function ye(t) {
    let e = de(t.parent);
    const n = t.structuredQuery, s = n.from ? n.from.length : 0;
    let i = null;
    if (s > 0) {
        V(1 === s);
        const t = n.from[0];
        t.allDescendants ? i = t.collectionId : e = e.child(t.collectionId);
    }
    let r = [];
    n.where && (r = function t(e) {
        return e ? void 0 !== e.unaryFilter ? [ Fe(e) ] : void 0 !== e.fieldFilter ? [ Ce(e) ] : void 0 !== e.compositeFilter ? e.compositeFilter.filters.map(e => t(e)).reduce((t, e) => t.concat(e)) : P() : [];
    }(n.where));
    let o = [];
    n.orderBy && (o = n.orderBy.map(t => {
        return new On(De((e = t).field), 
        // visible for testing
        function(t) {
            switch (t) {
              case "ASCENDING":
                return "asc" /* ASCENDING */;

              case "DESCENDING":
                return "desc" /* DESCENDING */;

              default:
                return;
            }
        }(e.direction));
        var e;
    }));
    let h = null;
    n.limit && (h = function(t) {
        let e;
        return e = "object" == typeof t ? t.value : t, j(e) ? null : e;
    }(n.limit));
    let a = null;
    n.startAt && (a = ve(n.startAt));
    let u = null;
    return n.endAt && (u = ve(n.endAt)), new Rn(e, i, o, r, h, "F" /* First */ , a, u).We();
}

function pe(t, e) {
    const n = function(t, e) {
        switch (e) {
          case 0 /* Listen */ :
            return null;

          case 1 /* ExistenceFilterMismatch */ :
            return "existence-filter-mismatch";

          case 2 /* LimboResolution */ :
            return "limbo-document";

          default:
            return P();
        }
    }(0, e.J);
    return null == n ? null : {
        "goog-listen-tags": n
    };
}

function be(t) {
    return {
        before: t.before,
        values: t.position
    };
}

function ve(t) {
    const e = !!t.before, n = t.values || [];
    return new $n(n, e);
}

// visible for testing
function Se(t) {
    return {
        fieldPath: t.N()
    };
}

function De(t) {
    return Q.B(t.fieldPath);
}

function Ce(t) {
    return bn.create(De(t.fieldFilter.field), function(t) {
        switch (t) {
          case "EQUAL":
            return "==" /* EQUAL */;

          case "GREATER_THAN":
            return ">" /* GREATER_THAN */;

          case "GREATER_THAN_OR_EQUAL":
            return ">=" /* GREATER_THAN_OR_EQUAL */;

          case "LESS_THAN":
            return "<" /* LESS_THAN */;

          case "LESS_THAN_OR_EQUAL":
            return "<=" /* LESS_THAN_OR_EQUAL */;

          case "ARRAY_CONTAINS":
            return "array-contains" /* ARRAY_CONTAINS */;

          case "IN":
            return "in" /* IN */;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any" /* ARRAY_CONTAINS_ANY */;

          case "OPERATOR_UNSPECIFIED":
          default:
            return P();
        }
    }(t.fieldFilter.op), t.fieldFilter.value);
}

function Fe(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        const e = De(t.unaryFilter.field);
        return bn.create(e, "==" /* EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NULL":
        const n = De(t.unaryFilter.field);
        return bn.create(n, "==" /* EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "OPERATOR_UNSPECIFIED":
      default:
        return P();
    }
}

function Ne(t) {
    const e = [];
    return t.fields.forEach(t => e.push(t.N())), {
        fieldPaths: e
    };
}

function $e(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

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
/** Represents a transform within a TransformMutation. */ class ke {
    constructor() {
        // Make sure that the structural type of `TransformOperation` is unique.
        // See https://github.com/microsoft/TypeScript/issues/5451
        this.je = void 0;
    }
}

/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */ function xe(t, e, n) {
    return t instanceof Le ? function(t, e) {
        const n = {
            fields: {
                __type__: {
                    stringValue: "server_timestamp"
                },
                __local_write_time__: {
                    timestampValue: {
                        seconds: t.seconds,
                        nanos: t.nanoseconds
                    }
                }
            }
        };
        return e && (n.fields.__previous_value__ = e), {
            mapValue: n
        };
    }
    /**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */ (n, e) : t instanceof Be ? qe(t, e) : t instanceof Ue ? Qe(t, e) : function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        const n = Oe(t, e), s = je(n) + je(t.Be);
        return zt(n) && zt(t.Be) ? ne(s) : se(t.serializer, s);
    }(t, e);
}

/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */ function Me(t, e, n) {
    // The server just sends null as the transform result for array operations,
    // so we have to calculate a result the same as we do for local
    // applications.
    return t instanceof Be ? qe(t, e) : t instanceof Ue ? Qe(t, e) : n;
}

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
 */ function Oe(t, e) {
    return t instanceof We ? zt(n = e) || function(t) {
        return !!t && "doubleValue" in t;
    }
    /** Returns true if `value` is either an IntegerValue or a DoubleValue. */ (n) ? e : {
        integerValue: 0
    } : null;
    var n;
}

/** Transforms a value into a server-generated timestamp. */
class Le extends ke {}

/** Transforms an array value via a union operation. */ class Be extends ke {
    constructor(t) {
        super(), this.elements = t;
    }
}

function qe(t, e) {
    const n = Ke(e);
    for (const e of t.elements) n.some(t => Ot(t, e)) || n.push(e);
    return {
        arrayValue: {
            values: n
        }
    };
}

/** Transforms an array value via a remove operation. */ class Ue extends ke {
    constructor(t) {
        super(), this.elements = t;
    }
}

function Qe(t, e) {
    let n = Ke(e);
    for (const e of t.elements) n = n.filter(t => !Ot(t, e));
    return {
        arrayValue: {
            values: n
        }
    };
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ class We extends ke {
    constructor(t, e) {
        super(), this.serializer = t, this.Be = e;
    }
}

function je(t) {
    return jt(t.integerValue || t.doubleValue);
}

function Ke(t) {
    return Ht(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

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
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ class Ge {
    constructor(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(Q.P);
    }
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */    Ke(t) {
        for (const e of this.fields) if (e.D(t)) return !0;
        return !1;
    }
    isEqual(t) {
        return v(this.fields, t.fields, (t, e) => t.isEqual(e));
    }
}

/** A field path and the TransformOperation to perform upon it. */ class ze {
    constructor(t, e) {
        this.field = t, this.transform = e;
    }
}

function He(t, e) {
    return t.field.isEqual(e.field) && function(t, e) {
        return t instanceof Be && e instanceof Be || t instanceof Ue && e instanceof Ue ? v(t.elements, e.elements, Ot) : t instanceof We && e instanceof We ? Ot(t.Be, e.Be) : t instanceof Le && e instanceof Le;
    }(t.transform, e.transform);
}

/** The result of successfully applying a mutation to the backend. */ class Ye {
    constructor(
    /**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
    t, 
    /**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
    e) {
        this.version = t, this.transformResults = e;
    }
}

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */ class Je {
    constructor(t, e) {
        this.updateTime = t, this.exists = e;
    }
    /** Creates a new empty Precondition. */    static Qe() {
        return new Je;
    }
    /** Creates a new Precondition with an exists flag. */    static exists(t) {
        return new Je(void 0, t);
    }
    /** Creates a new Precondition based on a version a document exists at. */    static updateTime(t) {
        return new Je(t);
    }
    /** Returns whether this Precondition is empty. */    get qe() {
        return void 0 === this.updateTime && void 0 === this.exists;
    }
    isEqual(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }
}

/**
 * Returns true if the preconditions is valid for the given document
 * (or null if no document is available).
 */ function Xe(t, e) {
    return void 0 !== t.updateTime ? e instanceof In && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof In;
}

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set, Patch, and Transform mutations. For Delete
 * mutations, we reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * TransformMutation  Document(v3)          Document(v3)
 * TransformMutation  NoDocument(v3)        NoDocument(v3)
 * TransformMutation  null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set, Patch, and Transform mutations. As deletes
 * have no explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Note that TransformMutations don't create Documents (in the case of being
 * applied to a NoDocument), even though they would on the backend. This is
 * because the client always combines the TransformMutation with a SetMutation
 * or PatchMutation and we only want to apply the transform if the prior
 * mutation resulted in a Document (always true for a SetMutation, but not
 * necessarily for a PatchMutation).
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */ class Ze {}

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing a new remote document. If the input document doesn't match the
 * expected state (e.g. it is null or outdated), an `UnknownDocument` can be
 * returned.
 *
 * @param mutation The mutation to apply.
 * @param maybeDoc The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param mutationResult The result of applying the mutation from the backend.
 * @return The mutated document. The returned document may be an
 *     UnknownDocument if the mutation could not be applied to the locally
 *     cached base document.
 */ function tn(t, e, n) {
    return t instanceof on ? function(t, e, n) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        return new In(t.key, n.version, t.value, {
            hasCommittedMutations: !0
        });
    }(t, 0, n) : t instanceof hn ? function(t, e, n) {
        if (!Xe(t.Ue, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new An(t.key, n.version);
        const s = an(t, e);
        return new In(t.key, n.version, s, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : t instanceof un ? function(t, e, n) {
        if (V(null != n.transformResults), !Xe(t.Ue, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new An(t.key, n.version);
        const s = cn(t, e), i = 
        /**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a
 * TransformMutation has been acknowledged by the server.
 *
 * @param fieldTransforms The field transforms to apply the result to.
 * @param baseDoc The document prior to applying this mutation batch.
 * @param serverTransformResults The transform results received by the server.
 * @return The transform results list.
 */
        function(t, e, n) {
            const s = [];
            V(t.length === n.length);
            for (let i = 0; i < n.length; i++) {
                const r = t[i], o = r.transform;
                let h = null;
                e instanceof In && (h = e.field(r.field)), s.push(Me(o, h, n[i]));
            }
            return s;
        }
        /**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * TransformMutation locally.
 *
 * @param fieldTransforms The field transforms to apply the result to.
 * @param localWriteTime The local time of the transform mutation (used to
 *     generate ServerTimestampValues).
 * @param maybeDoc The current state of the document after applying all
 *     previous mutations.
 * @param baseDoc The document prior to applying this mutation batch.
 * @return The transform results list.
 */ (t.fieldTransforms, e, n.transformResults), r = n.version, o = ln(t, s.data(), i);
        return new In(t.key, r, o, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : function(t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return new mn(t.key, n.version, {
            hasCommittedMutations: !0
        });
    }(t, 0, n);
}

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing the new local view of a document. Both the input and returned
 * documents can be null.
 *
 * @param mutation The mutation to apply.
 * @param maybeDoc The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param baseDoc The state of the document prior to this mutation batch. The
 *     input document can be null if the client has no knowledge of the
 *     pre-mutation state of the document.
 * @param localWriteTime A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @return The mutated document. The returned document may be null, but only
 *     if maybeDoc was null and the mutation would not create a new document.
 */ function en(t, e, n, s) {
    return t instanceof on ? function(t, e) {
        if (!Xe(t.Ue, e)) return e;
        const n = rn(e);
        return new In(t.key, n, t.value, {
            Ge: !0
        });
    }
    /**
 * A mutation that modifies fields of the document at the given key with the
 * given values. The values are applied through a field mask:
 *
 *  * When a field is in both the mask and the values, the corresponding field
 *    is updated.
 *  * When a field is in neither the mask nor the values, the corresponding
 *    field is unmodified.
 *  * When a field is in the mask but not in the values, the corresponding field
 *    is deleted.
 *  * When a field is not in the mask but is in the values, the values map is
 *    ignored.
 */ (t, e) : t instanceof hn ? function(t, e) {
        if (!Xe(t.Ue, e)) return e;
        const n = rn(e), s = an(t, e);
        return new In(t.key, n, s, {
            Ge: !0
        });
    }
    /**
 * Patches the data of document if available or creates a new document. Note
 * that this does not check whether or not the precondition of this patch
 * holds.
 */ (t, e) : t instanceof un ? function(t, e, n, s) {
        if (!Xe(t.Ue, e)) return e;
        const i = cn(t, e), r = function(t, e, n, s) {
            const i = [];
            for (const r of t) {
                const t = r.transform;
                let o = null;
                n instanceof In && (o = n.field(r.field)), null === o && s instanceof In && (
                // If the current document does not contain a value for the mutated
                // field, use the value that existed before applying this mutation
                // batch. This solves an edge case where a PatchMutation clears the
                // values in a nested map before the TransformMutation is applied.
                o = s.field(r.field)), i.push(xe(t, o, e));
            }
            return i;
        }(t.fieldTransforms, n, e, s), o = ln(t, i.data(), r);
        return new In(t.key, i.version, o, {
            Ge: !0
        });
    }(t, e, s, n) : function(t, e) {
        if (!Xe(t.Ue, e)) return e;
        return new mn(t.key, L.min());
    }
    /**
 * A mutation that verifies the existence of the document at the given key with
 * the provided precondition.
 *
 * The `verify` operation is only used in Transactions, and this class serves
 * primarily to facilitate serialization into protos.
 */ (t, e);
}

/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @return a base value to store along with the mutation, or null for
 * idempotent mutations.
 */ function nn(t, e) {
    return t instanceof un ? function(t, e) {
        let n = null;
        for (const s of t.fieldTransforms) {
            const t = e instanceof In ? e.field(s.field) : void 0, i = Oe(s.transform, t || null);
            null != i && (n = null == n ? (new wn).set(s.field, i) : n.set(s.field, i));
        }
        return n ? n.ze() : null;
    }
    /**
 * Asserts that the given MaybeDocument is actually a Document and verifies
 * that it matches the key for this mutation. Since we only support
 * transformations with precondition exists this method is guaranteed to be
 * safe.
 */ (t, e) : null;
}

function sn(t, e) {
    return t.type === e.type && (!!t.key.isEqual(e.key) && (!!t.Ue.isEqual(e.Ue) && (0 /* Set */ === t.type ? t.value.isEqual(e.value) : 1 /* Patch */ === t.type ? t.data.isEqual(e.data) && t.Le.isEqual(e.Le) : 2 /* Transform */ !== t.type || v(t.fieldTransforms, t.fieldTransforms, (t, e) => He(t, e)))));
}

/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */ function rn(t) {
    return t instanceof In ? t.version : L.min();
}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ class on extends Ze {
    constructor(t, e, n) {
        super(), this.key = t, this.value = e, this.Ue = n, this.type = 0 /* Set */;
    }
}

class hn extends Ze {
    constructor(t, e, n, s) {
        super(), this.key = t, this.data = e, this.Le = n, this.Ue = s, this.type = 1 /* Patch */;
    }
}

function an(t, e) {
    let n;
    return n = e instanceof In ? e.data() : dn.empty(), function(t, e) {
        const n = new wn(e);
        return t.Le.fields.forEach(e => {
            if (!e._()) {
                const s = t.data.field(e);
                null !== s ? n.set(e, s) : n.delete(e);
            }
        }), n.ze();
    }
    /**
 * A mutation that modifies specific fields of the document with transform
 * operations. Currently the only supported transform is a server timestamp, but
 * IP Address, increment(n), etc. could be supported in the future.
 *
 * It is somewhat similar to a PatchMutation in that it patches specific fields
 * and has no effect when applied to a null or NoDocument (see comment on
 * Mutation for rationale).
 */ (t, n);
}

class un extends Ze {
    constructor(t, e) {
        super(), this.key = t, this.fieldTransforms = e, this.type = 2 /* Transform */ , 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        this.Ue = Je.exists(!0);
    }
}

function cn(t, e) {
    return e;
}

function ln(t, e, n) {
    const s = new wn(e);
    for (let e = 0; e < t.fieldTransforms.length; e++) {
        const i = t.fieldTransforms[e];
        s.set(i.field, n[e]);
    }
    return s.ze();
}

/** A mutation that deletes the document at the given key. */ class _n extends Ze {
    constructor(t, e) {
        super(), this.key = t, this.Ue = e, this.type = 3 /* Delete */;
    }
}

class fn extends Ze {
    constructor(t, e) {
        super(), this.key = t, this.Ue = e, this.type = 4 /* Verify */;
    }
}

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
/**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ class dn {
    constructor(t) {
        this.proto = t;
    }
    static empty() {
        return new dn({
            mapValue: {}
        });
    }
    /**
     * Returns the value at the given path or null.
     *
     * @param path the path to search
     * @return The value at the path or if there it doesn't exist.
     */    field(t) {
        if (t._()) return this.proto;
        {
            let e = this.proto;
            for (let n = 0; n < t.length - 1; ++n) {
                if (!e.mapValue.fields) return null;
                if (e = e.mapValue.fields[t.get(n)], !Xt(e)) return null;
            }
            return e = (e.mapValue.fields || {})[t.S()], e || null;
        }
    }
    isEqual(t) {
        return Ot(this.proto, t.proto);
    }
}

/**
 * An ObjectValueBuilder provides APIs to set and delete fields from an
 * ObjectValue.
 */ class wn {
    /**
     * @param baseObject The object to mutate.
     */
    constructor(t = dn.empty()) {
        this.He = t, 
        /** A map that contains the accumulated changes in this builder. */
        this.Ye = new Map;
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path The field path to set.
     * @param value The value to set.
     * @return The current Builder instance.
     */    set(t, e) {
        return this.Je(t, e), this;
    }
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path The field path to remove.
     * @return The current Builder instance.
     */    delete(t) {
        return this.Je(t, null), this;
    }
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */    Je(t, e) {
        let n = this.Ye;
        for (let e = 0; e < t.length - 1; ++e) {
            const s = t.get(e);
            let i = n.get(s);
            i instanceof Map ? 
            // Re-use a previously created map
            n = i : i && 10 /* ObjectValue */ === Mt(i) ? (
            // Convert the existing Protobuf MapValue into a map
            i = new Map(Object.entries(i.mapValue.fields || {})), n.set(s, i), n = i) : (
            // Create an empty map to represent the current nesting level
            i = new Map, n.set(s, i), n = i);
        }
        n.set(t.S(), e);
    }
    /** Returns an ObjectValue with all mutations applied. */    ze() {
        const t = this.Xe(Q.k(), this.Ye);
        return null != t ? new dn(t) : this.He;
    }
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath The path at the current nesting level. Can be set to
     * FieldValue.emptyPath() to represent the root.
     * @param currentOverlays The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @return The merged data at `currentPath` or null if no modifications
     * were applied.
     */    Xe(t, e) {
        let n = !1;
        const s = this.He.field(t), i = Xt(s) ? // If there is already data at the current path, base our
        Object.assign({}, s.mapValue.fields) : {};
        return e.forEach((e, s) => {
            if (e instanceof Map) {
                const r = this.Xe(t.child(s), e);
                null != r && (i[s] = r, n = !0);
            } else null !== e ? (i[s] = e, n = !0) : i.hasOwnProperty(s) && (delete i[s], n = !0);
        }), n ? {
            mapValue: {
                fields: i
            }
        } : null;
    }
}

/**
 * Returns a FieldMask built from all fields in a MapValue.
 */ function Tn(t) {
    const e = [];
    return N(t.fields || {}, (t, n) => {
        const s = new Q([ t ]);
        if (Xt(n)) {
            const t = Tn(n.mapValue).fields;
            if (0 === t.length) 
            // Preserve the empty map by adding it to the FieldMask.
            e.push(s); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (const n of t) e.push(s.child(n));
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        e.push(s);
    }), new Ge(e);
}

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
/**
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */ class En {
    constructor(t, e) {
        this.key = t, this.version = e;
    }
}

/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */ class In extends En {
    constructor(t, e, n, s) {
        super(t, e), this.Ze = n, this.Ge = !!s.Ge, this.hasCommittedMutations = !!s.hasCommittedMutations;
    }
    field(t) {
        return this.Ze.field(t);
    }
    data() {
        return this.Ze;
    }
    tn() {
        return this.Ze.proto;
    }
    isEqual(t) {
        return t instanceof In && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Ge === t.Ge && this.hasCommittedMutations === t.hasCommittedMutations && this.Ze.isEqual(t.Ze);
    }
    toString() {
        return `Document(${this.key}, ${this.version}, ${this.Ze.toString()}, ` + `{hasLocalMutations: ${this.Ge}}), ` + `{hasCommittedMutations: ${this.hasCommittedMutations}})`;
    }
    get hasPendingWrites() {
        return this.Ge || this.hasCommittedMutations;
    }
}

/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 */
/**
 * A class representing a deleted document.
 * Version is set to 0 if we don't point to any specific time, otherwise it
 * denotes time we know it didn't exist at.
 */
class mn extends En {
    constructor(t, e, n) {
        super(t, e), this.hasCommittedMutations = !(!n || !n.hasCommittedMutations);
    }
    toString() {
        return `NoDocument(${this.key}, ${this.version})`;
    }
    get hasPendingWrites() {
        return this.hasCommittedMutations;
    }
    isEqual(t) {
        return t instanceof mn && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }
}

/**
 * A class representing an existing document whose data is unknown (e.g. a
 * document that was updated without a known base document).
 */ class An extends En {
    toString() {
        return `UnknownDocument(${this.key}, ${this.version})`;
    }
    get hasPendingWrites() {
        return !0;
    }
    isEqual(t) {
        return t instanceof An && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }
}

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
/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 */ class Rn {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    constructor(t, e = null, n = [], s = [], i = null, r = "F" /* First */ , o = null, h = null) {
        this.path = t, this.collectionGroup = e, this.en = n, this.filters = s, this.limit = i, 
        this.nn = r, this.startAt = o, this.endAt = h, this.sn = null, 
        // The corresponding `Target` of this `Query` instance.
        this.rn = null, this.startAt && this.on(this.startAt), this.endAt && this.on(this.endAt);
    }
    static hn(t) {
        return new Rn(t);
    }
    get orderBy() {
        if (null === this.sn) {
            this.sn = [];
            const t = this.an(), e = this.un();
            if (null !== t && null === e) 
            // In order to implicitly add key ordering, we must also add the
            // inequality filter field for it to be a valid query.
            // Note that the default inequality field and key ordering is ascending.
            t.O() || this.sn.push(new On(t)), this.sn.push(new On(Q.L(), "asc" /* ASCENDING */)); else {
                let t = !1;
                for (const e of this.en) this.sn.push(e), e.field.O() && (t = !0);
                if (!t) {
                    // The order of the implicit key ordering always matches the last
                    // explicit order by
                    const t = this.en.length > 0 ? this.en[this.en.length - 1].dir : "asc" /* ASCENDING */;
                    this.sn.push(new On(Q.L(), t));
                }
            }
        }
        return this.sn;
    }
    cn(t) {
        const e = this.filters.concat([ t ]);
        return new Rn(this.path, this.collectionGroup, this.en.slice(), e, this.limit, this.nn, this.startAt, this.endAt);
    }
    ln(t) {
        // TODO(dimond): validate that orderBy does not list the same key twice.
        const e = this.en.concat([ t ]);
        return new Rn(this.path, this.collectionGroup, e, this.filters.slice(), this.limit, this.nn, this.startAt, this.endAt);
    }
    _n(t) {
        return new Rn(this.path, this.collectionGroup, this.en.slice(), this.filters.slice(), t, "F" /* First */ , this.startAt, this.endAt);
    }
    fn(t) {
        return new Rn(this.path, this.collectionGroup, this.en.slice(), this.filters.slice(), t, "L" /* Last */ , this.startAt, this.endAt);
    }
    dn(t) {
        return new Rn(this.path, this.collectionGroup, this.en.slice(), this.filters.slice(), this.limit, this.nn, t, this.endAt);
    }
    wn(t) {
        return new Rn(this.path, this.collectionGroup, this.en.slice(), this.filters.slice(), this.limit, this.nn, this.startAt, t);
    }
    /**
     * Helper to convert a collection group query into a collection query at a
     * specific path. This is used when executing collection group queries, since
     * we have to split the query into a set of collection queries at multiple
     * paths.
     */    Tn(t) {
        return new Rn(t, 
        /*collectionGroup=*/ null, this.en.slice(), this.filters.slice(), this.limit, this.nn, this.startAt, this.endAt);
    }
    /**
     * Returns true if this query does not specify any query constraints that
     * could remove results.
     */    En() {
        return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.en.length || 1 === this.en.length && this.en[0].field.O());
    }
    In() {
        return !j(this.limit) && "F" /* First */ === this.nn;
    }
    mn() {
        return !j(this.limit) && "L" /* Last */ === this.nn;
    }
    un() {
        return this.en.length > 0 ? this.en[0].field : null;
    }
    an() {
        for (const t of this.filters) if (t instanceof bn && t.An()) return t.field;
        return null;
    }
    // Checks if any of the provided Operators are included in the query and
    // returns the first one that is, or null if none are.
    Rn(t) {
        for (const e of this.filters) if (e instanceof bn && t.indexOf(e.op) >= 0) return e.op;
        return null;
    }
    Pn() {
        return Z(this.We());
    }
    Vn() {
        return null !== this.collectionGroup;
    }
    /**
     * Converts this `Query` instance to it's corresponding `Target`
     * representation.
     */    We() {
        if (!this.rn) if ("F" /* First */ === this.nn) this.rn = H(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt); else {
            // Flip the orderBy directions since we want the last results
            const t = [];
            for (const e of this.orderBy) {
                const n = "desc" /* DESCENDING */ === e.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
                t.push(new On(e.field, n));
            }
            // We need to swap the cursors to match the now-flipped query ordering.
                        const e = this.endAt ? new $n(this.endAt.position, !this.endAt.before) : null, n = this.startAt ? new $n(this.startAt.position, !this.startAt.before) : null;
            // Now return as a LimitType.First query.
            this.rn = H(this.path, this.collectionGroup, t, this.filters, this.limit, e, n);
        }
        return this.rn;
    }
    on(t) {}
}

function Pn(t, e) {
    return X(t.We(), e.We()) && t.nn === e.nn;
}

// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function Vn(t) {
    return `${Y(t.We())}|lt:${t.nn}`;
}

function gn(t) {
    return `Query(target=${J(t.We())}; limitType=${t.nn})`;
}

/** Returns whether `doc` matches the constraints of `query`. */ function yn(t, e) {
    return function(t, e) {
        const n = e.key.path;
        return null !== t.collectionGroup ? e.key.U(t.collectionGroup) && t.path.D(n) : W.W(t.path) ? t.path.isEqual(n) : t.path.C(n);
    }
    /**
 * A document must have a value for every ordering clause in order to show up
 * in the results.
 */ (t, e) && function(t, e) {
        for (const n of t.en) 
        // order by key always matches
        if (!n.field.O() && null === e.field(n.field)) return !1;
        return !0;
    }(t, e) && function(t, e) {
        for (const n of t.filters) if (!n.matches(e)) return !1;
        return !0;
    }
    /** Makes sure a document is within the bounds, if provided. */ (t, e) && function(t, e) {
        if (t.startAt && !xn(t.startAt, t.orderBy, e)) return !1;
        if (t.endAt && xn(t.endAt, t.orderBy, e)) return !1;
        return !0;
    }
    /**
 * Returns a new comparator function that can be used to compare two documents
 * based on the Query's ordering constraint.
 */ (t, e);
}

function pn(t) {
    return (e, n) => {
        let s = !1;
        for (const i of t.orderBy) {
            const t = Ln(i, e, n);
            if (0 !== t) return t;
            s = s || i.field.O();
        }
        return 0;
    };
}

class bn extends class {} {
    constructor(t, e, n) {
        super(), this.field = t, this.op = e, this.value = n;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    static create(t, e, n) {
        if (t.O()) return "in" /* IN */ === e ? new Dn(t, n) : new Sn(t, e, n);
        if (Yt(n)) {
            if ("==" /* EQUAL */ !== e) throw new M(x.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
            return new bn(t, e, n);
        }
        if (Jt(n)) {
            if ("==" /* EQUAL */ !== e) throw new M(x.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
            return new bn(t, e, n);
        }
        return "array-contains" /* ARRAY_CONTAINS */ === e ? new Cn(t, n) : "in" /* IN */ === e ? new Fn(t, n) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e ? new Nn(t, n) : new bn(t, e, n);
    }
    matches(t) {
        const e = t.field(this.field);
        // Only compare types with matching backend order (such as double and int).
                return null !== e && Mt(this.value) === Mt(e) && this.gn(Bt(e, this.value));
    }
    gn(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return P();
        }
    }
    An() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ ].indexOf(this.op) >= 0;
    }
}

function vn(t) {
    // TODO(b/29183165): Technically, this won't be unique if two values have
    // the same description, such as the int 3 and the string "3". So we should
    // add the types in here somehow, too.
    return t.field.N() + t.op.toString() + Ut(t.value);
}

class Sn extends bn {
    constructor(t, e, n) {
        super(t, e, n), this.key = W.q(n.referenceValue);
    }
    matches(t) {
        const e = W.P(t.key, this.key);
        return this.gn(e);
    }
}

/** Filter that matches on key fields within an array. */ class Dn extends bn {
    constructor(t, e) {
        super(t, "in" /* IN */ , e), this.keys = (e.arrayValue.values || []).map(t => W.q(t.referenceValue));
    }
    matches(t) {
        return this.keys.some(e => e.isEqual(t.key));
    }
}

/** A Filter that implements the array-contains operator. */ class Cn extends bn {
    constructor(t, e) {
        super(t, "array-contains" /* ARRAY_CONTAINS */ , e);
    }
    matches(t) {
        const e = t.field(this.field);
        return Ht(e) && Lt(e.arrayValue, this.value);
    }
}

/** A Filter that implements the IN operator. */ class Fn extends bn {
    constructor(t, e) {
        super(t, "in" /* IN */ , e);
    }
    matches(t) {
        const e = t.field(this.field);
        return null !== e && Lt(this.value.arrayValue, e);
    }
}

/** A Filter that implements the array-contains-any operator. */ class Nn extends bn {
    constructor(t, e) {
        super(t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , e);
    }
    matches(t) {
        const e = t.field(this.field);
        return !(!Ht(e) || !e.arrayValue.values) && e.arrayValue.values.some(t => Lt(this.value.arrayValue, t));
    }
}

/**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */ class $n {
    constructor(t, e) {
        this.position = t, this.before = e;
    }
}

function kn(t) {
    // TODO(b/29183165): Make this collision robust.
    return `${t.before ? "b" : "a"}:${t.position.map(t => Ut(t)).join(",")}`;
}

/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */ function xn(t, e, n) {
    let s = 0;
    for (let i = 0; i < t.position.length; i++) {
        const r = e[i], o = t.position[i];
        if (r.field.O()) s = W.P(W.q(o.referenceValue), n.key); else {
            s = Bt(o, n.field(r.field));
        }
        if ("desc" /* DESCENDING */ === r.dir && (s *= -1), 0 !== s) break;
    }
    return t.before ? s <= 0 : s < 0;
}

function Mn(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length) return !1;
    for (let n = 0; n < t.position.length; n++) {
        if (!Ot(t.position[n], e.position[n])) return !1;
    }
    return !0;
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ class On {
    constructor(t, e = "asc" /* ASCENDING */) {
        this.field = t, this.dir = e;
    }
}

function Ln(t, e, n) {
    const s = t.field.O() ? W.P(e.key, n.key) : function(t, e, n) {
        const s = e.field(t), i = n.field(t);
        return null !== s && null !== i ? Bt(s, i) : P();
    }(t.field, e, n);
    switch (t.dir) {
      case "asc" /* ASCENDING */ :
        return s;

      case "desc" /* DESCENDING */ :
        return -1 * s;

      default:
        return P();
    }
}

function Bn(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
}

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
/**
 * A batch of mutations that will be sent as one unit to the backend.
 */
class qn {
    /**
     * @param batchId The unique ID of this mutation batch.
     * @param localWriteTime The original write time of this mutation.
     * @param baseMutations Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    constructor(t, e, n, s) {
        this.batchId = t, this.yn = e, this.baseMutations = n, this.mutations = s;
    }
    /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     * @param batchResult The result of applying the MutationBatch to the
     * backend.
     */    pn(t, e, n) {
        const s = n.bn;
        for (let n = 0; n < this.mutations.length; n++) {
            const i = this.mutations[n];
            if (i.key.isEqual(t)) {
                e = tn(i, e, s[n]);
            }
        }
        return e;
    }
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     */    vn(t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (const n of this.baseMutations) n.key.isEqual(t) && (e = en(n, e, e, this.yn));
        const n = e;
        // Second, apply all user-provided mutations.
                for (const s of this.mutations) s.key.isEqual(t) && (e = en(s, e, n, this.yn));
        return e;
    }
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */    Sn(t) {
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
        let e = t;
        return this.mutations.forEach(n => {
            const s = this.vn(n.key, t.get(n.key));
            s && (e = e.nt(n.key, s));
        }), e;
    }
    keys() {
        return this.mutations.reduce((t, e) => t.add(e.key), mt());
    }
    isEqual(t) {
        return this.batchId === t.batchId && v(this.mutations, t.mutations, (t, e) => sn(t, e)) && v(this.baseMutations, t.baseMutations, (t, e) => sn(t, e));
    }
}

/** The result of applying a mutation batch to the backend. */ class Un {
    constructor(t, e, n, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    s) {
        this.batch = t, this.Dn = e, this.bn = n, this.Cn = s;
    }
    /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=>version mapping (docVersions).
     */    static from(t, e, n) {
        V(t.mutations.length === n.length);
        let s = Et;
        const i = t.mutations;
        for (let t = 0; t < i.length; t++) s = s.nt(i[t].key, n[t].version);
        return new Un(t, e, n, s);
    }
}

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
/**
 * PersistencePromise<> is essentially a re-implementation of Promise<> except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise<> implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */ class Qn {
    constructor(t) {
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
        this.Fn = null, this.Nn = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.$n = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.kn = !1, t(t => {
            this.$n = !0, this.result = t, this.Fn && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            this.Fn(t);
        }, t => {
            this.$n = !0, this.error = t, this.Nn && this.Nn(t);
        });
    }
    catch(t) {
        return this.next(void 0, t);
    }
    next(t, e) {
        return this.kn && P(), this.kn = !0, this.$n ? this.error ? this.xn(e, this.error) : this.Mn(t, this.result) : new Qn((n, s) => {
            this.Fn = e => {
                this.Mn(t, e).next(n, s);
            }, this.Nn = t => {
                this.xn(e, t).next(n, s);
            };
        });
    }
    On() {
        return new Promise((t, e) => {
            this.next(t, e);
        });
    }
    Ln(t) {
        try {
            const e = t();
            return e instanceof Qn ? e : Qn.resolve(e);
        } catch (t) {
            return Qn.reject(t);
        }
    }
    Mn(t, e) {
        return t ? this.Ln(() => t(e)) : Qn.resolve(e);
    }
    xn(t, e) {
        return t ? this.Ln(() => t(e)) : Qn.reject(e);
    }
    static resolve(t) {
        return new Qn((e, n) => {
            e(t);
        });
    }
    static reject(t) {
        return new Qn((e, n) => {
            n(t);
        });
    }
    static Bn(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t) {
        return new Qn((e, n) => {
            let s = 0, i = 0, r = !1;
            t.forEach(t => {
                ++s, t.next(() => {
                    ++i, r && i === s && e();
                }, t => n(t));
            }), r = !0, i === s && e();
        });
    }
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */    static qn(t) {
        let e = Qn.resolve(!1);
        for (const n of t) e = e.next(t => t ? Qn.resolve(t) : n());
        return e;
    }
    static forEach(t, e) {
        const n = [];
        return t.forEach((t, s) => {
            n.push(e.call(this, t, s));
        }), this.Bn(n);
    }
}

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
/**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */ class Wn {
    constructor() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.Un = new k(t => t.toString(), (t, e) => t.isEqual(e)), this.Qn = !1;
    }
    set readTime(t) {
        this.Wn = t;
    }
    get readTime() {
        return this.Wn;
    }
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */    jn(t, e) {
        this.Kn(), this.readTime = e, this.Un.set(t.key, t);
    }
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */    Gn(t, e) {
        this.Kn(), e && (this.readTime = e), this.Un.set(t, null);
    }
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the entry to look up.
     * @return The cached Document or NoDocument entry, or null if we have nothing
     * cached.
     */    zn(t, e) {
        this.Kn();
        const n = this.Un.get(e);
        return void 0 !== n ? Qn.resolve(n) : this.Hn(t, e);
    }
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys The keys of the entries to look up.
     * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
     *     entry cannot be found, the corresponding key will be mapped to a null
     *     value.
     */    getEntries(t, e) {
        return this.Yn(t, e);
    }
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */    apply(t) {
        return this.Kn(), this.Qn = !0, this.Jn(t);
    }
    /** Helper to assert this.changes is not null  */    Kn() {}
}

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
 */ const jn = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";

/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */ class Kn {
    constructor() {
        this.Xn = [];
    }
    Zn(t) {
        this.Xn.push(t);
    }
    ts() {
        this.Xn.forEach(t => t());
    }
}

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
/**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ class Gn {
    constructor(t, e, n) {
        this.es = t, this.ns = e, this.ss = n;
    }
    /**
     * Get the local view of the document identified by `key`.
     *
     * @return Local view of the document or null if we don't have any cached
     * state for it.
     */    rs(t, e) {
        return this.ns.os(t, e).next(n => this.hs(t, e, n));
    }
    /** Internal version of `getDocument` that allows reusing batches. */    hs(t, e, n) {
        return this.es.zn(t, e).next(t => {
            for (const s of n) t = s.vn(e, t);
            return t;
        });
    }
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    as(t, e, n) {
        let s = dt();
        return e.forEach((t, e) => {
            for (const s of n) e = s.vn(t, e);
            s = s.nt(t, e);
        }), s;
    }
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */    us(t, e) {
        return this.es.getEntries(t, e).next(e => this.cs(t, e));
    }
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */    cs(t, e) {
        return this.ns.ls(t, e).next(n => {
            const s = this.as(t, e, n);
            let i = ft();
            return s.forEach((t, e) => {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                e || (e = new mn(t, L.min())), i = i.nt(t, e);
            }), i;
        });
    }
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction The persistence transaction.
     * @param query The query to match documents against.
     * @param sinceReadTime If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */    _s(t, e, n) {
        return e.Pn() ? this.fs(t, e.path) : e.Vn() ? this.ds(t, e, n) : this.ws(t, e, n);
    }
    fs(t, e) {
        // Just do a simple document lookup.
        return this.rs(t, new W(e)).next(t => {
            let e = Tt();
            return t instanceof In && (e = e.nt(t.key, t)), e;
        });
    }
    ds(t, e, n) {
        const s = e.collectionGroup;
        let i = Tt();
        return this.ss.Ts(t, s).next(r => Qn.forEach(r, r => {
            const o = e.Tn(r.child(s));
            return this.ws(t, o, n).next(t => {
                t.forEach((t, e) => {
                    i = i.nt(t, e);
                });
            });
        }).next(() => i));
    }
    ws(t, e, n) {
        // Query the remote documents and overlay mutations.
        let s, i;
        return this.es._s(t, e, n).next(n => (s = n, this.ns.Es(t, e))).next(e => (i = e, 
        this.Is(t, i, s).next(t => {
            s = t;
            for (const t of i) for (const e of t.mutations) {
                const n = e.key, i = s.get(n), r = en(e, i, i, t.yn);
                s = r instanceof In ? s.nt(n, r) : s.remove(n);
            }
        }))).next(() => (
        // Finally, filter out any documents that don't actually match
        // the query.
        s.forEach((t, n) => {
            yn(e, n) || (s = s.remove(t));
        }), s));
    }
    Is(t, e, n) {
        let s = mt();
        for (const t of e) for (const e of t.mutations) e instanceof hn && null === n.get(e.key) && (s = s.add(e.key));
        let i = n;
        return this.es.getEntries(t, s).next(t => (t.forEach((t, e) => {
            null !== e && e instanceof In && (i = i.nt(t, e));
        }), i));
    }
}

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
/**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */ class zn {
    constructor(t, e, n, s) {
        this.targetId = t, this.fromCache = e, this.ms = n, this.As = s;
    }
    static Rs(t, e) {
        let n = mt(), s = mt();
        for (const t of e.docChanges) switch (t.type) {
          case 0 /* Added */ :
            n = n.add(t.doc.key);
            break;

          case 1 /* Removed */ :
            s = s.add(t.doc.key);
 // do nothing
                }
        return new zn(t, e.fromCache, n, s);
    }
}

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
/**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */ class Hn {
    constructor(t, e) {
        this.previousValue = t, e && (e.Ps = t => this.Vs(t), this.gs = t => e.ys(t));
    }
    Vs(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }
    next() {
        const t = ++this.previousValue;
        return this.gs && this.gs(t), t;
    }
}

Hn.ps = -1;

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
class Yn {
    constructor() {
        this.promise = new Promise((t, e) => {
            this.resolve = t, this.reject = e;
        });
    }
}

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
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
class Jn {
    constructor(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n = 1e3
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , s = 1.5
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i = 6e4) {
        this.bs = t, this.vs = e, this.Ss = n, this.Ds = s, this.Cs = i, this.Fs = 0, this.Ns = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.$s = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    reset() {
        this.Fs = 0;
    }
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */    ks() {
        this.Fs = this.Cs;
    }
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */    xs(t) {
        // Cancel any pending backoff operation.
        this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        const e = Math.floor(this.Fs + this.Ms()), n = Math.max(0, Date.now() - this.$s), s = Math.max(0, e - n);
        // Guard against lastAttemptTime being in the future due to a clock change.
                s > 0 && m("ExponentialBackoff", `Backing off for ${s} ms ` + `(base delay: ${this.Fs} ms, ` + `delay with jitter: ${e} ms, ` + `last attempt: ${n} ms ago)`), 
        this.Ns = this.bs.Os(this.vs, s, () => (this.$s = Date.now(), t())), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.Fs *= this.Ds, this.Fs < this.Ss && (this.Fs = this.Ss), this.Fs > this.Cs && (this.Fs = this.Cs);
    }
    Ls() {
        null !== this.Ns && (this.Ns.Bs(), this.Ns = null);
    }
    cancel() {
        null !== this.Ns && (this.Ns.cancel(), this.Ns = null);
    }
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */    Ms() {
        return (Math.random() - .5) * this.Fs;
    }
}

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
/**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */
function Xn(t) {
    let e = "";
    for (let n = 0; n < t.length; n++) e.length > 0 && (e = ts(e)), e = Zn(t.get(n), e);
    return ts(e);
}

/** Encodes a single segment of a resource path into the given result */ function Zn(t, e) {
    let n = e;
    const s = t.length;
    for (let e = 0; e < s; e++) {
        const s = t.charAt(e);
        switch (s) {
          case "\0":
            n += "";
            break;

          case "":
            n += "";
            break;

          default:
            n += s;
        }
    }
    return n;
}

/** Encodes a path separator into the given result */ function ts(t) {
    return t + "";
}

/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */ function es(t) {
    // Event the empty path must encode as a path of at least length 2. A path
    // with exactly 2 must be the empty path.
    const e = t.length;
    if (V(e >= 2), 2 === e) return V("" === t.charAt(0) && "" === t.charAt(1)), q.k();
    // Escape characters cannot exist past the second-to-last position in the
    // source value.
        const n = e - 2, s = [];
    let i = "";
    for (let r = 0; r < e; ) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        const e = t.indexOf("", r);
        switch ((e < 0 || e > n) && P(), t.charAt(e + 1)) {
          case "":
            const n = t.substring(r, e);
            let o;
            0 === i.length ? 
            // Avoid copying for the common case of a segment that excludes \0
            // and \001
            o = n : (i += n, o = i, i = ""), s.push(o);
            break;

          case "":
            i += t.substring(r, e), i += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            i += t.substring(r, e + 1);
            break;

          default:
            P();
        }
        r = e + 2;
    }
    return new q(s);
}

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
/**
 * An in-memory implementation of IndexManager.
 */ class ns {
    constructor() {
        this.qs = new ss;
    }
    Us(t, e) {
        return this.qs.add(e), Qn.resolve();
    }
    Ts(t, e) {
        return Qn.resolve(this.qs.getEntries(e));
    }
}

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */ class ss {
    constructor() {
        this.index = {};
    }
    // Returns false if the entry already existed.
    add(t) {
        const e = t.S(), n = t.p(), s = this.index[e] || new ct(q.P), i = !s.has(n);
        return this.index[e] = s.add(n), i;
    }
    has(t) {
        const e = t.S(), n = t.p(), s = this.index[e];
        return s && s.has(n);
    }
    getEntries(t) {
        return (this.index[t] || new ct(q.P)).F();
    }
}

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
/**
 * A persisted implementation of IndexManager.
 */ class is {
    constructor() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.Qs = new ss;
    }
    /**
     * Adds a new entry to the collection parent index.
     *
     * Repeated calls for the same collectionPath should be avoided within a
     * transaction as IndexedDbIndexManager only caches writes once a transaction
     * has been committed.
     */    Us(t, e) {
        if (!this.Qs.has(e)) {
            const n = e.S(), s = e.p();
            t.Zn(() => {
                // Add the collection to the in memory cache only if the transaction was
                // successfully committed.
                this.Qs.add(e);
            });
            const i = {
                collectionId: n,
                parent: Xn(s)
            };
            return rs(t).put(i);
        }
        return Qn.resolve();
    }
    Ts(t, e) {
        const n = [], s = IDBKeyRange.bound([ e, "" ], [ S(e), "" ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return rs(t).Ws(s).next(t => {
            for (const s of t) {
                // This collectionId guard shouldn't be necessary (and isn't as long
                // as we're running in a real browser), but there's a bug in
                // indexeddbshim that breaks our range in our tests running in node:
                // https://github.com/axemclion/IndexedDBShim/issues/334
                if (s.collectionId !== e) break;
                n.push(es(s.parent));
            }
            return n;
        });
    }
}

/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */ function rs(t) {
    return vs.js(t, ti.store);
}

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
/** Serializer for values stored in the LocalStore. */ class os {
    constructor(t) {
        this.Ks = t;
    }
}

/** Decodes a remote document from storage locally to a Document. */ function hs(t, e) {
    if (e.document) return function(t, e, n) {
        const s = _e(t, e.name), i = ae(e.updateTime), r = new dn({
            mapValue: {
                fields: e.fields
            }
        });
        return new In(s, i, r, {
            hasCommittedMutations: !!n
        });
    }(t.Ks, e.document, !!e.hasCommittedMutations);
    if (e.noDocument) {
        const t = W.j(e.noDocument.path), n = _s(e.noDocument.readTime);
        return new mn(t, n, {
            hasCommittedMutations: !!e.hasCommittedMutations
        });
    }
    if (e.unknownDocument) {
        const t = W.j(e.unknownDocument.path), n = _s(e.unknownDocument.version);
        return new An(t, n);
    }
    return P();
}

/** Encodes a document for storage locally. */ function as(t, e, n) {
    const s = us(n), i = e.key.path.p().F();
    if (e instanceof In) {
        const n = function(t, e) {
            return {
                name: le(t, e.key),
                fields: e.tn().mapValue.fields,
                updateTime: re(t, e.version.A())
            };
        }(t.Ks, e), r = e.hasCommittedMutations;
        return new Hs(
        /* unknownDocument= */ null, 
        /* noDocument= */ null, n, r, s, i);
    }
    if (e instanceof mn) {
        const t = e.key.path.F(), n = ls(e.version), r = e.hasCommittedMutations;
        return new Hs(
        /* unknownDocument= */ null, new Gs(t, n), 
        /* document= */ null, r, s, i);
    }
    if (e instanceof An) {
        const t = e.key.path.F(), n = ls(e.version);
        return new Hs(new zs(t, n), 
        /* noDocument= */ null, 
        /* document= */ null, 
        /* hasCommittedMutations= */ !0, s, i);
    }
    return P();
}

function us(t) {
    const e = t.A();
    return [ e.seconds, e.nanoseconds ];
}

function cs(t) {
    const e = new O(t[0], t[1]);
    return L.I(e);
}

function ls(t) {
    const e = t.A();
    return new Us(e.seconds, e.nanoseconds);
}

function _s(t) {
    const e = new O(t.seconds, t.nanoseconds);
    return L.I(e);
}

/** Encodes a batch of mutations into a DbMutationBatch for local storage. */
/** Decodes a DbMutationBatch into a MutationBatch */
function fs(t, e) {
    const n = (e.baseMutations || []).map(e => Re(t.Ks, e)), s = e.mutations.map(e => Re(t.Ks, e)), i = O.fromMillis(e.localWriteTimeMs);
    return new qn(e.batchId, i, n, s);
}

/** Decodes a DbTarget into TargetData */ function ds(t) {
    const e = _s(t.readTime), n = void 0 !== t.lastLimboFreeSnapshotVersion ? _s(t.lastLimboFreeSnapshotVersion) : L.min();
    let s;
    return s = void 0 !== t.query.documents ? function(t) {
        V(1 === t.documents.length);
        const e = t.documents[0];
        return Rn.hn(de(e)).We();
    }(t.query) : ye(t.query), new et(s, t.targetId, 0 /* Listen */ , t.lastListenSequenceNumber, e, n, tt.fromBase64String(t.resumeToken));
}

/** Encodes TargetData into a DbTarget for storage locally. */ function ws(t, e) {
    const n = ls(e.X), s = ls(e.lastLimboFreeSnapshotVersion);
    let i;
    i = Z(e.target) ? Ve(t.Ks, e.target) : ge(t.Ks, e.target);
    // We can't store the resumeToken as a ByteString in IndexedDb, so we
    // convert it to a base64 string for storage.
        const r = e.resumeToken.toBase64();
    // lastListenSequenceNumber is always 0 until we do real GC.
        return new Js(e.targetId, Y(e.target), n, r, e.sequenceNumber, s, i);
}

/**
 * A helper function for figuring out what kind of query has been stored.
 */
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
class Ts {
    /**
     * @param {LocalSerializer} serializer The document serializer.
     * @param {IndexManager} indexManager The query indexes that need to be maintained.
     */
    constructor(t, e) {
        this.serializer = t, this.ss = e;
    }
    /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */    jn(t, e, n) {
        return Is(t).put(ms(e), n);
    }
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */    Gn(t, e) {
        const n = Is(t), s = ms(e);
        return n.delete(s);
    }
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */    updateMetadata(t, e) {
        return this.getMetadata(t).next(n => (n.byteSize += e, this.Gs(t, n)));
    }
    zn(t, e) {
        return Is(t).get(ms(e)).next(t => this.zs(t));
    }
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey The key of the entry to look up.
     * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
     */    Hs(t, e) {
        return Is(t).get(ms(e)).next(t => {
            const e = this.zs(t);
            return e ? {
                Ys: e,
                size: As(t)
            } : null;
        });
    }
    getEntries(t, e) {
        let n = dt();
        return this.Js(t, e, (t, e) => {
            const s = this.zs(e);
            n = n.nt(t, s);
        }).next(() => n);
    }
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys The set of keys entries to look up.
     * @return A map of MaybeDocuments indexed by key (if a document cannot be
     *     found, the key will be mapped to null) and a map of sizes indexed by
     *     key (zero if the key cannot be found).
     */    Xs(t, e) {
        let n = dt(), s = new ht(W.P);
        return this.Js(t, e, (t, e) => {
            const i = this.zs(e);
            i ? (n = n.nt(t, i), s = s.nt(t, As(e))) : (n = n.nt(t, null), s = s.nt(t, 0));
        }).next(() => ({
            Zs: n,
            ti: s
        }));
    }
    Js(t, e, n) {
        if (e._()) return Qn.resolve();
        const s = IDBKeyRange.bound(e.first().path.F(), e.last().path.F()), i = e.at();
        let r = i.dt();
        return Is(t).ei({
            range: s
        }, (t, e, s) => {
            const o = W.j(t);
            // Go through keys not found in cache.
                        for (;r && W.P(r, o) < 0; ) n(r, null), r = i.dt();
            r && r.isEqual(o) && (
            // Key found in cache.
            n(r, e), r = i.wt() ? i.dt() : null), 
            // Skip to the next key (if there is one).
            r ? s.ni(r.path.F()) : s.done();
        }).next(() => {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (;r; ) n(r, null), r = i.wt() ? i.dt() : null;
        });
    }
    _s(t, e, n) {
        let s = Tt();
        const i = e.path.length + 1, r = {};
        if (n.isEqual(L.min())) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            const t = e.path.F();
            r.range = IDBKeyRange.lowerBound(t);
        } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            const t = e.path.F(), s = us(n);
            r.range = IDBKeyRange.lowerBound([ t, s ], 
            /* open= */ !0), r.index = Hs.collectionReadTimeIndex;
        }
        return Is(t).ei(r, (t, n, r) => {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length !== i) return;
            const o = hs(this.serializer, n);
            e.path.D(o.key.path) ? o instanceof In && yn(e, o) && (s = s.nt(o.key, o)) : r.done();
        }).next(() => s);
    }
    /**
     * Returns the set of documents that have changed since the specified read
     * time.
     */
    // PORTING NOTE: This is only used for multi-tab synchronization.
    si(t, e) {
        let n = ft(), s = us(e);
        const i = Is(t), r = IDBKeyRange.lowerBound(s, !0);
        return i.ei({
            index: Hs.readTimeIndex,
            range: r
        }, (t, e) => {
            // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
            // the documents directly since we want to keep sentinel deletes.
            const i = hs(this.serializer, e);
            n = n.nt(i.key, i), s = e.readTime;
        }).next(() => ({
            ii: n,
            readTime: cs(s)
        }));
    }
    /**
     * Returns the read time of the most recently read document in the cache, or
     * SnapshotVersion.min() if not available.
     */
    // PORTING NOTE: This is only used for multi-tab synchronization.
    ri(t) {
        const e = Is(t);
        // If there are no existing entries, we return SnapshotVersion.min().
                let n = L.min();
        return e.ei({
            index: Hs.readTimeIndex,
            reverse: !0
        }, (t, e, s) => {
            e.readTime && (n = cs(e.readTime)), s.done();
        }).next(() => n);
    }
    oi(t) {
        return new Ts.hi(this, !!t && t.ai);
    }
    ui(t) {
        return this.getMetadata(t).next(t => t.byteSize);
    }
    getMetadata(t) {
        return Es(t).get(Ys.key).next(t => (V(!!t), t));
    }
    Gs(t, e) {
        return Es(t).put(Ys.key, e);
    }
    /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */    zs(t) {
        if (t) {
            const e = hs(this.serializer, t);
            return e instanceof mn && e.version.isEqual(L.min()) ? null : e;
        }
        return null;
    }
}

/**
 * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
 *
 * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
 * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
 * when we apply the changes.
 */ function Es(t) {
    return vs.js(t, Ys.store);
}

/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */ function Is(t) {
    return vs.js(t, Hs.store);
}

function ms(t) {
    return t.path.F();
}

/**
 * Retrusn an approximate size for the given document.
 */ function As(t) {
    let e;
    if (t.document) e = t.document; else if (t.unknownDocument) e = t.unknownDocument; else {
        if (!t.noDocument) throw P();
        e = t.noDocument;
    }
    return JSON.stringify(e).length;
}

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
/** Offset to ensure non-overlapping target ids. */ Ts.hi = class extends Wn {
    /**
     * @param documentCache The IndexedDbRemoteDocumentCache to apply the changes to.
     * @param trackRemovals Whether to create sentinel deletes that can be tracked by
     * `getNewDocumentChanges()`.
     */
    constructor(t, e) {
        super(), this.ci = t, this.ai = e, 
        // A map of document sizes prior to applying the changes in this buffer.
        this.li = new k(t => t.toString(), (t, e) => t.isEqual(e));
    }
    Jn(t) {
        const e = [];
        let n = 0, s = new ct((t, e) => b(t.N(), e.N()));
        return this.Un.forEach((i, r) => {
            const o = this.li.get(i);
            if (r) {
                const h = as(this.ci.serializer, r, this.readTime);
                s = s.add(i.path.p());
                const a = As(h);
                n += a - o, e.push(this.ci.jn(t, i, h));
            } else if (n -= o, this.ai) {
                // In order to track removals, we store a "sentinel delete" in the
                // RemoteDocumentCache. This entry is represented by a NoDocument
                // with a version of 0 and ignored by `maybeDecodeDocument()` but
                // preserved in `getNewDocumentChanges()`.
                const n = as(this.ci.serializer, new mn(i, L.min()), this.readTime);
                e.push(this.ci.jn(t, i, n));
            } else e.push(this.ci.Gn(t, i));
        }), s.forEach(n => {
            e.push(this.ci.ss.Us(t, n));
        }), e.push(this.ci.updateMetadata(t, n)), Qn.Bn(e);
    }
    Hn(t, e) {
        // Record the size of everything we load from the cache so we can compute a delta later.
        return this.ci.Hs(t, e).next(t => null === t ? (this.li.set(e, 0), null) : (this.li.set(e, t.size), 
        t.Ys));
    }
    Yn(t, e) {
        // Record the size of everything we load from the cache so we can compute
        // a delta later.
        return this.ci.Xs(t, e).next(({Zs: t, ti: e}) => (
        // Note: `getAllFromCache` returns two maps instead of a single map from
        // keys to `DocumentSizeEntry`s. This is to allow returning the
        // `NullableMaybeDocumentMap` directly, without a conversion.
        e.forEach((t, e) => {
            this.li.set(t, e);
        }), t));
    }
};

/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */
class Rs {
    constructor(t) {
        this._i = t;
    }
    next() {
        return this._i += 2, this._i;
    }
    static fi() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new Rs(0);
    }
    static di() {
        // Sync engine assigns target IDs for limbo document detection.
        return new Rs(-1);
    }
}

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
 */ class Ps {
    constructor(t, e) {
        this.wi = t, this.serializer = e;
    }
    // PORTING NOTE: We don't cache global metadata for the target cache, since
    // some of it (in particular `highestTargetId`) can be modified by secondary
    // tabs. We could perhaps be more granular (and e.g. still cache
    // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
    // to IndexedDb whenever we need to read metadata. We can revisit if it turns
    // out to have a meaningful performance impact.
    Ti(t) {
        return this.Ei(t).next(e => {
            const n = new Rs(e.highestTargetId);
            return e.highestTargetId = n.next(), this.Ii(t, e).next(() => e.highestTargetId);
        });
    }
    mi(t) {
        return this.Ei(t).next(t => L.I(new O(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds)));
    }
    Ai(t) {
        return this.Ei(t).next(t => t.highestListenSequenceNumber);
    }
    Ri(t, e, n) {
        return this.Ei(t).next(s => (s.highestListenSequenceNumber = e, n && (s.lastRemoteSnapshotVersion = n.A()), 
        e > s.highestListenSequenceNumber && (s.highestListenSequenceNumber = e), this.Ii(t, s)));
    }
    Pi(t, e) {
        return this.Vi(t, e).next(() => this.Ei(t).next(n => (n.targetCount += 1, this.gi(e, n), 
        this.Ii(t, n))));
    }
    yi(t, e) {
        return this.Vi(t, e);
    }
    pi(t, e) {
        return this.bi(t, e.targetId).next(() => Vs(t).delete(e.targetId)).next(() => this.Ei(t)).next(e => (V(e.targetCount > 0), 
        e.targetCount -= 1, this.Ii(t, e)));
    }
    /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */    vi(t, e, n) {
        let s = 0;
        const i = [];
        return Vs(t).ei((r, o) => {
            const h = ds(o);
            h.sequenceNumber <= e && null === n.get(h.targetId) && (s++, i.push(this.pi(t, h)));
        }).next(() => Qn.Bn(i)).next(() => s);
    }
    /**
     * Call provided function with each `TargetData` that we have cached.
     */    pe(t, e) {
        return Vs(t).ei((t, n) => {
            const s = ds(n);
            e(s);
        });
    }
    Ei(t) {
        return gs(t).get(Zs.key).next(t => (V(null !== t), t));
    }
    Ii(t, e) {
        return gs(t).put(Zs.key, e);
    }
    Vi(t, e) {
        return Vs(t).put(ws(this.serializer, e));
    }
    /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */    gi(t, e) {
        let n = !1;
        return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), 
        t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, 
        n = !0), n;
    }
    Si(t) {
        return this.Ei(t).next(t => t.targetCount);
    }
    Di(t, e) {
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
        const n = Y(e), s = IDBKeyRange.bound([ n, Number.NEGATIVE_INFINITY ], [ n, Number.POSITIVE_INFINITY ]);
        let i = null;
        return Vs(t).ei({
            range: s,
            index: Js.queryTargetsIndexName
        }, (t, n, s) => {
            const r = ds(n);
            // After finding a potential match, check that the target is
            // actually equal to the requested target.
                        X(e, r.target) && (i = r, s.done());
        }).next(() => i);
    }
    Ci(t, e, n) {
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
        const s = [], i = ys(t);
        return e.forEach(e => {
            const r = Xn(e.path);
            s.push(i.put(new Xs(n, r))), s.push(this.wi.Fi(t, n, e));
        }), Qn.Bn(s);
    }
    Ni(t, e, n) {
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
        const s = ys(t);
        return Qn.forEach(e, e => {
            const i = Xn(e.path);
            return Qn.Bn([ s.delete([ n, i ]), this.wi.$i(t, n, e) ]);
        });
    }
    bi(t, e) {
        const n = ys(t), s = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return n.delete(s);
    }
    ki(t, e) {
        const n = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), s = ys(t);
        let i = mt();
        return s.ei({
            range: n,
            xi: !0
        }, (t, e, n) => {
            const s = es(t[1]), r = new W(s);
            i = i.add(r);
        }).next(() => i);
    }
    Mi(t, e) {
        const n = Xn(e.path), s = IDBKeyRange.bound([ n ], [ S(n) ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        let i = 0;
        return ys(t).ei({
            index: Xs.documentTargetsIndex,
            xi: !0,
            range: s
        }, ([t, e], n, s) => {
            // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.
            0 !== t && (i++, s.done());
        }).next(() => i > 0);
    }
    /**
     * Looks up a TargetData entry by target ID.
     *
     * @param targetId The target ID of the TargetData entry to look up.
     * @return The cached TargetData entry, or null if the cache has no entry for
     * the target.
     */
    // PORTING NOTE: Multi-tab only.
    Me(t, e) {
        return Vs(t).get(e).next(t => t ? ds(t) : null);
    }
}

/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */ function Vs(t) {
    return vs.js(t, Js.store);
}

/**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */ function gs(t) {
    return vs.js(t, Zs.store);
}

/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */ function ys(t) {
    return vs.js(t, Xs.store);
}

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
 */ const ps = "Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";

/**
 * Oldest acceptable age in milliseconds for client metadata before the client
 * is considered inactive and its associated data is garbage collected.
 */ class bs extends Kn {
    constructor(t, e) {
        super(), this.Oi = t, this.Li = e;
    }
}

/**
 * An IndexedDB-backed instance of Persistence. Data is stored persistently
 * across sessions.
 *
 * On Web only, the Firestore SDKs support shared access to its persistence
 * layer. This allows multiple browser tabs to read and write to IndexedDb and
 * to synchronize state even without network connectivity. Shared access is
 * currently optional and not enabled unless all clients invoke
 * `enablePersistence()` with `{synchronizeTabs:true}`.
 *
 * In multi-tab mode, if multiple clients are active at the same time, the SDK
 * will designate one client as the “primary client”. An effort is made to pick
 * a visible, network-connected and active client, and this client is
 * responsible for letting other clients know about its presence. The primary
 * client writes a unique client-generated identifier (the client ID) to
 * IndexedDb’s “owner” store every 4 seconds. If the primary client fails to
 * update this entry, another client can acquire the lease and take over as
 * primary.
 *
 * Some persistence operations in the SDK are designated as primary-client only
 * operations. This includes the acknowledgment of mutations and all updates of
 * remote documents. The effects of these operations are written to persistence
 * and then broadcast to other tabs via LocalStorage (see
 * `WebStorageSharedClientState`), which then refresh their state from
 * persistence.
 *
 * Similarly, the primary client listens to notifications sent by secondary
 * clients to discover persistence changes written by secondary clients, such as
 * the addition of new mutations and query targets.
 *
 * If multi-tab is not enabled and another tab already obtained the primary
 * lease, IndexedDbPersistence enters a failed state and all subsequent
 * operations will automatically fail.
 *
 * Additionally, there is an optimization so that when a tab is closed, the
 * primary lease is released immediately (this is especially important to make
 * sure that a refreshed tab is able to immediately re-acquire the primary
 * lease). Unfortunately, IndexedDB cannot be reliably used in window.unload
 * since it is an asynchronous API. So in addition to attempting to give up the
 * lease, the leaseholder writes its client ID to a "zombiedClient" entry in
 * LocalStorage which acts as an indicator that another tab should go ahead and
 * take the primary lease immediately regardless of the current lease timestamp.
 *
 * TODO(b/114226234): Remove `synchronizeTabs` section when multi-tab is no
 * longer optional.
 */ class vs {
    constructor(
    /**
     * Whether to synchronize the in-memory state of multiple tabs and share
     * access to local persistence.
     */
    t, e, n, s, i, r, o, h, a, 
    /**
     * If set to true, forcefully obtains database access. Existing tabs will
     * no longer be able to access IndexedDB.
     */
    u) {
        if (this.allowTabSynchronization = t, this.persistenceKey = e, this.clientId = n, 
        this.bs = i, this.window = r, this.document = o, this.Bi = a, this.qi = u, this.Ui = null, 
        this.Qi = !1, this.isPrimary = !1, this.networkEnabled = !0, 
        /** Our window.unload handler, if registered. */
        this.Wi = null, this.inForeground = !1, 
        /** Our 'visibilitychange' listener if registered. */
        this.ji = null, 
        /** The client metadata refresh task. */
        this.Ki = null, 
        /** The last time we garbage collected the client metadata object store. */
        this.Gi = Number.NEGATIVE_INFINITY, 
        /** A listener to notify on primary state changes. */
        this.zi = t => Promise.resolve(), !vs.Hi()) throw new M(x.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
        this.wi = new Cs(this, s), this.Yi = e + "main", this.serializer = new os(h), this.Ji = new Ps(this.wi, this.serializer), 
        this.ss = new is, this.es = new Ts(this.serializer, this.ss), this.window && this.window.localStorage ? this.Xi = this.window.localStorage : (this.Xi = null, 
        !1 === u && A("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
    }
    static js(t, e) {
        if (t instanceof bs) return ii.js(t.Oi, e);
        throw P();
    }
    /**
     * Attempt to start IndexedDb persistence.
     *
     * @return {Promise<void>} Whether persistence was enabled.
     */    start() {
        return ii.Zi(this.Yi, Bs, new qs(this.serializer)).then(t => (this.tr = t, this.er())).then(() => {
            if (!this.isPrimary && !this.allowTabSynchronization) 
            // Fail `start()` if `synchronizeTabs` is disabled and we cannot
            // obtain the primary lease.
            throw new M(x.FAILED_PRECONDITION, ps);
            return this.nr(), this.sr(), this.ir(), this.runTransaction("getHighestListenSequenceNumber", "readonly", t => this.Ji.Ai(t));
        }).then(t => {
            this.Ui = new Hn(t, this.Bi);
        }).then(() => {
            this.Qi = !0;
        }).catch(t => (this.tr && this.tr.close(), Promise.reject(t)));
    }
    /**
     * Registers a listener that gets called when the primary state of the
     * instance changes. Upon registering, this listener is invoked immediately
     * with the current primary state.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */    rr(t) {
        return this.zi = async e => {
            if (this.or) return t(e);
        }, t(this.isPrimary);
    }
    /**
     * Registers a listener that gets called when the database receives a
     * version change event indicating that it has deleted.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */    hr(t) {
        this.tr.ar(async e => {
            // Check if an attempt is made to delete IndexedDB.
            null === e.newVersion && await t();
        });
    }
    /**
     * Adjusts the current network state in the client's metadata, potentially
     * affecting the primary lease.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */    ur(t) {
        this.networkEnabled !== t && (this.networkEnabled = t, 
        // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this.bs.cr(async () => {
            this.or && await this.er();
        }));
    }
    /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */    er() {
        return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", t => Ds(t).put(new ni(this.clientId, Date.now(), this.networkEnabled, this.inForeground)).next(() => {
            if (this.isPrimary) return this.lr(t).next(t => {
                t || (this.isPrimary = !1, this.bs._r(() => this.zi(!1)));
            });
        }).next(() => this.dr(t)).next(e => this.isPrimary && !e ? this.wr(t).next(() => !1) : !!e && this.Tr(t).next(() => !0))).catch(t => {
            if (hi(t)) 
            // Proceed with the existing state. Any subsequent access to
            // IndexedDB will verify the lease.
            return m("IndexedDbPersistence", "Failed to extend owner lease: ", t), this.isPrimary;
            if (!this.allowTabSynchronization) throw t;
            return m("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", t), 
            /* isPrimary= */ !1;
        }).then(t => {
            this.isPrimary !== t && this.bs._r(() => this.zi(t)), this.isPrimary = t;
        });
    }
    lr(t) {
        return Ss(t).get(Qs.key).next(t => Qn.resolve(this.Er(t)));
    }
    Ir(t) {
        return Ds(t).delete(this.clientId);
    }
    /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */    async mr() {
        if (this.isPrimary && !this.Ar(this.Gi, 18e5)) {
            this.Gi = Date.now();
            const t = await this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", t => {
                const e = vs.js(t, ni.store);
                return e.Ws().next(t => {
                    const n = this.Rr(t, 18e5), s = t.filter(t => -1 === n.indexOf(t));
                    // Delete metadata for clients that are no longer considered active.
                    return Qn.forEach(s, t => e.delete(t.clientId)).next(() => s);
                });
            }).catch(() => []);
            // Delete potential leftover entries that may continue to mark the
            // inactive clients as zombied in LocalStorage.
            // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
            // the client atomically, but we can't. So we opt to delete the IndexedDb
            // entries first to avoid potentially reviving a zombied client.
                        if (this.Xi) for (const e of t) this.Xi.removeItem(this.Pr(e.clientId));
        }
    }
    /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */    ir() {
        this.Ki = this.bs.Os("client_metadata_refresh" /* ClientMetadataRefresh */ , 4e3, () => this.er().then(() => this.mr()).then(() => this.ir()));
    }
    /** Checks whether `client` is the local client. */    Er(t) {
        return !!t && t.ownerId === this.clientId;
    }
    /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */    dr(t) {
        if (this.qi) return Qn.resolve(!0);
        return Ss(t).get(Qs.key).next(e => {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            // - the `forceOwningTab` setting was passed in.
            if (null !== e && this.Ar(e.leaseTimestampMs, 5e3) && !this.Vr(e.ownerId)) {
                if (this.Er(e) && this.networkEnabled) return !0;
                if (!this.Er(e)) {
                    if (!e.allowTabSynchronization) 
                    // Fail the `canActAsPrimary` check if the current leaseholder has
                    // not opted into multi-tab synchronization. If this happens at
                    // client startup, we reject the Promise returned by
                    // `enablePersistence()` and the user can continue to use Firestore
                    // with in-memory persistence.
                    // If this fails during a lease refresh, we will instead block the
                    // AsyncQueue from executing further operations. Note that this is
                    // acceptable since mixing & matching different `synchronizeTabs`
                    // settings is not supported.
                    // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                    // no longer be turned off.
                    throw new M(x.FAILED_PRECONDITION, ps);
                    return !1;
                }
            }
            return !(!this.networkEnabled || !this.inForeground) || Ds(t).Ws().next(t => void 0 === this.Rr(t, 5e3).find(t => {
                if (this.clientId !== t.clientId) {
                    const e = !this.networkEnabled && t.networkEnabled, n = !this.inForeground && t.inForeground, s = this.networkEnabled === t.networkEnabled;
                    if (e || n && s) return !0;
                }
                return !1;
            }));
        }).next(t => (this.isPrimary !== t && m("IndexedDbPersistence", `Client ${t ? "is" : "is not"} eligible for a primary lease.`), 
        t));
    }
    async gr() {
        // The shutdown() operations are idempotent and can be called even when
        // start() aborted (e.g. because it couldn't acquire the persistence lease).
        this.Qi = !1, this.yr(), this.Ki && (this.Ki.cancel(), this.Ki = null), this.pr(), 
        this.br(), await this.runTransaction("shutdown", "readwrite", t => this.wr(t).next(() => this.Ir(t))).catch(t => {
            m("IndexedDbPersistence", "Proceeding with shutdown despite failure: ", t);
        }), this.tr.close(), 
        // Remove the entry marking the client as zombied from LocalStorage since
        // we successfully deleted its metadata from IndexedDb.
        this.vr();
    }
    /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */    Rr(t, e) {
        return t.filter(t => this.Ar(t.updateTimeMs, e) && !this.Vr(t.clientId));
    }
    /**
     * Returns the IDs of the clients that are currently active. If multi-tab
     * is not supported, returns an array that only contains the local client's
     * ID.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */    Sr() {
        return this.runTransaction("getActiveClients", "readonly", t => Ds(t).Ws().next(t => this.Rr(t, 18e5).map(t => t.clientId)));
    }
    get or() {
        return this.Qi;
    }
    Dr(t) {
        return $s.Cr(t, this.serializer, this.ss, this.wi);
    }
    Fr() {
        return this.Ji;
    }
    Nr() {
        return this.es;
    }
    $r() {
        return this.ss;
    }
    runTransaction(t, e, n) {
        m("IndexedDbPersistence", "Starting transaction:", t);
        const s = "readonly" === e ? "readonly" : "readwrite";
        let i;
        // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.
                return this.tr.runTransaction(s, si, s => (i = new bs(s, this.Ui ? this.Ui.next() : Hn.ps), 
        "readwrite-primary" === e ? this.lr(i).next(t => !!t || this.dr(i)).next(e => {
            if (!e) throw A(`Failed to obtain primary lease for action '${t}'.`), this.isPrimary = !1, 
            this.bs._r(() => this.zi(!1)), new M(x.FAILED_PRECONDITION, jn);
            return n(i);
        }).next(t => this.Tr(i).next(() => t)) : this.kr(i).next(() => n(i)))).then(t => (i.ts(), 
        t));
    }
    /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
    // be turned off.
    kr(t) {
        return Ss(t).get(Qs.key).next(t => {
            if (null !== t && this.Ar(t.leaseTimestampMs, 5e3) && !this.Vr(t.ownerId) && !this.Er(t) && !(this.qi || this.allowTabSynchronization && t.allowTabSynchronization)) throw new M(x.FAILED_PRECONDITION, ps);
        });
    }
    /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */    Tr(t) {
        const e = new Qs(this.clientId, this.allowTabSynchronization, Date.now());
        return Ss(t).put(Qs.key, e);
    }
    static Hi() {
        return ii.Hi();
    }
    /** Checks the primary lease and removes it if we are the current primary. */    wr(t) {
        const e = Ss(t);
        return e.get(Qs.key).next(t => this.Er(t) ? (m("IndexedDbPersistence", "Releasing primary lease."), 
        e.delete(Qs.key)) : Qn.resolve());
    }
    /** Verifies that `updateTimeMs` is within `maxAgeMs`. */    Ar(t, e) {
        const n = Date.now();
        return !(t < n - e) && (!(t > n) || (A(`Detected an update time that is in the future: ${t} > ${n}`), 
        !1));
    }
    nr() {
        null !== this.document && "function" == typeof this.document.addEventListener && (this.ji = () => {
            this.bs.cr(() => (this.inForeground = "visible" === this.document.visibilityState, 
            this.er()));
        }, this.document.addEventListener("visibilitychange", this.ji), this.inForeground = "visible" === this.document.visibilityState);
    }
    pr() {
        this.ji && (this.document.removeEventListener("visibilitychange", this.ji), this.ji = null);
    }
    /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */    sr() {
        var t;
        "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.Wi = () => {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            this.yr(), this.bs.cr(() => this.gr());
        }, this.window.addEventListener("unload", this.Wi));
    }
    br() {
        this.Wi && (this.window.removeEventListener("unload", this.Wi), this.Wi = null);
    }
    /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */    Vr(t) {
        var e;
        try {
            const n = null !== (null === (e = this.Xi) || void 0 === e ? void 0 : e.getItem(this.Pr(t)));
            return m("IndexedDbPersistence", `Client '${t}' ${n ? "is" : "is not"} zombied in LocalStorage`), 
            n;
        } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return A("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
    }
    /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */    yr() {
        if (this.Xi) try {
            this.Xi.setItem(this.Pr(this.clientId), String(Date.now()));
        } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            A("Failed to set zombie client id.", t);
        }
    }
    /** Removes the zombied client entry if it exists. */    vr() {
        if (this.Xi) try {
            this.Xi.removeItem(this.Pr(this.clientId));
        } catch (t) {
            // Ignore
        }
    }
    Pr(t) {
        return `firestore_zombie_${this.persistenceKey}_${t}`;
    }
}

/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */ function Ss(t) {
    return vs.js(t, Qs.store);
}

/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */ function Ds(t) {
    return vs.js(t, ni.store);
}

/** Provides LRU functionality for IndexedDB persistence. */ class Cs {
    constructor(t, e) {
        this.db = t, this.xr = new Pi(this, e);
    }
    Mr(t) {
        const e = this.Or(t);
        return this.db.Fr().Si(t).next(t => e.next(e => t + e));
    }
    Or(t) {
        let e = 0;
        return this.Lr(t, t => {
            e++;
        }).next(() => e);
    }
    pe(t, e) {
        return this.db.Fr().pe(t, e);
    }
    Lr(t, e) {
        return this.Br(t, (t, n) => e(n));
    }
    Fi(t, e, n) {
        return Fs(t, n);
    }
    $i(t, e, n) {
        return Fs(t, n);
    }
    vi(t, e, n) {
        return this.db.Fr().vi(t, e, n);
    }
    qr(t, e) {
        return Fs(t, e);
    }
    /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */    Ur(t, e) {
        /** Returns true if any mutation queue contains the given document. */
        return function(t, e) {
            let n = !1;
            return Ls(t).Qr(s => ks(t, s, e).next(t => (t && (n = !0), Qn.resolve(!t)))).next(() => n);
        }
        /**
 * Delete a mutation batch and the associated document mutations.
 * @return A PersistencePromise of the document mutations that were removed.
 */ (t, e);
    }
    Wr(t, e) {
        const n = this.db.Nr().oi(), s = [];
        let i = 0;
        return this.Br(t, (r, o) => {
            if (o <= e) {
                const e = this.Ur(t, r).next(e => {
                    if (!e) 
                    // Our size accounting requires us to read all documents before
                    // removing them.
                    return i++, n.zn(t, r).next(() => (n.Gn(r), ys(t).delete([ 0, Xn(r.path) ])));
                });
                s.push(e);
            }
        }).next(() => Qn.Bn(s)).next(() => n.apply(t)).next(() => i);
    }
    removeTarget(t, e) {
        const n = e.Z(t.Li);
        return this.db.Fr().yi(t, n);
    }
    jr(t, e) {
        return Fs(t, e);
    }
    /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */    Br(t, e) {
        const n = ys(t);
        let s, i = Hn.ps;
        return n.ei({
            index: Xs.documentTargetsIndex
        }, ([t, n], {path: r, sequenceNumber: o}) => {
            0 === t ? (
            // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            i !== Hn.ps && e(new W(es(s)), i), 
            // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            i = o, s = r) : 
            // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            i = Hn.ps;
        }).next(() => {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            i !== Hn.ps && e(new W(es(s)), i);
        });
    }
    Kr(t) {
        return this.db.Nr().ui(t);
    }
}

function Fs(t, e) {
    return ys(t).put(
    /**
 * @return A value suitable for writing a sentinel row in the target-document
 * store.
 */
    function(t, e) {
        return new Xs(0, Xn(t.path), e);
    }(e, t.Li));
}

/**
 * Generates a string used as a prefix when storing data in IndexedDB and
 * LocalStorage.
 */ function Ns(t, e) {
    // Use two different prefix formats:
    //   * firestore / persistenceKey / projectID . databaseID / ...
    //   * firestore / persistenceKey / projectID / ...
    // projectIDs are DNS-compatible names and cannot contain dots
    // so there's no danger of collisions.
    let n = t.projectId;
    return t.i || (n += "." + t.database), "firestore/" + e + "/" + n + "/";
}

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
/** A mutation queue for a specific user, backed by IndexedDB. */
class $s {
    constructor(
    /**
     * The normalized userId (e.g. null UID => "" userId) used to store /
     * retrieve mutations.
     */
    t, e, n, s) {
        this.userId = t, this.serializer = e, this.ss = n, this.wi = s, 
        /**
         * Caches the document keys for pending mutation batches. If the mutation
         * has been removed from IndexedDb, the cached value may continue to
         * be used to retrieve the batch's document keys. To remove a cached value
         * locally, `removeCachedMutationKeys()` should be invoked either directly
         * or through `removeMutationBatches()`.
         *
         * With multi-tab, when the primary client acknowledges or rejects a mutation,
         * this cache is used by secondary clients to invalidate the local
         * view of the documents that were previously affected by the mutation.
         */
        // PORTING NOTE: Multi-tab only.
        this.Gr = {};
    }
    /**
     * Creates a new mutation queue for the given user.
     * @param user The user for which to create a mutation queue.
     * @param serializer The serializer to use when persisting to IndexedDb.
     */    static Cr(t, e, n, s) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        V("" !== t.uid);
        const i = t.zr() ? t.uid : "";
        return new $s(i, e, n, s);
    }
    Hr(t) {
        let e = !0;
        const n = IDBKeyRange.bound([ this.userId, Number.NEGATIVE_INFINITY ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Ms(t).ei({
            index: js.userMutationsIndex,
            range: n
        }, (t, n, s) => {
            e = !1, s.done();
        }).next(() => e);
    }
    Yr(t, e, n, s) {
        const i = Os(t), r = Ms(t);
        // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return r.add({}).next(o => {
            V("number" == typeof o);
            const h = new qn(o, e, n, s), a = function(t, e, n) {
                const s = n.baseMutations.map(e => Ae(t.Ks, e)), i = n.mutations.map(e => Ae(t.Ks, e));
                return new js(e, n.batchId, n.yn.toMillis(), s, i);
            }(this.serializer, this.userId, h), u = [];
            let c = new ct((t, e) => b(t.N(), e.N()));
            for (const t of s) {
                const e = Ks.key(this.userId, t.key.path, o);
                c = c.add(t.key.path.p()), u.push(r.put(a)), u.push(i.put(e, Ks.PLACEHOLDER));
            }
            return c.forEach(e => {
                u.push(this.ss.Us(t, e));
            }), t.Zn(() => {
                this.Gr[o] = h.keys();
            }), Qn.Bn(u).next(() => h);
        });
    }
    Jr(t, e) {
        return Ms(t).get(e).next(t => t ? (V(t.userId === this.userId), fs(this.serializer, t)) : null);
    }
    /**
     * Returns the document keys for the mutation batch with the given batchId.
     * For primary clients, this method returns `null` after
     * `removeMutationBatches()` has been called. Secondary clients return a
     * cached result until `removeCachedMutationKeys()` is invoked.
     */
    // PORTING NOTE: Multi-tab only.
    Xr(t, e) {
        return this.Gr[e] ? Qn.resolve(this.Gr[e]) : this.Jr(t, e).next(t => {
            if (t) {
                const n = t.keys();
                return this.Gr[e] = n, n;
            }
            return null;
        });
    }
    Zr(t, e) {
        const n = e + 1, s = IDBKeyRange.lowerBound([ this.userId, n ]);
        let i = null;
        return Ms(t).ei({
            index: js.userMutationsIndex,
            range: s
        }, (t, e, s) => {
            e.userId === this.userId && (V(e.batchId >= n), i = fs(this.serializer, e)), s.done();
        }).next(() => i);
    }
    to(t) {
        const e = IDBKeyRange.upperBound([ this.userId, Number.POSITIVE_INFINITY ]);
        let n = -1;
        return Ms(t).ei({
            index: js.userMutationsIndex,
            range: e,
            reverse: !0
        }, (t, e, s) => {
            n = e.batchId, s.done();
        }).next(() => n);
    }
    eo(t) {
        const e = IDBKeyRange.bound([ this.userId, -1 ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Ms(t).Ws(js.userMutationsIndex, e).next(t => t.map(t => fs(this.serializer, t)));
    }
    os(t, e) {
        // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.
        const n = Ks.prefixForPath(this.userId, e.path), s = IDBKeyRange.lowerBound(n), i = [];
        return Os(t).ei({
            range: s
        }, (n, s, r) => {
            const [o, h, a] = n, u = es(h);
            // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.
                        if (o === this.userId && e.path.isEqual(u)) 
            // Look up the mutation batch in the store.
            return Ms(t).get(a).next(t => {
                if (!t) throw P();
                V(t.userId === this.userId), i.push(fs(this.serializer, t));
            });
            r.done();
        }).next(() => i);
    }
    ls(t, e) {
        let n = new ct(b);
        const s = [];
        return e.forEach(e => {
            const i = Ks.prefixForPath(this.userId, e.path), r = IDBKeyRange.lowerBound(i), o = Os(t).ei({
                range: r
            }, (t, s, i) => {
                const [r, o, h] = t, a = es(o);
                // Only consider rows matching exactly the specific key of
                // interest. Note that because we order by path first, and we
                // order terminators before path separators, we'll encounter all
                // the index rows for documentKey contiguously. In particular, all
                // the rows for documentKey will occur before any rows for
                // documents nested in a subcollection beneath documentKey so we
                // can stop as soon as we hit any such row.
                                r === this.userId && e.path.isEqual(a) ? n = n.add(h) : i.done();
            });
            s.push(o);
        }), Qn.Bn(s).next(() => this.no(t, n));
    }
    Es(t, e) {
        const n = e.path, s = n.length + 1, i = Ks.prefixForPath(this.userId, n), r = IDBKeyRange.lowerBound(i);
        // Collect up unique batchIDs encountered during a scan of the index. Use a
        // SortedSet to accumulate batch IDs so they can be traversed in order in a
        // scan of the main table.
        let o = new ct(b);
        return Os(t).ei({
            range: r
        }, (t, e, i) => {
            const [r, h, a] = t, u = es(h);
            r === this.userId && n.D(u) ? 
            // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            u.length === s && (o = o.add(a)) : i.done();
        }).next(() => this.no(t, o));
    }
    no(t, e) {
        const n = [], s = [];
        // TODO(rockwood): Implement this using iterate.
        return e.forEach(e => {
            s.push(Ms(t).get(e).next(t => {
                if (null === t) throw P();
                V(t.userId === this.userId), n.push(fs(this.serializer, t));
            }));
        }), Qn.Bn(s).next(() => n);
    }
    so(t, e) {
        return xs(t.Oi, this.userId, e).next(n => (t.Zn(() => {
            this.io(e.batchId);
        }), Qn.forEach(n, e => this.wi.qr(t, e))));
    }
    /**
     * Clears the cached keys for a mutation batch. This method should be
     * called by secondary clients after they process mutation updates.
     *
     * Note that this method does not have to be called from primary clients as
     * the corresponding cache entries are cleared when an acknowledged or
     * rejected batch is removed from the mutation queue.
     */
    // PORTING NOTE: Multi-tab only
    io(t) {
        delete this.Gr[t];
    }
    ro(t) {
        return this.Hr(t).next(e => {
            if (!e) return Qn.resolve();
            // Verify that there are no entries in the documentMutations index if
            // the queue is empty.
                        const n = IDBKeyRange.lowerBound(Ks.prefixForUser(this.userId)), s = [];
            return Os(t).ei({
                range: n
            }, (t, e, n) => {
                if (t[0] === this.userId) {
                    const e = es(t[1]);
                    s.push(e);
                } else n.done();
            }).next(() => {
                V(0 === s.length);
            });
        });
    }
    Mi(t, e) {
        return ks(t, this.userId, e);
    }
    // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
    /** Returns the mutation queue's metadata from IndexedDb. */
    oo(t) {
        return Ls(t).get(this.userId).next(t => t || new Ws(this.userId, -1, 
        /*lastStreamToken=*/ ""));
    }
}

/**
 * @return true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */ function ks(t, e, n) {
    const s = Ks.prefixForPath(e, n.path), i = s[1], r = IDBKeyRange.lowerBound(s);
    let o = !1;
    return Os(t).ei({
        range: r,
        xi: !0
    }, (t, n, s) => {
        const [r, h, /*batchID*/ a] = t;
        r === e && h === i && (o = !0), s.done();
    }).next(() => o);
}

function xs(t, e, n) {
    const s = t.store(js.store), i = t.store(Ks.store), r = [], o = IDBKeyRange.only(n.batchId);
    let h = 0;
    const a = s.ei({
        range: o
    }, (t, e, n) => (h++, n.delete()));
    r.push(a.next(() => {
        V(1 === h);
    }));
    const u = [];
    for (const t of n.mutations) {
        const s = Ks.key(e, t.key.path, n.batchId);
        r.push(i.delete(s)), u.push(t.key);
    }
    return Qn.Bn(r).next(() => u);
}

/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */ function Ms(t) {
    return vs.js(t, js.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function Os(t) {
    return vs.js(t, Ks.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function Ls(t) {
    return vs.js(t, Ws.store);
}

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
/**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 */ const Bs = 10;

/** Performs database creation and schema upgrades. */ class qs {
    constructor(t) {
        this.serializer = t;
    }
    /**
     * Performs database creation and schema upgrades.
     *
     * Note that in production, this method is only ever used to upgrade the schema
     * to SCHEMA_VERSION. Different values of toVersion are only used for testing
     * and local feature development.
     */    createOrUpgrade(t, e, n, s) {
        V(n < s && n >= 0 && s <= Bs);
        const i = new ai(e);
        n < 1 && s >= 1 && (function(t) {
            t.createObjectStore(Qs.store);
        }
        /**
 * An object to be stored in the 'mutationQueues' store in IndexedDb.
 *
 * Each user gets a single queue of MutationBatches to apply to the server.
 * DbMutationQueue tracks the metadata about the queue.
 */ (t), function(t) {
            t.createObjectStore(Ws.store, {
                keyPath: Ws.keyPath
            }), t.createObjectStore(js.store, {
                keyPath: js.keyPath,
                autoIncrement: !0
            }).createIndex(js.userMutationsIndex, js.userMutationsKeyPath, {
                unique: !0
            }), t.createObjectStore(Ks.store);
        }
        /**
 * Upgrade function to migrate the 'mutations' store from V1 to V3. Loads
 * and rewrites all data.
 */ (t), ei(t), function(t) {
            t.createObjectStore(Hs.store);
        }
        /**
 * Represents the known absence of a document at a particular version.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ (t));
        // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.
                let r = Qn.resolve();
        return n < 3 && s >= 3 && (
        // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== n && (!function(t) {
            t.deleteObjectStore(Xs.store), t.deleteObjectStore(Js.store), t.deleteObjectStore(Zs.store);
        }(t), ei(t)), r = r.next(() => 
        /**
 * Creates the target global singleton row.
 *
 * @param {IDBTransaction} txn The version upgrade transaction for indexeddb
 */
        function(t) {
            const e = t.store(Zs.store), n = new Zs(
            /*highestTargetId=*/ 0, 
            /*lastListenSequenceNumber=*/ 0, L.min().A(), 
            /*targetCount=*/ 0);
            return e.put(Zs.key, n);
        }
        /**
 * Creates indices on the RemoteDocuments store used for both multi-tab
 * and Index-Free queries.
 */ (i))), n < 4 && s >= 4 && (0 !== n && (
        // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        r = r.next(() => function(t, e) {
            return e.store(js.store).Ws().next(n => {
                t.deleteObjectStore(js.store), t.createObjectStore(js.store, {
                    keyPath: js.keyPath,
                    autoIncrement: !0
                }).createIndex(js.userMutationsIndex, js.userMutationsKeyPath, {
                    unique: !0
                });
                const s = e.store(js.store), i = n.map(t => s.put(t));
                return Qn.Bn(i);
            });
        }
        /**
 * An object to be stored in the 'documentMutations' store in IndexedDb.
 *
 * A manually maintained index of all the mutation batches that affect a given
 * document key. The rows in this table are references based on the contents of
 * DbMutationBatch.mutations.
 */ (t, i))), r = r.next(() => {
            !function(t) {
                t.createObjectStore(ni.store, {
                    keyPath: ni.keyPath
                });
            }
            // Visible for testing
            (t);
        })), n < 5 && s >= 5 && (r = r.next(() => this.removeAcknowledgedMutations(i))), 
        n < 6 && s >= 6 && (r = r.next(() => (function(t) {
            t.createObjectStore(Ys.store);
        }
        /**
 * An object to be stored in the 'targets' store in IndexedDb.
 *
 * This is based on and should be kept in sync with the proto used in the iOS
 * client.
 *
 * Each query the client listens to against the server is tracked on disk so
 * that the query can be efficiently resumed on restart.
 */ (t), this.addDocumentGlobal(i)))), n < 7 && s >= 7 && (r = r.next(() => this.ensureSequenceNumbers(i))), 
        n < 8 && s >= 8 && (r = r.next(() => this.createCollectionParentIndex(t, i))), n < 9 && s >= 9 && (r = r.next(() => {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function(t) {
                t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function(t) {
                const e = t.objectStore(Hs.store);
                e.createIndex(Hs.readTimeIndex, Hs.readTimeIndexPath, {
                    unique: !1
                }), e.createIndex(Hs.collectionReadTimeIndex, Hs.collectionReadTimeIndexPath, {
                    unique: !1
                });
            }
            /**
 * A record of the metadata state of each client.
 *
 * PORTING NOTE: This is used to synchronize multi-tab state and does not need
 * to be ported to iOS or Android.
 */ (e);
        })), n < 10 && s >= 10 && (r = r.next(() => this.rewriteCanonicalIds(i))), r;
    }
    addDocumentGlobal(t) {
        let e = 0;
        return t.store(Hs.store).ei((t, n) => {
            e += As(n);
        }).next(() => {
            const n = new Ys(e);
            return t.store(Ys.store).put(Ys.key, n);
        });
    }
    removeAcknowledgedMutations(t) {
        const e = t.store(Ws.store), n = t.store(js.store);
        return e.Ws().next(e => Qn.forEach(e, e => {
            const s = IDBKeyRange.bound([ e.userId, -1 ], [ e.userId, e.lastAcknowledgedBatchId ]);
            return n.Ws(js.userMutationsIndex, s).next(n => Qn.forEach(n, n => {
                V(n.userId === e.userId);
                const s = fs(this.serializer, n);
                return xs(t, e.userId, s).next(() => {});
            }));
        }));
    }
    /**
     * Ensures that every document in the remote document cache has a corresponding sentinel row
     * with a sequence number. Missing rows are given the most recently used sequence number.
     */    ensureSequenceNumbers(t) {
        const e = t.store(Xs.store), n = t.store(Hs.store);
        return t.store(Zs.store).get(Zs.key).next(t => {
            const s = [];
            return n.ei((n, i) => {
                const r = new q(n), o = function(t) {
                    return [ 0, Xn(t) ];
                }
                /**
 * Wrapper class to store timestamps (seconds and nanos) in IndexedDb objects.
 */ (r);
                s.push(e.get(o).next(n => n ? Qn.resolve() : (n => e.put(new Xs(0, Xn(n), t.highestListenSequenceNumber)))(r)));
            }).next(() => Qn.Bn(s));
        });
    }
    createCollectionParentIndex(t, e) {
        // Create the index.
        t.createObjectStore(ti.store, {
            keyPath: ti.keyPath
        });
        const n = e.store(ti.store), s = new ss, i = t => {
            if (s.add(t)) {
                const e = t.S(), s = t.p();
                return n.put({
                    collectionId: e,
                    parent: Xn(s)
                });
            }
        };
        // Helper to add an index entry iff we haven't already written it.
                // Index existing remote documents.
        return e.store(Hs.store).ei({
            xi: !0
        }, (t, e) => {
            const n = new q(t);
            return i(n.p());
        }).next(() => e.store(Ks.store).ei({
            xi: !0
        }, ([t, e, n], s) => {
            const r = es(e);
            return i(r.p());
        }));
    }
    rewriteCanonicalIds(t) {
        const e = t.store(Js.store);
        return e.ei((t, n) => {
            const s = ds(n), i = ws(this.serializer, s);
            return e.put(i);
        });
    }
}

class Us {
    constructor(t, e) {
        this.seconds = t, this.nanoseconds = e;
    }
}

/**
 * A singleton object to be stored in the 'owner' store in IndexedDb.
 *
 * A given database can have a single primary tab assigned at a given time. That
 * tab must validate that it is still holding the primary lease before every
 * operation that requires locked access. The primary tab should regularly
 * write an updated timestamp to this lease to prevent other tabs from
 * "stealing" the primary lease
 */ class Qs {
    constructor(t, 
    /** Whether to allow shared access from multiple tabs. */
    e, n) {
        this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
    }
}

/**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */ Qs.store = "owner", 
/**
 * The key string used for the single object that exists in the
 * DbPrimaryClient store.
 */
Qs.key = "owner";

class Ws {
    constructor(
    /**
     * The normalized user ID to which this queue belongs.
     */
    t, 
    /**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
    e, 
    /**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
    n) {
        this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
    }
}

/** Name of the IndexedDb object store.  */ Ws.store = "mutationQueues", 
/** Keys are automatically assigned via the userId property. */
Ws.keyPath = "userId";

/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */
class js {
    constructor(
    /**
     * The normalized user ID to which this batch belongs.
     */
    t, 
    /**
     * An identifier for this batch, allocated using an auto-generated key.
     */
    e, 
    /**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
    n, 
    /**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
    s, 
    /**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via toMutation().
     */
    i) {
        this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = s, 
        this.mutations = i;
    }
}

/** Name of the IndexedDb object store.  */ js.store = "mutations", 
/** Keys are automatically assigned via the userId, batchId properties. */
js.keyPath = "batchId", 
/** The index name for lookup of mutations by user. */
js.userMutationsIndex = "userMutationsIndex", 
/** The user mutations index is keyed by [userId, batchId] pairs. */
js.userMutationsKeyPath = [ "userId", "batchId" ];

class Ks {
    constructor() {}
    /**
     * Creates a [userId] key for use in the DbDocumentMutations index to iterate
     * over all of a user's document mutations.
     */    static prefixForUser(t) {
        return [ t ];
    }
    /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */    static prefixForPath(t, e) {
        return [ t, Xn(e) ];
    }
    /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */    static key(t, e, n) {
        return [ t, Xn(e), n ];
    }
}

Ks.store = "documentMutations", 
/**
 * Because we store all the useful information for this store in the key,
 * there is no useful information to store as the value. The raw (unencoded)
 * path cannot be stored because IndexedDb doesn't store prototype
 * information.
 */
Ks.PLACEHOLDER = new Ks;

class Gs {
    constructor(t, e) {
        this.path = t, this.readTime = e;
    }
}

/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ class zs {
    constructor(t, e) {
        this.path = t, this.version = e;
    }
}

/**
 * An object to be stored in the 'remoteDocuments' store in IndexedDb.
 * It represents either:
 *
 * - A complete document.
 * - A "no document" representing a document that is known not to exist (at
 * some version).
 * - An "unknown document" representing a document that is known to exist (at
 * some version) but whose contents are unknown.
 *
 * Note: This is the persisted equivalent of a MaybeDocument and could perhaps
 * be made more general if necessary.
 */ class Hs {
    // TODO: We are currently storing full document keys almost three times
    // (once as part of the primary key, once - partly - as `parentPath` and once
    // inside the encoded documents). During our next migration, we should
    // rewrite the primary key as parentPath + document ID which would allow us
    // to drop one value.
    constructor(
    /**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
    t, 
    /**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
    e, 
    /**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
    n, 
    /**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
    s, 
    /**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
    i, 
    /**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
    r) {
        this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = s, 
        this.readTime = i, this.parentPath = r;
    }
}

Hs.store = "remoteDocuments", 
/**
 * An index that provides access to all entries sorted by read time (which
 * corresponds to the last modification time of each row).
 *
 * This index is used to provide a changelog for Multi-Tab.
 */
Hs.readTimeIndex = "readTimeIndex", Hs.readTimeIndexPath = "readTime", 
/**
 * An index that provides access to documents in a collection sorted by read
 * time.
 *
 * This index is used to allow the RemoteDocumentCache to fetch newly changed
 * documents in a collection.
 */
Hs.collectionReadTimeIndex = "collectionReadTimeIndex", Hs.collectionReadTimeIndexPath = [ "parentPath", "readTime" ];

/**
 * Contains a single entry that has metadata about the remote document cache.
 */
class Ys {
    /**
     * @param byteSize Approximately the total size in bytes of all the documents in the document
     * cache.
     */
    constructor(t) {
        this.byteSize = t;
    }
}

Ys.store = "remoteDocumentGlobal", Ys.key = "remoteDocumentGlobalKey";

class Js {
    constructor(
    /**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
    t, 
    /**
     * The canonical string representing this query. This is not unique.
     */
    e, 
    /**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
    n, 
    /**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
    s, 
    /**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
    i, 
    /**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
    r, 
    /**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
    o) {
        this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = s, 
        this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = r, this.query = o;
    }
}

Js.store = "targets", 
/** Keys are automatically assigned via the targetId property. */
Js.keyPath = "targetId", 
/** The name of the queryTargets index. */
Js.queryTargetsIndexName = "queryTargetsIndex", 
/**
 * The index of all canonicalIds to the targets that they match. This is not
 * a unique mapping because canonicalId does not promise a unique name for all
 * possible queries, so we append the targetId to make the mapping unique.
 */
Js.queryTargetsKeyPath = [ "canonicalId", "targetId" ];

/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */
class Xs {
    constructor(
    /**
     * The targetId identifying a target or 0 for a sentinel row.
     */
    t, 
    /**
     * The path to the document, as encoded in the key.
     */
    e, 
    /**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
    n) {
        this.targetId = t, this.path = e, this.sequenceNumber = n;
    }
}

/** Name of the IndexedDb object store.  */ Xs.store = "targetDocuments", 
/** Keys are automatically assigned via the targetId, path properties. */
Xs.keyPath = [ "targetId", "path" ], 
/** The index name for the reverse index. */
Xs.documentTargetsIndex = "documentTargetsIndex", 
/** We also need to create the reverse index for these properties. */
Xs.documentTargetsKeyPath = [ "path", "targetId" ];

/**
 * A record of global state tracked across all Targets, tracked separately
 * to avoid the need for extra indexes.
 *
 * This should be kept in-sync with the proto used in the iOS client.
 */
class Zs {
    constructor(
    /**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
    t, 
    /**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
    e, 
    /**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
    n, 
    /**
     * The number of targets persisted.
     */
    s) {
        this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, 
        this.targetCount = s;
    }
}

/**
 * The key string used for the single object that exists in the
 * DbTargetGlobal store.
 */ Zs.key = "targetGlobalKey", Zs.store = "targetGlobal";

/**
 * An object representing an association between a Collection id (e.g. 'messages')
 * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
 * This is used to efficiently find all collections to query when performing
 * a Collection Group query.
 */
class ti {
    constructor(
    /**
     * The collectionId (e.g. 'messages')
     */
    t, 
    /**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
    e) {
        this.collectionId = t, this.parent = e;
    }
}

/** Name of the IndexedDb object store. */ function ei(t) {
    t.createObjectStore(Xs.store, {
        keyPath: Xs.keyPath
    }).createIndex(Xs.documentTargetsIndex, Xs.documentTargetsKeyPath, {
        unique: !0
    }), 
    // NOTE: This is unique only because the TargetId is the suffix.
    t.createObjectStore(Js.store, {
        keyPath: Js.keyPath
    }).createIndex(Js.queryTargetsIndexName, Js.queryTargetsKeyPath, {
        unique: !0
    }), t.createObjectStore(Zs.store);
}

ti.store = "collectionParents", 
/** Keys are automatically assigned via the collectionId, parent properties. */
ti.keyPath = [ "collectionId", "parent" ];

class ni {
    constructor(
    // Note: Previous schema versions included a field
    // "lastProcessedDocumentChangeId". Don't use anymore.
    /** The auto-generated client id assigned at client startup. */
    t, 
    /** The last time this state was updated. */
    e, 
    /** Whether the client's network connection is enabled. */
    n, 
    /** Whether this client is running in a foreground tab. */
    s) {
        this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = s;
    }
}

/** Name of the IndexedDb object store. */ ni.store = "clientMetadata", 
/** Keys are automatically assigned via the clientId properties. */
ni.keyPath = "clientId";

const si = [ ...[ ...[ ...[ Ws.store, js.store, Ks.store, Hs.store, Js.store, Qs.store, Zs.store, Xs.store ], ni.store ], Ys.store ], ti.store ];

// V2 is no longer usable (see comment at top of file)
// Visible for testing
/**
 * Provides a wrapper around IndexedDb with a simplified interface that uses
 * Promise-like return values to chain operations. Real promises cannot be used
 * since .then() continuations are executed asynchronously (e.g. via
 * .setImmediate), which would cause IndexedDB to end the transaction.
 * See PersistencePromise for more details.
 */
class ii {
    constructor(t) {
        this.db = t, 
        // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === ii.ho(s()) && A("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
    }
    /**
     * Opens the specified database, creating or upgrading it if necessary.
     *
     * Note that `version` must not be a downgrade. IndexedDB does not support downgrading the schema
     * version. We currently do not support any way to do versioning outside of IndexedDB's versioning
     * mechanism, as only version-upgrade transactions are allowed to do things like create
     * objectstores.
     */    static Zi(t, e, n) {
        return m("SimpleDb", "Opening database:", t), new Qn((s, i) => {
            // TODO(mikelehen): Investigate browser compatibility.
            // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
            // suggests IE9 and older WebKit browsers handle upgrade
            // differently. They expect setVersion, as described here:
            // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
            const r = indexedDB.open(t, e);
            r.onsuccess = t => {
                const e = t.target.result;
                s(new ii(e));
            }, r.onblocked = () => {
                i(new M(x.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
            }, r.onerror = t => {
                const e = t.target.error;
                "VersionError" === e.name ? i(new M(x.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : i(e);
            }, r.onupgradeneeded = e => {
                m("SimpleDb", 'Database "' + t + '" requires upgrade from version:', e.oldVersion);
                const s = e.target.result;
                n.createOrUpgrade(s, r.transaction, e.oldVersion, Bs).next(() => {
                    m("SimpleDb", "Database upgrade to version " + Bs + " complete");
                });
            };
        }).On();
    }
    /** Deletes the specified database. */    static delete(t) {
        return m("SimpleDb", "Removing database:", t), ci(window.indexedDB.deleteDatabase(t)).On();
    }
    /** Returns true if IndexedDB is available in the current environment. */    static Hi() {
        if ("undefined" == typeof indexedDB) return !1;
        if (ii.ao()) return !0;
        // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.
                const t = s(), e = ii.ho(t), n = 0 < e && e < 10, i = ii.uo(t), r = 0 < i && i < 4.5;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.
                return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0 || n || r);
    }
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */    static ao() {
        var t;
        return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.co);
    }
    /** Helper to get a typed SimpleDbStore from a transaction. */    static js(t, e) {
        return t.store(e);
    }
    // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    static ho(t) {
        const e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
    }
    // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    static uo(t) {
        const e = t.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
    }
    ar(t) {
        this.db.onversionchange = e => t(e);
    }
    async runTransaction(t, e, n) {
        const s = "readonly" === t;
        let i = 0;
        for (;;) {
            ++i;
            const t = ai.open(this.db, s ? "readonly" : "readwrite", e);
            try {
                const e = n(t).catch(e => (
                // Abort the transaction if there was an error.
                t.abort(e), Qn.reject(e))).On();
                // As noted above, errors are propagated by aborting the transaction. So
                // we swallow any error here to avoid the browser logging it as unhandled.
                                return e.catch(() => {}), 
                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                // fire), but still return the original transactionFnResult back to the
                // caller.
                await t.lo, e;
            } catch (t) {
                // TODO(schmidt-sebastian): We could probably be smarter about this and
                // not retry exceptions that are likely unrecoverable (such as quota
                // exceeded errors).
                // Note: We cannot use an instanceof check for FirestoreException, since the
                // exception is wrapped in a generic error by our async/await handling.
                const e = "FirebaseError" !== t.name && i < 3;
                if (m("SimpleDb", "Transaction failed with error: %s. Retrying: %s.", t.message, e), 
                !e) return Promise.reject(t);
            }
        }
    }
    close() {
        this.db.close();
    }
}

/**
 * A controller for iterating over a key range or index. It allows an iterate
 * callback to delete the currently-referenced object, or jump to a new key
 * within the key range or index.
 */ class ri {
    constructor(t) {
        this._o = t, this.fo = !1, this.do = null;
    }
    get $n() {
        return this.fo;
    }
    get wo() {
        return this.do;
    }
    set cursor(t) {
        this._o = t;
    }
    /**
     * This function can be called to stop iteration at any point.
     */    done() {
        this.fo = !0;
    }
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */    ni(t) {
        this.do = t;
    }
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */    delete() {
        return ci(this._o.delete());
    }
}

/** An error that wraps exceptions that thrown during IndexedDB execution. */ class oi extends M {
    constructor(t) {
        super(x.UNAVAILABLE, "IndexedDB transaction failed: " + t), this.name = "IndexedDbTransactionError";
    }
}

/** Verifies whether `e` is an IndexedDbTransactionError. */ function hi(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */ class ai {
    constructor(t) {
        this.transaction = t, this.aborted = !1, 
        /**
         * A promise that resolves with the result of the IndexedDb transaction.
         */
        this.To = new Yn, this.transaction.oncomplete = () => {
            this.To.resolve();
        }, this.transaction.onabort = () => {
            t.error ? this.To.reject(new oi(t.error)) : this.To.resolve();
        }, this.transaction.onerror = t => {
            const e = _i(t.target.error);
            this.To.reject(new oi(e));
        };
    }
    static open(t, e, n) {
        return new ai(t.transaction(n, e));
    }
    get lo() {
        return this.To.promise;
    }
    abort(t) {
        t && this.To.reject(t), this.aborted || (m("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), 
        this.aborted = !0, this.transaction.abort());
    }
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */    store(t) {
        const e = this.transaction.objectStore(t);
        return new ui(e);
    }
}

/**
 * A wrapper around an IDBObjectStore providing an API that:
 *
 * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
 * methods for acting against the object store.
 * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
 * method return a PersistencePromise instead.
 * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
 * intermediate IndexedDB types (IDBCursorWithValue, etc.)
 */ class ui {
    constructor(t) {
        this.store = t;
    }
    put(t, e) {
        let n;
        return void 0 !== e ? (m("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (m("SimpleDb", "PUT", this.store.name, "<auto-key>", t), 
        n = this.store.put(t)), ci(n);
    }
    /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value The object to write.
     * @return The key of the value to add.
     */    add(t) {
        return m("SimpleDb", "ADD", this.store.name, t, t), ci(this.store.add(t));
    }
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @return The object with the specified key or null if no object exists.
     */    get(t) {
        // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return ci(this.store.get(t)).next(e => (
        // Normalize nonexistence to null.
        void 0 === e && (e = null), m("SimpleDb", "GET", this.store.name, t, e), e));
    }
    delete(t) {
        return m("SimpleDb", "DELETE", this.store.name, t), ci(this.store.delete(t));
    }
    /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */    count() {
        return m("SimpleDb", "COUNT", this.store.name), ci(this.store.count());
    }
    Ws(t, e) {
        const n = this.cursor(this.options(t, e)), s = [];
        return this.Eo(n, (t, e) => {
            s.push(e);
        }).next(() => s);
    }
    Io(t, e) {
        m("SimpleDb", "DELETE ALL", this.store.name);
        const n = this.options(t, e);
        n.xi = !1;
        const s = this.cursor(n);
        return this.Eo(s, (t, e, n) => n.delete());
    }
    ei(t, e) {
        let n;
        e ? n = t : (n = {}, e = t);
        const s = this.cursor(n);
        return this.Eo(s, e);
    }
    /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */    Qr(t) {
        const e = this.cursor({});
        return new Qn((n, s) => {
            e.onerror = t => {
                const e = _i(t.target.error);
                s(e);
            }, e.onsuccess = e => {
                const s = e.target.result;
                s ? t(s.primaryKey, s.value).next(t => {
                    t ? s.continue() : n();
                }) : n();
            };
        });
    }
    Eo(t, e) {
        const n = [];
        return new Qn((s, i) => {
            t.onerror = t => {
                i(t.target.error);
            }, t.onsuccess = t => {
                const i = t.target.result;
                if (!i) return void s();
                const r = new ri(i), o = e(i.primaryKey, i.value, r);
                if (o instanceof Qn) {
                    const t = o.catch(t => (r.done(), Qn.reject(t)));
                    n.push(t);
                }
                r.$n ? s() : null === r.wo ? i.continue() : i.continue(r.wo);
            };
        }).next(() => Qn.Bn(n));
    }
    options(t, e) {
        let n = void 0;
        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
            index: n,
            range: e
        };
    }
    cursor(t) {
        let e = "next";
        if (t.reverse && (e = "prev"), t.index) {
            const n = this.store.index(t.index);
            return t.xi ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }
        return this.store.openCursor(t.range, e);
    }
}

/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */ function ci(t) {
    return new Qn((e, n) => {
        t.onsuccess = t => {
            const n = t.target.result;
            e(n);
        }, t.onerror = t => {
            const e = _i(t.target.error);
            n(e);
        };
    });
}

// Guard so we only report the error once.
let li = !1;

function _i(t) {
    const e = ii.ho(s());
    if (e >= 12.2 && e < 13) {
        const e = "An internal error was encountered in the Indexed Database server";
        if (t.message.indexOf(e) >= 0) {
            // Wrap error in a more descriptive one.
            const t = new M("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely ` + "due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
            return li || (li = !0, 
            // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout(() => {
                throw t;
            }, 0)), t;
        }
    }
    return t;
}

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
/** The Platform's 'window' implementation or null if not available. */ function fi() {
    // `window` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof window ? window : null;
}

/** The Platform's 'document' implementation or null if not available. */
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */
class di {
    constructor(t, e, n, s, i) {
        this.mo = t, this.vs = e, this.Ao = n, this.op = s, this.Ro = i, this.Po = new Yn, 
        this.then = this.Po.promise.then.bind(this.Po.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.Po.promise.catch(t => {});
    }
    /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue The queue to schedule the operation on.
     * @param id A Timer ID identifying the type of operation this is.
     * @param delayMs The delay (ms) before the operation should be scheduled.
     * @param op The operation to run.
     * @param removalCallback A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */    static Vo(t, e, n, s, i) {
        const r = Date.now() + n, o = new di(t, e, r, s, i);
        return o.start(n), o;
    }
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */    start(t) {
        this.yo = setTimeout(() => this.po(), t);
    }
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */    Bs() {
        return this.po();
    }
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */    cancel(t) {
        null !== this.yo && (this.clearTimeout(), this.Po.reject(new M(x.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }
    po() {
        this.mo.cr(() => null !== this.yo ? (this.clearTimeout(), this.op().then(t => this.Po.resolve(t))) : Promise.resolve());
    }
    clearTimeout() {
        null !== this.yo && (this.Ro(this), clearTimeout(this.yo), this.yo = null);
    }
}

class wi {
    constructor() {
        // The last promise in the queue.
        this.bo = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.vo = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.So = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Do = [], 
        // visible for testing
        this.Co = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Fo = !1, 
        // List of TimerIds to fast-forward delays for.
        this.No = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.$o = new Jn(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.ko = () => this.$o.Ls();
        const t = fi();
        t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.ko);
    }
    // Is this AsyncQueue being shut down? If true, this instance will not enqueue
    // any new operations, Promises from enqueue requests will not resolve.
    get xo() {
        return this.So;
    }
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */    cr(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */    Mo(t) {
        this.Oo(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Lo(t);
    }
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue.
     */    Bo(t) {
        return this.Oo(), this.Lo(t);
    }
    /**
     * Adds a new operation to the queue and initialize the shut down of this queue.
     * Returns a promise that will be resolved when the promise returned by the new
     * operation is (with its value).
     * Once this method is called, the only possible way to request running an operation
     * is through `enqueueAndForgetEvenAfterShutdown`.
     */    async qo(t) {
        if (this.Oo(), !this.So) {
            this.So = !0;
            const e = fi();
            e && e.removeEventListener("visibilitychange", this.ko), await this.Bo(t);
        }
    }
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */    enqueue(t) {
        return this.Oo(), this.So ? new Promise(t => {}) : this.Lo(t);
    }
    /**
     * Enqueue a retryable operation.
     *
     * A retryable operation is rescheduled with backoff if it fails with a
     * IndexedDbTransactionError (the error type used by SimpleDb). All
     * retryable operations are executed in order and only run if all prior
     * operations were retried successfully.
     */    _r(t) {
        this.vo.push(t), this.cr(() => this.Uo());
    }
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */    async Uo() {
        if (0 !== this.vo.length) {
            try {
                await this.vo[0](), this.vo.shift(), this.$o.reset();
            } catch (t) {
                if (!hi(t)) throw t;
 // Failure will be handled by AsyncQueue
                                m("AsyncQueue", "Operation failed with retryable error: " + t);
            }
            this.vo.length > 0 && 
            // If there are additional operations, we re-schedule `retryNextOp()`.
            // This is necessary to run retryable operations that failed during
            // their initial attempt since we don't know whether they are already
            // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
            // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
            // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
            // call scheduled here.
            // Since `backoffAndRun()` cancels an existing backoff and schedules a
            // new backoff on every call, there is only ever a single additional
            // operation in the queue.
            this.$o.xs(() => this.Uo());
        }
    }
    Lo(t) {
        const e = this.bo.then(() => (this.Fo = !0, t().catch(t => {
            // Re-throw the error so that this.tail becomes a rejected Promise and
            // all further attempts to chain (via .then) will just short-circuit
            // and return the rejected Promise.
            throw this.Co = t, this.Fo = !1, A("INTERNAL UNHANDLED ERROR: ", 
            /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error Error or FirestoreError
 */
            function(t) {
                let e = t.message || "";
                t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack);
                return e;
            }
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
 */ (t)), t;
        }).then(t => (this.Fo = !1, t))));
        return this.bo = e, e;
    }
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
     * or fast-forward the operation prior to its running.
     */    Os(t, e, n) {
        this.Oo(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.No.indexOf(t) > -1 && (e = 0);
        const s = di.Vo(this, t, e, n, t => this.Qo(t));
        return this.Do.push(s), s;
    }
    Oo() {
        this.Co && P();
    }
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */    Wo() {}
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */    async jo() {
        // Operations in the queue prior to draining may have enqueued additional
        // operations. Keep draining the queue until the tail is no longer advanced,
        // which indicates that no more new operations were enqueued and that all
        // operations were executed.
        let t;
        do {
            t = this.bo, await t;
        } while (t !== this.bo);
    }
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */    Ko(t) {
        for (const e of this.Do) if (e.vs === t) return !0;
        return !1;
    }
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId Delayed operations up to and including this TimerId will
     *  be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */    Go(t) {
        // Note that draining may generate more delayed ops, so we do that first.
        return this.jo().then(() => {
            // Run ops in the same order they'd run if they ran naturally.
            this.Do.sort((t, e) => t.Ao - e.Ao);
            for (const e of this.Do) if (e.Bs(), "all" /* All */ !== t && e.vs === t) break;
            return this.jo();
        });
    }
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */    zo(t) {
        this.No.push(t);
    }
    /** Called once a DelayedOperation is run or canceled. */    Qo(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        const e = this.Do.indexOf(t);
        this.Do.splice(e, 1);
    }
}

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */ function Ti(t, e) {
    if (A("AsyncQueue", `${e}: ${t}`), hi(t)) return new M(x.UNAVAILABLE, `${e}: ${t}`);
    throw t;
}

function Ei([t, e], [n, s]) {
    const i = b(t, n);
    return 0 === i ? b(e, s) : i;
}

/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */ class Ii {
    constructor(t) {
        this.Ho = t, this.buffer = new ct(Ei), this.Yo = 0;
    }
    Jo() {
        return ++this.Yo;
    }
    Xo(t) {
        const e = [ t, this.Jo() ];
        if (this.buffer.size < this.Ho) this.buffer = this.buffer.add(e); else {
            const t = this.buffer.last();
            Ei(e, t) < 0 && (this.buffer = this.buffer.delete(t).add(e));
        }
    }
    get maxValue() {
        // Guaranteed to be non-empty. If we decide we are not collecting any
        // sequence numbers, nthSequenceNumber below short-circuits. If we have
        // decided that we are collecting n sequence numbers, it's because n is some
        // percentage of the existing sequence numbers. That means we should never
        // be in a situation where we are collecting sequence numbers but don't
        // actually have any.
        return this.buffer.last()[0];
    }
}

const mi = {
    Zo: !1,
    th: 0,
    eh: 0,
    nh: 0
};

class Ai {
    constructor(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.sh = t, this.ih = e, this.rh = n;
    }
    static oh(t) {
        return new Ai(t, Ai.hh, Ai.ah);
    }
}

Ai.uh = -1, Ai.lh = 1048576, Ai._h = 41943040, Ai.hh = 10, Ai.ah = 1e3, Ai.fh = new Ai(Ai._h, Ai.hh, Ai.ah), 
Ai.dh = new Ai(Ai.uh, 0, 0);

/**
 * This class is responsible for the scheduling of LRU garbage collection. It handles checking
 * whether or not GC is enabled, as well as which delay to use before the next run.
 */
class Ri {
    constructor(t, e) {
        this.xr = t, this.mo = e, this.wh = !1, this.Th = null;
    }
    start(t) {
        this.xr.params.sh !== Ai.uh && this.Eh(t);
    }
    stop() {
        this.Th && (this.Th.cancel(), this.Th = null);
    }
    get or() {
        return null !== this.Th;
    }
    Eh(t) {
        const e = this.wh ? 3e5 : 6e4;
        m("LruGarbageCollector", `Garbage collection scheduled in ${e}ms`), this.Th = this.mo.Os("lru_garbage_collection" /* LruGarbageCollection */ , e, async () => {
            this.Th = null, this.wh = !0;
            try {
                await t.Ih(this.xr);
            } catch (t) {
                hi(t) ? m("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", t) : await pi(t);
            }
            await this.Eh(t);
        });
    }
}

/** Implements the steps for LRU garbage collection. */ class Pi {
    constructor(t, e) {
        this.mh = t, this.params = e;
    }
    /** Given a percentile of target to collect, returns the number of targets to collect. */    Ah(t, e) {
        return this.mh.Mr(t).next(t => Math.floor(e / 100 * t));
    }
    /** Returns the nth sequence number, counting in order from the smallest. */    Rh(t, e) {
        if (0 === e) return Qn.resolve(Hn.ps);
        const n = new Ii(e);
        return this.mh.pe(t, t => n.Xo(t.sequenceNumber)).next(() => this.mh.Lr(t, t => n.Xo(t))).next(() => n.maxValue);
    }
    /**
     * Removes targets with a sequence number equal to or less than the given upper bound, and removes
     * document associations with those targets.
     */    vi(t, e, n) {
        return this.mh.vi(t, e, n);
    }
    /**
     * Removes documents that have a sequence number equal to or less than the upper bound and are not
     * otherwise pinned.
     */    Wr(t, e) {
        return this.mh.Wr(t, e);
    }
    Ph(t, e) {
        return this.params.sh === Ai.uh ? (m("LruGarbageCollector", "Garbage collection skipped; disabled"), 
        Qn.resolve(mi)) : this.Kr(t).next(n => n < this.params.sh ? (m("LruGarbageCollector", `Garbage collection skipped; Cache size ${n} ` + `is lower than threshold ${this.params.sh}`), 
        mi) : this.Vh(t, e));
    }
    Kr(t) {
        return this.mh.Kr(t);
    }
    Vh(t, e) {
        let s, i, r, o, h, a, u;
        const c = Date.now();
        return this.Ah(t, this.params.ih).next(e => (
        // Cap at the configured max
        e > this.params.rh ? (m("LruGarbageCollector", "Capping sequence numbers to collect down " + `to the maximum of ${this.params.rh} ` + `from ${e}`), 
        i = this.params.rh) : i = e, o = Date.now(), this.Rh(t, i))).next(n => (s = n, h = Date.now(), 
        this.vi(t, s, e))).next(e => (r = e, a = Date.now(), this.Wr(t, s))).next(t => {
            if (u = Date.now(), I() <= n.DEBUG) {
                m("LruGarbageCollector", "LRU Garbage Collection\n" + `\tCounted targets in ${o - c}ms\n` + `\tDetermined least recently used ${i} in ` + `${h - o}ms\n` + `\tRemoved ${r} targets in ` + `${a - h}ms\n` + `\tRemoved ${t} documents in ` + `${u - a}ms\n` + `Total Duration: ${u - c}ms`);
            }
            return Qn.resolve({
                Zo: !0,
                th: i,
                eh: r,
                nh: t
            });
        });
    }
}

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
/**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */
class Vi {
    constructor(
    /** Manages our in-memory or durable persistence. */
    t, e, n) {
        this.persistence = t, this.gh = e, 
        /**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */
        this.yh = new ht(b), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.ph = new k(t => Y(t), X), 
        /**
         * The read time of the last entry processed by `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */
        this.bh = L.min(), this.ns = t.Dr(n), this.vh = t.Nr(), this.Ji = t.Fr(), this.Sh = new Gn(this.vh, this.ns, this.persistence.$r()), 
        this.gh.Dh(this.Sh);
    }
    start() {
        return Promise.resolve();
    }
    async Ch(t) {
        let e = this.ns, n = this.Sh;
        const s = await this.persistence.runTransaction("Handle user change", "readonly", s => {
            // Swap out the mutation queue, grabbing the pending mutation batches
            // before and after.
            let i;
            return this.ns.eo(s).next(r => (i = r, e = this.persistence.Dr(t), 
            // Recreate our LocalDocumentsView using the new
            // MutationQueue.
            n = new Gn(this.vh, e, this.persistence.$r()), e.eo(s))).next(t => {
                const e = [], r = [];
                // Union the old/new changed keys.
                let o = mt();
                for (const t of i) {
                    e.push(t.batchId);
                    for (const e of t.mutations) o = o.add(e.key);
                }
                for (const e of t) {
                    r.push(e.batchId);
                    for (const t of e.mutations) o = o.add(t.key);
                }
                // Return the set of all (potentially) changed documents and the list
                // of mutation batch IDs that were affected by change.
                                return n.us(s, o).next(t => ({
                    Fh: t,
                    Nh: e,
                    $h: r
                }));
            });
        });
        return this.ns = e, this.Sh = n, this.gh.Dh(this.Sh), s;
    }
    kh(t) {
        const e = O.now(), n = t.reduce((t, e) => t.add(e.key), mt());
        let s;
        return this.persistence.runTransaction("Locally write mutations", "readwrite", i => this.Sh.us(i, n).next(n => {
            s = n;
            // For non-idempotent mutations (such as `FieldValue.increment()`),
            // we record the base state in a separate patch mutation. This is
            // later used to guarantee consistent values and prevents flicker
            // even if the backend sends us an update that already includes our
            // transform.
            const r = [];
            for (const e of t) {
                const t = nn(e, s.get(e.key));
                null != t && 
                // NOTE: The base state should only be applied if there's some
                // existing document to override, so use a Precondition of
                // exists=true
                r.push(new hn(e.key, t, Tn(t.proto.mapValue), Je.exists(!0)));
            }
            return this.ns.Yr(i, e, r, t);
        })).then(t => {
            const e = t.Sn(s);
            return {
                batchId: t.batchId,
                Un: e
            };
        });
    }
    xh(t) {
        return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", e => {
            const n = t.batch.keys(), s = this.vh.oi({
                ai: !0
            });
            return this.Mh(e, t, s).next(() => s.apply(e)).next(() => this.ns.ro(e)).next(() => this.Sh.us(e, n));
        });
    }
    Oh(t) {
        return this.persistence.runTransaction("Reject batch", "readwrite-primary", e => {
            let n;
            return this.ns.Jr(e, t).next(t => (V(null !== t), n = t.keys(), this.ns.so(e, t))).next(() => this.ns.ro(e)).next(() => this.Sh.us(e, n));
        });
    }
    to() {
        return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", t => this.ns.to(t));
    }
    mi() {
        return this.persistence.runTransaction("Get last remote snapshot version", "readonly", t => this.Ji.mi(t));
    }
    Lh(t) {
        const e = t.X;
        let n = this.yh;
        return this.persistence.runTransaction("Apply remote event", "readwrite-primary", s => {
            const i = this.vh.oi({
                ai: !0
            });
            // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                        n = this.yh;
            const r = [];
            t.Qt.forEach((t, i) => {
                const o = n.get(i);
                if (!o) return;
                // Only update the remote keys if the target is still active. This
                // ensures that we can persist the updated target data along with
                // the updated assignment.
                                r.push(this.Ji.Ni(s, t.Xt, i).next(() => this.Ji.Ci(s, t.Yt, i)));
                const h = t.resumeToken;
                // Update the resume token if the change includes one.
                                if (h.H() > 0) {
                    const a = o.tt(h, e).Z(s.Li);
                    n = n.nt(i, a), 
                    // Update the target data if there are target changes (or if
                    // sufficient time has passed since the last update).
                    Vi.Bh(o, a, t) && r.push(this.Ji.yi(s, a));
                }
            });
            let o = ft(), h = mt();
            // HACK: The only reason we allow a null snapshot version is so that we
            // can synthesize remote events when we get permission denied errors while
            // trying to resolve the state of a locally cached document that is in
            // limbo.
            if (t.jt.forEach((t, e) => {
                h = h.add(t);
            }), 
            // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
            // documents in advance in a single call.
            r.push(i.getEntries(s, h).next(n => {
                t.jt.forEach((h, a) => {
                    const u = n.get(h);
                    // Note: The order of the steps below is important, since we want
                    // to ensure that rejected limbo resolutions (which fabricate
                    // NoDocuments with SnapshotVersion.min()) never add documents to
                    // cache.
                                        a instanceof mn && a.version.isEqual(L.min()) ? (
                    // NoDocuments with SnapshotVersion.min() are used in manufactured
                    // events. We remove these documents from cache since we lost
                    // access.
                    i.Gn(h, e), o = o.nt(h, a)) : null == u || a.version.o(u.version) > 0 || 0 === a.version.o(u.version) && u.hasPendingWrites ? (i.jn(a, e), 
                    o = o.nt(h, a)) : m("LocalStore", "Ignoring outdated watch update for ", h, ". Current version:", u.version, " Watch version:", a.version), 
                    t.Kt.has(h) && r.push(this.persistence.wi.jr(s, h));
                });
            })), !e.isEqual(L.min())) {
                const t = this.Ji.mi(s).next(t => this.Ji.Ri(s, s.Li, e));
                r.push(t);
            }
            return Qn.Bn(r).next(() => i.apply(s)).next(() => this.Sh.cs(s, o));
        }).then(t => (this.yh = n, t));
    }
    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */    static Bh(t, e, n) {
        // Always persist target data if we don't already have a resume token.
        if (V(e.resumeToken.H() > 0), 0 === t.resumeToken.H()) return !0;
        // Don't allow resume token changes to be buffered indefinitely. This
        // allows us to be reasonably up-to-date after a crash and avoids needing
        // to loop over all active queries on shutdown. Especially in the browser
        // we may not get time to do anything interesting while the current tab is
        // closing.
                return e.X.m() - t.X.m() >= this.qh || n.Yt.size + n.Jt.size + n.Xt.size > 0;
        // Otherwise if the only thing that has changed about a target is its resume
        // token it's not worth persisting. Note that the RemoteStore keeps an
        // in-memory view of the currently active targets which includes the current
        // resume token, so stream failure or user changes will still use an
        // up-to-date resume token regardless of what we do here.
        }
    async Uh(t) {
        try {
            await this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", e => Qn.forEach(t, t => Qn.forEach(t.ms, n => this.persistence.wi.Fi(e, t.targetId, n)).next(() => Qn.forEach(t.As, n => this.persistence.wi.$i(e, t.targetId, n)))));
        } catch (t) {
            if (!hi(t)) throw t;
            // If `notifyLocalViewChanges` fails, we did not advance the sequence
            // number for the documents that were included in this transaction.
            // This might trigger them to be deleted earlier than they otherwise
            // would have, but it should not invalidate the integrity of the data.
            m("LocalStore", "Failed to update sequence numbers: " + t);
        }
        for (const e of t) {
            const t = e.targetId;
            if (!e.fromCache) {
                const e = this.yh.get(t), n = e.X, s = e.et(n);
                // Advance the last limbo free snapshot version
                                this.yh = this.yh.nt(t, s);
            }
        }
    }
    Qh(t) {
        return this.persistence.runTransaction("Get next mutation batch", "readonly", e => (void 0 === t && (t = -1), 
        this.ns.Zr(e, t)));
    }
    Wh(t) {
        return this.persistence.runTransaction("read document", "readonly", e => this.Sh.rs(e, t));
    }
    jh(t) {
        return this.persistence.runTransaction("Allocate target", "readwrite", e => {
            let n;
            return this.Ji.Di(e, t).next(s => s ? (
            // This target has been listened to previously, so reuse the
            // previous targetID.
            // TODO(mcg): freshen last accessed date?
            n = s, Qn.resolve(n)) : this.Ji.Ti(e).next(s => (n = new et(t, s, 0 /* Listen */ , e.Li), 
            this.Ji.Pi(e, n).next(() => n))));
        }).then(e => {
            // If Multi-Tab is enabled, the existing target data may be newer than
            // the in-memory data
            const n = this.yh.get(e.targetId);
            return (null === n || e.X.o(n.X) > 0) && (this.yh = this.yh.nt(e.targetId, e), this.ph.set(t, e.targetId)), 
            e;
        });
    }
    Di(t, e) {
        const n = this.ph.get(e);
        return void 0 !== n ? Qn.resolve(this.yh.get(n)) : this.Ji.Di(t, e);
    }
    async Kh(t, e) {
        const n = this.yh.get(t), s = e ? "readwrite" : "readwrite-primary";
        try {
            e || await this.persistence.runTransaction("Release target", s, t => this.persistence.wi.removeTarget(t, n));
        } catch (e) {
            if (!hi(e)) throw e;
            // All `releaseTarget` does is record the final metadata state for the
            // target, but we've been recording this periodically during target
            // activity. If we lose this write this could cause a very slight
            // difference in the order of target deletion during GC, but we
            // don't define exact LRU semantics so this is acceptable.
            m("LocalStore", `Failed to update sequence numbers for target ${t}: ${e}`);
        }
        this.yh = this.yh.remove(t), this.ph.delete(n.target);
    }
    Gh(t, e) {
        let n = L.min(), s = mt();
        return this.persistence.runTransaction("Execute query", "readonly", i => this.Di(i, t.We()).next(t => {
            if (t) return n = t.lastLimboFreeSnapshotVersion, this.Ji.ki(i, t.targetId).next(t => {
                s = t;
            });
        }).next(() => this.gh._s(i, t, e ? n : L.min(), e ? s : mt())).next(t => ({
            documents: t,
            zh: s
        })));
    }
    Mh(t, e, n) {
        const s = e.batch, i = s.keys();
        let r = Qn.resolve();
        return i.forEach(i => {
            r = r.next(() => n.zn(t, i)).next(t => {
                let r = t;
                const o = e.Cn.get(i);
                V(null !== o), (!r || r.version.o(o) < 0) && (r = s.pn(i, r, e), r && 
                // We use the commitVersion as the readTime rather than the
                // document's updateTime since the updateTime is not advanced
                // for updates that do not modify the underlying document.
                n.jn(r, e.Dn));
            });
        }), r.next(() => this.ns.so(t, s));
    }
    Ih(t) {
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", e => t.Ph(e, this.yh));
    }
}

/**
 * The maximum time to leave a resume token buffered without writing it out.
 * This value is arbitrary: it's long enough to avoid several writes
 * (possibly indefinitely if updates come more frequently than this) but
 * short enough that restarting after crashing will still have a pretty
 * recent resume token.
 */ function gi(
/** Manages our in-memory or durable persistence. */
t, e, n) {
    return new Vi(t, e, n);
}

/**
 * An implementation of LocalStore that provides additional functionality
 * for MultiTabSyncEngine.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */
// PORTING NOTE: Web only.
Vi.qh = 3e8;

class yi extends Vi {
    constructor(t, e, n) {
        super(t, e, n), this.persistence = t, this.ns = t.Dr(n), this.vh = t.Nr(), this.Ji = t.Fr();
    }
    /** Starts the LocalStore. */    start() {
        return this.Hh();
    }
    Yh(t) {
        return this.persistence.runTransaction("Lookup mutation documents", "readonly", e => this.ns.Xr(e, t).next(t => t ? this.Sh.us(e, t) : Qn.resolve(null)));
    }
    Jh(t) {
        this.ns.io(t);
    }
    ur(t) {
        this.persistence.ur(t);
    }
    Sr() {
        return this.persistence.Sr();
    }
    Xh(t) {
        const e = this.yh.get(t);
        return e ? Promise.resolve(e.target) : this.persistence.runTransaction("Get target data", "readonly", e => this.Ji.Me(e, t).next(t => t ? t.target : null));
    }
    si() {
        return this.persistence.runTransaction("Get new document changes", "readonly", t => this.vh.si(t, this.bh)).then(({ii: t, readTime: e}) => (this.bh = e, 
        t));
    }
    async Hh() {
        this.bh = await this.persistence.runTransaction("Synchronize last document change read time", "readonly", t => this.vh.ri(t));
    }
}

/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err An error returned by a LocalStore operation.
 * @return A Promise that resolves after we recovered, or the original error.
 */
async function pi(t) {
    if (t.code !== x.FAILED_PRECONDITION || t.message !== jn) throw t;
    m("LocalStore", "Unexpectedly lost primary lease");
}

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
/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ class bi {
    constructor() {
        // A set of outstanding references to a document sorted by key.
        this.Zh = new ct(vi.ta), 
        // A set of outstanding references to a document sorted by target id.
        this.ea = new ct(vi.na);
    }
    /** Returns true if the reference set contains no references. */    _() {
        return this.Zh._();
    }
    /** Adds a reference to the given document key for the given ID. */    Fi(t, e) {
        const n = new vi(t, e);
        this.Zh = this.Zh.add(n), this.ea = this.ea.add(n);
    }
    /** Add references to the given document keys for the given ID. */    sa(t, e) {
        t.forEach(t => this.Fi(t, e));
    }
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */    $i(t, e) {
        this.ia(new vi(t, e));
    }
    ra(t, e) {
        t.forEach(t => this.$i(t, e));
    }
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */    oa(t) {
        const e = new W(new q([])), n = new vi(e, t), s = new vi(e, t + 1), i = [];
        return this.ea.vt([ n, s ], t => {
            this.ia(t), i.push(t.key);
        }), i;
    }
    ha() {
        this.Zh.forEach(t => this.ia(t));
    }
    ia(t) {
        this.Zh = this.Zh.delete(t), this.ea = this.ea.delete(t);
    }
    aa(t) {
        const e = new W(new q([])), n = new vi(e, t), s = new vi(e, t + 1);
        let i = mt();
        return this.ea.vt([ n, s ], t => {
            i = i.add(t.key);
        }), i;
    }
    Mi(t) {
        const e = new vi(t, 0), n = this.Zh.Dt(e);
        return null !== n && t.isEqual(n.key);
    }
}

class vi {
    constructor(t, e) {
        this.key = t, this.ua = e;
    }
    /** Compare by key then by ID */    static ta(t, e) {
        return W.P(t.key, e.key) || b(t.ua, e.ua);
    }
    /** Compare by ID then by key */    static na(t, e) {
        return b(t.ua, e.ua) || W.P(t.key, e.key);
    }
}

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
/**
 * Validates that no arguments were passed in the invocation of functionName.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateNoArgs('myFunction', arguments);
 */ function Si(t, e) {
    if (0 !== e.length) throw new M(x.INVALID_ARGUMENT, `Function ${t}() does not support arguments, ` + "but was called with " + zi(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */ function Di(t, e, n) {
    if (e.length !== n) throw new M(x.INVALID_ARGUMENT, `Function ${t}() requires ` + zi(n, "argument") + ", but was called with " + zi(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */ function Ci(t, e, n) {
    if (e.length < n) throw new M(x.INVALID_ARGUMENT, `Function ${t}() requires at least ` + zi(n, "argument") + ", but was called with " + zi(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */ function Fi(t, e, n, s) {
    if (e.length < n || e.length > s) throw new M(x.INVALID_ARGUMENT, `Function ${t}() requires between ${n} and ` + `${s} arguments, but was called with ` + zi(e.length, "argument") + ".");
}

/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */
/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */
function Ni(t, e, n, s) {
    Bi(t, e, `${Gi(n)} argument`, s);
}

/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */ function $i(t, e, n, s) {
    void 0 !== s && Ni(t, e, n, s);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */ function ki(t, e, n, s) {
    Bi(t, e, `${n} option`, s);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */ function xi(t, e, n, s) {
    void 0 !== s && ki(t, e, n, s);
}

function Mi(t, e, n, s, i) {
    void 0 !== s && function(t, e, n, s, i) {
        if (!(s instanceof Array)) throw new M(x.INVALID_ARGUMENT, `Function ${t}() requires its ${e} ` + `option to be an array, but it was: ${Ui(s)}`);
        for (let r = 0; r < s.length; ++r) if (!i(s[r])) throw new M(x.INVALID_ARGUMENT, `Function ${t}() requires all ${e} ` + `elements to be ${n}, but the value at index ${r} ` + `was: ${Ui(s[r])}`);
    }(t, e, n, s, i);
}

/**
 * Validates that the provided named option equals one of the expected values.
 */
/**
 * Validates that the provided named option equals one of the expected values or
 * is undefined.
 */
function Oi(t, e, n, s, i) {
    void 0 !== s && function(t, e, n, s, i) {
        const r = [];
        for (const t of i) {
            if (t === s) return;
            r.push(Ui(t));
        }
        const o = Ui(s);
        throw new M(x.INVALID_ARGUMENT, `Invalid value ${o} provided to function ${t}() for option ` + `"${n}". Acceptable values: ${r.join(", ")}`);
    }(t, 0, n, s, i);
}

/**
 * Validates that the provided argument is a valid enum.
 *
 * @param functionName Function making the validation call.
 * @param enums Array containing all possible values for the enum.
 * @param position Position of the argument in `functionName`.
 * @param argument Argument to validate.
 * @return The value as T if the argument can be converted.
 */ function Li(t, e, n, s) {
    if (!e.some(t => t === s)) throw new M(x.INVALID_ARGUMENT, `Invalid value ${Ui(s)} provided to function ` + `${t}() for its ${Gi(n)} argument. Acceptable ` + `values: ${e.join(", ")}`);
    return s;
}

/** Helper to validate the type of a provided input. */ function Bi(t, e, n, s) {
    let i = !1;
    if (i = "object" === e ? qi(s) : "non-empty string" === e ? "string" == typeof s && "" !== s : typeof s === e, 
    !i) {
        const i = Ui(s);
        throw new M(x.INVALID_ARGUMENT, `Function ${t}() requires its ${n} ` + `to be of type ${e}, but it was: ${i}`);
    }
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */ function qi(t) {
    return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}

/** Returns a string describing the type / value of the provided input. */ function Ui(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = `${t.substring(0, 20)}...`), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        {
            const e = 
            /** Hacky method to try to get the constructor name for an object. */
            function(t) {
                if (t.constructor) {
                    const e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                    if (e && e.length > 1) return e[1];
                }
                return null;
            }
            /** Validates the provided argument is defined. */ (t);
            return e ? `a custom ${e} object` : "an object";
        }
    }
    return "function" == typeof t ? "a function" : P();
}

function Qi(t, e, n) {
    if (void 0 === n) throw new M(x.INVALID_ARGUMENT, `Function ${t}() requires a valid ${Gi(e)} ` + "argument, but it was undefined.");
}

/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */ function Wi(t, e, n) {
    N(e, (e, s) => {
        if (n.indexOf(e) < 0) throw new M(x.INVALID_ARGUMENT, `Unknown option '${e}' passed to function ${t}(). ` + "Available options: " + n.join(", "));
    });
}

/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */ function ji(t, e, n, s) {
    const i = Ui(s);
    return new M(x.INVALID_ARGUMENT, `Function ${t}() requires its ${Gi(n)} ` + `argument to be a ${e}, but it was: ${i}`);
}

function Ki(t, e, n) {
    if (n <= 0) throw new M(x.INVALID_ARGUMENT, `Function ${t}() requires its ${Gi(e)} argument to be a positive number, but it was: ${n}.`);
}

/** Converts a number to its english word representation */ function Gi(t) {
    switch (t) {
      case 1:
        return "first";

      case 2:
        return "second";

      case 3:
        return "third";

      default:
        return t + "th";
    }
}

/**
 * Formats the given word as plural conditionally given the preceding number.
 */ function zi(t, e) {
    return `${t} ${e}` + (1 === t ? "" : "s");
}

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
/** Helper function to assert Uint8Array is available at runtime. */ function Hi() {
    if ("undefined" == typeof Uint8Array) throw new M(x.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function Yi() {
    if ("undefined" == typeof atob) throw new M(x.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/**
 * Immutable class holding a blob (binary data).
 * This class is directly exposed in the public API.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */ class Ji {
    constructor(t) {
        Yi(), this.ca = t;
    }
    static fromBase64String(t) {
        Di("Blob.fromBase64String", arguments, 1), Ni("Blob.fromBase64String", "string", 1, t), 
        Yi();
        try {
            return new Ji(tt.fromBase64String(t));
        } catch (t) {
            throw new M(x.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t);
        }
    }
    static fromUint8Array(t) {
        if (Di("Blob.fromUint8Array", arguments, 1), Hi(), !(t instanceof Uint8Array)) throw ji("Blob.fromUint8Array", "Uint8Array", 1, t);
        return new Ji(tt.fromUint8Array(t));
    }
    toBase64() {
        return Di("Blob.toBase64", arguments, 0), Yi(), this.ca.toBase64();
    }
    toUint8Array() {
        return Di("Blob.toUint8Array", arguments, 0), Hi(), this.ca.toUint8Array();
    }
    toString() {
        return "Blob(base64: " + this.toBase64() + ")";
    }
    isEqual(t) {
        return this.ca.isEqual(t.ca);
    }
}

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
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
/**
 * A field class base class that is shared by the lite, full and legacy SDK,
 * which supports shared code that deals with FieldPaths.
 */ class Xi {
    constructor(t) {
        !function(t, e, n, s) {
            if (!(e instanceof Array) || e.length < s) throw new M(x.INVALID_ARGUMENT, `Function ${t}() requires its ${n} argument to be an ` + "array with at least " + `${zi(s, "element")}.`);
        }("FieldPath", t, "fieldNames", 1);
        for (let e = 0; e < t.length; ++e) if (Ni("FieldPath", "string", e, t[e]), 0 === t[e].length) throw new M(x.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this.la = new Q(t);
    }
}

/**
 * A FieldPath refers to a field in a document. The path may consist of a single
 * field name (referring to a top-level field in the document), or a list of
 * field names (referring to a nested field in the document).
 */ class Zi extends Xi {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    constructor(...t) {
        super(t);
    }
    static documentId() {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new Zi(Q.L().N());
    }
    isEqual(t) {
        if (!(t instanceof Zi)) throw ji("isEqual", "FieldPath", 1, t);
        return this.la.isEqual(t.la);
    }
}

/**
 * Matches any characters in a field path string that are reserved.
 */ const tr = new RegExp("[~\\*/\\[\\]]");

/**
 * Parses a field path string into a FieldPath, treating dots as separators.
 */
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
/**
 * An opaque base class for FieldValue sentinel objects in our public API that
 * is shared between the full, lite and legacy SDK.
 */
class er {
    constructor() {
        /** A pointer to the implementing class. */
        this._a = this;
    }
}

class nr extends er {
    constructor(t) {
        super(), this.fa = t;
    }
    da(t) {
        if (2 /* MergeSet */ !== t.wa) throw 1 /* Update */ === t.wa ? t.Ta(`${this.fa}() can only appear at the top level ` + "of your update data") : t.Ta(`${this.fa}() cannot be used with set() unless you pass ` + "{merge:true}");
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
        return t.Le.push(t.path), null;
    }
    isEqual(t) {
        return t instanceof nr;
    }
}

/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue The sentinel FieldValue for which to create a child
 *     context.
 * @param context The parent context.
 * @param arrayElement Whether or not the FieldValue has an array.
 */ function sr(t, e, n) {
    return new Er({
        wa: 3 /* Argument */ ,
        Ea: e.settings.Ea,
        methodName: t.fa,
        Ia: n
    }, e.s, e.serializer, e.ignoreUndefinedProperties);
}

class ir extends er {
    constructor(t) {
        super(), this.fa = t;
    }
    da(t) {
        return new ze(t.path, new Le);
    }
    isEqual(t) {
        return t instanceof ir;
    }
}

class rr extends er {
    constructor(t, e) {
        super(), this.fa = t, this.ma = e;
    }
    da(t) {
        const e = sr(this, t, 
        /*array=*/ !0), n = this.ma.map(t => Vr(t, e)), s = new Be(n);
        return new ze(t.path, s);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class or extends er {
    constructor(t, e) {
        super(), this.fa = t, this.ma = e;
    }
    da(t) {
        const e = sr(this, t, 
        /*array=*/ !0), n = this.ma.map(t => Vr(t, e)), s = new Ue(n);
        return new ze(t.path, s);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class hr extends er {
    constructor(t, e) {
        super(), this.fa = t, this.Aa = e;
    }
    da(t) {
        const e = new We(t.serializer, ie(t.serializer, this.Aa));
        return new ze(t.path, e);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

/** The public FieldValue class of the lite API. */ class ar extends er {
    constructor() {
        super();
    }
    static delete() {
        return Si("FieldValue.delete", arguments), new ur(new nr("FieldValue.delete"));
    }
    static serverTimestamp() {
        return Si("FieldValue.serverTimestamp", arguments), new ur(new ir("FieldValue.serverTimestamp"));
    }
    static arrayUnion(...t) {
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.
        return Ci("FieldValue.arrayUnion", arguments, 1), new ur(new rr("FieldValue.arrayUnion", t));
    }
    static arrayRemove(...t) {
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.
        return Ci("FieldValue.arrayRemove", arguments, 1), new ur(new or("FieldValue.arrayRemove", t));
    }
    static increment(t) {
        return Ni("FieldValue.increment", "number", 1, t), Di("FieldValue.increment", arguments, 1), 
        new ur(new hr("FieldValue.increment", t));
    }
}

/**
 * A delegate class that allows the FieldValue implementations returned by
 * deleteField(), serverTimestamp(), arrayUnion(), arrayRemove() and
 * increment() to be an instance of the legacy FieldValue class declared above.
 *
 * We don't directly subclass `FieldValue` in the various field value
 * implementations as the base FieldValue class differs between the lite, full
 * and legacy SDK.
 */ class ur extends ar {
    constructor(t) {
        super(), this._a = t, this.fa = t.fa;
    }
    da(t) {
        return this._a.da(t);
    }
    isEqual(t) {
        return t instanceof ur && this._a.isEqual(t._a);
    }
}

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
/**
 * Immutable class representing a geo point as latitude-longitude pair.
 * This class is directly exposed in the public API, including its constructor.
 */ class cr {
    constructor(t, e) {
        if (Di("GeoPoint", arguments, 2), Ni("GeoPoint", "number", 1, t), Ni("GeoPoint", "number", 2, e), 
        !isFinite(t) || t < -90 || t > 90) throw new M(x.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new M(x.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.Ra = t, this.Pa = e;
    }
    /**
     * Returns the latitude of this geo point, a number between -90 and 90.
     */    get latitude() {
        return this.Ra;
    }
    /**
     * Returns the longitude of this geo point, a number between -180 and 180.
     */    get longitude() {
        return this.Pa;
    }
    isEqual(t) {
        return this.Ra === t.Ra && this.Pa === t.Pa;
    }
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */    T(t) {
        return b(this.Ra, t.Ra) || b(this.Pa, t.Pa);
    }
}

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
 */ function lr(t) {
    return new ee(t, /* useProto3Json= */ !0);
}

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
 */ const _r = /^__.*__$/;

/**
 * A reference to a document in a Firebase project.
 *
 * This class serves as a common base class for the public DocumentReferences
 * exposed in the lite, full and legacy SDK.
 */ class fr {
    constructor(t, e, n) {
        this.Va = t, this.ga = e, this.ya = n;
    }
}

/** The result of parsing document data (e.g. for a setData call). */ class dr {
    constructor(t, e, n) {
        this.data = t, this.Le = e, this.fieldTransforms = n;
    }
    pa(t, e) {
        const n = [];
        return null !== this.Le ? n.push(new hn(t, this.data, this.Le, e)) : n.push(new on(t, this.data, e)), 
        this.fieldTransforms.length > 0 && n.push(new un(t, this.fieldTransforms)), n;
    }
}

/** The result of parsing "update" data (i.e. for an updateData call). */ class wr {
    constructor(t, e, n) {
        this.data = t, this.Le = e, this.fieldTransforms = n;
    }
    pa(t, e) {
        const n = [ new hn(t, this.data, this.Le, e) ];
        return this.fieldTransforms.length > 0 && n.push(new un(t, this.fieldTransforms)), 
        n;
    }
}

function Tr(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw P();
    }
}

/** A "context" object passed around while parsing user data. */ class Er {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings The settings for the parser.
     * @param databaseId The database ID of the Firestore instance.
     * @param serializer The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms A mutable list of field transforms encountered while
     *     parsing the data.
     * @param fieldMask A mutable list of field paths encountered while parsing
     *     the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    constructor(t, e, n, s, i, r) {
        this.settings = t, this.s = e, this.serializer = n, this.ignoreUndefinedProperties = s, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.ba(), this.fieldTransforms = i || [], this.Le = r || [];
    }
    get path() {
        return this.settings.path;
    }
    get wa() {
        return this.settings.wa;
    }
    /** Returns a new context with the specified settings overwritten. */    va(t) {
        return new Er(Object.assign(Object.assign({}, this.settings), t), this.s, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.Le);
    }
    Sa(t) {
        var e;
        const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), s = this.va({
            path: n,
            Ia: !1
        });
        return s.Da(t), s;
    }
    Ca(t) {
        var e;
        const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), s = this.va({
            path: n,
            Ia: !1
        });
        return s.ba(), s;
    }
    Fa(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.va({
            path: void 0,
            Ia: !0
        });
    }
    Ta(t) {
        return Sr(t, this.settings.methodName, this.settings.Na || !1, this.path, this.settings.Ea);
    }
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */    contains(t) {
        return void 0 !== this.Le.find(e => t.D(e)) || void 0 !== this.fieldTransforms.find(e => t.D(e.field));
    }
    ba() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (let t = 0; t < this.path.length; t++) this.Da(this.path.get(t));
    }
    Da(t) {
        if (0 === t.length) throw this.Ta("Document fields must not be empty");
        if (Tr(this.wa) && _r.test(t)) throw this.Ta('Document fields cannot begin and end with "__"');
    }
}

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */ class Ir {
    constructor(t, e, n) {
        this.s = t, this.ignoreUndefinedProperties = e, this.serializer = n || lr(t);
    }
    /** Creates a new top-level parse context. */    $a(t, e, n, s = !1) {
        return new Er({
            wa: t,
            methodName: e,
            Ea: n,
            path: Q.k(),
            Ia: !1,
            Na: s
        }, this.s, this.serializer, this.ignoreUndefinedProperties);
    }
}

/** Parse document data from a set() call. */ function mr(t, e, n, s, i, r = {}) {
    const o = t.$a(r.merge || r.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, i);
    pr("Data must be an object, but it was:", o, s);
    const h = gr(s, o);
    let a, u;
    if (r.merge) a = new Ge(o.Le), u = o.fieldTransforms; else if (r.mergeFields) {
        const t = [];
        for (const s of r.mergeFields) {
            let i;
            if (s instanceof Xi) i = s.la; else {
                if ("string" != typeof s) throw P();
                i = vr(e, s, n);
            }
            if (!o.contains(i)) throw new M(x.INVALID_ARGUMENT, `Field '${i}' is specified in your field mask but missing from your input data.`);
            Dr(t, i) || t.push(i);
        }
        a = new Ge(t), u = o.fieldTransforms.filter(t => a.Ke(t.field));
    } else a = null, u = o.fieldTransforms;
    return new dr(new dn(h), a, u);
}

/** Parse update data from an update() call. */ function Ar(t, e, n, s) {
    const i = t.$a(1 /* Update */ , e, n);
    pr("Data must be an object, but it was:", i, s);
    const r = [], o = new wn;
    N(s, (t, s) => {
        const h = vr(e, t, n), a = i.Ca(h);
        if (s instanceof er && s._a instanceof nr) 
        // Add it to the field mask, but don't add anything to updateData.
        r.push(h); else {
            const t = Vr(s, a);
            null != t && (r.push(h), o.set(h, t));
        }
    });
    const h = new Ge(r);
    return new wr(o.ze(), h, i.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function Rr(t, e, n, s, i, r) {
    const o = t.$a(1 /* Update */ , e, n), h = [ br(e, s, n) ], a = [ i ];
    if (r.length % 2 != 0) throw new M(x.INVALID_ARGUMENT, `Function ${e}() needs to be called with an even number ` + "of arguments that alternate between field names and values.");
    for (let t = 0; t < r.length; t += 2) h.push(br(e, r[t])), a.push(r[t + 1]);
    const u = [], c = new wn;
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (let t = h.length - 1; t >= 0; --t) if (!Dr(u, h[t])) {
        const e = h[t], n = a[t], s = o.Ca(e);
        if (n instanceof er && n._a instanceof nr) 
        // Add it to the field mask, but don't add anything to updateData.
        u.push(e); else {
            const t = Vr(n, s);
            null != t && (u.push(e), c.set(e, t));
        }
    }
    const l = new Ge(u);
    return new wr(c.ze(), l, o.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function Pr(t, e, n, s = !1) {
    return Vr(n, t.$a(s ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input Data to be parsed.
 * @param context A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @return The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function Vr(t, e) {
    if (yr(t)) return pr("Unsupported field value:", e, t), gr(t, e);
    if (t instanceof er) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!Tr(e.wa)) throw e.Ta(`${t.fa}() can only be used with update() and set()`);
        if (!e.path) throw e.Ta(`${t.fa}() is not currently supported inside arrays`);
        const n = t.da(e);
        n && e.fieldTransforms.push(n);
    }
    /**
 * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
 *
 * @return The parsed value
 */ (t, e), null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.Le.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.Ia && 4 /* ArrayArgument */ !== e.wa) throw e.Ta("Nested arrays are not supported");
        return function(t, e) {
            const n = [];
            let s = 0;
            for (const i of t) {
                let t = Vr(i, e.Fa(s));
                null == t && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                t = {
                    nullValue: "NULL_VALUE"
                }), n.push(t), s++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (null === t) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return ie(e.serializer, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            const n = O.fromDate(t);
            return {
                timestampValue: re(e.serializer, n)
            };
        }
        if (t instanceof O) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            const n = new O(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: re(e.serializer, n)
            };
        }
        if (t instanceof cr) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof Ji) return {
            bytesValue: oe(e.serializer, t)
        };
        if (t instanceof fr) {
            const n = e.s, s = t.Va;
            if (!s.isEqual(n)) throw e.Ta("Document reference is for database " + `${s.projectId}/${s.database} but should be ` + `for database ${n.projectId}/${n.database}`);
            return {
                referenceValue: ue(t.Va || e.s, t.ga.path)
            };
        }
        if (void 0 === t && e.ignoreUndefinedProperties) return null;
        throw e.Ta(`Unsupported field value: ${Ui(t)}`);
    }
    /**
 * Checks whether an object looks like a JSON object that should be converted
 * into a struct. Normal class/prototype instances are considered to look like
 * JSON objects since they should be converted to a struct value. Arrays, Dates,
 * GeoPoints, etc. are not considered to look like JSON objects since they map
 * to specific FieldValue types other than ObjectValue.
 */ (t, e);
}

function gr(t, e) {
    const n = {};
    return $(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.Le.push(e.path) : N(t, (t, s) => {
        const i = Vr(s, e.Sa(t));
        null != i && (n[t] = i);
    }), {
        mapValue: {
            fields: n
        }
    };
}

function yr(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof O || t instanceof cr || t instanceof Ji || t instanceof fr || t instanceof er);
}

function pr(t, e, n) {
    if (!yr(n) || !qi(n)) {
        const s = Ui(n);
        throw "an object" === s ? e.Ta(t + " a custom object") : e.Ta(t + " " + s);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function br(t, e, n) {
    if (e instanceof Xi) return e.la;
    if ("string" == typeof e) return vr(t, e);
    throw Sr("Field path arguments must be of type string or FieldPath.", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
}

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName The publicly visible method name
 * @param path The dot-separated string form of a field path which will be split
 * on dots.
 * @param targetDoc The document against which the field path will be evaluated.
 */ function vr(t, e, n) {
    try {
        return function(t) {
            if (t.search(tr) >= 0) throw new M(x.INVALID_ARGUMENT, `Invalid field path (${t}). Paths must not contain ` + "'~', '*', '/', '[', or ']'");
            try {
                return new Zi(...t.split("."));
            } catch (e) {
                throw new M(x.INVALID_ARGUMENT, `Invalid field path (${t}). Paths must not be empty, ` + "begin with '.', end with '.', or contain '..'");
            }
        }(e).la;
    } catch (e) {
        throw Sr((s = e) instanceof Error ? s.message : s.toString(), t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, n);
    }
    /**
 * Extracts the message from a caught exception, which should be an Error object
 * though JS doesn't guarantee that.
 */
    var s;
    /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */}

function Sr(t, e, n, s, i) {
    const r = s && !s._(), o = void 0 !== i;
    let h = `Function ${e}() called with invalid data`;
    n && (h += " (via `toFirestore()`)"), h += ". ";
    let a = "";
    return (r || o) && (a += " (found", r && (a += ` in field ${s}`), o && (a += ` in document ${i}`), 
    a += ")"), new M(x.INVALID_ARGUMENT, h + t + a);
}

function Dr(t, e) {
    return t.some(t => t.isEqual(e));
}

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
/**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ class Cr {
    constructor(t) {
        this.uid = t;
    }
    zr() {
        return null != this.uid;
    }
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */    ka() {
        return this.zr() ? "uid:" + this.uid : "anonymous-user";
    }
    isEqual(t) {
        return t.uid === this.uid;
    }
}

/** A user with a null UID. */ Cr.UNAUTHENTICATED = new Cr(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
Cr.xa = new Cr("google-credentials-uid"), Cr.Ma = new Cr("first-party-uid");

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
class Fr {
    constructor(t, e) {
        this.user = e, this.type = "OAuth", this.Oa = {}, 
        // Set the headers using Object Literal notation to avoid minification
        this.Oa.Authorization = `Bearer ${t}`;
    }
}

/** A CredentialsProvider that always yields an empty token. */ class Nr {
    constructor() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.La = null;
    }
    getToken() {
        return Promise.resolve(null);
    }
    Ba() {}
    qa(t) {
        this.La = t, 
        // Fire with initial user.
        t(Cr.UNAUTHENTICATED);
    }
    Ua() {
        this.La = null;
    }
}

class $r {
    constructor(t) {
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */
        this.Qa = null, 
        /** Tracks the current User. */
        this.currentUser = Cr.UNAUTHENTICATED, this.Wa = !1, 
        /**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */
        this.ja = 0, 
        /** The listener registered with setChangeListener(). */
        this.La = null, this.forceRefresh = !1, this.Qa = () => {
            this.ja++, this.currentUser = this.Ka(), this.Wa = !0, this.La && this.La(this.currentUser);
        }, this.ja = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.Qa) : (
        // if auth is not available, invoke tokenListener once with null token
        this.Qa(null), t.get().then(t => {
            this.auth = t, this.Qa && 
            // tokenListener can be removed by removeChangeListener()
            this.auth.addAuthTokenListener(this.Qa);
        }, () => {}));
    }
    getToken() {
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
        const t = this.ja, e = this.forceRefresh;
        return this.forceRefresh = !1, this.auth ? this.auth.getToken(e).then(e => 
        // Cancel the request since the token changed while the request was
        // outstanding so the response is potentially for a previous user (which
        // user, we can't be sure).
        this.ja !== t ? (m("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
        this.getToken()) : e ? (V("string" == typeof e.accessToken), new Fr(e.accessToken, this.currentUser)) : null) : Promise.resolve(null);
    }
    Ba() {
        this.forceRefresh = !0;
    }
    qa(t) {
        this.La = t, 
        // Fire the initial event
        this.Wa && t(this.currentUser);
    }
    Ua() {
        this.auth && this.auth.removeAuthTokenListener(this.Qa), this.Qa = null, this.La = null;
    }
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    Ka() {
        const t = this.auth && this.auth.getUid();
        return V(null === t || "string" == typeof t), new Cr(t);
    }
}

/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */ class kr {
    constructor(t, e) {
        this.Ga = t, this.za = e, this.type = "FirstParty", this.user = Cr.Ma;
    }
    get Oa() {
        const t = {
            "X-Goog-AuthUser": this.za
        }, e = this.Ga.auth.Ha([]);
        return e && (t.Authorization = e), t;
    }
}

/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */ class xr {
    constructor(t, e) {
        this.Ga = t, this.za = e;
    }
    getToken() {
        return Promise.resolve(new kr(this.Ga, this.za));
    }
    qa(t) {
        // Fire with initial uid.
        t(Cr.Ma);
    }
    Ua() {}
    Ba() {}
}

/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */
/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */
class Mr {
    constructor(t, e, n, s, i, r) {
        this.bs = t, this.Ya = n, this.Ja = s, this.Xa = i, this.listener = r, this.state = 0 /* Initial */ , 
        /**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */
        this.Za = 0, this.tu = null, this.stream = null, this.$o = new Jn(t, e);
    }
    /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */    eu() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */    nu() {
        return 2 /* Open */ === this.state;
    }
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */    start() {
        3 /* Error */ !== this.state ? this.auth() : this.su();
    }
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */    async stop() {
        this.eu() && await this.close(0 /* Initial */);
    }
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */    iu() {
        this.state = 0 /* Initial */ , this.$o.reset();
    }
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */    ru() {
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
        this.nu() && null === this.tu && (this.tu = this.bs.Os(this.Ya, 6e4, () => this.ou()));
    }
    /** Sends a message to the underlying stream. */    hu(t) {
        this.au(), this.stream.send(t);
    }
    /** Called by the idle timer when the stream should close due to inactivity. */    async ou() {
        if (this.nu()) 
        // When timing out an idle stream there's no reason to force the stream into backoff when
        // it restarts so set the stream state to Initial instead of Error.
        return this.close(0 /* Initial */);
    }
    /** Marks the stream as active again. */    au() {
        this.tu && (this.tu.cancel(), this.tu = null);
    }
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState the intended state of the stream after closing.
     * @param error the error the connection was closed with.
     */    async close(t, e) {
        // Cancel any outstanding timers (they're guaranteed not to execute).
        this.au(), this.$o.cancel(), 
        // Invalidates any stream-related callbacks (e.g. from auth or the
        // underlying stream), guaranteeing they won't execute.
        this.Za++, 3 /* Error */ !== t ? 
        // If this is an intentional close ensure we don't delay our next connection attempt.
        this.$o.reset() : e && e.code === x.RESOURCE_EXHAUSTED ? (
        // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
        A(e.toString()), A("Using maximum backoff delay to prevent overloading the backend."), 
        this.$o.ks()) : e && e.code === x.UNAUTHENTICATED && 
        // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
        // just expired.
        this.Xa.Ba(), 
        // Clean up the underlying stream because we are no longer interested in events.
        null !== this.stream && (this.uu(), this.stream.close(), this.stream = null), 
        // This state must be assigned before calling onClose() to allow the callback to
        // inhibit backoff or otherwise manipulate the state in its non-started state.
        this.state = t, 
        // Notify the listener that the stream closed.
        await this.listener.cu(e);
    }
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */    uu() {}
    auth() {
        this.state = 1 /* Starting */;
        const t = this.lu(this.Za), e = this.Za;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.Xa.getToken().then(t => {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            this.Za === e && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            this._u(t);
        }, e => {
            t(() => {
                const t = new M(x.UNKNOWN, "Fetching auth token failed: " + e.message);
                return this.fu(t);
            });
        });
    }
    _u(t) {
        const e = this.lu(this.Za);
        this.stream = this.du(t), this.stream.wu(() => {
            e(() => (this.state = 2 /* Open */ , this.listener.wu()));
        }), this.stream.cu(t => {
            e(() => this.fu(t));
        }), this.stream.onMessage(t => {
            e(() => this.onMessage(t));
        });
    }
    su() {
        this.state = 4 /* Backoff */ , this.$o.xs(async () => {
            this.state = 0 /* Initial */ , this.start();
        });
    }
    // Visible for tests
    fu(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return m("PersistentStream", `close with error: ${t}`), this.stream = null, this.close(3 /* Error */ , t);
    }
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */    lu(t) {
        return e => {
            this.bs.cr(() => this.Za === t ? e() : (m("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
            Promise.resolve()));
        };
    }
}

/**
 * A PersistentStream that implements the Listen RPC.
 *
 * Once the Listen stream has called the onOpen() listener, any number of
 * listen() and unlisten() calls can be made to control what changes will be
 * sent from the server for ListenResponses.
 */ class Or extends Mr {
    constructor(t, e, n, s, i) {
        super(t, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , e, n, i), 
        this.serializer = s;
    }
    du(t) {
        return this.Ja.Tu("Listen", t);
    }
    onMessage(t) {
        // A successful response means the stream is healthy
        this.$o.reset();
        const e = me(this.serializer, t), n = function(t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return L.min();
            const e = t.targetChange;
            return e.targetIds && e.targetIds.length ? L.min() : e.readTime ? ae(e.readTime) : L.min();
        }(t);
        return this.listener.Eu(e, n);
    }
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */    Iu(t) {
        const e = {};
        e.database = we(this.serializer), e.addTarget = function(t, e) {
            let n;
            const s = e.target;
            return n = Z(s) ? {
                documents: Ve(t, s)
            } : {
                query: ge(t, s)
            }, n.targetId = e.targetId, e.resumeToken.H() > 0 && (n.resumeToken = oe(t, e.resumeToken)), 
            n;
        }(this.serializer, t);
        const n = pe(this.serializer, t);
        n && (e.labels = n), this.hu(e);
    }
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */    mu(t) {
        const e = {};
        e.database = we(this.serializer), e.removeTarget = t, this.hu(e);
    }
}

/**
 * A Stream that implements the Write RPC.
 *
 * The Write RPC requires the caller to maintain special streamToken
 * state in between calls, to help the server understand which responses the
 * client has processed by the time the next request is made. Every response
 * will contain a streamToken; this value must be passed to the next
 * request.
 *
 * After calling start() on this stream, the next request must be a handshake,
 * containing whatever streamToken is on hand. Once a response to this
 * request is received, all pending mutations may be submitted. When
 * submitting multiple batches of mutations at the same time, it's
 * okay to use the same streamToken for the calls to writeMutations.
 *
 * TODO(b/33271235): Use proto types
 */ class Lr extends Mr {
    constructor(t, e, n, s, i) {
        super(t, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , e, n, i), 
        this.serializer = s, this.Au = !1;
    }
    /**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */    get Ru() {
        return this.Au;
    }
    // Override of PersistentStream.start
    start() {
        this.Au = !1, this.lastStreamToken = void 0, super.start();
    }
    uu() {
        this.Au && this.Pu([]);
    }
    du(t) {
        return this.Ja.Tu("Write", t);
    }
    onMessage(t) {
        if (
        // Always capture the last stream token.
        V(!!t.streamToken), this.lastStreamToken = t.streamToken, this.Au) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.$o.reset();
            const e = Pe(t.writeResults, t.commitTime), n = ae(t.commitTime);
            return this.listener.Vu(n, e);
        }
        // The first response is always the handshake response
        return V(!t.writeResults || 0 === t.writeResults.length), this.Au = !0, this.listener.gu();
    }
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */    yu() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        const t = {};
        t.database = we(this.serializer), this.hu(t);
    }
    /** Sends a group of mutations to the Firestore backend to apply. */    Pu(t) {
        const e = {
            streamToken: this.lastStreamToken,
            writes: t.map(t => Ae(this.serializer, t))
        };
        this.hu(e);
    }
}

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
/**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */
/**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */
class Br extends class {
    constructor() {
        // Make sure that the structural type of `Datastore` is unique.
        // See https://github.com/microsoft/TypeScript/issues/5451
        this.je = void 0;
    }
} {
    constructor(t, e, n) {
        super(), this.Ja = t, this.credentials = e, this.serializer = n, this.pu = !1;
    }
    bu() {
        if (this.pu) throw new M(x.FAILED_PRECONDITION, "The client has already been terminated.");
    }
    /** Gets an auth token and invokes the provided RPC. */    vu(t, e) {
        return this.bu(), this.credentials.getToken().then(n => this.Ja.vu(t, e, n)).catch(t => {
            throw t.code === x.UNAUTHENTICATED && this.credentials.Ba(), t;
        });
    }
    /** Gets an auth token and invokes the provided RPC with streamed results. */    Su(t, e) {
        return this.bu(), this.credentials.getToken().then(n => this.Ja.Su(t, e, n)).catch(t => {
            throw t.code === x.UNAUTHENTICATED && this.credentials.Ba(), t;
        });
    }
}

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
/**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */
class qr {
    constructor(t) {
        this.Du = t, 
        // The version of each document that was read during this transaction.
        this.Cu = new Map, this.mutations = [], this.Fu = !1, 
        /**
         * A deferred usage error that occurred previously in this transaction that
         * will cause the transaction to fail once it actually commits.
         */
        this.Nu = null, 
        /**
         * Set of documents that have been written in the transaction.
         *
         * When there's more than one write to the same key in a transaction, any
         * writes after the first are handled differently.
         */
        this.$u = new Set;
    }
    async ku(t) {
        if (this.xu(), this.mutations.length > 0) throw new M(x.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
        const e = await async function(t, e) {
            const n = g(t), s = {
                database: we(n.serializer),
                documents: e.map(t => le(n.serializer, t))
            }, i = await n.Su("BatchGetDocuments", s), r = new Map;
            i.forEach(t => {
                const e = Ie(n.serializer, t);
                r.set(e.key.toString(), e);
            });
            const o = [];
            return e.forEach(t => {
                const e = r.get(t.toString());
                V(!!e), o.push(e);
            }), o;
        }(this.Du, t);
        return e.forEach(t => {
            t instanceof mn || t instanceof In ? this.Mu(t) : P();
        }), e;
    }
    set(t, e) {
        this.write(e.pa(t, this.Ue(t))), this.$u.add(t);
    }
    update(t, e) {
        try {
            this.write(e.pa(t, this.Ou(t)));
        } catch (t) {
            this.Nu = t;
        }
        this.$u.add(t);
    }
    delete(t) {
        this.write([ new _n(t, this.Ue(t)) ]), this.$u.add(t);
    }
    async commit() {
        if (this.xu(), this.Nu) throw this.Nu;
        const t = this.Cu;
        // For each mutation, note that the doc was written.
                this.mutations.forEach(e => {
            t.delete(e.key.toString());
        }), 
        // For each document that was read but not written to, we want to perform
        // a `verify` operation.
        t.forEach((t, e) => {
            const n = new W(q.$(e));
            this.mutations.push(new fn(n, this.Ue(n)));
        }), await async function(t, e) {
            const n = g(t), s = {
                database: we(n.serializer),
                writes: e.map(t => Ae(n.serializer, t))
            };
            await n.vu("Commit", s);
        }(this.Du, this.mutations), this.Fu = !0;
    }
    Mu(t) {
        let e;
        if (t instanceof In) e = t.version; else {
            if (!(t instanceof mn)) throw P();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
            e = L.min();
        }
        const n = this.Cu.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new M(x.ABORTED, "Document version changed between two reads.");
        } else this.Cu.set(t.key.toString(), e);
    }
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */    Ue(t) {
        const e = this.Cu.get(t.toString());
        return !this.$u.has(t) && e ? Je.updateTime(e) : Je.Qe();
    }
    /**
     * Returns the precondition for a document if the operation is an update.
     */    Ou(t) {
        const e = this.Cu.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.$u.has(t) && e) {
            if (e.isEqual(L.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new M(x.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return Je.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
        return Je.exists(!0);
    }
    write(t) {
        this.xu(), this.mutations = this.mutations.concat(t);
    }
    xu() {}
}

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
/**
 * A component used by the RemoteStore to track the OnlineState (that is,
 * whether or not the client as a whole should be considered to be online or
 * offline), implementing the appropriate heuristics.
 *
 * In particular, when the client is trying to connect to the backend, we
 * allow up to MAX_WATCH_STREAM_FAILURES within ONLINE_STATE_TIMEOUT_MS for
 * a connection to succeed. If we have too many failures or the timeout elapses,
 * then we set the OnlineState to Offline, and the client will behave as if
 * it is offline (get()s will return cached data, etc.).
 */
class Ur {
    constructor(t, e) {
        this.mo = t, this.Lu = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */
        this.Bu = 0, 
        /**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */
        this.qu = null, 
        /**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */
        this.Uu = !0;
    }
    /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */    Qu() {
        0 === this.Bu && (this.Wu("Unknown" /* Unknown */), this.qu = this.mo.Os("online_state_timeout" /* OnlineStateTimeout */ , 1e4, () => (this.qu = null, 
        this.ju("Backend didn't respond within 10 seconds."), this.Wu("Offline" /* Offline */), 
        Promise.resolve())));
    }
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */    Ku(t) {
        "Online" /* Online */ === this.state ? this.Wu("Unknown" /* Unknown */) : (this.Bu++, 
        this.Bu >= 1 && (this.Gu(), this.ju("Connection failed 1 " + `times. Most recent error: ${t.toString()}`), 
        this.Wu("Offline" /* Offline */)));
    }
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */    set(t) {
        this.Gu(), this.Bu = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Uu = !1), this.Wu(t);
    }
    Wu(t) {
        t !== this.state && (this.state = t, this.Lu(t));
    }
    ju(t) {
        const e = `Could not reach Cloud Firestore backend. ${t}\n` + "This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Uu ? (A(e), this.Uu = !1) : m("OnlineStateTracker", e);
    }
    Gu() {
        null !== this.qu && (this.qu.cancel(), this.qu = null);
    }
}

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
/**
 * RemoteStore - An interface to remotely stored data, basically providing a
 * wrapper around the Datastore that is more reliable for the rest of the
 * system.
 *
 * RemoteStore is responsible for maintaining the connection to the server.
 * - maintaining a list of active listens.
 * - reconnecting when the connection is dropped.
 * - resuming all the active listens on reconnect.
 *
 * RemoteStore handles all incoming events from the Datastore.
 * - listening to the watch stream and repackaging the events as RemoteEvents
 * - notifying SyncEngine of any changes to the active listens.
 *
 * RemoteStore takes writes from other components and handles them reliably.
 * - pulling pending mutations from LocalStore and sending them to Datastore.
 * - retrying mutations that failed because of network problems.
 * - acking mutations to the SyncEngine once they are accepted or rejected.
 */
class Qr {
    constructor(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    t, 
    /** The client-side proxy for interacting with the backend. */
    e, n, s, i) {
        this.zu = t, this.Du = e, this.mo = n, 
        /**
         * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
         * LocalStore via fillWritePipeline() and have or will send to the write
         * stream.
         *
         * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
         * restart the write stream. When the stream is established the writes in the
         * pipeline will be sent in order.
         *
         * Writes remain in writePipeline until they are acknowledged by the backend
         * and thus will automatically be re-sent if the stream is interrupted /
         * restarted before they're acknowledged.
         *
         * Write responses from the backend are linked to their originating request
         * purely based on order, and so we can just shift() writes from the front of
         * the writePipeline as we receive responses.
         */
        this.Hu = [], 
        /**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */
        this.Yu = new Map, this.Ju = null, 
        /**
         * A set of reasons for why the RemoteStore may be offline. If empty, the
         * RemoteStore may start its network connections.
         */
        this.Xu = new Set, this.Zu = i, this.Zu.tc(t => {
            n.cr(async () => {
                // Porting Note: Unlike iOS, `restartNetwork()` is called even when the
                // network becomes unreachable as we don't have any other way to tear
                // down our streams.
                this.ec() && (m("RemoteStore", "Restarting streams for network reachability change."), 
                await this.nc());
            });
        }), this.sc = new Ur(n, s), 
        // Create streams (but note they're not started yet).
        this.ic = function(t, e, n) {
            const s = g(t);
            return new Or(e, s.Ja, s.credentials, s.serializer, n);
        }(this.Du, n, {
            wu: this.rc.bind(this),
            cu: this.oc.bind(this),
            Eu: this.hc.bind(this)
        }), this.ac = function(t, e, n) {
            const s = g(t);
            return new Lr(e, s.Ja, s.credentials, s.serializer, n);
        }(this.Du, n, {
            wu: this.uc.bind(this),
            cu: this.cc.bind(this),
            gu: this.lc.bind(this),
            Vu: this.Vu.bind(this)
        });
    }
    /**
     * Starts up the remote store, creating streams, restoring state from
     * LocalStore, etc.
     */    start() {
        return this.enableNetwork();
    }
    /** Re-enables the network. Idempotent. */    enableNetwork() {
        return this.Xu.delete(0 /* UserDisabled */), this._c();
    }
    async _c() {
        this.ec() && (this.fc() ? this.dc() : this.sc.set("Unknown" /* Unknown */), 
        // This will start the write stream if necessary.
        await this.wc());
    }
    /**
     * Temporarily disables the network. The network can be re-enabled using
     * enableNetwork().
     */    async disableNetwork() {
        this.Xu.add(0 /* UserDisabled */), await this.Tc(), 
        // Set the OnlineState to Offline so get()s return from cache, etc.
        this.sc.set("Offline" /* Offline */);
    }
    async Tc() {
        await this.ac.stop(), await this.ic.stop(), this.Hu.length > 0 && (m("RemoteStore", `Stopping write stream with ${this.Hu.length} pending writes`), 
        this.Hu = []), this.Ec();
    }
    async gr() {
        m("RemoteStore", "RemoteStore shutting down."), this.Xu.add(5 /* Shutdown */), await this.Tc(), 
        this.Zu.gr(), 
        // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
        // triggering spurious listener events with cached data, etc.
        this.sc.set("Unknown" /* Unknown */);
    }
    /**
     * Starts new listen for the given target. Uses resume token if provided. It
     * is a no-op if the target of given `TargetData` is already being listened to.
     */    listen(t) {
        this.Yu.has(t.targetId) || (
        // Mark this as something the client is currently listening for.
        this.Yu.set(t.targetId, t), this.fc() ? 
        // The listen will be sent in onWatchStreamOpen
        this.dc() : this.ic.nu() && this.Ic(t));
    }
    /**
     * Removes the listen from server. It is a no-op if the given target id is
     * not being listened to.
     */    mc(t) {
        this.Yu.delete(t), this.ic.nu() && this.Ac(t), 0 === this.Yu.size && (this.ic.nu() ? this.ic.ru() : this.ec() && 
        // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        this.sc.set("Unknown" /* Unknown */));
    }
    /** {@link TargetMetadataProvider.getTargetDataForTarget} */    Me(t) {
        return this.Yu.get(t) || null;
    }
    /** {@link TargetMetadataProvider.getRemoteKeysForTarget} */    xe(t) {
        return this.Rc.xe(t);
    }
    /**
     * We need to increment the the expected number of pending responses we're due
     * from watch so we wait for the ack to process any messages from this target.
     */    Ic(t) {
        this.Ju.de(t.targetId), this.ic.Iu(t);
    }
    /**
     * We need to increment the expected number of pending responses we're due
     * from watch so we wait for the removal on the server before we process any
     * messages from this target.
     */    Ac(t) {
        this.Ju.de(t), this.ic.mu(t);
    }
    dc() {
        this.Ju = new Ct(this), this.ic.start(), this.sc.Qu();
    }
    /**
     * Returns whether the watch stream should be started because it's necessary
     * and has not yet been started.
     */    fc() {
        return this.ec() && !this.ic.eu() && this.Yu.size > 0;
    }
    ec() {
        return 0 === this.Xu.size;
    }
    Ec() {
        this.Ju = null;
    }
    async rc() {
        this.Yu.forEach((t, e) => {
            this.Ic(t);
        });
    }
    async oc(t) {
        this.Ec(), 
        // If we still need the watch stream, retry the connection.
        this.fc() ? (this.sc.Ku(t), this.dc()) : 
        // No need to restart watch stream because there are no active targets.
        // The online state is set to unknown because there is no active attempt
        // at establishing a connection
        this.sc.set("Unknown" /* Unknown */);
    }
    async hc(t, e) {
        if (
        // Mark the client as online since we got a message from the server
        this.sc.set("Online" /* Online */), t instanceof St && 2 /* Removed */ === t.state && t.cause) 
        // There was an error on a target, don't wait for a consistent snapshot
        // to raise events
        try {
            await this.Pc(t);
        } catch (e) {
            m("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), e), 
            await this.Vc(e);
        } else if (t instanceof bt ? this.Ju.Pe(t) : t instanceof vt ? this.Ju.De(t) : this.Ju.ye(t), 
        !e.isEqual(L.min())) try {
            const t = await this.zu.mi();
            e.o(t) >= 0 && 
            // We have received a target change with a global snapshot if the snapshot
            // version is not equal to SnapshotVersion.min().
            await this.gc(e);
        } catch (t) {
            m("RemoteStore", "Failed to raise snapshot:", t), await this.Vc(t);
        }
    }
    /**
     * Recovery logic for IndexedDB errors that takes the network offline until
     * `op` succeeds. Retries are scheduled with backoff using
     * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
     * validated via a generic operation.
     *
     * The returned Promise is resolved once the network is disabled and before
     * any retry attempt.
     */    async Vc(t, e) {
        if (!hi(t)) throw t;
        this.Xu.add(1 /* IndexedDbFailed */), 
        // Disable network and raise offline snapshots
        await this.Tc(), this.sc.set("Offline" /* Offline */), e || (
        // Use a simple read operation to determine if IndexedDB recovered.
        // Ideally, we would expose a health check directly on SimpleDb, but
        // RemoteStore only has access to persistence through LocalStore.
        e = () => this.zu.mi()), 
        // Probe IndexedDB periodically and re-enable network
        this.mo._r(async () => {
            m("RemoteStore", "Retrying IndexedDB access"), await e(), this.Xu.delete(1 /* IndexedDbFailed */), 
            await this._c();
        });
    }
    /**
     * Executes `op`. If `op` fails, takes the network offline until `op`
     * succeeds. Returns after the first attempt.
     */    yc(t) {
        return t().catch(e => this.Vc(e, t));
    }
    /**
     * Takes a batch of changes from the Datastore, repackages them as a
     * RemoteEvent, and passes that on to the listener, which is typically the
     * SyncEngine.
     */    gc(t) {
        const e = this.Ju.Ne(t);
        // Update in-memory resume tokens. LocalStore will update the
        // persistent view of these when applying the completed RemoteEvent.
                // Finally raise remote event
        return e.Qt.forEach((e, n) => {
            if (e.resumeToken.H() > 0) {
                const s = this.Yu.get(n);
                // A watched target might have been removed already.
                                s && this.Yu.set(n, s.tt(e.resumeToken, t));
            }
        }), 
        // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        e.Wt.forEach(t => {
            const e = this.Yu.get(t);
            if (!e) 
            // A watched target might have been removed already.
            return;
            // Clear the resume token for the target, since we're in a known mismatch
            // state.
                        this.Yu.set(t, e.tt(tt.Y, e.X)), 
            // Cause a hard reset by unwatching and rewatching immediately, but
            // deliberately don't send a resume token so that we get a full update.
            this.Ac(t);
            // Mark the target we send as being on behalf of an existence filter
            // mismatch, but don't actually retain that in listenTargets. This ensures
            // that we flag the first re-listen this way without impacting future
            // listens of this target (that might happen e.g. on reconnect).
            const n = new et(e.target, t, 1 /* ExistenceFilterMismatch */ , e.sequenceNumber);
            this.Ic(n);
        }), this.Rc.Lh(e);
    }
    /** Handles an error on a target */    async Pc(t) {
        const e = t.cause;
        for (const n of t.targetIds) 
        // A watched target might have been removed already.
        this.Yu.has(n) && (await this.Rc.pc(n, e), this.Yu.delete(n), this.Ju.removeTarget(n));
    }
    /**
     * Attempts to fill our write pipeline with writes from the LocalStore.
     *
     * Called internally to bootstrap or refill the write pipeline and by
     * SyncEngine whenever there are new mutations to process.
     *
     * Starts the write stream if necessary.
     */    async wc() {
        let t = this.Hu.length > 0 ? this.Hu[this.Hu.length - 1].batchId : -1;
        for (;this.bc(); ) try {
            const e = await this.zu.Qh(t);
            if (null === e) {
                0 === this.Hu.length && this.ac.ru();
                break;
            }
            t = e.batchId, this.vc(e);
        } catch (t) {
            await this.Vc(t);
        }
        this.Sc() && this.Dc();
    }
    /**
     * Returns true if we can add to the write pipeline (i.e. the network is
     * enabled and the write pipeline is not full).
     */    bc() {
        return this.ec() && this.Hu.length < 10;
    }
    // For testing
    Cc() {
        return this.Hu.length;
    }
    /**
     * Queues additional writes to be sent to the write stream, sending them
     * immediately if the write stream is established.
     */    vc(t) {
        this.Hu.push(t), this.ac.nu() && this.ac.Ru && this.ac.Pu(t.mutations);
    }
    Sc() {
        return this.ec() && !this.ac.eu() && this.Hu.length > 0;
    }
    Dc() {
        this.ac.start();
    }
    async uc() {
        this.ac.yu();
    }
    async lc() {
        // Send the write pipeline now that the stream is established.
        for (const t of this.Hu) this.ac.Pu(t.mutations);
    }
    async Vu(t, e) {
        const n = this.Hu.shift(), s = Un.from(n, t, e);
        await this.yc(() => this.Rc.Fc(s)), 
        // It's possible that with the completion of this mutation another
        // slot has freed up.
        await this.wc();
    }
    async cc(t) {
        // If the write stream closed after the write handshake completes, a write
        // operation failed and we fail the pending operation.
        t && this.ac.Ru && 
        // This error affects the actual write.
        await this.Nc(t), 
        // The write stream might have been started by refilling the write
        // pipeline for failed writes
        this.Sc() && this.Dc();
    }
    async Nc(t) {
        // Only handle permanent errors here. If it's transient, just let the retry
        // logic kick in.
        if (rt(e = t.code) && e !== x.ABORTED) {
            // This was a permanent error, the request itself was the problem
            // so it's not going to succeed if we resend it.
            const e = this.Hu.shift();
            // In this case it's also unlikely that the server itself is melting
            // down -- this was just a bad request so inhibit backoff on the next
            // restart.
                        this.ac.iu(), await this.yc(() => this.Rc.$c(e.batchId, t)), 
            // It's possible that with the completion of this mutation
            // another slot has freed up.
            await this.wc();
        }
        var e;
        /**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */    }
    kc() {
        return new qr(this.Du);
    }
    async nc() {
        this.Xu.add(4 /* ConnectivityChange */), await this.Tc(), this.sc.set("Unknown" /* Unknown */), 
        this.ac.iu(), this.ic.iu(), this.Xu.delete(4 /* ConnectivityChange */), await this._c();
    }
    async xc(t) {
        this.mo.Wo(), 
        // Tear down and re-create our network streams. This will ensure we get a
        // fresh auth token for the new user and re-fill the write pipeline with
        // new mutations from the LocalStore (since mutations are per-user).
        m("RemoteStore", "RemoteStore received new credentials"), this.Xu.add(3 /* CredentialChange */), 
        await this.Tc(), this.sc.set("Unknown" /* Unknown */), await this.Rc.xc(t), this.Xu.delete(3 /* CredentialChange */), 
        await this._c();
    }
    /**
     * Toggles the network state when the client gains or loses its primary lease.
     */    async Mc(t) {
        t ? (this.Xu.delete(2 /* IsSecondary */), await this._c()) : t || (this.Xu.add(2 /* IsSecondary */), 
        await this.Tc(), this.sc.set("Unknown" /* Unknown */));
    }
}

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
// The format of the LocalStorage key that stores the client state is:
//     firestore_clients_<persistence_prefix>_<instance_key>
/** Assembles the key for a client state in WebStorage */
function Wr(t, e) {
    return `firestore_clients_${t}_${e}`;
}

// The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>

// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.
/** Assembles the key for a mutation batch in WebStorage */
function jr(t, e, n) {
    let s = `firestore_mutations_${t}_${n}`;
    return e.zr() && (s += `_${e.uid}`), s;
}

// The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>
/** Assembles the key for a query state in WebStorage */
function Kr(t, e) {
    return `firestore_targets_${t}_${e}`;
}

// The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>
/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing
class Gr {
    constructor(t, e, n, s) {
        this.user = t, this.batchId = e, this.state = n, this.error = s;
    }
    /**
     * Parses a MutationMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    static Oc(t, e, n) {
        const s = JSON.parse(n);
        let i = "object" == typeof s && -1 !== [ "pending", "acknowledged", "rejected" ].indexOf(s.state) && (void 0 === s.error || "object" == typeof s.error), r = void 0;
        return i && s.error && (i = "string" == typeof s.error.message && "string" == typeof s.error.code, 
        i && (r = new M(s.error.code, s.error.message))), i ? new Gr(t, e, s.state, r) : (A("SharedClientState", `Failed to parse mutation state for ID '${e}': ${n}`), 
        null);
    }
    Lc() {
        const t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }
}

/**
 * Holds the state of a query target, including its target ID and whether the
 * target is 'not-current', 'current' or 'rejected'.
 */
// Visible for testing
class zr {
    constructor(t, e, n) {
        this.targetId = t, this.state = e, this.error = n;
    }
    /**
     * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    static Oc(t, e) {
        const n = JSON.parse(e);
        let s = "object" == typeof n && -1 !== [ "not-current", "current", "rejected" ].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error), i = void 0;
        return s && n.error && (s = "string" == typeof n.error.message && "string" == typeof n.error.code, 
        s && (i = new M(n.error.code, n.error.message))), s ? new zr(t, n.state, i) : (A("SharedClientState", `Failed to parse target state for ID '${t}': ${e}`), 
        null);
    }
    Lc() {
        const t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }
}

/**
 * This class represents the immutable ClientState for a client read from
 * WebStorage, containing the list of active query targets.
 */ class Hr {
    constructor(t, e) {
        this.clientId = t, this.activeTargetIds = e;
    }
    /**
     * Parses a RemoteClientState from the JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    static Oc(t, e) {
        const n = JSON.parse(e);
        let s = "object" == typeof n && n.activeTargetIds instanceof Array, i = Rt();
        for (let t = 0; s && t < n.activeTargetIds.length; ++t) s = G(n.activeTargetIds[t]), 
        i = i.add(n.activeTargetIds[t]);
        return s ? new Hr(t, i) : (A("SharedClientState", `Failed to parse client data for instance '${t}': ${e}`), 
        null);
    }
}

/**
 * This class represents the online state for all clients participating in
 * multi-tab. The online state is only written to by the primary client, and
 * used in secondary clients to update their query views.
 */ class Yr {
    constructor(t, e) {
        this.clientId = t, this.onlineState = e;
    }
    /**
     * Parses a SharedOnlineState from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    static Oc(t) {
        const e = JSON.parse(t);
        return "object" == typeof e && -1 !== [ "Unknown", "Online", "Offline" ].indexOf(e.onlineState) && "string" == typeof e.clientId ? new Yr(e.clientId, e.onlineState) : (A("SharedClientState", `Failed to parse online state: ${t}`), 
        null);
    }
}

/**
 * Metadata state of the local client. Unlike `RemoteClientState`, this class is
 * mutable and keeps track of all pending mutations, which allows us to
 * update the range of pending mutation batch IDs as new mutations are added or
 * removed.
 *
 * The data in `LocalClientState` is not read from WebStorage and instead
 * updated via its instance methods. The updated state can be serialized via
 * `toWebStorageJSON()`.
 */
// Visible for testing.
class Jr {
    constructor() {
        this.activeTargetIds = Rt();
    }
    Bc(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }
    qc(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */    Lc() {
        const t = {
            activeTargetIds: this.activeTargetIds.F(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }
}

/**
 * `WebStorageSharedClientState` uses WebStorage (window.localStorage) as the
 * backing store for the SharedClientState. It keeps track of all active
 * clients and supports modifications of the local client's data.
 */ class Xr {
    constructor(t, e, n, s, i) {
        this.window = t, this.bs = e, this.persistenceKey = n, this.Uc = s, this.Rc = null, 
        this.Lu = null, this.Ps = null, this.Qc = this.Wc.bind(this), this.jc = new ht(b), 
        this.or = !1, 
        /**
         * Captures WebStorage events that occur before `start()` is called. These
         * events are replayed once `WebStorageSharedClientState` is started.
         */
        this.Kc = [];
        // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        const r = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.window.localStorage, this.currentUser = i, this.Gc = Wr(this.persistenceKey, this.Uc), 
        this.zc = 
        /** Assembles the key for the current sequence number. */
        function(t) {
            return `firestore_sequence_number_${t}`;
        }
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
 */ (this.persistenceKey), this.jc = this.jc.nt(this.Uc, new Jr), this.Hc = new RegExp(`^firestore_clients_${r}_([^_]*)$`), 
        this.Yc = new RegExp(`^firestore_mutations_${r}_(\\d+)(?:_(.*))?$`), this.Jc = new RegExp(`^firestore_targets_${r}_(\\d+)$`), 
        this.Xc = 
        /** Assembles the key for the online state of the primary tab. */
        function(t) {
            return `firestore_online_state_${t}`;
        }
        // The WebStorage key prefix for the key that stores the last sequence number allocated. The key
        // looks like 'firestore_sequence_number_<persistence_prefix>'.
        (this.persistenceKey), 
        // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.window.addEventListener("storage", this.Qc);
    }
    /** Returns 'true' if WebStorage is available in the current environment. */    static Hi(t) {
        return !(!t || !t.localStorage);
    }
    async start() {
        // Retrieve the list of existing clients to backfill the data in
        // SharedClientState.
        const t = await this.Rc.Sr();
        for (const e of t) {
            if (e === this.Uc) continue;
            const t = this.getItem(Wr(this.persistenceKey, e));
            if (t) {
                const n = Hr.Oc(e, t);
                n && (this.jc = this.jc.nt(n.clientId, n));
            }
        }
        this.Zc();
        // Check if there is an existing online state and call the callback handler
        // if applicable.
        const e = this.storage.getItem(this.Xc);
        if (e) {
            const t = this.tl(e);
            t && this.el(t);
        }
        for (const t of this.Kc) this.Wc(t);
        this.Kc = [], 
        // Register a window unload hook to remove the client metadata entry from
        // WebStorage even if `shutdown()` was not called.
        this.window.addEventListener("unload", () => this.gr()), this.or = !0;
    }
    ys(t) {
        this.setItem(this.zc, JSON.stringify(t));
    }
    nl() {
        return this.sl(this.jc);
    }
    il(t) {
        let e = !1;
        return this.jc.forEach((n, s) => {
            s.activeTargetIds.has(t) && (e = !0);
        }), e;
    }
    rl(t) {
        this.ol(t, "pending");
    }
    hl(t, e, n) {
        this.ol(t, e, n), 
        // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.al(t);
    }
    ul(t) {
        let e = "not-current";
        // Lookup an existing query state if the target ID was already registered
        // by another tab
                if (this.il(t)) {
            const n = this.storage.getItem(Kr(this.persistenceKey, t));
            if (n) {
                const s = zr.Oc(t, n);
                s && (e = s.state);
            }
        }
        return this.cl.Bc(t), this.Zc(), e;
    }
    ll(t) {
        this.cl.qc(t), this.Zc();
    }
    _l(t) {
        return this.cl.activeTargetIds.has(t);
    }
    fl(t) {
        this.removeItem(Kr(this.persistenceKey, t));
    }
    dl(t, e, n) {
        this.wl(t, e, n);
    }
    Ch(t, e, n) {
        e.forEach(t => {
            this.al(t);
        }), this.currentUser = t, n.forEach(t => {
            this.rl(t);
        });
    }
    Tl(t) {
        this.El(t);
    }
    gr() {
        this.or && (this.window.removeEventListener("storage", this.Qc), this.removeItem(this.Gc), 
        this.or = !1);
    }
    getItem(t) {
        const e = this.storage.getItem(t);
        return m("SharedClientState", "READ", t, e), e;
    }
    setItem(t, e) {
        m("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
    }
    removeItem(t) {
        m("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
    }
    Wc(t) {
        // Note: The function is typed to take Event to be interface-compatible with
        // `Window.addEventListener`.
        const e = t;
        if (e.storageArea === this.storage) {
            if (m("SharedClientState", "EVENT", e.key, e.newValue), e.key === this.Gc) return void A("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this.bs._r(async () => {
                if (this.or) {
                    if (null !== e.key) if (this.Hc.test(e.key)) {
                        if (null == e.newValue) {
                            const t = this.Il(e.key);
                            return this.ml(t, null);
                        }
                        {
                            const t = this.Al(e.key, e.newValue);
                            if (t) return this.ml(t.clientId, t);
                        }
                    } else if (this.Yc.test(e.key)) {
                        if (null !== e.newValue) {
                            const t = this.Rl(e.key, e.newValue);
                            if (t) return this.Pl(t);
                        }
                    } else if (this.Jc.test(e.key)) {
                        if (null !== e.newValue) {
                            const t = this.Vl(e.key, e.newValue);
                            if (t) return this.gl(t);
                        }
                    } else if (e.key === this.Xc) {
                        if (null !== e.newValue) {
                            const t = this.tl(e.newValue);
                            if (t) return this.el(t);
                        }
                    } else if (e.key === this.zc) {
                        const t = function(t) {
                            let e = Hn.ps;
                            if (null != t) try {
                                const n = JSON.parse(t);
                                V("number" == typeof n), e = n;
                            } catch (t) {
                                A("SharedClientState", "Failed to read sequence number from WebStorage", t);
                            }
                            return e;
                        }
                        /**
 * `MemorySharedClientState` is a simple implementation of SharedClientState for
 * clients using memory persistence. The state in this class remains fully
 * isolated and no synchronization is performed.
 */ (e.newValue);
                        t !== Hn.ps && this.Ps(t);
                    }
                } else this.Kc.push(e);
            });
        }
    }
    get cl() {
        return this.jc.get(this.Uc);
    }
    Zc() {
        this.setItem(this.Gc, this.cl.Lc());
    }
    ol(t, e, n) {
        const s = new Gr(this.currentUser, t, e, n), i = jr(this.persistenceKey, this.currentUser, t);
        this.setItem(i, s.Lc());
    }
    al(t) {
        const e = jr(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
    }
    El(t) {
        const e = {
            clientId: this.Uc,
            onlineState: t
        };
        this.storage.setItem(this.Xc, JSON.stringify(e));
    }
    wl(t, e, n) {
        const s = Kr(this.persistenceKey, t), i = new zr(t, e, n);
        this.setItem(s, i.Lc());
    }
    /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */    Il(t) {
        const e = this.Hc.exec(t);
        return e ? e[1] : null;
    }
    /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */    Al(t, e) {
        const n = this.Il(t);
        return Hr.Oc(n, e);
    }
    /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */    Rl(t, e) {
        const n = this.Yc.exec(t), s = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
        return Gr.Oc(new Cr(i), s, e);
    }
    /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */    Vl(t, e) {
        const n = this.Jc.exec(t), s = Number(n[1]);
        return zr.Oc(s, e);
    }
    /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */    tl(t) {
        return Yr.Oc(t);
    }
    async Pl(t) {
        if (t.user.uid === this.currentUser.uid) return this.Rc.yl(t.batchId, t.state, t.error);
        m("SharedClientState", `Ignoring mutation for non-active user ${t.user.uid}`);
    }
    gl(t) {
        return this.Rc.pl(t.targetId, t.state, t.error);
    }
    ml(t, e) {
        const n = e ? this.jc.nt(t, e) : this.jc.remove(t), s = this.sl(this.jc), i = this.sl(n), r = [], o = [];
        return i.forEach(t => {
            s.has(t) || r.push(t);
        }), s.forEach(t => {
            i.has(t) || o.push(t);
        }), this.Rc.bl(r, o).then(() => {
            this.jc = n;
        });
    }
    el(t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.jc.get(t.clientId) && this.Lu(t.onlineState);
    }
    sl(t) {
        let e = Rt();
        return t.forEach((t, n) => {
            e = e.Ct(n.activeTargetIds);
        }), e;
    }
}

class Zr {
    constructor() {
        this.vl = new Jr, this.Sl = {}, this.Rc = null, this.Lu = null, this.Ps = null;
    }
    rl(t) {
        // No op.
    }
    hl(t, e, n) {
        // No op.
    }
    ul(t) {
        return this.vl.Bc(t), this.Sl[t] || "not-current";
    }
    dl(t, e, n) {
        this.Sl[t] = e;
    }
    ll(t) {
        this.vl.qc(t);
    }
    _l(t) {
        return this.vl.activeTargetIds.has(t);
    }
    fl(t) {
        delete this.Sl[t];
    }
    nl() {
        return this.vl.activeTargetIds;
    }
    il(t) {
        return this.vl.activeTargetIds.has(t);
    }
    start() {
        return this.vl = new Jr, Promise.resolve();
    }
    Ch(t, e, n) {
        // No op.
    }
    Tl(t) {
        // No op.
    }
    gr() {}
    ys(t) {}
}

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
 */ class to {
    constructor(t) {
        this.key = t;
    }
}

class eo {
    constructor(t) {
        this.key = t;
    }
}

/**
 * View is responsible for computing the final merged truth of what docs are in
 * a query. It gets notified of local and remote changes to docs, and applies
 * the query filters and limits to determine the most correct possible results.
 */ class no {
    constructor(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.Dl = e, this.Cl = null, 
        /**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */
        this.Ht = !1, 
        /** Documents in the view but not in the remote target */
        this.Fl = mt(), 
        /** Document Keys that have local changes */
        this.Lt = mt(), this.Nl = pn(t), this.$l = new Pt(this.Nl);
    }
    /**
     * The set of remote documents that the server has told us belongs to the target associated with
     * this view.
     */    get kl() {
        return this.Dl;
    }
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges The doc changes to apply to this view.
     * @param previousChanges If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @return a new set of docs, changes, and refill flag.
     */    xl(t, e) {
        const n = e ? e.Ml : new Vt, s = e ? e.$l : this.$l;
        let i = e ? e.Lt : this.Lt, r = s, o = !1;
        // Track the last doc in a (full) limit. This is necessary, because some
        // update (a delete, or an update moving a doc past the old limit) might
        // mean there is some other document in the local cache that either should
        // come (1) between the old last limit doc and the new last document, in the
        // case of updates, or (2) after the new last document, in the case of
        // deletes. So we keep this doc at the old limit to compare the updates to.
        // Note that this should never get used in a refill (when previousChanges is
        // set), because there will only be adds -- no deletes or updates.
        const h = this.query.In() && s.size === this.query.limit ? s.last() : null, a = this.query.mn() && s.size === this.query.limit ? s.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.ot((t, e) => {
            const u = s.get(t);
            let c = e instanceof In ? e : null;
            c && (c = yn(this.query, c) ? c : null);
            const l = !!u && this.Lt.has(u.key), _ = !!c && (c.Ge || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            this.Lt.has(c.key) && c.hasCommittedMutations);
            let f = !1;
            // Calculate change
                        if (u && c) {
                u.data().isEqual(c.data()) ? l !== _ && (n.track({
                    type: 3 /* Metadata */ ,
                    doc: c
                }), f = !0) : this.Ol(u, c) || (n.track({
                    type: 2 /* Modified */ ,
                    doc: c
                }), f = !0, (h && this.Nl(c, h) > 0 || a && this.Nl(c, a) < 0) && (
                // This doc moved from inside the limit to outside the limit.
                // That means there may be some other doc in the local cache
                // that should be included instead.
                o = !0));
            } else !u && c ? (n.track({
                type: 0 /* Added */ ,
                doc: c
            }), f = !0) : u && !c && (n.track({
                type: 1 /* Removed */ ,
                doc: u
            }), f = !0, (h || a) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            o = !0));
            f && (c ? (r = r.add(c), i = _ ? i.add(t) : i.delete(t)) : (r = r.delete(t), i = i.delete(t)));
        }), this.query.In() || this.query.mn()) for (;r.size > this.query.limit; ) {
            const t = this.query.In() ? r.last() : r.first();
            r = r.delete(t.key), i = i.delete(t.key), n.track({
                type: 1 /* Removed */ ,
                doc: t
            });
        }
        return {
            $l: r,
            Ml: n,
            Ll: o,
            Lt: i
        };
    }
    Ol(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.Ge && e.hasCommittedMutations && !e.Ge;
    }
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges The set of changes to make to the view's docs.
     * @param updateLimboDocuments Whether to update limbo documents based on this
     *        change.
     * @param targetChange A target change to apply for computing limbo docs and
     *        sync state.
     * @return A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    Jn(t, e, n) {
        const s = this.$l;
        this.$l = t.$l, this.Lt = t.Lt;
        // Sort changes based on type and query comparator
        const i = t.Ml.Mt();
        i.sort((t, e) => function(t, e) {
            const n = t => {
                switch (t) {
                  case 0 /* Added */ :
                    return 1;

                  case 2 /* Modified */ :
                  case 3 /* Metadata */ :
                    // A metadata change is converted to a modified change at the public
                    // api layer.  Since we sort by document key and then change type,
                    // metadata and modified changes must be sorted equivalently.
                    return 2;

                  case 1 /* Removed */ :
                    return 0;

                  default:
                    return P();
                }
            };
            return n(t) - n(e);
        }
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
 */ (t.type, e.type) || this.Nl(t.doc, e.doc)), this.Bl(n);
        const r = e ? this.ql() : [], o = 0 === this.Fl.size && this.Ht ? 1 /* Synced */ : 0 /* Local */ , h = o !== this.Cl;
        if (this.Cl = o, 0 !== i.length || h) {
            return {
                snapshot: new gt(this.query, t.$l, s, i, t.Lt, 0 /* Local */ === o, h, 
                /* excludesMetadataChanges= */ !1),
                Ul: r
            };
        }
        // no changes
        return {
            Ul: r
        };
    }
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */    Ql(t) {
        return this.Ht && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.Ht = !1, this.Jn({
            $l: this.$l,
            Ml: new Vt,
            Lt: this.Lt,
            Ll: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            Ul: []
        };
    }
    /**
     * Returns whether the doc for the given key should be in limbo.
     */    Wl(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.Dl.has(t) && (
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.$l.has(t) && !this.$l.get(t).Ge);
    }
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */    Bl(t) {
        t && (t.Yt.forEach(t => this.Dl = this.Dl.add(t)), t.Jt.forEach(t => {}), t.Xt.forEach(t => this.Dl = this.Dl.delete(t)), 
        this.Ht = t.Ht);
    }
    ql() {
        // We can only determine limbo documents when we're in-sync with the server.
        if (!this.Ht) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                const t = this.Fl;
        this.Fl = mt(), this.$l.forEach(t => {
            this.Wl(t.key) && (this.Fl = this.Fl.add(t.key));
        });
        // Diff the new limbo docs with the old limbo docs.
        const e = [];
        return t.forEach(t => {
            this.Fl.has(t) || e.push(new eo(t));
        }), this.Fl.forEach(n => {
            t.has(n) || e.push(new to(n));
        }), e;
    }
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @return The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    jl(t) {
        this.Dl = t.zh, this.Fl = mt();
        const e = this.xl(t.documents);
        return this.Jn(e, /*updateLimboDocuments=*/ !0);
    }
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    Kl() {
        return gt.Ut(this.query, this.$l, this.Lt, 0 /* Local */ === this.Cl);
    }
}

/**
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */
class so {
    constructor(t, e, n, s) {
        this.mo = t, this.Du = e, this.updateFunction = n, this.Po = s, this.Gl = 5, this.$o = new Jn(this.mo, "transaction_retry" /* TransactionRetry */);
    }
    /** Runs the transaction and sets the result on deferred. */    run() {
        this.zl();
    }
    zl() {
        this.$o.xs(async () => {
            const t = new qr(this.Du), e = this.Hl(t);
            e && e.then(e => {
                this.mo.cr(() => t.commit().then(() => {
                    this.Po.resolve(e);
                }).catch(t => {
                    this.Yl(t);
                }));
            }).catch(t => {
                this.Yl(t);
            });
        });
    }
    Hl(t) {
        try {
            const e = this.updateFunction(t);
            return !j(e) && e.catch && e.then ? e : (this.Po.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.Po.reject(t), null;
        }
    }
    Yl(t) {
        this.Gl > 0 && this.Jl(t) ? (this.Gl -= 1, this.mo.cr(() => (this.zl(), Promise.resolve()))) : this.Po.reject(t);
    }
    Jl(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            const e = t.code;
            return "aborted" === e || "failed-precondition" === e || !rt(e);
        }
        return !1;
    }
}

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
/**
 * QueryView contains all of the data that SyncEngine needs to keep track of for
 * a particular query.
 */
class io {
    constructor(
    /**
     * The query itself.
     */
    t, 
    /**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
    e, 
    /**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
    n) {
        this.query = t, this.targetId = e, this.view = n;
    }
}

/** Tracks a limbo resolution. */ class ro {
    constructor(t) {
        this.key = t, 
        /**
         * Set to true once we've received a document. This is used in
         * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
         * decide whether it needs to manufacture a delete event for the target once
         * the target is CURRENT.
         */
        this.Xl = !1;
    }
}

/**
 * An implementation of `SyncEngine` coordinating with other parts of SDK.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ class oo {
    constructor(t, e, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    s, i, r) {
        this.zu = t, this.Zl = e, this.Du = n, this.t_ = s, this.currentUser = i, this.e_ = r, 
        this.n_ = null, this.s_ = new k(t => Vn(t), Pn), this.i_ = new Map, 
        /**
         * The keys of documents that are in limbo for which we haven't yet started a
         * limbo resolution query.
         */
        this.r_ = [], 
        /**
         * Keeps track of the target ID for each document that is in limbo with an
         * active target.
         */
        this.o_ = new ht(W.P), 
        /**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */
        this.h_ = new Map, this.a_ = new bi, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.u_ = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.c_ = new Map, this.l_ = Rs.di(), this.onlineState = "Unknown" /* Unknown */;
    }
    get __() {
        return !0;
    }
    subscribe(t) {
        this.n_ = t;
    }
    async listen(t) {
        let e, n;
        this.f_("listen()");
        const s = this.s_.get(t);
        if (s) 
        // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
        // already exists when EventManager calls us for the first time. This
        // happens when the primary tab is already listening to this query on
        // behalf of another tab and the user of the primary also starts listening
        // to the query. EventManager will not have an assigned target ID in this
        // case and calls `listen` to obtain this ID.
        e = s.targetId, this.t_.ul(e), n = s.view.Kl(); else {
            const s = await this.zu.jh(t.We()), i = this.t_.ul(s.targetId);
            e = s.targetId, n = await this.d_(t, e, "current" === i), this.__ && this.Zl.listen(s);
        }
        return n;
    }
    /**
     * Registers a view for a previously unknown query and computes its initial
     * snapshot.
     */    async d_(t, e, n) {
        const s = await this.zu.Gh(t, 
        /* usePreviousResults= */ !0), i = new no(t, s.zh), r = i.xl(s.documents), o = pt.zt(e, n && "Offline" /* Offline */ !== this.onlineState), h = i.Jn(r, 
        /* updateLimboDocuments= */ this.__, o);
        this.w_(e, h.Ul);
        const a = new io(t, e, i);
        return this.s_.set(t, a), this.i_.has(e) ? this.i_.get(e).push(t) : this.i_.set(e, [ t ]), 
        h.snapshot;
    }
    async mc(t) {
        this.f_("unlisten()");
        const e = this.s_.get(t), n = this.i_.get(e.targetId);
        // Only clean up the query view and target if this is the only query mapped
        // to the target.
                if (n.length > 1) return this.i_.set(e.targetId, n.filter(e => !Pn(e, t))), 
        void this.s_.delete(t);
        // No other queries are mapped to the target, clean up the query and the target.
                if (this.__) {
            // We need to remove the local query target first to allow us to verify
            // whether any other client is still interested in this target.
            this.t_.ll(e.targetId), this.t_.il(e.targetId) || await this.zu.Kh(e.targetId, /*keepPersistedTargetData=*/ !1).then(() => {
                this.t_.fl(e.targetId), this.Zl.mc(e.targetId), this.T_(e.targetId);
            }).catch(pi);
        } else this.T_(e.targetId), await this.zu.Kh(e.targetId, 
        /*keepPersistedTargetData=*/ !0);
    }
    async write(t, e) {
        this.f_("write()");
        try {
            const n = await this.zu.kh(t);
            this.t_.rl(n.batchId), this.E_(n.batchId, e), await this.I_(n.Un), await this.Zl.wc();
        } catch (t) {
            // If we can't persist the mutation, we reject the user callback and
            // don't send the mutation. The user can then retry the write.
            const n = Ti(t, "Failed to persist write");
            e.reject(n);
        }
    }
    runTransaction(t, e, n) {
        new so(t, this.Du, e, n).run();
    }
    async Lh(t) {
        this.f_("applyRemoteEvent()");
        try {
            const e = await this.zu.Lh(t);
            // Update `receivedDocument` as appropriate for any limbo targets.
                        t.Qt.forEach((t, e) => {
                const n = this.h_.get(e);
                n && (
                // Since this is a limbo resolution lookup, it's for a single document
                // and it could be added, modified, or removed, but not a combination.
                V(t.Yt.size + t.Jt.size + t.Xt.size <= 1), t.Yt.size > 0 ? n.Xl = !0 : t.Jt.size > 0 ? V(n.Xl) : t.Xt.size > 0 && (V(n.Xl), 
                n.Xl = !1));
            }), await this.I_(e, t);
        } catch (t) {
            await pi(t);
        }
    }
    Ql(t, e) {
        this.f_("applyOnlineStateChange()");
        const n = [];
        this.s_.forEach((e, s) => {
            const i = s.view.Ql(t);
            i.snapshot && n.push(i.snapshot);
        }), this.n_.m_(t), this.n_.Eu(n), this.onlineState = t;
    }
    async pc(t, e) {
        this.f_("rejectListens()"), 
        // PORTING NOTE: Multi-tab only.
        this.t_.dl(t, "rejected", e);
        const n = this.h_.get(t), s = n && n.key;
        if (s) {
            // TODO(klimt): We really only should do the following on permission
            // denied errors, but we don't have the cause code here.
            // It's a limbo doc. Create a synthetic event saying it was deleted.
            // This is kind of a hack. Ideally, we would have a method in the local
            // store to purge a document. However, it would be tricky to keep all of
            // the local store's invariants with another method.
            let e = new ht(W.P);
            e = e.nt(s, new mn(s, L.min()));
            const n = mt().add(s), i = new yt(L.min(), 
            /* targetChanges= */ new Map, 
            /* targetMismatches= */ new ct(b), e, n);
            await this.Lh(i), 
            // Since this query failed, we won't want to manually unlisten to it.
            // We only remove it from bookkeeping after we successfully applied the
            // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
            // this query when the RemoteStore restarts the Watch stream, which should
            // re-trigger the target failure.
            this.o_ = this.o_.remove(s), this.h_.delete(t), this.A_();
        } else await this.zu.Kh(t, /* keepPersistedTargetData */ !1).then(() => this.T_(t, e)).catch(pi);
    }
    async Fc(t) {
        this.f_("applySuccessfulWrite()");
        const e = t.batch.batchId;
        try {
            const n = await this.zu.xh(t);
            // The local store may or may not be able to apply the write result and
            // raise events immediately (depending on whether the watcher is caught
            // up), so we raise user callbacks first so that they consistently happen
            // before listen events.
                        this.R_(e, /*error=*/ null), this.P_(e), this.t_.hl(e, "acknowledged"), 
            await this.I_(n);
        } catch (t) {
            await pi(t);
        }
    }
    async $c(t, e) {
        this.f_("rejectFailedWrite()");
        try {
            const n = await this.zu.Oh(t);
            // The local store may or may not be able to apply the write result and
            // raise events immediately (depending on whether the watcher is caught up),
            // so we raise user callbacks first so that they consistently happen before
            // listen events.
                        this.R_(t, e), this.P_(t), this.t_.hl(t, "rejected", e), await this.I_(n);
        } catch (e) {
            await pi(e);
        }
    }
    async V_(t) {
        this.Zl.ec() || m("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");
        try {
            const e = await this.zu.to();
            if (-1 === e) 
            // Trigger the callback right away if there is no pending writes at the moment.
            return void t.resolve();
            const n = this.c_.get(e) || [];
            n.push(t), this.c_.set(e, n);
        } catch (e) {
            const n = Ti(e, "Initialization of waitForPendingWrites() operation failed");
            t.reject(n);
        }
    }
    /**
     * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
     * if there are any.
     */    P_(t) {
        (this.c_.get(t) || []).forEach(t => {
            t.resolve();
        }), this.c_.delete(t);
    }
    /** Reject all outstanding callbacks waiting for pending writes to complete. */    g_(t) {
        this.c_.forEach(e => {
            e.forEach(e => {
                e.reject(new M(x.CANCELLED, t));
            });
        }), this.c_.clear();
    }
    E_(t, e) {
        let n = this.u_[this.currentUser.ka()];
        n || (n = new ht(b)), n = n.nt(t, e), this.u_[this.currentUser.ka()] = n;
    }
    /**
     * Resolves or rejects the user callback for the given batch and then discards
     * it.
     */    R_(t, e) {
        let n = this.u_[this.currentUser.ka()];
        // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.
                if (n) {
            const s = n.get(t);
            s && (e ? s.reject(e) : s.resolve(), n = n.remove(t)), this.u_[this.currentUser.ka()] = n;
        }
    }
    T_(t, e = null) {
        this.t_.ll(t);
        for (const n of this.i_.get(t)) this.s_.delete(n), e && this.n_.y_(n, e);
        if (this.i_.delete(t), this.__) {
            this.a_.oa(t).forEach(t => {
                this.a_.Mi(t) || 
                // We removed the last reference for this key
                this.p_(t);
            });
        }
    }
    p_(t) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        const e = this.o_.get(t);
        null !== e && (this.Zl.mc(e), this.o_ = this.o_.remove(t), this.h_.delete(e), this.A_());
    }
    w_(t, e) {
        for (const n of e) if (n instanceof to) this.a_.Fi(n.key, t), this.b_(n); else if (n instanceof eo) {
            m("SyncEngine", "Document no longer in limbo: " + n.key), this.a_.$i(n.key, t), 
            this.a_.Mi(n.key) || 
            // We removed the last reference for this key
            this.p_(n.key);
        } else P();
    }
    b_(t) {
        const e = t.key;
        this.o_.get(e) || (m("SyncEngine", "New document in limbo: " + e), this.r_.push(e), 
        this.A_());
    }
    /**
     * Starts listens for documents in limbo that are enqueued for resolution,
     * subject to a maximum number of concurrent resolutions.
     *
     * Without bounding the number of concurrent resolutions, the server can fail
     * with "resource exhausted" errors which can lead to pathological client
     * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
     */    A_() {
        for (;this.r_.length > 0 && this.o_.size < this.e_; ) {
            const t = this.r_.shift(), e = this.l_.next();
            this.h_.set(e, new ro(t)), this.o_ = this.o_.nt(t, e), this.Zl.listen(new et(Rn.hn(t.path).We(), e, 2 /* LimboResolution */ , Hn.ps));
        }
    }
    // Visible for testing
    v_() {
        return this.o_;
    }
    // Visible for testing
    S_() {
        return this.r_;
    }
    async I_(t, e) {
        const n = [], s = [], i = [];
        this.s_.forEach((r, o) => {
            i.push(Promise.resolve().then(() => {
                const e = o.view.xl(t);
                return e.Ll ? this.zu.Gh(o.query, /* usePreviousResults= */ !1).then(({documents: t}) => o.view.xl(t, e)) : e;
                // The query has a limit and some docs were removed, so we need
                // to re-run the query against the local store to make sure we
                // didn't lose any good docs that had been past the limit.
                        }).then(t => {
                const i = e && e.Qt.get(o.targetId), r = o.view.Jn(t, 
                /* updateLimboDocuments= */ this.__, i);
                if (this.w_(o.targetId, r.Ul), r.snapshot) {
                    this.__ && this.t_.dl(o.targetId, r.snapshot.fromCache ? "not-current" : "current"), 
                    n.push(r.snapshot);
                    const t = zn.Rs(o.targetId, r.snapshot);
                    s.push(t);
                }
            }));
        }), await Promise.all(i), this.n_.Eu(n), await this.zu.Uh(s);
    }
    f_(t) {}
    async xc(t) {
        if (!this.currentUser.isEqual(t)) {
            m("SyncEngine", "User change. New user:", t.ka());
            const e = await this.zu.Ch(t);
            this.currentUser = t, 
            // Fails tasks waiting for pending writes requested by previous user.
            this.g_("'waitForPendingWrites' promise is rejected due to a user change."), 
            // TODO(b/114226417): Consider calling this only in the primary tab.
            this.t_.Ch(t, e.Nh, e.$h), await this.I_(e.Fh);
        }
    }
    enableNetwork() {
        return this.Zl.enableNetwork();
    }
    disableNetwork() {
        return this.Zl.disableNetwork();
    }
    xe(t) {
        const e = this.h_.get(t);
        if (e && e.Xl) return mt().add(e.key);
        {
            let e = mt();
            const n = this.i_.get(t);
            if (!n) return e;
            for (const t of n) {
                const n = this.s_.get(t);
                e = e.Ct(n.view.kl);
            }
            return e;
        }
    }
}

function ho(t, e, n, 
// PORTING NOTE: Manages state synchronization in multi-tab environments.
s, i, r) {
    return new oo(t, e, n, s, i, r);
}

/**
 * An implementation of `SyncEngineImpl` providing multi-tab synchronization on
 * top of `SyncEngineImpl`.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ class ao extends oo {
    constructor(t, e, n, s, i, r) {
        super(t, e, n, s, i, r), this.zu = t, 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.D_ = void 0;
    }
    get __() {
        return !0 === this.D_;
    }
    enableNetwork() {
        return this.zu.ur(!0), super.enableNetwork();
    }
    disableNetwork() {
        return this.zu.ur(!1), super.disableNetwork();
    }
    /**
     * Reconcile the list of synced documents in an existing view with those
     * from persistence.
     */    async C_(t) {
        const e = await this.zu.Gh(t.query, 
        /* usePreviousResults= */ !0), n = t.view.jl(e);
        return this.D_ && this.w_(t.targetId, n.Ul), n;
    }
    Ql(t, e) {
        // If we are the primary client, the online state of all clients only
        // depends on the online state of the local RemoteStore.
        this.__ && 0 /* RemoteStore */ === e && (super.Ql(t, e), this.t_.Tl(t)), 
        // If we are the secondary client, we explicitly ignore the remote store's
        // online state (the local client may go offline, even though the primary
        // tab remains online) and only apply the primary tab's online state from
        // SharedClientState.
        this.__ || 1 /* SharedClientState */ !== e || super.Ql(t, e);
    }
    async yl(t, e, n) {
        this.f_("applyBatchState()");
        const s = await this.zu.Yh(t);
        null !== s ? ("pending" === e ? 
        // If we are the primary client, we need to send this write to the
        // backend. Secondary clients will ignore these writes since their remote
        // connection is disabled.
        await this.Zl.wc() : "acknowledged" === e || "rejected" === e ? (
        // NOTE: Both these methods are no-ops for batches that originated from
        // other clients.
        this.R_(t, n || null), this.zu.Jh(t)) : P(), await this.I_(s)) : 
        // A throttled tab may not have seen the mutation before it was completed
        // and removed from the mutation queue, in which case we won't have cached
        // the affected documents. In this case we can safely ignore the update
        // since that means we didn't apply the mutation locally at all (if we
        // had, we would have cached the affected documents), and so we will just
        // see any resulting document changes via normal remote document updates
        // as applicable.
        m("SyncEngine", "Cannot apply mutation batch with id: " + t);
    }
    async Mc(t) {
        if (!0 === t && !0 !== this.D_) {
            // Secondary tabs only maintain Views for their local listeners and the
            // Views internal state may not be 100% populated (in particular
            // secondary tabs don't track syncedDocuments, the set of documents the
            // server considers to be in the target). So when a secondary becomes
            // primary, we need to need to make sure that all views for all targets
            // match the state on disk.
            const t = this.t_.nl(), e = await this.F_(t.F(), 
            /*transitionToPrimary=*/ !0);
            this.D_ = !0, await this.Zl.Mc(!0);
            for (const t of e) this.Zl.listen(t);
        } else if (!1 === t && !1 !== this.D_) {
            const t = [];
            let e = Promise.resolve();
            this.i_.forEach((n, s) => {
                this.t_._l(s) ? t.push(s) : e = e.then(() => (this.T_(s), this.zu.Kh(s, 
                /*keepPersistedTargetData=*/ !0))), this.Zl.mc(s);
            }), await e, await this.F_(t, 
            /*transitionToPrimary=*/ !1), this.N_(), this.D_ = !1, await this.Zl.Mc(!1);
        }
    }
    N_() {
        this.h_.forEach((t, e) => {
            this.Zl.mc(e);
        }), this.a_.ha(), this.h_ = new Map, this.o_ = new ht(W.P);
    }
    /**
     * Reconcile the query views of the provided query targets with the state from
     * persistence. Raises snapshots for any changes that affect the local
     * client and returns the updated state of all target's query data.
     *
     * @param targets the list of targets with views that need to be recomputed
     * @param transitionToPrimary `true` iff the tab transitions from a secondary
     * tab to a primary tab
     */    async F_(t, e) {
        const n = [], s = [];
        for (const e of t) {
            let t;
            const i = this.i_.get(e);
            if (i && 0 !== i.length) {
                // For queries that have a local View, we fetch their current state
                // from LocalStore (as the resume token and the snapshot version
                // might have changed) and reconcile their views with the persisted
                // state (the list of syncedDocuments may have gotten out of sync).
                t = await this.zu.jh(i[0].We());
                for (const t of i) {
                    const e = this.s_.get(t), n = await this.C_(e);
                    n.snapshot && s.push(n.snapshot);
                }
            } else {
                // For queries that never executed on this client, we need to
                // allocate the target in LocalStore and initialize a new View.
                const n = await this.zu.Xh(e);
                t = await this.zu.jh(n), await this.d_(this.k_(n), e, 
                /*current=*/ !1);
            }
            n.push(t);
        }
        return this.n_.Eu(s), n;
    }
    /**
     * Creates a `Query` object from the specified `Target`. There is no way to
     * obtain the original `Query`, so we synthesize a `Query` from the `Target`
     * object.
     *
     * The synthesized result might be different from the original `Query`, but
     * since the synthesized `Query` should return the same results as the
     * original one (only the presentation of results might differ), the potential
     * difference will not cause issues.
     */    k_(t) {
        return new Rn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F" /* First */ , t.startAt, t.endAt);
    }
    Sr() {
        return this.zu.Sr();
    }
    async pl(t, e, n) {
        if (this.D_) 
        // If we receive a target state notification via WebStorage, we are
        // either already secondary or another tab has taken the primary lease.
        m("SyncEngine", "Ignoring unexpected query state notification."); else if (this.i_.has(t)) switch (e) {
          case "current":
          case "not-current":
            {
                const n = await this.zu.si(), s = yt.Gt(t, "current" === e);
                await this.I_(n, s);
                break;
            }

          case "rejected":
            await this.zu.Kh(t, 
            /* keepPersistedTargetData */ !0), this.T_(t, n);
            break;

          default:
            P();
        }
    }
    async bl(t, e) {
        if (this.D_) {
            for (const e of t) {
                if (this.i_.has(e)) {
                    // A target might have been added in a previous attempt
                    m("SyncEngine", "Adding an already active target " + e);
                    continue;
                }
                const t = await this.zu.Xh(e), n = await this.zu.jh(t);
                await this.d_(this.k_(t), n.targetId, 
                /*current=*/ !1), this.Zl.listen(n);
            }
            for (const t of e) 
            // Check that the target is still active since the target might have been
            // removed if it has been rejected by the backend.
            this.i_.has(t) && 
            // Release queries that are still active.
            await this.zu.Kh(t, /* keepPersistedTargetData */ !1).then(() => {
                this.Zl.mc(t), this.T_(t);
            }).catch(pi);
        }
    }
}

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
/**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */
class uo {
    constructor() {
        this.x_ = void 0, this.listeners = [];
    }
}

/**
 * EventManager is responsible for mapping queries to query event emitters.
 * It handles "fan-out". -- Identical queries will re-use the same watch on the
 * backend.
 */ class co {
    constructor(t) {
        this.Rc = t, this.M_ = new k(t => Vn(t), Pn), this.onlineState = "Unknown" /* Unknown */ , 
        this.O_ = new Set, this.Rc.subscribe(this);
    }
    async listen(t) {
        const e = t.query;
        let n = !1, s = this.M_.get(e);
        if (s || (n = !0, s = new uo), n) try {
            s.x_ = await this.Rc.listen(e);
        } catch (e) {
            const n = Ti(e, `Initialization of query '${gn(t.query)}' failed`);
            return void t.onError(n);
        }
        this.M_.set(e, s), s.listeners.push(t);
        // Run global snapshot listeners if a consistent snapshot has been emitted.
        t.Ql(this.onlineState);
        if (s.x_) {
            t.L_(s.x_) && this.B_();
        }
    }
    async mc(t) {
        const e = t.query;
        let n = !1;
        const s = this.M_.get(e);
        if (s) {
            const e = s.listeners.indexOf(t);
            e >= 0 && (s.listeners.splice(e, 1), n = 0 === s.listeners.length);
        }
        if (n) return this.M_.delete(e), this.Rc.mc(e);
    }
    Eu(t) {
        let e = !1;
        for (const n of t) {
            const t = n.query, s = this.M_.get(t);
            if (s) {
                for (const t of s.listeners) t.L_(n) && (e = !0);
                s.x_ = n;
            }
        }
        e && this.B_();
    }
    y_(t, e) {
        const n = this.M_.get(t);
        if (n) for (const t of n.listeners) t.onError(e);
        // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.
                this.M_.delete(t);
    }
    m_(t) {
        this.onlineState = t;
        let e = !1;
        this.M_.forEach((n, s) => {
            for (const n of s.listeners) 
            // Run global snapshot listeners if a consistent snapshot has been emitted.
            n.Ql(t) && (e = !0);
        }), e && this.B_();
    }
    q_(t) {
        this.O_.add(t), 
        // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        t.next();
    }
    U_(t) {
        this.O_.delete(t);
    }
    // Call all global snapshot listeners that have been set.
    B_() {
        this.O_.forEach(t => {
            t.next();
        });
    }
}

/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */ class lo {
    constructor(t, e, n) {
        this.query = t, this.Q_ = e, 
        /**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */
        this.W_ = !1, this.j_ = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {};
    }
    /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */    L_(t) {
        if (!this.options.includeMetadataChanges) {
            // Remove the metadata only changes.
            const e = [];
            for (const n of t.docChanges) 3 /* Metadata */ !== n.type && e.push(n);
            t = new gt(t.query, t.docs, t.Ot, e, t.Lt, t.fromCache, t.Bt, 
            /* excludesMetadataChanges= */ !0);
        }
        let e = !1;
        return this.W_ ? this.K_(t) && (this.Q_.next(t), e = !0) : this.G_(t, this.onlineState) && (this.z_(t), 
        e = !0), this.j_ = t, e;
    }
    onError(t) {
        this.Q_.error(t);
    }
    /** Returns whether a snapshot was raised. */    Ql(t) {
        this.onlineState = t;
        let e = !1;
        return this.j_ && !this.W_ && this.G_(this.j_, t) && (this.z_(this.j_), e = !0), 
        e;
    }
    G_(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                const n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return (!this.options.H_ || !n) && (!t.docs._() || "Offline" /* Offline */ === e);
        // Raise data from cache if we have any documents or we are offline
        }
    K_(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        const e = this.j_ && this.j_.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.Bt && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }
    z_(t) {
        t = gt.Ut(t.query, t.docs, t.Lt, t.fromCache), this.W_ = !0, this.Q_.next(t);
    }
}

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
// TOOD(b/140938512): Drop SimpleQueryEngine and rename IndexFreeQueryEngine.
/**
 * A query engine that takes advantage of the target document mapping in the
 * QueryCache. The IndexFreeQueryEngine optimizes query execution by only
 * reading the documents that previously matched a query plus any documents that were
 * edited after the query was last listened to.
 *
 * There are some cases where Index-Free queries are not guaranteed to produce
 * the same results as full collection scans. In these cases, the
 * IndexFreeQueryEngine falls back to full query processing. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of Limbo documents.
 */ class _o {
    Dh(t) {
        this.Y_ = t;
    }
    _s(t, e, s, i) {
        // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
        return e.En() || s.isEqual(L.min()) ? this.J_(t, e) : this.Y_.us(t, i).next(r => {
            const o = this.X_(e, r);
            return (e.In() || e.mn()) && this.Ll(e.nn, o, i, s) ? this.J_(t, e) : (I() <= n.DEBUG && m("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", s.toString(), gn(e)), 
            this.Y_._s(t, e, s).next(t => (
            // We merge `previousResults` into `updateResults`, since
            // `updateResults` is already a DocumentMap. If a document is
            // contained in both lists, then its contents are the same.
            o.forEach(e => {
                t = t.nt(e.key, e);
            }), t)));
        });
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }
    /** Applies the query filter and sorting to the provided documents.  */    X_(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        let n = new ct(pn(t));
        return e.forEach((e, s) => {
            s instanceof In && yn(t, s) && (n = n.add(s));
        }), n;
    }
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion The version of the snapshot when the query
     * was last synchronized.
     */    Ll(t, e, n, s) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                const i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.o(s) > 0);
    }
    J_(t, e) {
        return I() <= n.DEBUG && m("IndexFreeQueryEngine", "Using full collection scan to execute query:", gn(e)), 
        this.Y_._s(t, e, L.min());
    }
}

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
 */ class fo {
    constructor(t, e) {
        this.ss = t, this.wi = e, 
        /**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */
        this.ns = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Z_ = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.tf = new ct(vi.ta);
    }
    Hr(t) {
        return Qn.resolve(0 === this.ns.length);
    }
    Yr(t, e, n, s) {
        const i = this.Z_;
        if (this.Z_++, this.ns.length > 0) {
            this.ns[this.ns.length - 1];
        }
        const r = new qn(i, e, n, s);
        this.ns.push(r);
        // Track references by document key and index collection parents.
        for (const e of s) this.tf = this.tf.add(new vi(e.key, i)), this.ss.Us(t, e.key.path.p());
        return Qn.resolve(r);
    }
    Jr(t, e) {
        return Qn.resolve(this.ef(e));
    }
    Zr(t, e) {
        const n = e + 1, s = this.nf(n), i = s < 0 ? 0 : s;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return Qn.resolve(this.ns.length > i ? this.ns[i] : null);
    }
    to() {
        return Qn.resolve(0 === this.ns.length ? -1 : this.Z_ - 1);
    }
    eo(t) {
        return Qn.resolve(this.ns.slice());
    }
    os(t, e) {
        const n = new vi(e, 0), s = new vi(e, Number.POSITIVE_INFINITY), i = [];
        return this.tf.vt([ n, s ], t => {
            const e = this.ef(t.ua);
            i.push(e);
        }), Qn.resolve(i);
    }
    ls(t, e) {
        let n = new ct(b);
        return e.forEach(t => {
            const e = new vi(t, 0), s = new vi(t, Number.POSITIVE_INFINITY);
            this.tf.vt([ e, s ], t => {
                n = n.add(t.ua);
            });
        }), Qn.resolve(this.sf(n));
    }
    Es(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        const n = e.path, s = n.length + 1;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
        let i = n;
        W.W(i) || (i = i.child(""));
        const r = new vi(new W(i), 0);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                let o = new ct(b);
        return this.tf.St(t => {
            const e = t.key.path;
            return !!n.D(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === s && (o = o.add(t.ua)), !0);
        }, r), Qn.resolve(this.sf(o));
    }
    sf(t) {
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
        const e = [];
        return t.forEach(t => {
            const n = this.ef(t);
            null !== n && e.push(n);
        }), e;
    }
    so(t, e) {
        V(0 === this.if(e.batchId, "removed")), this.ns.shift();
        let n = this.tf;
        return Qn.forEach(e.mutations, s => {
            const i = new vi(s.key, e.batchId);
            return n = n.delete(i), this.wi.qr(t, s.key);
        }).next(() => {
            this.tf = n;
        });
    }
    io(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }
    Mi(t, e) {
        const n = new vi(e, 0), s = this.tf.Dt(n);
        return Qn.resolve(e.isEqual(s && s.key));
    }
    ro(t) {
        return this.ns.length, Qn.resolve();
    }
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */    if(t, e) {
        return this.nf(t);
    }
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @return The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */    nf(t) {
        if (0 === this.ns.length) 
        // As an index this is past the end of the queue
        return 0;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
                return t - this.ns[0].batchId;
    }
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */    ef(t) {
        const e = this.nf(t);
        return e < 0 || e >= this.ns.length ? null : this.ns[e];
    }
}

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
 */ class wo {
    /**
     * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
     * return 0 to avoid unnecessarily doing the work of calculating the size.
     */
    constructor(t, e) {
        this.ss = t, this.rf = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new ht(W.P), 
        /** Size of all cached documents. */
        this.size = 0;
    }
    /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */    jn(t, e, n) {
        const s = e.key, i = this.docs.get(s), r = i ? i.size : 0, o = this.rf(e);
        return this.docs = this.docs.nt(s, {
            Ys: e,
            size: o,
            readTime: n
        }), this.size += o - r, this.ss.Us(t, s.path.p());
    }
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */    Gn(t) {
        const e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }
    zn(t, e) {
        const n = this.docs.get(e);
        return Qn.resolve(n ? n.Ys : null);
    }
    getEntries(t, e) {
        let n = dt();
        return e.forEach(t => {
            const e = this.docs.get(t);
            n = n.nt(t, e ? e.Ys : null);
        }), Qn.resolve(n);
    }
    _s(t, e, n) {
        let s = Tt();
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
                const i = new W(e.path.child("")), r = this.docs.ut(i);
        for (;r.wt(); ) {
            const {key: t, value: {Ys: i, readTime: o}} = r.dt();
            if (!e.path.D(t.path)) break;
            o.o(n) <= 0 || i instanceof In && yn(e, i) && (s = s.nt(i.key, i));
        }
        return Qn.resolve(s);
    }
    hf(t, e) {
        return Qn.forEach(this.docs, t => e(t));
    }
    oi(t) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new wo.hi(this);
    }
    ui(t) {
        return Qn.resolve(this.size);
    }
}

/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */ wo.hi = class extends Wn {
    constructor(t) {
        super(), this.ci = t;
    }
    Jn(t) {
        const e = [];
        return this.Un.forEach((n, s) => {
            s ? e.push(this.ci.jn(t, s, this.readTime)) : this.ci.Gn(n);
        }), Qn.Bn(e);
    }
    Hn(t, e) {
        return this.ci.zn(t, e);
    }
    Yn(t, e) {
        return this.ci.getEntries(t, e);
    }
};

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
class To {
    constructor(t) {
        this.persistence = t, 
        /**
         * Maps a target to the data about that target
         */
        this.af = new k(t => Y(t), X), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = L.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.uf = 0, 
        /**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */
        this.cf = new bi, this.targetCount = 0, this.lf = Rs.fi();
    }
    pe(t, e) {
        return this.af.forEach((t, n) => e(n)), Qn.resolve();
    }
    mi(t) {
        return Qn.resolve(this.lastRemoteSnapshotVersion);
    }
    Ai(t) {
        return Qn.resolve(this.uf);
    }
    Ti(t) {
        return this.highestTargetId = this.lf.next(), Qn.resolve(this.highestTargetId);
    }
    Ri(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.uf && (this.uf = e), 
        Qn.resolve();
    }
    Vi(t) {
        this.af.set(t.target, t);
        const e = t.targetId;
        e > this.highestTargetId && (this.lf = new Rs(e), this.highestTargetId = e), t.sequenceNumber > this.uf && (this.uf = t.sequenceNumber);
    }
    Pi(t, e) {
        return this.Vi(e), this.targetCount += 1, Qn.resolve();
    }
    yi(t, e) {
        return this.Vi(e), Qn.resolve();
    }
    pi(t, e) {
        return this.af.delete(e.target), this.cf.oa(e.targetId), this.targetCount -= 1, 
        Qn.resolve();
    }
    vi(t, e, n) {
        let s = 0;
        const i = [];
        return this.af.forEach((r, o) => {
            o.sequenceNumber <= e && null === n.get(o.targetId) && (this.af.delete(r), i.push(this.bi(t, o.targetId)), 
            s++);
        }), Qn.Bn(i).next(() => s);
    }
    Si(t) {
        return Qn.resolve(this.targetCount);
    }
    Di(t, e) {
        const n = this.af.get(e) || null;
        return Qn.resolve(n);
    }
    Ci(t, e, n) {
        return this.cf.sa(e, n), Qn.resolve();
    }
    Ni(t, e, n) {
        this.cf.ra(e, n);
        const s = this.persistence.wi, i = [];
        return s && e.forEach(e => {
            i.push(s.qr(t, e));
        }), Qn.Bn(i);
    }
    bi(t, e) {
        return this.cf.oa(e), Qn.resolve();
    }
    ki(t, e) {
        const n = this.cf.aa(e);
        return Qn.resolve(n);
    }
    Mi(t, e) {
        return Qn.resolve(this.cf.Mi(e));
    }
}

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
/**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
class Eo {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    constructor(t) {
        this._f = {}, this.Ui = new Hn(0), this.Qi = !1, this.Qi = !0, this.wi = t(this), 
        this.Ji = new To(this);
        this.ss = new ns, this.es = new wo(this.ss, t => this.wi.ff(t));
    }
    start() {
        return Promise.resolve();
    }
    gr() {
        // No durable state to ensure is closed on shutdown.
        return this.Qi = !1, Promise.resolve();
    }
    get or() {
        return this.Qi;
    }
    hr() {
        // No op.
    }
    $r() {
        return this.ss;
    }
    Dr(t) {
        let e = this._f[t.ka()];
        return e || (e = new fo(this.ss, this.wi), this._f[t.ka()] = e), e;
    }
    Fr() {
        return this.Ji;
    }
    Nr() {
        return this.es;
    }
    runTransaction(t, e, n) {
        m("MemoryPersistence", "Starting transaction:", t);
        const s = new Io(this.Ui.next());
        return this.wi.df(), n(s).next(t => this.wi.wf(s).next(() => t)).On().then(t => (s.ts(), 
        t));
    }
    Tf(t, e) {
        return Qn.qn(Object.values(this._f).map(n => () => n.Mi(t, e)));
    }
}

/**
 * Memory persistence is not actually transactional, but future implementations
 * may have transaction-scoped state.
 */ class Io extends Kn {
    constructor(t) {
        super(), this.Li = t;
    }
}

class mo {
    constructor(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.Ef = new bi, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.If = null;
    }
    static mf(t) {
        return new mo(t);
    }
    get Af() {
        if (this.If) return this.If;
        throw P();
    }
    Fi(t, e, n) {
        return this.Ef.Fi(n, e), this.Af.delete(n), Qn.resolve();
    }
    $i(t, e, n) {
        return this.Ef.$i(n, e), this.Af.add(n), Qn.resolve();
    }
    qr(t, e) {
        return this.Af.add(e), Qn.resolve();
    }
    removeTarget(t, e) {
        this.Ef.oa(e.targetId).forEach(t => this.Af.add(t));
        const n = this.persistence.Fr();
        return n.ki(t, e.targetId).next(t => {
            t.forEach(t => this.Af.add(t));
        }).next(() => n.pi(t, e));
    }
    df() {
        this.If = new Set;
    }
    wf(t) {
        // Remove newly orphaned documents.
        const e = this.persistence.Nr().oi();
        return Qn.forEach(this.Af, n => this.Rf(t, n).next(t => {
            t || e.Gn(n);
        })).next(() => (this.If = null, e.apply(t)));
    }
    jr(t, e) {
        return this.Rf(t, e).next(t => {
            t ? this.Af.delete(e) : this.Af.add(e);
        });
    }
    ff(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }
    Rf(t, e) {
        return Qn.qn([ () => Qn.resolve(this.Ef.Mi(e)), () => this.persistence.Fr().Mi(t, e), () => this.persistence.Tf(t, e) ]);
    }
}

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
/**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */ class Ao {
    constructor(t) {
        this.Pf = t.Pf, this.Vf = t.Vf;
    }
    wu(t) {
        this.gf = t;
    }
    cu(t) {
        this.yf = t;
    }
    onMessage(t) {
        this.pf = t;
    }
    close() {
        this.Vf();
    }
    send(t) {
        this.Pf(t);
    }
    bf() {
        this.gf();
    }
    vf(t) {
        this.yf(t);
    }
    Sf(t) {
        this.pf(t);
    }
}

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
 */ const Ro = {
    BatchGetDocuments: "batchGet",
    Commit: "commit"
}, Po = "gl-js/ fire/" + T;

class Vo {
    constructor(t) {
        this.s = t.s;
        const e = t.ssl ? "https" : "http";
        this.Df = e + "://" + t.host, this.forceLongPolling = t.forceLongPolling;
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    Cf(t, e) {
        if (e) for (const n in e.Oa) e.Oa.hasOwnProperty(n) && (t[n] = e.Oa[n]);
        t["X-Goog-Api-Client"] = Po;
    }
    vu(t, e, n) {
        const s = this.Ff(t);
        return new Promise((i, r) => {
            const o = new c;
            o.listenOnce(l.COMPLETE, () => {
                try {
                    switch (o.getLastErrorCode()) {
                      case _.NO_ERROR:
                        const e = o.getResponseJson();
                        m("Connection", "XHR received:", JSON.stringify(e)), i(e);
                        break;

                      case _.TIMEOUT:
                        m("Connection", 'RPC "' + t + '" timed out'), r(new M(x.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case _.HTTP_ERROR:
                        const n = o.getStatus();
                        if (m("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", o.getResponseText()), 
                        n > 0) {
                            const t = o.getResponseJson().error;
                            if (t && t.status && t.message) {
                                const e = function(t) {
                                    const e = t.toLowerCase().replace("_", "-");
                                    return Object.values(x).indexOf(e) >= 0 ? e : x.UNKNOWN;
                                }(t.status);
                                r(new M(e, t.message));
                            } else r(new M(x.UNKNOWN, "Server responded with status " + o.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        m("Connection", 'RPC "' + t + '" failed'), r(new M(x.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        P();
                    }
                } finally {
                    m("Connection", 'RPC "' + t + '" completed.');
                }
            });
            // The database field is already encoded in URL. Specifying it again in
            // the body is not necessary in production, and will cause duplicate field
            // errors in the Firestore Emulator. Let's remove it.
            const h = Object.assign({}, e);
            delete h.database;
            const a = JSON.stringify(h);
            m("Connection", "XHR sending: ", s + " " + a);
            // Content-Type: text/plain will avoid preflight requests which might
            // mess with CORS and redirects by proxies. If we add custom headers
            // we will need to change this code to potentially use the
            // $httpOverwrite parameter supported by ESF to avoid
            // triggering preflight requests.
            const u = {
                "Content-Type": "text/plain"
            };
            this.Cf(u, n), o.send(s, "POST", a, u, 15);
        });
    }
    Su(t, e, n) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.vu(t, e, n);
    }
    Tu(t, e) {
        const s = [ this.Df, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], c = f(), l = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: `projects/${this.s.projectId}/databases/${this.s.database}`
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling
        };
        this.Cf(l.initMessageHeaders, e), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        i() || r() || o() || h() || a() || u() || (l.httpHeadersOverwriteParam = "$httpHeaders");
        const _ = s.join("");
        m("Connection", "Creating WebChannel: " + _ + " " + l);
        const w = c.createWebChannel(_, l);
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                let I = !1, A = !1;
        // A flag to determine whether the stream was closed (by us or through an
        // error/close event) to avoid delivering multiple close events or sending
        // on a closed stream
                const P = new Ao({
            Pf: t => {
                A ? m("Connection", "Not sending because WebChannel is closed:", t) : (I || (m("Connection", "Opening WebChannel transport."), 
                w.open(), I = !0), m("Connection", "WebChannel sending:", t), w.send(t));
            },
            Vf: () => w.close()
        }), g = (t, e) => {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            w.listen(t, t => {
                try {
                    e(t);
                } catch (t) {
                    setTimeout(() => {
                        throw t;
                    }, 0);
                }
            });
        };
        // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
                return g(d.EventType.OPEN, () => {
            A || m("Connection", "WebChannel transport opened.");
        }), g(d.EventType.CLOSE, () => {
            A || (A = !0, m("Connection", "WebChannel transport closed"), P.vf());
        }), g(d.EventType.ERROR, t => {
            A || (A = !0, function(t, ...e) {
                if (E.logLevel <= n.WARN) {
                    const n = e.map(R);
                    E.warn(`Firestore (${T}): ${t}`, ...n);
                }
            }("Connection", "WebChannel transport errored:", t), P.vf(new M(x.UNAVAILABLE, "The operation could not be completed")));
        }), g(d.EventType.MESSAGE, t => {
            var e;
            if (!A) {
                const n = t.data[0];
                V(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                const s = n, i = s.error || (null === (e = s[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    m("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    const t = i.status;
                    let e = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const e = st[t];
                        if (void 0 !== e) return ot(e);
                    }(t), n = i.message;
                    void 0 === e && (e = x.INTERNAL, n = "Unknown error status: " + t + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    A = !0, P.vf(new M(e, n)), w.close();
                } else m("Connection", "WebChannel received:", n), P.Sf(n);
            }
        }), setTimeout(() => {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            P.bf();
        }, 0), P;
    }
    // visible for testing
    Ff(t) {
        const e = Ro[t];
        return this.Df + "/v1/projects/" + this.s.projectId + "/databases/" + this.s.database + "/documents:" + e;
    }
}

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
// References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals */
/**
 * Browser implementation of ConnectivityMonitor.
 */
class go {
    constructor() {
        this.Nf = () => this.$f(), this.kf = () => this.xf(), this.Mf = [], this.Of();
    }
    tc(t) {
        this.Mf.push(t);
    }
    gr() {
        window.removeEventListener("online", this.Nf), window.removeEventListener("offline", this.kf);
    }
    Of() {
        window.addEventListener("online", this.Nf), window.addEventListener("offline", this.kf);
    }
    $f() {
        m("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (const t of this.Mf) t(0 /* AVAILABLE */);
    }
    xf() {
        m("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (const t of this.Mf) t(1 /* UNAVAILABLE */);
    }
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    static Hi() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }
}

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
 */ class yo {
    tc(t) {
        // No-op.
    }
    gr() {
        // No-op.
    }
}

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
/** Initializes the WebChannelConnection for the browser. */
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
const po = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.";

/**
 * Provides all components needed for Firestore with in-memory persistence.
 * Uses EagerGC garbage collection.
 */ class bo {
    async initialize(t) {
        this.t_ = this.Lf(t), this.persistence = this.Bf(t), await this.persistence.start(), 
        this.qf = this.Uf(t), this.zu = this.Qf(t), this.Zl = this.Wf(t), this.Rc = this.jf(t), 
        this.Kf = this.Gf(t), this.t_.Lu = t => this.Rc.Ql(t, 1 /* SharedClientState */), 
        this.Zl.Rc = this.Rc, await this.zu.start(), await this.t_.start(), await this.Zl.start(), 
        await this.Zl.Mc(this.Rc.__);
    }
    Gf(t) {
        return new co(this.Rc);
    }
    Uf(t) {
        return null;
    }
    Qf(t) {
        return gi(this.persistence, new _o, t.zf);
    }
    Bf(t) {
        if (t.Yf.Hf) throw new M(x.FAILED_PRECONDITION, po);
        return new Eo(mo.mf);
    }
    Wf(t) {
        return new Qr(this.zu, t.Du, t.mo, t => this.Rc.Ql(t, 0 /* RemoteStore */), go.Hi() ? new go : new yo);
    }
    Lf(t) {
        return new Zr;
    }
    jf(t) {
        return ho(this.zu, this.Zl, t.Du, this.t_, t.zf, t.e_);
    }
    clearPersistence(t, e) {
        throw new M(x.FAILED_PRECONDITION, po);
    }
}

/**
 * Provides all components needed for Firestore with IndexedDB persistence.
 */ class vo extends bo {
    Qf(t) {
        return gi(this.persistence, new _o, t.zf);
    }
    jf(t) {
        return ho(this.zu, this.Zl, t.Du, this.t_, t.zf, t.e_);
    }
    Uf(t) {
        const e = this.persistence.wi.xr;
        return new Ri(e, t.mo);
    }
    Bf(t) {
        const e = Ns(t.Jf.s, t.Jf.persistenceKey), n = lr(t.Jf.s);
        return new vs(t.Yf.synchronizeTabs, e, t.clientId, Ai.oh(t.Yf.cacheSizeBytes), t.mo, fi(), "undefined" != typeof document ? document : null, n, this.t_, t.Yf.qi);
    }
    Lf(t) {
        return new Zr;
    }
    clearPersistence(t, e) {
        return async function(t) {
            if (!ii.Hi()) return Promise.resolve();
            const e = t + "main";
            await ii.delete(e);
        }(Ns(t, e));
    }
}

/**
 * Provides all components needed for Firestore with multi-tab IndexedDB
 * persistence.
 *
 * In the legacy client, this provider is used to provide both multi-tab and
 * non-multi-tab persistence since we cannot tell at build time whether
 * `synchronizeTabs` will be enabled.
 */ class So extends vo {
    async initialize(t) {
        await super.initialize(t), 
        // NOTE: This will immediately call the listener, so we make sure to
        // set it after localStore / remoteStore are started.
        await this.persistence.rr(async t => {
            await this.Rc.Mc(t), this.qf && (t && !this.qf.or ? this.qf.start(this.zu) : t || this.qf.stop());
        });
    }
    Qf(t) {
        /** Manages our in-memory or durable persistence. */
        return e = this.persistence, n = new _o, s = t.zf, new yi(e, n, s);
        var e, n, s;
    }
    jf(t) {
        const e = (n = this.zu, s = this.Zl, i = t.Du, r = this.t_, o = t.zf, h = t.e_, 
        new ao(n, s, i, r, o, h));
        var n, s, i, r, o, h;
        return this.t_ instanceof Xr && (this.t_.Rc = e), e;
    }
    Lf(t) {
        if (t.Yf.Hf && t.Yf.synchronizeTabs) {
            const e = fi();
            if (!Xr.Hi(e)) throw new M(x.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
            const n = Ns(t.Jf.s, t.Jf.persistenceKey);
            return new Xr(e, t.mo, n, t.clientId, t.zf);
        }
        return new Zr;
    }
}

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
/**
 * FirestoreClient is a top-level class that constructs and owns all of the
 * pieces of the client SDK architecture. It is responsible for creating the
 * async queue that is shared by all of the other components in the system.
 */
class Do {
    constructor(t, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    e) {
        this.credentials = t, this.mo = e, this.clientId = p.t();
    }
    /**
     * Starts up the FirestoreClient, returning only whether or not enabling
     * persistence succeeded.
     *
     * The intent here is to "do the right thing" as far as users are concerned.
     * Namely, in cases where offline persistence is requested and possible,
     * enable it, but otherwise fall back to persistence disabled. For the most
     * part we expect this to succeed one way or the other so we don't expect our
     * users to actually wait on the firestore.enablePersistence Promise since
     * they generally won't care.
     *
     * Of course some users actually do care about whether or not persistence
     * was successfully enabled, so the Promise returned from this method
     * indicates this outcome.
     *
     * This presents a problem though: even before enablePersistence resolves or
     * rejects, users may have made calls to e.g. firestore.collection() which
     * means that the FirestoreClient in there will be available and will be
     * enqueuing actions on the async queue.
     *
     * Meanwhile any failure of an operation on the async queue causes it to
     * panic and reject any further work, on the premise that unhandled errors
     * are fatal.
     *
     * Consequently the fallback is handled internally here in start, and if the
     * fallback succeeds we signal success to the async queue even though the
     * start() itself signals failure.
     *
     * @param databaseInfo The connection information for the current instance.
     * @param componentProvider Provider that returns all core components.
     * @param persistenceSettings Settings object to configure offline
     *     persistence.
     * @returns A deferred result indicating the user-visible result of enabling
     *     offline persistence. This method will reject this if IndexedDB fails to
     *     start for any reason. If usePersistence is false this is
     *     unconditionally resolved.
     */    start(t, e, n) {
        this.bu(), this.Jf = t;
        // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        const s = new Yn, i = new Yn;
        // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
                let r = !1;
        // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.
        return this.credentials.qa(t => {
            if (!r) return r = !0, m("FirestoreClient", "Initializing. user=", t.uid), this.Xf(e, n, t, i).then(s.resolve, s.reject);
            this.mo._r(() => this.Zl.xc(t));
        }), 
        // Block the async queue until initialization is done
        this.mo.cr(() => s.promise), i.promise;
    }
    /** Enables the network connection and requeues all pending operations. */    enableNetwork() {
        return this.bu(), this.mo.enqueue(() => this.Rc.enableNetwork());
    }
    /**
     * Initializes persistent storage, attempting to use IndexedDB if
     * usePersistence is true or memory-only if false.
     *
     * If IndexedDB fails because it's already open in another tab or because the
     * platform can't possibly support our implementation then this method rejects
     * the persistenceResult and falls back on memory-only persistence.
     *
     * @param componentProvider The provider that provides all core componennts
     *     for IndexedDB or memory-backed persistence
     * @param persistenceSettings Settings object to configure offline persistence
     * @param user The initial user
     * @param persistenceResult A deferred result indicating the user-visible
     *     result of enabling offline persistence. This method will reject this if
     *     IndexedDB fails to start for any reason. If usePersistence is false
     *     this is unconditionally resolved.
     * @returns a Promise indicating whether or not initialization should
     *     continue, i.e. that one of the persistence implementations actually
     *     succeeded.
     */    async Xf(t, e, n, s) {
        try {
            // TODO(mrschmidt): Ideally, ComponentProvider would also initialize
            // Datastore (without duplicating the initializing logic once per
            // provider).
            const r = await (i = this.Jf, Promise.resolve(new Vo(i))), o = lr(this.Jf.s), h = function(t, e, n) {
                return new Br(t, e, n);
            }(r, this.credentials, o);
            await t.initialize({
                mo: this.mo,
                Jf: this.Jf,
                Du: h,
                clientId: this.clientId,
                zf: n,
                e_: 100,
                Yf: e
            }), this.persistence = t.persistence, this.t_ = t.t_, this.zu = t.zu, this.Zl = t.Zl, 
            this.Rc = t.Rc, this.qf = t.qf, this.Zf = t.Kf, 
            // When a user calls clearPersistence() in one client, all other clients
            // need to be terminated to allow the delete to succeed.
            this.persistence.hr(async () => {
                await this.terminate();
            }), s.resolve();
        } catch (t) {
            // An unknown failure on the first stage shuts everything down.
            if (
            // Regardless of whether or not the retry succeeds, from an user
            // perspective, offline persistence has failed.
            s.reject(t), !this.td(t)) throw t;
            return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + t), 
            this.Xf(new bo, {
                Hf: !1
            }, n, s);
        }
        var i;
        /** Return the Platform-specific connectivity monitor. */    }
    /**
     * Decides whether the provided error allows us to gracefully disable
     * persistence (as opposed to crashing the client).
     */    td(t) {
        return "FirebaseError" === t.name ? t.code === x.FAILED_PRECONDITION || t.code === x.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || (
        // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        22 === t.code || 20 === t.code || 
        // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        11 === t.code);
    }
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */    bu() {
        if (this.mo.xo) throw new M(x.FAILED_PRECONDITION, "The client has already been terminated.");
    }
    /** Disables the network connection. Pending operations will not complete. */    disableNetwork() {
        return this.bu(), this.mo.enqueue(() => this.Rc.disableNetwork());
    }
    terminate() {
        return this.mo.qo(async () => {
            // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
            this.qf && this.qf.stop(), await this.Zl.gr(), await this.t_.gr(), await this.persistence.gr(), 
            // `removeChangeListener` must be called after shutting down the
            // RemoteStore as it will prevent the RemoteStore from retrieving
            // auth tokens.
            this.credentials.Ua();
        });
    }
    /**
     * Returns a Promise that resolves when all writes that were pending at the time this
     * method was called received server acknowledgement. An acknowledgement can be either acceptance
     * or rejection.
     */    waitForPendingWrites() {
        this.bu();
        const t = new Yn;
        return this.mo.cr(() => this.Rc.V_(t)), t.promise;
    }
    listen(t, e, n) {
        this.bu();
        const s = new lo(t, e, n);
        return this.mo.cr(() => this.Zf.listen(s)), s;
    }
    mc(t) {
        // Checks for termination but does not raise error, allowing unlisten after
        // termination to be a no-op.
        this.ed || this.mo.cr(() => this.Zf.mc(t));
    }
    async nd(t) {
        this.bu();
        const e = new Yn;
        return await this.mo.enqueue(async () => {
            try {
                const n = await this.zu.Wh(t);
                n instanceof In ? e.resolve(n) : n instanceof mn ? e.resolve(null) : e.reject(new M(x.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"));
            } catch (n) {
                const s = Ti(n, `Failed to get document '${t} from cache`);
                e.reject(s);
            }
        }), e.promise;
    }
    async sd(t) {
        this.bu();
        const e = new Yn;
        return await this.mo.enqueue(async () => {
            try {
                const n = await this.zu.Gh(t, 
                /* usePreviousResults= */ !0), s = new no(t, n.zh), i = s.xl(n.documents), r = s.Jn(i, 
                /* updateLimboDocuments= */ !1);
                e.resolve(r.snapshot);
            } catch (n) {
                const s = Ti(n, `Failed to execute query '${t} against cache`);
                e.reject(s);
            }
        }), e.promise;
    }
    write(t) {
        this.bu();
        const e = new Yn;
        return this.mo.cr(() => this.Rc.write(t, e)), e.promise;
    }
    s() {
        return this.Jf.s;
    }
    q_(t) {
        this.bu(), this.mo.cr(() => (this.Zf.q_(t), Promise.resolve()));
    }
    U_(t) {
        // Checks for shutdown but does not raise error, allowing remove after
        // shutdown to be a no-op.
        this.ed || this.mo.cr(() => (this.Zf.U_(t), Promise.resolve()));
    }
    get ed() {
        // Technically, the asyncQueue is still running, but only accepting operations
        // related to termination or supposed to be run after termination. It is effectively
        // terminated to the eyes of users.
        return this.mo.xo;
    }
    transaction(t) {
        this.bu();
        const e = new Yn;
        return this.mo.cr(() => (this.Rc.runTransaction(this.mo, t, e), Promise.resolve())), 
        e.promise;
    }
}

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
/*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */ class Co {
    constructor(t) {
        this.observer = t, 
        /**
         * When set to true, will not raise future events. Necessary to deal with
         * async detachment of listener.
         */
        this.muted = !1;
    }
    next(t) {
        this.rd(this.observer.next, t);
    }
    error(t) {
        this.rd(this.observer.error, t);
    }
    od() {
        this.muted = !0;
    }
    rd(t, e) {
        this.muted || setTimeout(() => {
            this.muted || t(e);
        }, 0);
    }
}

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
 */ function Fo(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        const n = t;
        for (const t of e) if (t in n && "function" == typeof n[t]) return !0;
        return !1;
    }
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
    /**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 */ (t, [ "next", "error", "complete" ]);
}

class No {
    constructor(t, e, n, s) {
        this.s = t, this.timestampsInSnapshots = e, this.hd = n, this.ad = s;
    }
    ud(t) {
        switch (Mt(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return jt(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.ld(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this._d(t);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return new Ji(Kt(t.bytesValue));

          case 7 /* RefValue */ :
            return this.fd(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.dd(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.wd(t.arrayValue);

          case 10 /* ObjectValue */ :
            return this.Td(t.mapValue);

          default:
            throw P();
        }
    }
    Td(t) {
        const e = {};
        return N(t.fields || {}, (t, n) => {
            e[t] = this.ud(n);
        }), e;
    }
    dd(t) {
        return new cr(jt(t.latitude), jt(t.longitude));
    }
    wd(t) {
        return (t.values || []).map(t => this.ud(t));
    }
    _d(t) {
        switch (this.hd) {
          case "previous":
            const e = function t(e) {
                const n = e.mapValue.fields.__previous_value__;
                return $t(n) ? t(n) : n;
            }(t);
            return null == e ? null : this.ud(e);

          case "estimate":
            return this.ld(kt(t));

          default:
            return null;
        }
    }
    ld(t) {
        const e = Wt(t), n = new O(e.seconds, e.nanos);
        return this.timestampsInSnapshots ? n : n.toDate();
    }
    fd(t) {
        const e = q.$(t);
        V($e(e));
        const n = new C(e.get(1), e.get(3)), s = new W(e.g(5));
        return n.isEqual(this.s) || 
        // TODO(b/64130202): Somehow support foreign references.
        A(`Document ${s} contains a document ` + "reference within a different database (" + `${n.projectId}/${n.database}) which is not ` + "supported. It will be treated as a reference in the current " + `database (${this.s.projectId}/${this.s.database}) ` + "instead."), 
        this.ad(s);
    }
}

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
// settings() defaults:
const $o = Ai.uh;

/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied firestore.Settings object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */
class ko {
    constructor(t) {
        var e, n, s, i;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new M(x.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else ki("settings", "non-empty string", "host", t.host), this.host = t.host, xi("settings", "boolean", "ssl", t.ssl), 
        this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (Wi("settings", t, [ "host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "ignoreUndefinedProperties" ]), 
        xi("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, 
        xi("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), xi("settings", "boolean", "ignoreUndefinedProperties", t.ignoreUndefinedProperties), 
        // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? A("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && A("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), 
        this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, 
        this.ignoreUndefinedProperties = null !== (s = t.ignoreUndefinedProperties) && void 0 !== s && s, 
        xi("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = Ai._h; else {
            if (t.cacheSizeBytes !== $o && t.cacheSizeBytes < Ai.lh) throw new M(x.INVALID_ARGUMENT, `cacheSizeBytes must be at least ${Ai.lh}`);
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        xi("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), 
        this.forceLongPolling = null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i;
    }
    isEqual(t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
    }
}

/**
 * The root reference to the database.
 */ class xo {
    // Note: We are using `MemoryComponentProvider` as a default
    // ComponentProvider to ensure backwards compatibility with the format
    // expected by the console build.
    constructor(t, e, n = new bo) {
        if (this.Ed = null, 
        // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this.Id = new wi, this.INTERNAL = {
            delete: async () => {
                // The client must be initalized to ensure that all subsequent API usage
                // throws an exception.
                this.md(), await this.Ad.terminate();
            }
        }, "object" == typeof t.options) {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            const n = t;
            this.Ed = n, this.Va = xo.Rd(n), this.Pd = n.name, this.Vd = new $r(e);
        } else {
            const e = t;
            if (!e.projectId) throw new M(x.INVALID_ARGUMENT, "Must provide projectId");
            this.Va = new C(e.projectId, e.database), 
            // Use a default persistenceKey that lines up with FirebaseApp.
            this.Pd = "[DEFAULT]", this.Vd = new Nr;
        }
        this.gd = n, this.yd = new ko({});
    }
    get pd() {
        return this.bd || (
        // Lazy initialize UserDataReader once the settings are frozen
        this.bd = new Ir(this.Va, this.yd.ignoreUndefinedProperties)), this.bd;
    }
    settings(t) {
        Di("Firestore.settings", arguments, 1), Ni("Firestore.settings", "object", 1, t);
        const e = new ko(t);
        if (this.Ad && !this.yd.isEqual(e)) throw new M(x.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.yd = e, void 0 !== e.credentials && (this.Vd = function(t) {
            if (!t) return new Nr;
            switch (t.type) {
              case "gapi":
                const e = t.vd;
                // Make sure this really is a Gapi client.
                                return V(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new xr(e, t.za || "0");

              case "provider":
                return t.vd;

              default:
                throw new M(x.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }
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
 */ (e.credentials));
    }
    enableNetwork() {
        return this.md(), this.Ad.enableNetwork();
    }
    disableNetwork() {
        return this.md(), this.Ad.disableNetwork();
    }
    enablePersistence(t) {
        var e, n;
        if (this.Ad) throw new M(x.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        let s = !1, i = !1;
        if (t && (void 0 !== t.experimentalTabSynchronization && A("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), 
        s = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n, 
        i = !!t.experimentalForceOwningTab && t.experimentalForceOwningTab, s && i)) throw new M(x.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
        return this.Sd(this.gd, {
            Hf: !0,
            cacheSizeBytes: this.yd.cacheSizeBytes,
            synchronizeTabs: s,
            qi: i
        });
    }
    async clearPersistence() {
        if (void 0 !== this.Ad && !this.Ad.ed) throw new M(x.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
        const t = new Yn;
        return this.Id.Mo(async () => {
            try {
                await this.gd.clearPersistence(this.Va, this.Pd), t.resolve();
            } catch (e) {
                t.reject(e);
            }
        }), t.promise;
    }
    terminate() {
        return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
    }
    get Dd() {
        return this.md(), this.Ad.ed;
    }
    waitForPendingWrites() {
        return this.md(), this.Ad.waitForPendingWrites();
    }
    onSnapshotsInSync(t) {
        if (this.md(), Fo(t)) return Mo(this.Ad, t);
        {
            Ni("Firestore.onSnapshotsInSync", "function", 1, t);
            const e = {
                next: t
            };
            return Mo(this.Ad, e);
        }
    }
    md() {
        return this.Ad || 
        // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Sd(new bo, {
            Hf: !1
        }), this.Ad;
    }
    Cd() {
        return new D(this.Va, this.Pd, this.yd.host, this.yd.ssl, this.yd.forceLongPolling);
    }
    Sd(t, e) {
        const n = this.Cd();
        return this.Ad = new Do(this.Vd, this.Id), this.Ad.start(n, t, e);
    }
    static Rd(t) {
        if (e = t.options, n = "projectId", !Object.prototype.hasOwnProperty.call(e, n)) throw new M(x.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        var e, n;
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
 */        const s = t.options.projectId;
        if (!s || "string" != typeof s) throw new M(x.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new C(s);
    }
    get app() {
        if (!this.Ed) throw new M(x.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this.Ed;
    }
    collection(t) {
        return Di("Firestore.collection", arguments, 1), Ni("Firestore.collection", "non-empty string", 1, t), 
        this.md(), new Ho(q.$(t), this, 
        /* converter= */ null);
    }
    doc(t) {
        return Di("Firestore.doc", arguments, 1), Ni("Firestore.doc", "non-empty string", 1, t), 
        this.md(), Bo.Fd(q.$(t), this, 
        /* converter= */ null);
    }
    collectionGroup(t) {
        if (Di("Firestore.collectionGroup", arguments, 1), Ni("Firestore.collectionGroup", "non-empty string", 1, t), 
        t.indexOf("/") >= 0) throw new M(x.INVALID_ARGUMENT, `Invalid collection ID '${t}' passed to function ` + "Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.md(), new Ko(new Rn(q.k(), t), this, 
        /* converter= */ null);
    }
    runTransaction(t) {
        return Di("Firestore.runTransaction", arguments, 1), Ni("Firestore.runTransaction", "function", 1, t), 
        this.md().transaction(e => t(new Oo(this, e)));
    }
    batch() {
        return this.md(), new Lo(this);
    }
    static get logLevel() {
        switch (I()) {
          case n.DEBUG:
            return "debug";

          case n.ERROR:
            return "error";

          case n.SILENT:
            return "silent";

          case n.WARN:
            return "warn";

          case n.INFO:
            return "info";

          case n.VERBOSE:
            return "verbose";

          default:
            // The default log level is error
            return "error";
        }
    }
    static setLogLevel(t) {
        var e;
        Di("Firestore.setLogLevel", arguments, 1), Li("setLogLevel", [ "debug", "error", "silent", "warn", "info", "verbose" ], 1, t), 
        e = t, E.setLogLevel(e);
    }
    // Note: this is not a property because the minifier can't work correctly with
    // the way TypeScript compiler outputs properties.
    Nd() {
        return this.yd.timestampsInSnapshots;
    }
}

/** Registers the listener for onSnapshotsInSync() */ function Mo(t, e) {
    const n = new Co({
        next: () => {
            e.next && e.next();
        },
        error: t => {
            throw P();
        }
    });
    return t.q_(n), () => {
        n.od(), t.U_(n);
    };
}

/**
 * A reference to a transaction.
 */ class Oo {
    constructor(t, e) {
        this.$d = t, this.kd = e;
    }
    get(t) {
        Di("Transaction.get", arguments, 1);
        const e = Zo("Transaction.get", t, this.$d);
        return this.kd.ku([ e.ga ]).then(t => {
            if (!t || 1 !== t.length) return P();
            const n = t[0];
            if (n instanceof mn) return new Qo(this.$d, e.ga, null, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, e.ya);
            if (n instanceof In) return new Qo(this.$d, e.ga, n, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, e.ya);
            throw P();
        });
    }
    set(t, e, n) {
        Fi("Transaction.set", arguments, 2, 3);
        const s = Zo("Transaction.set", t, this.$d);
        n = Yo("Transaction.set", n);
        const i = eh(s.ya, e, n), r = mr(this.$d.pd, "Transaction.set", s.ga, i, null !== s.ya, n);
        return this.kd.set(s.ga, r), this;
    }
    update(t, e, n, ...s) {
        let i, r;
        return "string" == typeof e || e instanceof Zi ? (Ci("Transaction.update", arguments, 3), 
        i = Zo("Transaction.update", t, this.$d), r = Rr(this.$d.pd, "Transaction.update", i.ga, e, n, s)) : (Di("Transaction.update", arguments, 2), 
        i = Zo("Transaction.update", t, this.$d), r = Ar(this.$d.pd, "Transaction.update", i.ga, e)), 
        this.kd.update(i.ga, r), this;
    }
    delete(t) {
        Di("Transaction.delete", arguments, 1);
        const e = Zo("Transaction.delete", t, this.$d);
        return this.kd.delete(e.ga), this;
    }
}

class Lo {
    constructor(t) {
        this.$d = t, this.xd = [], this.Md = !1;
    }
    set(t, e, n) {
        Fi("WriteBatch.set", arguments, 2, 3), this.Od();
        const s = Zo("WriteBatch.set", t, this.$d);
        n = Yo("WriteBatch.set", n);
        const i = eh(s.ya, e, n), r = mr(this.$d.pd, "WriteBatch.set", s.ga, i, null !== s.ya, n);
        return this.xd = this.xd.concat(r.pa(s.ga, Je.Qe())), this;
    }
    update(t, e, n, ...s) {
        let i, r;
        return this.Od(), "string" == typeof e || e instanceof Zi ? (Ci("WriteBatch.update", arguments, 3), 
        i = Zo("WriteBatch.update", t, this.$d), r = Rr(this.$d.pd, "WriteBatch.update", i.ga, e, n, s)) : (Di("WriteBatch.update", arguments, 2), 
        i = Zo("WriteBatch.update", t, this.$d), r = Ar(this.$d.pd, "WriteBatch.update", i.ga, e)), 
        this.xd = this.xd.concat(r.pa(i.ga, Je.exists(!0))), this;
    }
    delete(t) {
        Di("WriteBatch.delete", arguments, 1), this.Od();
        const e = Zo("WriteBatch.delete", t, this.$d);
        return this.xd = this.xd.concat(new _n(e.ga, Je.Qe())), this;
    }
    commit() {
        return this.Od(), this.Md = !0, this.xd.length > 0 ? this.$d.md().write(this.xd) : Promise.resolve();
    }
    Od() {
        if (this.Md) throw new M(x.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }
}

/**
 * A reference to a particular document in a collection in the database.
 */ class Bo extends fr {
    constructor(t, e, n) {
        super(e.Va, t, n), this.ga = t, this.firestore = e, this.ya = n, this.Ad = this.firestore.md();
    }
    static Fd(t, e, n) {
        if (t.length % 2 != 0) throw new M(x.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + `${t.N()} has ${t.length}`);
        return new Bo(new W(t), e, n);
    }
    get id() {
        return this.ga.path.S();
    }
    get parent() {
        return new Ho(this.ga.path.p(), this.firestore, this.ya);
    }
    get path() {
        return this.ga.path.N();
    }
    collection(t) {
        if (Di("DocumentReference.collection", arguments, 1), Ni("DocumentReference.collection", "non-empty string", 1, t), 
        !t) throw new M(x.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        const e = q.$(t);
        return new Ho(this.ga.path.child(e), this.firestore, 
        /* converter= */ null);
    }
    isEqual(t) {
        if (!(t instanceof Bo)) throw ji("isEqual", "DocumentReference", 1, t);
        return this.firestore === t.firestore && this.ga.isEqual(t.ga) && this.ya === t.ya;
    }
    set(t, e) {
        Fi("DocumentReference.set", arguments, 1, 2), e = Yo("DocumentReference.set", e);
        const n = eh(this.ya, t, e), s = mr(this.firestore.pd, "DocumentReference.set", this.ga, n, null !== this.ya, e);
        return this.Ad.write(s.pa(this.ga, Je.Qe()));
    }
    update(t, e, ...n) {
        let s;
        return "string" == typeof t || t instanceof Zi ? (Ci("DocumentReference.update", arguments, 2), 
        s = Rr(this.firestore.pd, "DocumentReference.update", this.ga, t, e, n)) : (Di("DocumentReference.update", arguments, 1), 
        s = Ar(this.firestore.pd, "DocumentReference.update", this.ga, t)), this.Ad.write(s.pa(this.ga, Je.exists(!0)));
    }
    delete() {
        return Di("DocumentReference.delete", arguments, 0), this.Ad.write([ new _n(this.ga, Je.Qe()) ]);
    }
    onSnapshot(...t) {
        var e, n, s;
        Fi("DocumentReference.onSnapshot", arguments, 1, 4);
        let i = {
            includeMetadataChanges: !1
        }, r = 0;
        "object" != typeof t[r] || Fo(t[r]) || (i = t[r], Wi("DocumentReference.onSnapshot", i, [ "includeMetadataChanges" ]), 
        xi("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", i.includeMetadataChanges), 
        r++);
        const o = {
            includeMetadataChanges: i.includeMetadataChanges
        };
        if (Fo(t[r])) {
            const i = t[r];
            t[r] = null === (e = i.next) || void 0 === e ? void 0 : e.bind(i), t[r + 1] = null === (n = i.error) || void 0 === n ? void 0 : n.bind(i), 
            t[r + 2] = null === (s = i.complete) || void 0 === s ? void 0 : s.bind(i);
        } else Ni("DocumentReference.onSnapshot", "function", r, t[r]), $i("DocumentReference.onSnapshot", "function", r + 1, t[r + 1]), 
        $i("DocumentReference.onSnapshot", "function", r + 2, t[r + 2]);
        const h = {
            next: e => {
                t[r] && t[r](this.Ld(e));
            },
            error: t[r + 1],
            complete: t[r + 2]
        };
        return qo(this.Ad, this.ga, o, h);
    }
    get(t) {
        return Fi("DocumentReference.get", arguments, 0, 1), Xo("DocumentReference.get", t), 
        t && "cache" === t.source ? this.firestore.md().nd(this.ga).then(t => new Qo(this.firestore, this.ga, t, 
        /*fromCache=*/ !0, t instanceof In && t.Ge, this.ya)) : 
        /**
 * Retrieves a latency-compensated document from the backend via a
 * SnapshotListener.
 */
        function(t, e, n) {
            const s = new Yn, i = qo(t, e, {
                includeMetadataChanges: !0,
                H_: !0
            }, {
                next: t => {
                    // Remove query first before passing event to user to avoid
                    // user actions affecting the now stale query.
                    i();
                    const r = t.docs.has(e);
                    !r && t.fromCache ? 
                    // TODO(dimond): If we're online and the document doesn't
                    // exist then we resolve with a doc.exists set to false. If
                    // we're offline however, we reject the Promise in this
                    // case. Two options: 1) Cache the negative response from
                    // the server so we can deliver that even when you're
                    // offline 2) Actually reject the Promise in the online case
                    // if the document doesn't exist.
                    s.reject(new M(x.UNAVAILABLE, "Failed to get document because the client is offline.")) : r && t.fromCache && n && "server" === n.source ? s.reject(new M(x.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : s.resolve(t);
                },
                error: t => s.reject(t)
            });
            return s.promise;
        }(this.Ad, this.ga, t).then(t => this.Ld(t));
    }
    withConverter(t) {
        return new Bo(this.ga, this.firestore, t);
    }
    /**
     * Converts a ViewSnapshot that contains the current document to a
     * DocumentSnapshot.
     */    Ld(t) {
        const e = t.docs.get(this.ga);
        return new Qo(this.firestore, this.ga, e, t.fromCache, t.hasPendingWrites, this.ya);
    }
}

/** Registers an internal snapshot listener for `ref`. */ function qo(t, e, n, s) {
    let i = t => {
        console.error("Uncaught Error in onSnapshot:", t);
    };
    s.error && (i = s.error.bind(s));
    const r = new Co({
        next: t => {
            s.next && s.next(t);
        },
        error: i
    }), o = t.listen(Rn.hn(e.path), r, n);
    return () => {
        r.od(), t.mc(o);
    };
}

class Uo {
    constructor(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
    }
    isEqual(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }
}

class Qo {
    constructor(t, e, n, s, i, r) {
        this.$d = t, this.ga = e, this.Bd = n, this.qd = s, this.Ud = i, this.ya = r;
    }
    data(t) {
        if (Fi("DocumentSnapshot.data", arguments, 0, 1), t = Jo("DocumentSnapshot.data", t), 
        this.Bd) {
            // We only want to use the converter and create a new DocumentSnapshot
            // if a converter has been provided.
            if (this.ya) {
                const e = new Wo(this.$d, this.ga, this.Bd, this.qd, this.Ud, 
                /* converter= */ null);
                return this.ya.fromFirestore(e, t);
            }
            return new No(this.$d.Va, this.$d.Nd(), t.serverTimestamps || "none", t => new Bo(t, this.$d, /* converter= */ null)).ud(this.Bd.tn());
        }
    }
    get(t, e) {
        if (Fi("DocumentSnapshot.get", arguments, 1, 2), e = Jo("DocumentSnapshot.get", e), 
        this.Bd) {
            const n = this.Bd.data().field(br("DocumentSnapshot.get", t, this.ga));
            if (null !== n) {
                return new No(this.$d.Va, this.$d.Nd(), e.serverTimestamps || "none", t => new Bo(t, this.$d, this.ya)).ud(n);
            }
        }
    }
    get id() {
        return this.ga.path.S();
    }
    get ref() {
        return new Bo(this.ga, this.$d, this.ya);
    }
    get exists() {
        return null !== this.Bd;
    }
    get metadata() {
        return new Uo(this.Ud, this.qd);
    }
    isEqual(t) {
        if (!(t instanceof Qo)) throw ji("isEqual", "DocumentSnapshot", 1, t);
        return this.$d === t.$d && this.qd === t.qd && this.ga.isEqual(t.ga) && (null === this.Bd ? null === t.Bd : this.Bd.isEqual(t.Bd)) && this.ya === t.ya;
    }
}

class Wo extends Qo {
    data(t) {
        return super.data(t);
    }
}

/** The query class that is shared between the full, lite and legacy SDK. */ function jo(t) {
    if (t.mn() && 0 === t.en.length) throw new M(x.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

class Ko extends class {
    constructor(t, e, n) {
        this.Va = t, this.pd = e, this.Qd = n;
    }
    Wd(t, e, n) {
        let s;
        if (t.O()) {
            if ("array-contains" /* ARRAY_CONTAINS */ === e || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e) throw new M(x.INVALID_ARGUMENT, `Invalid Query. You can't perform '${e}' ` + "queries on FieldPath.documentId().");
            if ("in" /* IN */ === e) {
                this.jd(n, e);
                const t = [];
                for (const e of n) t.push(this.Kd(e));
                s = {
                    arrayValue: {
                        values: t
                    }
                };
            } else s = this.Kd(n);
        } else "in" /* IN */ !== e && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== e || this.jd(n, e), 
        s = Pr(this.pd, "Query.where", n, "in" /* IN */ === e);
        const i = bn.create(t, e, s);
        return this.Gd(i), i;
    }
    zd(t, e) {
        if (null !== this.Qd.startAt) throw new M(x.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
        if (null !== this.Qd.endAt) throw new M(x.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
        const n = new On(t, e);
        return this.Hd(n), n;
    }
    /**
     * Create a Bound from a query and a document.
     *
     * Note that the Bound will always include the key of the document
     * and so only the provided document will compare equal to the returned
     * position.
     *
     * Will throw if the document does not contain all fields of the order by
     * of the query or if any of the fields in the order by are an uncommitted
     * server timestamp.
     */    Yd(t, e, n) {
        if (!e) throw new M(x.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + `${t}().`);
        const s = [];
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
                for (const t of this.Qd.orderBy) if (t.field.O()) s.push(Gt(this.Va, e.key)); else {
            const n = e.field(t.field);
            if ($t(n)) throw new M(x.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + t.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
            if (null === n) {
                const e = t.field.N();
                throw new M(x.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a " + `document for which the field '${e}' (used as the ` + "orderBy) does not exist.");
            }
            s.push(n);
        }
        return new $n(s, n);
    }
    /**
     * Converts a list of field values to a Bound for the given query.
     */    Jd(t, e, n) {
        // Use explicit order by's because it has to match the query the user made
        const s = this.Qd.en;
        if (e.length > s.length) throw new M(x.INVALID_ARGUMENT, `Too many arguments provided to ${t}(). ` + "The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
        const i = [];
        for (let n = 0; n < e.length; n++) {
            const r = e[n];
            if (s[n].field.O()) {
                if ("string" != typeof r) throw new M(x.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + `${t}(), but got a ${typeof r}`);
                if (!this.Qd.Vn() && -1 !== r.indexOf("/")) throw new M(x.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), " + `the value passed to ${t}() must be a plain document ID, but ` + `'${r}' contains a slash.`);
                const e = this.Qd.path.child(q.$(r));
                if (!W.W(e)) throw new M(x.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by " + `FieldPath.documentId(), the value passed to ${t}() must result in a ` + `valid document path, but '${e}' is not because it contains an odd number ` + "of segments.");
                const n = new W(e);
                i.push(Gt(this.Va, n));
            } else {
                const e = Pr(this.pd, t, r);
                i.push(e);
            }
        }
        return new $n(i, n);
    }
    /**
     * Parses the given documentIdValue into a ReferenceValue, throwing
     * appropriate errors if the value is anything other than a DocumentReference
     * or String, or if the string is malformed.
     */    Kd(t) {
        if ("string" == typeof t) {
            if ("" === t) throw new M(x.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
            if (!this.Qd.Vn() && -1 !== t.indexOf("/")) throw new M(x.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but " + `'${t}' contains a '/' character.`);
            const e = this.Qd.path.child(q.$(t));
            if (!W.W(e)) throw new M(x.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, " + `but '${e}' is not because it has an odd number of segments (${e.length}).`);
            return Gt(this.Va, new W(e));
        }
        if (t instanceof fr) return Gt(this.Va, t.ga);
        throw new M(x.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + `${Ui(t)}.`);
    }
    /**
     * Validates that the value passed into a disjunctrive filter satisfies all
     * array requirements.
     */    jd(t, e) {
        if (!Array.isArray(t) || 0 === t.length) throw new M(x.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for " + `'${e.toString()}' filters.`);
        if (t.length > 10) throw new M(x.INVALID_ARGUMENT, `Invalid Query. '${e.toString()}' filters support a ` + "maximum of 10 elements in the value array.");
        if (t.indexOf(null) >= 0) throw new M(x.INVALID_ARGUMENT, `Invalid Query. '${e.toString()}' filters cannot contain 'null' ` + "in the value array.");
        if (t.filter(t => Number.isNaN(t)).length > 0) throw new M(x.INVALID_ARGUMENT, `Invalid Query. '${e.toString()}' filters cannot contain 'NaN' ` + "in the value array.");
    }
    Gd(t) {
        if (t instanceof bn) {
            const e = [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], n = [ "in" /* IN */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], s = e.indexOf(t.op) >= 0, i = n.indexOf(t.op) >= 0;
            if (t.An()) {
                const e = this.Qd.an();
                if (null !== e && !e.isEqual(t.field)) throw new M(x.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have" + ` inequality filters on '${e.toString()}'` + ` and '${t.field.toString()}'`);
                const n = this.Qd.un();
                null !== n && this.Xd(t.field, n);
            } else if (i || s) {
                // You can have at most 1 disjunctive filter and 1 array filter. Check if
                // the new filter conflicts with an existing one.
                let r = null;
                if (i && (r = this.Qd.Rn(n)), null === r && s && (r = this.Qd.Rn(e)), null !== r) 
                // We special case when it's a duplicate op to give a slightly clearer error message.
                throw r === t.op ? new M(x.INVALID_ARGUMENT, "Invalid query. You cannot use more than one " + `'${t.op.toString()}' filter.`) : new M(x.INVALID_ARGUMENT, `Invalid query. You cannot use '${t.op.toString()}' filters ` + `with '${r.toString()}' filters.`);
            }
        }
    }
    Hd(t) {
        if (null === this.Qd.un()) {
            // This is the first order by. It must match any inequality.
            const e = this.Qd.an();
            null !== e && this.Xd(e, t.field);
        }
    }
    Xd(t, e) {
        if (!e.isEqual(t)) throw new M(x.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality " + `(<, <=, >, or >=) on field '${t.toString()}' ` + `and so you must also use '${t.toString()}' ` + "as your first Query.orderBy(), but your first Query.orderBy() " + `is on field '${e.toString()}' instead.`);
    }
} {
    constructor(t, e, n) {
        super(e.Va, e.pd, t), this.Qd = t, this.firestore = e, this.ya = n;
    }
    where(t, e, n) {
        Di("Query.where", arguments, 3), Qi("Query.where", 3, n);
        // Enumerated from the WhereFilterOp type in index.d.ts.
        const s = Li("Query.where", [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , "==" /* EQUAL */ , ">=" /* GREATER_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , "array-contains" /* ARRAY_CONTAINS */ , "in" /* IN */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], 2, e), i = br("Query.where", t), r = this.Wd(i, s, n);
        return new Ko(this.Qd.cn(r), this.firestore, this.ya);
    }
    orderBy(t, e) {
        let n;
        if (Fi("Query.orderBy", arguments, 1, 2), $i("Query.orderBy", "non-empty string", 2, e), 
        void 0 === e || "asc" === e) n = "asc" /* ASCENDING */; else {
            if ("desc" !== e) throw new M(x.INVALID_ARGUMENT, `Function Query.orderBy() has unknown direction '${e}', ` + "expected 'asc' or 'desc'.");
            n = "desc" /* DESCENDING */;
        }
        const s = br("Query.orderBy", t), i = this.zd(s, n);
        return new Ko(this.Qd.ln(i), this.firestore, this.ya);
    }
    limit(t) {
        return Di("Query.limit", arguments, 1), Ni("Query.limit", "number", 1, t), Ki("Query.limit", 1, t), 
        new Ko(this.Qd._n(t), this.firestore, this.ya);
    }
    limitToLast(t) {
        return Di("Query.limitToLast", arguments, 1), Ni("Query.limitToLast", "number", 1, t), 
        Ki("Query.limitToLast", 1, t), new Ko(this.Qd.fn(t), this.firestore, this.ya);
    }
    startAt(t, ...e) {
        Ci("Query.startAt", arguments, 1);
        const n = this.Zd("Query.startAt", t, e, 
        /*before=*/ !0);
        return new Ko(this.Qd.dn(n), this.firestore, this.ya);
    }
    startAfter(t, ...e) {
        Ci("Query.startAfter", arguments, 1);
        const n = this.Zd("Query.startAfter", t, e, 
        /*before=*/ !1);
        return new Ko(this.Qd.dn(n), this.firestore, this.ya);
    }
    endBefore(t, ...e) {
        Ci("Query.endBefore", arguments, 1);
        const n = this.Zd("Query.endBefore", t, e, 
        /*before=*/ !0);
        return new Ko(this.Qd.wn(n), this.firestore, this.ya);
    }
    endAt(t, ...e) {
        Ci("Query.endAt", arguments, 1);
        const n = this.Zd("Query.endAt", t, e, 
        /*before=*/ !1);
        return new Ko(this.Qd.wn(n), this.firestore, this.ya);
    }
    isEqual(t) {
        if (!(t instanceof Ko)) throw ji("isEqual", "Query", 1, t);
        return this.firestore === t.firestore && Pn(this.Qd, t.Qd) && this.ya === t.ya;
    }
    withConverter(t) {
        return new Ko(this.Qd, this.firestore, t);
    }
    /** Helper function to create a bound from a document or fields */    Zd(t, e, n, s) {
        if (Qi(t, 1, e), e instanceof Qo) return Di(t, [ e, ...n ], 1), this.Yd(t, e.Bd, s);
        {
            const i = [ e ].concat(n);
            return this.Jd(t, i, s);
        }
    }
    onSnapshot(...t) {
        var e, n, s;
        Fi("Query.onSnapshot", arguments, 1, 4);
        let i = {}, r = 0;
        if ("object" != typeof t[r] || Fo(t[r]) || (i = t[r], Wi("Query.onSnapshot", i, [ "includeMetadataChanges" ]), 
        xi("Query.onSnapshot", "boolean", "includeMetadataChanges", i.includeMetadataChanges), 
        r++), Fo(t[r])) {
            const i = t[r];
            t[r] = null === (e = i.next) || void 0 === e ? void 0 : e.bind(i), t[r + 1] = null === (n = i.error) || void 0 === n ? void 0 : n.bind(i), 
            t[r + 2] = null === (s = i.complete) || void 0 === s ? void 0 : s.bind(i);
        } else Ni("Query.onSnapshot", "function", r, t[r]), $i("Query.onSnapshot", "function", r + 1, t[r + 1]), 
        $i("Query.onSnapshot", "function", r + 2, t[r + 2]);
        const o = {
            next: e => {
                t[r] && t[r](new zo(this.firestore, this.Qd, e, this.ya));
            },
            error: t[r + 1],
            complete: t[r + 2]
        };
        return jo(this.Qd), Go(this.firestore.md(), this.Qd, i, o);
    }
    get(t) {
        Fi("Query.get", arguments, 0, 1), Xo("Query.get", t), jo(this.Qd);
        const e = this.firestore.md();
        return (t && "cache" === t.source ? e.sd(this.Qd) : 
        /**
 * Retrieves a latency-compensated query snapshot from the backend via a
 * SnapshotListener.
 */
        function(t, e, n) {
            const s = new Yn, i = Go(t, e, {
                includeMetadataChanges: !0,
                H_: !0
            }, {
                next: t => {
                    // Remove query first before passing event to user to avoid
                    // user actions affecting the now stale query.
                    i(), t.fromCache && n && "server" === n.source ? s.reject(new M(x.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : s.resolve(t);
                },
                error: t => s.reject(t)
            });
            return s.promise;
        }
        /** Registers an internal snapshot listener for `query`. */ (e, this.Qd, t)).then(t => new zo(this.firestore, this.Qd, t, this.ya));
    }
}

function Go(t, e, n, s) {
    let i = t => {
        console.error("Uncaught Error in onSnapshot:", t);
    };
    s.error && (i = s.error.bind(s));
    const r = new Co({
        next: t => {
            s.next && s.next(t);
        },
        error: i
    }), o = t.listen(e, r, n);
    return () => {
        r.od(), t.mc(o);
    };
}

class zo {
    constructor(t, e, n, s) {
        this.$d = t, this.tw = e, this.ew = n, this.ya = s, this.nw = null, this.sw = null, 
        this.metadata = new Uo(n.hasPendingWrites, n.fromCache);
    }
    get docs() {
        const t = [];
        return this.forEach(e => t.push(e)), t;
    }
    get empty() {
        return this.ew.docs._();
    }
    get size() {
        return this.ew.docs.size;
    }
    forEach(t, e) {
        Fi("QuerySnapshot.forEach", arguments, 1, 2), Ni("QuerySnapshot.forEach", "function", 1, t), 
        this.ew.docs.forEach(n => {
            t.call(e, this.iw(n, this.metadata.fromCache, this.ew.Lt.has(n.key)));
        });
    }
    get query() {
        return new Ko(this.tw, this.$d, this.ya);
    }
    docChanges(t) {
        t && (Wi("QuerySnapshot.docChanges", t, [ "includeMetadataChanges" ]), xi("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        const e = !(!t || !t.includeMetadataChanges);
        if (e && this.ew.qt) throw new M(x.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.nw && this.sw === e || (this.nw = 
        /**
 * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
 *
 * Exported for testing.
 *
 * @param snapshot The ViewSnapshot that represents the expected state.
 * @param includeMetadataChanges Whether to include metadata changes.
 * @param converter A factory function that returns a QueryDocumentSnapshot.
 * @return An objecyt that matches the firestore.DocumentChange API.
 */
        function(t, e, n) {
            if (t.Ot._()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                let e, s = 0;
                return t.docChanges.map(i => {
                    const r = n(i.doc, t.fromCache, t.Lt.has(i.doc.key));
                    return e = i.doc, {
                        type: "added",
                        doc: r,
                        oldIndex: -1,
                        newIndex: s++
                    };
                });
            }
            {
                // A DocumentSet that is updated incrementally as changes are applied to use
                // to lookup the index of a document.
                let s = t.Ot;
                return t.docChanges.filter(t => e || 3 /* Metadata */ !== t.type).map(e => {
                    const i = n(e.doc, t.fromCache, t.Lt.has(e.doc.key));
                    let r = -1, o = -1;
                    return 0 /* Added */ !== e.type && (r = s.indexOf(e.doc.key), s = s.delete(e.doc.key)), 
                    1 /* Removed */ !== e.type && (s = s.add(e.doc), o = s.indexOf(e.doc.key)), {
                        type: th(e.type),
                        doc: i,
                        oldIndex: r,
                        newIndex: o
                    };
                });
            }
        }(this.ew, e, this.iw.bind(this)), this.sw = e), this.nw;
    }
    /** Check the equality. The call can be very expensive. */    isEqual(t) {
        if (!(t instanceof zo)) throw ji("isEqual", "QuerySnapshot", 1, t);
        return this.$d === t.$d && Pn(this.tw, t.tw) && this.ew.isEqual(t.ew) && this.ya === t.ya;
    }
    iw(t, e, n) {
        return new Wo(this.$d, t.key, t, e, n, this.ya);
    }
}

class Ho extends Ko {
    constructor(t, e, n) {
        if (super(Rn.hn(t), e, n), this.rw = t, t.length % 2 != 1) throw new M(x.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + `${t.N()} has ${t.length}`);
    }
    get id() {
        return this.Qd.path.S();
    }
    get parent() {
        const t = this.Qd.path.p();
        return t._() ? null : new Bo(new W(t), this.firestore, 
        /* converter= */ null);
    }
    get path() {
        return this.Qd.path.N();
    }
    doc(t) {
        Fi("CollectionReference.doc", arguments, 0, 1), 
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = p.t()), Ni("CollectionReference.doc", "non-empty string", 1, t);
        const e = q.$(t);
        return Bo.Fd(this.Qd.path.child(e), this.firestore, this.ya);
    }
    add(t) {
        Di("CollectionReference.add", arguments, 1), Ni("CollectionReference.add", "object", 1, this.ya ? this.ya.toFirestore(t) : t);
        const e = this.doc();
        return e.set(t).then(() => e);
    }
    withConverter(t) {
        return new Ho(this.rw, this.firestore, t);
    }
}

function Yo(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (Wi(t, e, [ "merge", "mergeFields" ]), xi(t, "boolean", "merge", e.merge), Mi(t, "mergeFields", "a string or a FieldPath", e.mergeFields, t => "string" == typeof t || t instanceof Zi), 
    void 0 !== e.mergeFields && void 0 !== e.merge) throw new M(x.INVALID_ARGUMENT, `Invalid options passed to function ${t}(): You cannot specify both "merge" ` + 'and "mergeFields".');
    return e;
}

function Jo(t, e) {
    return void 0 === e ? {} : (Wi(t, e, [ "serverTimestamps" ]), Oi(t, 0, "serverTimestamps", e.serverTimestamps, [ "estimate", "previous", "none" ]), 
    e);
}

function Xo(t, e) {
    $i(t, "object", 1, e), e && (Wi(t, e, [ "source" ]), Oi(t, 0, "source", e.source, [ "default", "server", "cache" ]));
}

function Zo(t, e, n) {
    if (e instanceof fr) {
        if (e.firestore !== n) throw new M(x.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return e;
    }
    throw ji(t, "DocumentReference", 1, e);
}

function th(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return P();
    }
}

/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function eh(t, e, n) {
    let s;
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return s = t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e, 
    s;
}

const nh = {
    Firestore: xo,
    GeoPoint: cr,
    Timestamp: O,
    Blob: Ji,
    Transaction: Oo,
    WriteBatch: Lo,
    DocumentReference: Bo,
    DocumentSnapshot: Qo,
    Query: Ko,
    QueryDocumentSnapshot: Wo,
    QuerySnapshot: zo,
    CollectionReference: Ho,
    FieldPath: Zi,
    FieldValue: ar,
    setLogLevel: xo.setLogLevel,
    CACHE_SIZE_UNLIMITED: $o
};

/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase The FirebaseNamespace to register Firestore with
 * @param firestoreFactory A factory function that returns a new Firestore
 *    instance.
 */
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
/**
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
function sh(t) {
    !function(t, e) {
        t.INTERNAL.registerComponent(new w("firestore", t => {
            const n = t.getProvider("app").getImmediate();
            return e(n, t.getProvider("auth-internal"));
        }, "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, nh)));
    }(t, (t, e) => new xo(t, e, new So)), t.registerVersion("@firebase/firestore", "1.16.1");
}

sh(t);

export { sh as __PRIVATE_registerFirestore };
//# sourceMappingURL=index.esm2017.js.map
