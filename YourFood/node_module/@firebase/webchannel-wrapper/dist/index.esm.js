/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var g, goog = goog || {}, k = commonjsGlobal || self;
function aa() { }
function ba(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array)
                return "array";
            if (a instanceof Object)
                return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)
                return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                return "function";
        }
        else
            return "null";
    else if ("function" == b && "undefined" == typeof a.call)
        return "object";
    return b;
}
function da(a) { var b = ba(a); return "array" == b || "object" == b && "number" == typeof a.length; }
function m(a) { var b = typeof a; return "object" == b && null != a || "function" == b; }
function ea(a) { return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = ++ha); }
var fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0;
function ia(a, b, c) { return a.call.apply(a.bind, arguments); }
function ja(a, b, c) { if (!a)
    throw Error(); if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () { var e = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(e, d); return a.apply(b, e); };
} return function () { return a.apply(b, arguments); }; }
function n(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n = ia : n = ja; return n.apply(null, arguments); }
function ka(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function () { var d = c.slice(); d.push.apply(d, arguments); return a.apply(this, d); }; }
var q = Date.now || function () { return +new Date; };
function r(a, b) { function c() { } c.prototype = b.prototype; a.M = b.prototype; a.prototype = new c; a.prototype.constructor = a; }
function t() { this.j = this.j; this.i = this.i; }
var la = 0;
t.prototype.j = !1;
t.prototype.da = function () { if (!this.j && (this.j = !0, this.C(), 0 != la)) {
    var a = ea(this);
} };
t.prototype.C = function () { if (this.i)
    for (; this.i.length;)
        this.i.shift()(); };
var na = Array.prototype.indexOf ? function (a, b) { return Array.prototype.indexOf.call(a, b, void 0); } : function (a, b) { if ("string" === typeof a)
    return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b)
        return c; return -1; }, oa = Array.prototype.forEach ? function (a, b, c) { Array.prototype.forEach.call(a, b, c); } : function (a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    f in e && b.call(c, e[f], f, a); };
function pa(a) { a: {
    var b = qa;
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
        }
    b = -1;
} return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]; }
function ra(a) { return Array.prototype.concat.apply([], arguments); }
function sa(a) { var b = a.length; if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++)
        c[d] = a[d];
    return c;
} return []; }
function wa(a) { return /^[\s\xa0]*$/.test(a); }
var xa = String.prototype.trim ? function (a) { return a.trim(); } : function (a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]; };
function u(a, b) { return -1 != a.indexOf(b); }
function ya(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
var v;
a: {
    var za = k.navigator;
    if (za) {
        var Aa = za.userAgent;
        if (Aa) {
            v = Aa;
            break a;
        }
    }
    v = "";
}
function Ba(a, b, c) { for (var d in a)
    b.call(c, a[d], d, a); }
function Ca(a) { var b = {}; for (var c in a)
    b[c] = a[c]; return b; }
var Da = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ea(a, b) { var c, d; for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
        a[c] = d[c];
    for (var f = 0; f < Da.length; f++)
        c = Da[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
} }
function Fa(a) { Fa[" "](a); return a; }
Fa[" "] = aa;
function Ga(a, b) { var c = Ha; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a); }
var Ia = u(v, "Opera"), w = u(v, "Trident") || u(v, "MSIE"), Ja = u(v, "Edge"), Ka = Ja || w, La = u(v, "Gecko") && !(u(v.toLowerCase(), "webkit") && !u(v, "Edge")) && !(u(v, "Trident") || u(v, "MSIE")) && !u(v, "Edge"), Ma = u(v.toLowerCase(), "webkit") && !u(v, "Edge");
function Na() { var a = k.document; return a ? a.documentMode : void 0; }
var Oa;
a: {
    var Pa = "", Qa = function () { var a = v; if (La)
        return /rv:([^\);]+)(\)|;)/.exec(a); if (Ja)
        return /Edge\/([\d\.]+)/.exec(a); if (w)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (Ma)
        return /WebKit\/(\S+)/.exec(a); if (Ia)
        return /(?:Version)[ \/]?(\S+)/.exec(a); }();
    Qa && (Pa = Qa ? Qa[1] : "");
    if (w) {
        var Ra = Na();
        if (null != Ra && Ra > parseFloat(Pa)) {
            Oa = String(Ra);
            break a;
        }
    }
    Oa = Pa;
}
var Ha = {};
function Sa(a) { return Ga(a, function () { {
    var b = 0;
    var e = xa(String(Oa)).split("."), f = xa(String(a)).split("."), h = Math.max(e.length, f.length);
    for (var l = 0; 0 == b && l < h; l++) {
        var c = e[l] || "", d = f[l] || "";
        do {
            c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
            d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
            if (0 == c[0].length && 0 == d[0].length)
                break;
            b = ya(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || ya(0 == c[2].length, 0 == d[2].length) || ya(c[2], d[2]);
            c = c[3];
            d = d[3];
        } while (0 == b);
    }
} return 0 <= b; }); }
var Ta;
if (k.document && w) {
    var Ua = Na();
    Ta = Ua ? Ua : parseInt(Oa, 10) || void 0;
}
else
    Ta = void 0;
var Va = Ta;
var Wa = !w || 9 <= Number(Va), Xa = w && !Sa("9"), Ya = function () { if (!k.addEventListener || !Object.defineProperty)
    return !1; var a = !1, b = Object.defineProperty({}, "passive", { get: function () { a = !0; } }); try {
    k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
}
catch (c) { } return a; }();
function x(a, b) { this.type = a; this.a = this.target = b; this.defaultPrevented = !1; }
x.prototype.b = function () { this.defaultPrevented = !0; };
function y(a, b) {
    x.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.c = null;
    if (a) {
        var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        if (b = a.relatedTarget) {
            if (La) {
                a: {
                    try {
                        Fa(b.nodeName);
                        var e = !0;
                        break a;
                    }
                    catch (f) { }
                    e = !1;
                }
                e || (b = null);
            }
        }
        else
            "mouseover" ==
                c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey =
            a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Za[a.pointerType] || "";
        this.c = a;
        a.defaultPrevented && this.b();
    }
}
r(y, x);
var Za = { 2: "touch", 3: "pen", 4: "mouse" };
y.prototype.b = function () { y.M.b.call(this); var a = this.c; if (a.preventDefault)
    a.preventDefault();
else if (a.returnValue = !1, Xa)
    try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
            a.keyCode = -1;
    }
    catch (b) { } };
var A = "closure_listenable_" + (1E6 * Math.random() | 0), $a = 0;
function ab(a, b, c, d, e) { this.listener = a; this.proxy = null; this.src = b; this.type = c; this.capture = !!d; this.aa = e; this.key = ++$a; this.V = this.X = !1; }
function bb(a) { a.V = !0; a.listener = null; a.proxy = null; a.src = null; a.aa = null; }
function cb(a) { this.src = a; this.a = {}; this.b = 0; }
cb.prototype.add = function (a, b, c, d, e) { var f = a.toString(); a = this.a[f]; a || (a = this.a[f] = [], this.b++); var h = db(a, b, d, e); -1 < h ? (b = a[h], c || (b.X = !1)) : (b = new ab(b, this.src, f, !!d, e), b.X = c, a.push(b)); return b; };
function eb(a, b) { var c = b.type; if (c in a.a) {
    var d = a.a[c], e = na(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (bb(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
} }
function db(a, b, c, d) { for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.V && f.listener == b && f.capture == !!c && f.aa == d)
        return e;
} return -1; }
var fb = "closure_lm_" + (1E6 * Math.random() | 0), gb = {};
function ib(a, b, c, d, e) { if (d && d.once)
    return jb(a, b, c, d, e); if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        ib(a, b[f], c, d, e);
    return null;
} c = kb(c); return a && a[A] ? a.ra(b, c, m(d) ? !!d.capture : !!d, e) : lb(a, b, c, !1, d, e); }
function lb(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var h = m(e) ? !!e.capture : !!e;
    if (h && !Wa)
        return null;
    var l = mb(a);
    l || (a[fb] = l = new cb(a));
    c = l.add(b, c, d, h, f);
    if (c.proxy)
        return c;
    d = nb();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
        Ya || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent)
        a.attachEvent(ob(b.toString()), d);
    else if (a.addListener && a.removeListener)
        a.addListener(d);
    else
        throw Error("addEventListener and attachEvent are unavailable.");
    return c;
}
function nb() { var a = pb, b = Wa ? function (c) { return a.call(b.src, b.listener, c); } : function (c) { c = a.call(b.src, b.listener, c); if (!c)
    return c; }; return b; }
function jb(a, b, c, d, e) { if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        jb(a, b[f], c, d, e);
    return null;
} c = kb(c); return a && a[A] ? a.sa(b, c, m(d) ? !!d.capture : !!d, e) : lb(a, b, c, !0, d, e); }
function qb(a, b, c, d, e) { if (Array.isArray(b))
    for (var f = 0; f < b.length; f++)
        qb(a, b[f], c, d, e);
else
    (d = m(d) ? !!d.capture : !!d, c = kb(c), a && a[A]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = db(f, c, d, e), -1 < c && (bb(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = mb(a)) && (b = a.a[b.toString()], a = -1, b && (a = db(b, c, d, e)), (c = -1 < a ? b[a] : null) && rb(c)); }
function rb(a) { if ("number" !== typeof a && a && !a.V) {
    var b = a.src;
    if (b && b[A])
        eb(b.c, a);
    else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ob(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        (c = mb(b)) ? (eb(c, a), 0 == c.b && (c.src = null, b[fb] = null)) : bb(a);
    }
} }
function ob(a) { return a in gb ? gb[a] : gb[a] = "on" + a; }
function sb(a, b) { var c = a.listener, d = a.aa || a.src; a.X && rb(a); return c.call(d, b); }
function pb(a, b) { if (a.V)
    return !0; if (!Wa) {
    if (!b)
        a: {
            b = ["window", "event"];
            for (var c = k, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a;
                }
            b = c;
        }
    b = new y(b, this);
    return sb(a, b);
} return sb(a, new y(b, this)); }
function mb(a) { a = a[fb]; return a instanceof cb ? a : null; }
var tb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function kb(a) { if ("function" == ba(a))
    return a; a[tb] || (a[tb] = function (b) { return a.handleEvent(b); }); return a[tb]; }
function B() { t.call(this); this.c = new cb(this); this.J = this; this.A = null; }
r(B, t);
B.prototype[A] = !0;
g = B.prototype;
g.addEventListener = function (a, b, c, d) { ib(this, a, b, c, d); };
g.removeEventListener = function (a, b, c, d) { qb(this, a, b, c, d); };
g.dispatchEvent = function (a) { var b, c = this.A; if (c)
    for (b = []; c; c = c.A)
        b.push(c); c = this.J; var d = a.type || a; if ("string" === typeof a)
    a = new x(a, c);
else if (a instanceof x)
    a.target = a.target || c;
else {
    var e = a;
    a = new x(d, c);
    Ea(a, e);
} e = !0; if (b)
    for (var f = b.length - 1; 0 <= f; f--) {
        var h = a.a = b[f];
        e = ub(h, d, !0, a) && e;
    } h = a.a = c; e = ub(h, d, !0, a) && e; e = ub(h, d, !1, a) && e; if (b)
    for (f = 0; f < b.length; f++)
        h = a.a = b[f], e = ub(h, d, !1, a) && e; return e; };
g.C = function () { B.M.C.call(this); if (this.c) {
    var a = this.c, c;
    for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++)
            bb(d[e]);
        delete a.a[c];
        a.b--;
    }
} this.A = null; };
g.ra = function (a, b, c, d) { return this.c.add(String(a), b, !1, c, d); };
g.sa = function (a, b, c, d) { return this.c.add(String(a), b, !0, c, d); };
function ub(a, b, c, d) { b = a.c.a[String(b)]; if (!b)
    return !0; b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.V && h.capture == c) {
        var l = h.listener, p = h.aa || h.src;
        h.X && eb(a.c, h);
        e = !1 !== l.call(p, d) && e;
    }
} return e && !d.defaultPrevented; }
var vb = k.JSON.stringify;
function wb() { this.b = this.a = null; }
var yb = new /** @class */ (function () {
    function class_1(a, b, c) {
        this.f = c;
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null;
    }
    class_1.prototype.get = function () { var a; 0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c(); return a; };
    return class_1;
}())(function () { return new xb; }, function (a) { a.reset(); }, 100);
wb.prototype.add = function (a, b) { var c = yb.get(); c.set(a, b); this.b ? this.b.next = c : this.a = c; this.b = c; };
function zb() { var a = Ab, b = null; a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null); return b; }
function xb() { this.next = this.b = this.a = null; }
xb.prototype.set = function (a, b) { this.a = a; this.b = b; this.next = null; };
xb.prototype.reset = function () { this.next = this.b = this.a = null; };
function Bb(a) { k.setTimeout(function () { throw a; }, 0); }
function Cb(a, b) { Db || Eb(); Fb || (Db(), Fb = !0); Ab.add(a, b); }
var Db;
function Eb() { var a = k.Promise.resolve(void 0); Db = function () { a.then(Gb); }; }
var Fb = !1, Ab = new wb;
function Gb() { for (var a; a = zb();) {
    try {
        a.a.call(a.b);
    }
    catch (c) {
        Bb(c);
    }
    var b = yb;
    b.g(a);
    b.b < b.f && (b.b++, a.next = b.a, b.a = a);
} Fb = !1; }
function Hb(a, b) { B.call(this); this.b = a || 1; this.a = b || k; this.f = n(this.Ua, this); this.g = q(); }
r(Hb, B);
g = Hb.prototype;
g.Z = !1;
g.L = null;
g.Ua = function () { if (this.Z) {
    var a = q() - this.g;
    0 < a && a < .8 * this.b ? this.L = this.a.setTimeout(this.f, this.b - a) : (this.L && (this.a.clearTimeout(this.L), this.L = null), this.dispatchEvent("tick"), this.Z && (Ib(this), this.start()));
} };
g.start = function () { this.Z = !0; this.L || (this.L = this.a.setTimeout(this.f, this.b), this.g = q()); };
function Ib(a) { a.Z = !1; a.L && (a.a.clearTimeout(a.L), a.L = null); }
g.C = function () { Hb.M.C.call(this); Ib(this); delete this.a; };
function Jb(a, b, c) { if ("function" == ba(a))
    c && (a = n(a, c));
else if (a && "function" == typeof a.handleEvent)
    a = n(a.handleEvent, a);
else
    throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0); }
function Kb(a, b, c) { t.call(this); this.f = null != c ? n(a, c) : a; this.c = b; this.b = n(this.Pa, this); this.a = []; }
r(Kb, t);
g = Kb.prototype;
g.ba = !1;
g.T = null;
g.Ia = function (a) { this.a = arguments; this.T ? this.ba = !0 : Lb(this); };
g.C = function () { Kb.M.C.call(this); this.T && (k.clearTimeout(this.T), this.T = null, this.ba = !1, this.a = []); };
g.Pa = function () { this.T = null; this.ba && (this.ba = !1, Lb(this)); };
function Lb(a) { a.T = Jb(a.b, a.c); a.f.apply(null, a.a); }
function C(a) { t.call(this); this.b = a; this.a = {}; }
r(C, t);
var Mb = [];
function Nb(a, b, c, d) { Array.isArray(c) || (c && (Mb[0] = c.toString()), c = Mb); for (var e = 0; e < c.length; e++) {
    var f = ib(b, c[e], d || a.handleEvent, !1, a.b || a);
    if (!f)
        break;
    a.a[f.key] = f;
} }
function Ob(a) { Ba(a.a, function (b, c) { this.a.hasOwnProperty(c) && rb(b); }, a); a.a = {}; }
C.prototype.C = function () { C.M.C.call(this); Ob(this); };
C.prototype.handleEvent = function () { throw Error("EventHandler.handleEvent not implemented"); };
function Pb() { }
var Qb = null;
function Rb() { return Qb = Qb || new B; }
function Sb(a) { x.call(this, "serverreachability", a); }
r(Sb, x);
function E(a) { var b = Rb(); b.dispatchEvent(new Sb(b, a)); }
function Tb(a) { x.call(this, "statevent", a); }
r(Tb, x);
function F(a) { var b = Rb(); b.dispatchEvent(new Tb(b, a)); }
function Ub(a) { x.call(this, "timingevent", a); }
r(Ub, x);
function Vb(a, b) { if ("function" != ba(a))
    throw Error("Fn must not be null and must be a function"); return k.setTimeout(function () { a(); }, b); }
var Wb = { NO_ERROR: 0, Va: 1, bb: 2, ab: 3, Ya: 4, $a: 5, cb: 6, za: 7, TIMEOUT: 8, gb: 9 };
var Xb = { Xa: "complete", kb: "success", Aa: "error", za: "abort", ib: "ready", jb: "readystatechange", TIMEOUT: "timeout", eb: "incrementaldata", hb: "progress", Za: "downloadprogress", lb: "uploadprogress" };
function Yb() { }
Yb.prototype.a = null;
function Zb(a) { var b; (b = a.a) || (b = a.a = {}); return b; }
function $b() { }
var G = { OPEN: "a", Wa: "b", Aa: "c", fb: "d" };
function ac() { x.call(this, "d"); }
r(ac, x);
function bc() { x.call(this, "c"); }
r(bc, x);
var cc;
function dc() { }
r(dc, Yb);
cc = new dc;
function H(a, b, c) { this.g = a; this.W = b; this.U = c || 1; this.G = new C(this); this.N = ec; a = Ka ? 125 : void 0; this.O = new Hb(a); this.m = null; this.b = !1; this.j = this.A = this.f = this.B = this.s = this.P = this.h = null; this.i = []; this.a = null; this.w = 0; this.c = this.v = null; this.H = -1; this.l = !1; this.J = 0; this.D = null; this.o = this.R = this.F = !1; }
var ec = 45E3, fc = {}, gc = {};
g = H.prototype;
g.setTimeout = function (a) { this.N = a; };
function hc(a, b, c) { a.B = 1; a.f = ic(I(b)); a.j = c; a.F = !0; jc(a, null); }
function jc(a, b) { a.s = q(); J(a); a.A = I(a.f); var c = a.A, d = a.U; Array.isArray(d) || (d = [String(d)]); kc(c.b, "t", d); a.w = 0; a.a = lc(a.g, a.g.w ? b : null); 0 < a.J && (a.D = new Kb(n(a.ya, a, a.a), a.J)); Nb(a.G, a.a, "readystatechange", a.Sa); b = a.m ? Ca(a.m) : {}; a.j ? (a.v || (a.v = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.$(a.A, a.v, a.j, b)) : (a.v = "GET", a.a.$(a.A, a.v, null, b)); E(1); }
g.Sa = function (a) { a = a.target; var b = this.D; b && 3 == K(a) ? b.Ia() : this.ya(a); };
g.ya = function (a) {
    try {
        if (a == this.a)
            a: {
                var b = K(this.a), c = this.a.qa(), d = this.a.S();
                if (!(3 > b || 3 == b && !Ka && !this.a.Y())) {
                    this.l || 4 != b || 7 == c || (8 == c || 0 >= d ? E(3) : E(2));
                    mc(this);
                    var e = this.a.S();
                    this.H = e;
                    var f = this.a.Y();
                    if (this.b = 200 == e) {
                        if (this.R && !this.o) {
                            b: {
                                if (this.a) {
                                    var h, l = this.a;
                                    if ((h = l.a ? l.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !wa(h)) {
                                        var p = h;
                                        break b;
                                    }
                                }
                                p = null;
                            }
                            if (p)
                                this.o = !0, nc(this, p);
                            else {
                                this.b = !1;
                                this.c = 3;
                                F(12);
                                L(this);
                                pc(this);
                                break a;
                            }
                        }
                        this.F ? (qc(this, b, f), Ka && this.b && 3 == b && (Nb(this.G, this.O, "tick", this.Ra), this.O.start())) : nc(this, f);
                        4 == b && L(this);
                        this.b && !this.l && (4 == b ? rc(this.g, this) : (this.b = !1, J(this)));
                    }
                    else
                        400 == e && 0 < f.indexOf("Unknown SID") ? (this.c = 3, F(12)) : (this.c = 0, F(13)), L(this), pc(this);
                }
            }
    }
    catch (D) { }
    finally { }
};
function qc(a, b, c) { for (var d = !0; !a.l && a.w < c.length;) {
    var e = tc(a, c);
    if (e == gc) {
        4 == b && (a.c = 4, F(14), d = !1);
        break;
    }
    else if (e == fc) {
        a.c = 4;
        F(15);
        d = !1;
        break;
    }
    else
        nc(a, e);
} 4 == b && 0 == c.length && (a.c = 1, F(16), d = !1); a.b = a.b && d; d || (L(a), pc(a)); }
g.Ra = function () { if (this.a) {
    var a = K(this.a), b = this.a.Y();
    this.w < b.length && (mc(this), qc(this, a, b), this.b && 4 != a && J(this));
} };
function tc(a, b) { var c = a.w, d = b.indexOf("\n", c); if (-1 == d)
    return gc; c = Number(b.substring(c, d)); if (isNaN(c))
    return fc; d += 1; if (d + c > b.length)
    return gc; b = b.substr(d, c); a.w = d + c; return b; }
g.cancel = function () { this.l = !0; L(this); };
function J(a) { a.P = q() + a.N; uc(a, a.N); }
function uc(a, b) { if (null != a.h)
    throw Error("WatchDog timer not null"); a.h = Vb(n(a.Qa, a), b); }
function mc(a) { a.h && (k.clearTimeout(a.h), a.h = null); }
g.Qa = function () { this.h = null; var a = q(); 0 <= a - this.P ? (2 != this.B && (E(3), F(17)), L(this), this.c = 2, pc(this)) : uc(this, this.P - a); };
function pc(a) { 0 == a.g.u || a.l || rc(a.g, a); }
function L(a) { mc(a); var b = a.D; b && "function" == typeof b.da && b.da(); a.D = null; Ib(a.O); Ob(a.G); a.a && (b = a.a, a.a = null, b.abort(), b.da()); }
function nc(a, b) {
    try {
        var c = a.g;
        if (0 != c.u && (c.a == a || vc(c.b, a)))
            if (c.A = a.H, !a.o && vc(c.b, a) && 3 == c.u) {
                try {
                    var d = c.ja.a.parse(b);
                }
                catch (oc) {
                    d = null;
                }
                if (Array.isArray(d) && 3 == d.length) {
                    var e = d;
                    if (0 == e[0])
                        a: {
                            if (!c.i) {
                                if (c.a)
                                    if (c.a.s + 3E3 < a.s)
                                        wc(c), c.a.cancel(), c.a = null;
                                    else
                                        break a;
                                xc(c);
                                F(18);
                            }
                        }
                    else
                        c.ia = e[1], 0 < c.ia - c.G && 37500 > e[2] && c.U && 0 == c.m && !c.l && (c.l = Vb(n(c.Na, c), 6E3));
                    if (1 >= yc(c.b) && c.O) {
                        try {
                            c.O();
                        }
                        catch (oc) { }
                        c.O = void 0;
                    }
                }
                else
                    M(c, 11);
            }
            else if ((a.o || c.a == a) && wc(c), !wa(b))
                for (b = d = c.ja.a.parse(b), d = 0; d < b.length; d++)
                    if (e =
                        b[d], c.G = e[0], e = e[1], 2 == c.u)
                        if ("c" == e[0]) {
                            c.B = e[1];
                            c.R = e[2];
                            var f = e[3];
                            null != f && (c.oa = f);
                            var h = e[5];
                            null != h && "number" === typeof h && 0 < h && (c.D = 1.5 * h);
                            var l = c, p = a.a;
                            if (p) {
                                var D = p.a ? p.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                                if (D) {
                                    var z = l.b;
                                    !z.a && (u(D, "spdy") || u(D, "quic") || u(D, "h2")) && (z.f = z.g, z.a = new Set, z.b && (zc(z, z.b), z.b = null));
                                }
                                if (l.s) {
                                    var ta = p.a ? p.a.getResponseHeader("X-HTTP-Session-Id") : null;
                                    ta && (l.ha = ta, N(l.v, l.s, ta));
                                }
                            }
                            c.u = 3;
                            c.c && c.c.na();
                            l = c;
                            var ua = a;
                            l.ea = Ac(l, l.w ? l.R : null, l.P);
                            if (ua.o) {
                                Bc(l.b, ua);
                                var va = ua, sc = l.D;
                                sc && va.setTimeout(sc);
                                va.h && (mc(va), J(va));
                                l.a = ua;
                            }
                            else
                                Cc(l);
                            0 < c.f.length && Dc(c);
                        }
                        else
                            "stop" != e[0] && "close" != e[0] || M(c, 7);
                    else
                        3 == c.u && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? M(c, 7) : Ec(c) : "noop" != e[0] && c.c && c.c.ma(e), c.m = 0);
        E(4);
    }
    catch (oc) { }
}
function Fc(a) { if (a.I && "function" == typeof a.I)
    return a.I(); if ("string" === typeof a)
    return a.split(""); if (da(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
    return b;
} b = []; c = 0; for (d in a)
    b[c++] = a[d]; return a = b; }
function Gc(a, b) { if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b, void 0);
else if (da(a) || "string" === typeof a)
    oa(a, b, void 0);
else {
    if (a.K && "function" == typeof a.K)
        var c = a.K();
    else if (a.I && "function" == typeof a.I)
        c = void 0;
    else if (da(a) || "string" === typeof a) {
        c = [];
        for (var d = a.length, e = 0; e < d; e++)
            c.push(e);
    }
    else
        for (e in c = [], d = 0, a)
            c[d++] = e;
    d = Fc(a);
    e = d.length;
    for (var f = 0; f < e; f++)
        b.call(void 0, d[f], c && c[f], a);
} }
function O(a, b) { this.b = {}; this.a = []; this.c = 0; var c = arguments.length; if (1 < c) {
    if (c % 2)
        throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
        this.set(arguments[d], arguments[d + 1]);
}
else if (a)
    if (a instanceof O)
        for (c = a.K(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
    else
        for (d in a)
            this.set(d, a[d]); }
g = O.prototype;
g.I = function () { Hc(this); for (var a = [], b = 0; b < this.a.length; b++)
    a.push(this.b[this.a[b]]); return a; };
g.K = function () { Hc(this); return this.a.concat(); };
function Hc(a) { if (a.c != a.a.length) {
    for (var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        P(a.b, d) && (a.a[c++] = d);
        b++;
    }
    a.a.length = c;
} if (a.c != a.a.length) {
    var e = {};
    for (c = b = 0; b < a.a.length;)
        d = a.a[b], P(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    a.a.length = c;
} }
g.get = function (a, b) { return P(this.b, a) ? this.b[a] : b; };
g.set = function (a, b) { P(this.b, a) || (this.c++, this.a.push(a)); this.b[a] = b; };
g.forEach = function (a, b) { for (var c = this.K(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
} };
function P(a, b) { return Object.prototype.hasOwnProperty.call(a, b); }
var Ic = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Jc(a, b) { if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
        }
        else
            f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
} }
function Q(a, b) { this.c = this.j = this.f = ""; this.h = null; this.i = this.g = ""; this.a = !1; if (a instanceof Q) {
    this.a = void 0 !== b ? b : a.a;
    Kc(this, a.f);
    this.j = a.j;
    Lc(this, a.c);
    Mc(this, a.h);
    this.g = a.g;
    b = a.b;
    var c = new R;
    c.c = b.c;
    b.a && (c.a = new O(b.a), c.b = b.b);
    Nc(this, c);
    this.i = a.i;
}
else
    a && (c = String(a).match(Ic)) ? (this.a = !!b, Kc(this, c[1] || "", !0), this.j = S(c[2] || ""), Lc(this, c[3] || "", !0), Mc(this, c[4]), this.g = S(c[5] || "", !0), Nc(this, c[6] || "", !0), this.i = S(c[7] || "")) : (this.a = !!b, this.b = new R(null, this.a)); }
Q.prototype.toString = function () { var a = [], b = this.f; b && a.push(T(b, Oc, !0), ":"); var c = this.c; if (c || "file" == b)
    a.push("//"), (b = this.j) && a.push(T(b, Oc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c)); if (c = this.g)
    this.c && "/" != c.charAt(0) && a.push("/"), a.push(T(c, "/" == c.charAt(0) ? Pc : Qc, !0)); (c = this.b.toString()) && a.push("?", c); (c = this.i) && a.push("#", T(c, Rc)); return a.join(""); };
function I(a) { return new Q(a); }
function Kc(a, b, c) { a.f = c ? S(b, !0) : b; a.f && (a.f = a.f.replace(/:$/, "")); }
function Lc(a, b, c) { a.c = c ? S(b, !0) : b; }
function Mc(a, b) { if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b)
        throw Error("Bad port number " + b);
    a.h = b;
}
else
    a.h = null; }
function Nc(a, b, c) { b instanceof R ? (a.b = b, Sc(a.b, a.a)) : (c || (b = T(b, Tc)), a.b = new R(b, a.a)); }
function N(a, b, c) { a.b.set(b, c); }
function ic(a) { N(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36)); return a; }
function Uc(a) { return a instanceof Q ? I(a) : new Q(a, void 0); }
function Vc(a, b, c, d) { var e = new Q(null, void 0); a && Kc(e, a); b && Lc(e, b); c && Mc(e, c); d && (e.g = d); return e; }
function S(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""; }
function T(a, b, c) { return "string" === typeof a ? (a = encodeURI(a).replace(b, Wc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null; }
function Wc(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16); }
var Oc = /[#\/\?@]/g, Qc = /[#\?:]/g, Pc = /[#\?]/g, Tc = /[#\?@]/g, Rc = /#/g;
function R(a, b) { this.b = this.a = null; this.c = a || null; this.f = !!b; }
function U(a) { a.a || (a.a = new O, a.b = 0, a.c && Jc(a.c, function (b, c) { a.add(decodeURIComponent(b.replace(/\+/g, " ")), c); })); }
g = R.prototype;
g.add = function (a, b) { U(this); this.c = null; a = V(this, a); var c = this.a.get(a); c || this.a.set(a, c = []); c.push(b); this.b += 1; return this; };
function Xc(a, b) { U(a); b = V(a, b); P(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, P(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Hc(a))); }
function Yc(a, b) { U(a); b = V(a, b); return P(a.a.b, b); }
g.forEach = function (a, b) { U(this); this.a.forEach(function (c, d) { oa(c, function (e) { a.call(b, e, d, this); }, this); }, this); };
g.K = function () { U(this); for (var a = this.a.I(), b = this.a.K(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b[d]); return c; };
g.I = function (a) { U(this); var b = []; if ("string" === typeof a)
    Yc(this, a) && (b = ra(b, this.a.get(V(this, a))));
else {
    a = this.a.I();
    for (var c = 0; c < a.length; c++)
        b = ra(b, a[c]);
} return b; };
g.set = function (a, b) { U(this); this.c = null; a = V(this, a); Yc(this, a) && (this.b -= this.a.get(a).length); this.a.set(a, [b]); this.b += 1; return this; };
g.get = function (a, b) { if (!a)
    return b; a = this.I(a); return 0 < a.length ? String(a[0]) : b; };
function kc(a, b, c) { Xc(a, b); 0 < c.length && (a.c = null, a.a.set(V(a, b), sa(c)), a.b += c.length); }
g.toString = function () { if (this.c)
    return this.c; if (!this.a)
    return ""; for (var a = [], b = this.a.K(), c = 0; c < b.length; c++) {
    var d = b[c], e = encodeURIComponent(String(d));
    d = this.I(d);
    for (var f = 0; f < d.length; f++) {
        var h = e;
        "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
        a.push(h);
    }
} return this.c = a.join("&"); };
function V(a, b) { b = String(b); a.f && (b = b.toLowerCase()); return b; }
function Sc(a, b) { b && !a.f && (U(a), a.c = null, a.a.forEach(function (c, d) { var e = d.toLowerCase(); d != e && (Xc(this, d), kc(this, e, c)); }, a)); a.f = b; }
function Zc(a, b) { this.b = a; this.a = b; }
function $c(a) { this.g = a || ad; k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ca && k.ca.ua && k.ca.ua() && k.ca.ua().mb); this.f = a ? this.g : 1; this.a = null; 1 < this.f && (this.a = new Set); this.b = null; this.c = []; }
var ad = 10;
function bd(a) { return a.b ? !0 : a.a ? a.a.size >= a.f : !1; }
function yc(a) { return a.b ? 1 : a.a ? a.a.size : 0; }
function vc(a, b) { return a.b ? a.b == b : a.a ? a.a.has(b) : !1; }
function zc(a, b) { a.a ? a.a.add(b) : a.b = b; }
function Bc(a, b) { a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b); }
$c.prototype.cancel = function () {
    var e_1, _a;
    this.c = cd(this);
    if (this.b)
        this.b.cancel(), this.b = null;
    else if (this.a && 0 !== this.a.size) {
        try {
            for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                a.cancel();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.a.clear();
    }
};
function cd(a) {
    var e_2, _a;
    if (null != a.b)
        return a.c.concat(a.b.i);
    if (null != a.a && 0 !== a.a.size) {
        var b = a.c;
        try {
            for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b = b.concat(c.i);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return b;
    }
    return sa(a.c);
}
function dd() { }
dd.prototype.stringify = function (a) { return k.JSON.stringify(a, void 0); };
dd.prototype.parse = function (a) { return k.JSON.parse(a, void 0); };
function ed() { this.a = new dd; }
function fd(a, b, c) { var d = c || ""; try {
    Gc(a, function (e, f) { var h = e; m(e) && (h = vb(e)); b.push(d + f + "=" + encodeURIComponent(h)); });
}
catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
} }
function gd(a, b) { var c = new Pb; if (k.Image) {
    var d = new Image;
    d.onload = ka(hd, c, d, "TestLoadImage: loaded", !0, b);
    d.onerror = ka(hd, c, d, "TestLoadImage: error", !1, b);
    d.onabort = ka(hd, c, d, "TestLoadImage: abort", !1, b);
    d.ontimeout = ka(hd, c, d, "TestLoadImage: timeout", !1, b);
    k.setTimeout(function () { if (d.ontimeout)
        d.ontimeout(); }, 1E4);
    d.src = a;
}
else
    b(!1); }
function hd(a, b, c, d, e) { try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
}
catch (f) { } }
var id = k.JSON.parse;
function W(a) { B.call(this); this.headers = new O; this.G = a || null; this.b = !1; this.s = this.a = null; this.D = ""; this.h = 0; this.f = ""; this.g = this.w = this.l = this.v = !1; this.o = 0; this.m = null; this.H = jd; this.B = this.F = !1; }
r(W, B);
var jd = "", kd = /^https?$/i, ld = ["POST", "PUT"];
g = W.prototype;
g.$ = function (a, b, c, d) {
    if (this.a)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.D = a;
    this.f = "";
    this.h = 0;
    this.v = !1;
    this.b = !0;
    this.a = new XMLHttpRequest;
    this.s = this.G ? Zb(this.G) : Zb(cc);
    this.a.onreadystatechange = n(this.va, this);
    try {
        this.w = !0, this.a.open(b, String(a), !0), this.w = !1;
    }
    catch (f) {
        md(this, f);
        return;
    }
    a = c || "";
    var e = new O(this.headers);
    d && Gc(d, function (f, h) { e.set(h, f); });
    d = pa(e.K());
    c = k.FormData && a instanceof k.FormData;
    !(0 <=
        na(ld, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, h) { this.a.setRequestHeader(h, f); }, this);
    this.H && (this.a.responseType = this.H);
    "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
    try {
        nd(this), 0 < this.o && ((this.B = od(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = n(this.ta, this)) : this.m = Jb(this.ta, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
    }
    catch (f) {
        md(this, f);
    }
};
function od(a) { return w && Sa(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout; }
function qa(a) { return "content-type" == a.toLowerCase(); }
g.ta = function () { "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8)); };
function md(a, b) { a.b = !1; a.a && (a.g = !0, a.a.abort(), a.g = !1); a.f = b; a.h = 5; pd(a); qd(a); }
function pd(a) { a.v || (a.v = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")); }
g.abort = function (a) { this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), qd(this)); };
g.C = function () { this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), qd(this, !0)); W.M.C.call(this); };
g.va = function () { this.j || (this.w || this.l || this.g ? rd(this) : this.Oa()); };
g.Oa = function () { rd(this); };
function rd(a) {
    if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != K(a) || 2 != a.S()))
        if (a.l && 4 == K(a))
            Jb(a.va, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == K(a)) {
            a.b = !1;
            try {
                var b = a.S();
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default: c = !1;
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = String(a.D).match(Ic)[1] || null;
                        if (!f && k.self && k.self.location) {
                            var h = k.self.location.protocol;
                            f = h.substr(0, h.length - 1);
                        }
                        e = !kd.test(f ? f.toLowerCase() : "");
                    }
                    d = e;
                }
                if (d)
                    a.dispatchEvent("complete"),
                        a.dispatchEvent("success");
                else {
                    a.h = 6;
                    try {
                        var l = 2 < K(a) ? a.a.statusText : "";
                    }
                    catch (p) {
                        l = "";
                    }
                    a.f = l + " [" + a.S() + "]";
                    pd(a);
                }
            }
            finally {
                qd(a);
            }
        }
}
function qd(a, b) { if (a.a) {
    nd(a);
    var c = a.a, d = a.s[0] ? aa : null;
    a.a = null;
    a.s = null;
    b || a.dispatchEvent("ready");
    try {
        c.onreadystatechange = d;
    }
    catch (e) { }
} }
function nd(a) { a.a && a.B && (a.a.ontimeout = null); a.m && (k.clearTimeout(a.m), a.m = null); }
function K(a) { return a.a ? a.a.readyState : 0; }
g.S = function () { try {
    return 2 < K(this) ? this.a.status : -1;
}
catch (a) {
    return -1;
} };
g.Y = function () { try {
    return this.a ? this.a.responseText : "";
}
catch (a) {
    return "";
} };
g.Ja = function (a) { if (this.a) {
    var b = this.a.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return id(b);
} };
g.qa = function () { return this.h; };
g.Ma = function () { return "string" === typeof this.f ? this.f : String(this.f); };
function sd(a) { var b = ""; Ba(a, function (c, d) { b += d; b += ":"; b += c; b += "\r\n"; }); return b; }
function td(a, b, c) { a: {
    for (d in c) {
        var d = !1;
        break a;
    }
    d = !0;
} d || (c = sd(c), "string" === typeof a ? (null != c && encodeURIComponent(String(c))) : N(a, b, c)); }
function X(a, b, c) { return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b; }
function ud(a) {
    this.f = [];
    this.R = this.ea = this.v = this.P = this.a = this.ha = this.s = this.N = this.h = this.F = this.j = null;
    this.Fa = this.H = 0;
    this.Ca = X("failFast", !1, a);
    this.U = this.l = this.i = this.g = this.c = null;
    this.W = !0;
    this.A = this.ia = this.G = -1;
    this.J = this.m = this.o = 0;
    this.Ba = X("baseRetryDelayMs", 5E3, a);
    this.Ga = X("retryDelaySeedMs", 1E4, a);
    this.Da = X("forwardChannelMaxRetries", 2, a);
    this.ga = X("forwardChannelRequestTimeoutMs", 2E4, a);
    this.Ea = a && a.nb || void 0;
    this.D = void 0;
    this.w = a && a.supportsCrossDomainXhr || !1;
    this.B = "";
    this.b = new $c(a && a.concurrentRequestLimit);
    this.ja = new ed;
    this.fa = a && a.fastHandshake || !1;
    a && a.forceLongPolling && (this.W = !1);
    this.O = void 0;
}
g = ud.prototype;
g.oa = 8;
g.u = 1;
function Ec(a) { vd(a); if (3 == a.u) {
    var b = a.H++, c = I(a.v);
    N(c, "SID", a.B);
    N(c, "RID", b);
    N(c, "TYPE", "terminate");
    wd(a, c);
    b = new H(a, b, void 0);
    b.B = 2;
    b.f = ic(I(c));
    c = !1;
    k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.f.toString(), ""));
    !c && k.Image && ((new Image).src = b.f, c = !0);
    c || (b.a = lc(b.g, null), b.a.$(b.f));
    b.s = q();
    J(b);
} xd(a); }
function vd(a) { a.a && (a.a.cancel(), a.a = null); a.i && (k.clearTimeout(a.i), a.i = null); wc(a); a.b.cancel(); a.g && ("number" === typeof a.g && k.clearTimeout(a.g), a.g = null); }
function yd(a, b) { a.f.push(new Zc(a.Fa++, b)); 3 == a.u && Dc(a); }
function Dc(a) { bd(a.b) || a.g || (a.g = !0, Cb(a.xa, a), a.o = 0); }
function zd(a, b) { if (yc(a.b) >= a.b.f - (a.g ? 1 : 0))
    return !1; if (a.g)
    return a.f = b.i.concat(a.f), !0; if (1 == a.u || 2 == a.u || a.o >= (a.Ca ? 0 : a.Da))
    return !1; a.g = Vb(n(a.xa, a, b), Ad(a, a.o)); a.o++; return !0; }
g.xa = function (a) {
    if (this.g)
        if (this.g = null, 1 == this.u) {
            if (!a) {
                this.H = Math.floor(1E5 * Math.random());
                a = this.H++;
                var b = new H(this, a, void 0), c = this.j;
                this.F && (c ? (c = Ca(c), Ea(c, this.F)) : c = this.F);
                null === this.h && (b.m = c);
                var d;
                if (this.fa)
                    a: {
                        for (var e = d = 0; e < this.f.length; e++) {
                            b: {
                                var f = this.f[e];
                                if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b;
                                }
                                f = void 0;
                            }
                            if (void 0 === f)
                                break;
                            d += f;
                            if (4096 < d) {
                                d = e;
                                break a;
                            }
                            if (4096 === d || e === this.f.length - 1) {
                                d = e + 1;
                                break a;
                            }
                        }
                        d = 1E3;
                    }
                else
                    d = 1E3;
                d = Bd(this, b, d);
                e = I(this.v);
                N(e, "RID", a);
                N(e, "CVER", 22);
                this.s && N(e, "X-HTTP-Session-Id", this.s);
                wd(this, e);
                this.h && c && td(e, this.h, c);
                zc(this.b, b);
                this.fa ? (N(e, "$req", d), N(e, "SID", "null"), b.R = !0, hc(b, e, null)) : hc(b, e, d);
                this.u = 2;
            }
        }
        else
            3 == this.u && (a ? Cd(this, a) : 0 == this.f.length || bd(this.b) || Cd(this));
};
function Cd(a, b) { var c; b ? c = b.W : c = a.H++; var d = I(a.v); N(d, "SID", a.B); N(d, "RID", c); N(d, "AID", a.G); wd(a, d); a.h && a.j && td(d, a.h, a.j); c = new H(a, c, a.o + 1); null === a.h && (c.m = a.j); b && (a.f = b.i.concat(a.f)); b = Bd(a, c, 1E3); c.setTimeout(Math.round(.5 * a.ga) + Math.round(.5 * a.ga * Math.random())); zc(a.b, c); hc(c, d, b); }
function wd(a, b) { a.c && Gc({}, function (c, d) { N(b, d, c); }); }
function Bd(a, b, c) { c = Math.min(a.f.length, c); var d = a.c ? n(a.c.Ha, a.c, a) : null; a: for (var e = a.f, f = -1;;) {
    var h = ["count=" + c];
    -1 == f ? 0 < c ? (f = e[0].b, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
    for (var l = !0, p = 0; p < c; p++) {
        var D = e[p].b, z = e[p].a;
        D -= f;
        if (0 > D)
            f = Math.max(0, e[p].b - 100), l = !1;
        else
            try {
                fd(z, h, "req" + D + "_");
            }
            catch (ta) {
                d && d(z);
            }
    }
    if (l) {
        d = h.join("&");
        break a;
    }
} a = a.f.splice(0, c); b.i = a; return d; }
function Cc(a) { a.a || a.i || (a.J = 1, Cb(a.wa, a), a.m = 0); }
function xc(a) { if (a.a || a.i || 3 <= a.m)
    return !1; a.J++; a.i = Vb(n(a.wa, a), Ad(a, a.m)); a.m++; return !0; }
g.wa = function () { this.i = null; this.a = new H(this, "rpc", this.J); null === this.h && (this.a.m = this.j); this.a.J = 0; var a = I(this.ea); N(a, "RID", "rpc"); N(a, "SID", this.B); N(a, "CI", this.U ? "0" : "1"); N(a, "AID", this.G); wd(this, a); N(a, "TYPE", "xmlhttp"); this.h && this.j && td(a, this.h, this.j); this.D && this.a.setTimeout(this.D); var b = this.a, c = this.R; b.B = 1; b.f = ic(I(a)); b.j = null; b.F = !0; jc(b, c); };
g.Na = function () { null != this.l && (this.l = null, this.a.cancel(), this.a = null, xc(this), F(19)); };
function wc(a) { null != a.l && (k.clearTimeout(a.l), a.l = null); }
function rc(a, b) { var c = null; if (a.a == b) {
    wc(a);
    a.a = null;
    var d = 2;
}
else if (vc(a.b, b))
    c = b.i, Bc(a.b, b), d = 1;
else
    return; a.A = b.H; if (0 != a.u)
    if (b.b)
        if (1 == d) {
            c = b.j ? b.j.length : 0;
            b = q() - b.s;
            var e = a.o;
            d = Rb();
            d.dispatchEvent(new Ub(d, c, b, e));
            Dc(a);
        }
        else
            Cc(a);
    else if (e = b.c, 3 == e || 0 == e && 0 < a.A || !(1 == d && zd(a, b) || 2 == d && xc(a)))
        switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
            case 1:
                M(a, 5);
                break;
            case 4:
                M(a, 10);
                break;
            case 3:
                M(a, 6);
                break;
            default: M(a, 2);
        } }
function Ad(a, b) { var c = a.Ba + Math.floor(Math.random() * a.Ga); a.c || (c *= 2); return c * b; }
function M(a, b) { if (2 == b) {
    var c = null;
    a.c && (c = null);
    var d = n(a.Ta, a);
    c || (c = new Q("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Kc(c, "https"), ic(c));
    gd(c.toString(), d);
}
else
    F(2); a.u = 0; a.c && a.c.la(b); xd(a); vd(a); }
g.Ta = function (a) { a ? F(2) : F(1); };
function xd(a) { a.u = 0; a.A = -1; if (a.c) {
    if (0 != cd(a.b).length || 0 != a.f.length)
        a.b.c.length = 0, sa(a.f), a.f.length = 0;
    a.c.ka();
} }
function Ac(a, b, c) { var d = Uc(c); if ("" != d.c)
    b && Lc(d, b + "." + d.c), Mc(d, d.h);
else {
    var e = k.location;
    d = Vc(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
} a.N && Ba(a.N, function (f, h) { N(d, h, f); }); b = a.s; c = a.ha; b && c && N(d, b, c); N(d, "VER", a.oa); wd(a, d); return d; }
function lc(a, b) { if (b && !a.w)
    throw Error("Can't create secondary domain capable XhrIo object."); b = new W(a.Ea); b.F = a.w; return b; }
function Dd() { }
g = Dd.prototype;
g.na = function () { };
g.ma = function () { };
g.la = function () { };
g.ka = function () { };
g.Ha = function () { };
function Ed() { if (w && !(10 <= Number(Va)))
    throw Error("Environmental error: no available transport."); }
Ed.prototype.a = function (a, b) { return new Y(a, b); };
function Y(a, b) {
    B.call(this);
    this.a = new ud(b);
    this.l = a;
    this.b = b && b.messageUrlParams || null;
    a = b && b.messageHeaders || null;
    b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
    this.a.j = a;
    a = b && b.initMessageHeaders || null;
    b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
    b && b.pa && (a ? a["X-WebChannel-Client-Profile"] = b.pa : a = { "X-WebChannel-Client-Profile": b.pa });
    this.a.F =
        a;
    (a = b && b.httpHeadersOverwriteParam) && !wa(a) && (this.a.h = a);
    this.h = b && b.supportsCrossDomainXhr || !1;
    this.g = b && b.sendRawJson || !1;
    (b = b && b.httpSessionIdParam) && !wa(b) && (this.a.s = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
    this.f = new Z(this);
}
r(Y, B);
g = Y.prototype;
g.addEventListener = function (a, b, c, d) { Y.M.addEventListener.call(this, a, b, c, d); };
g.removeEventListener = function (a, b, c, d) { Y.M.removeEventListener.call(this, a, b, c, d); };
g.Ka = function () { this.a.c = this.f; this.h && (this.a.w = !0); var a = this.a, b = this.l, c = this.b || void 0; F(0); a.P = b; a.N = c || {}; a.U = a.W; a.v = Ac(a, null, a.P); Dc(a); };
g.close = function () { Ec(this.a); };
g.La = function (a) { if ("string" === typeof a) {
    var b = {};
    b.__data__ = a;
    yd(this.a, b);
}
else
    this.g ? (b = {}, b.__data__ = vb(a), yd(this.a, b)) : yd(this.a, a); };
g.C = function () { this.a.c = null; delete this.f; Ec(this.a); delete this.a; Y.M.C.call(this); };
function Fd(a) { ac.call(this); var b = a.__sm__; if (b) {
    a: {
        for (var c in b) {
            a = c;
            break a;
        }
        a = void 0;
    }
    (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
}
else
    this.data = a; }
r(Fd, ac);
function Gd() { bc.call(this); this.status = 1; }
r(Gd, bc);
function Z(a) { this.a = a; }
r(Z, Dd);
Z.prototype.na = function () { this.a.dispatchEvent("a"); };
Z.prototype.ma = function (a) { this.a.dispatchEvent(new Fd(a)); };
Z.prototype.la = function (a) { this.a.dispatchEvent(new Gd(a)); };
Z.prototype.ka = function () { this.a.dispatchEvent("b"); }; /*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Ed.prototype.createWebChannel = Ed.prototype.a;
Y.prototype.send = Y.prototype.La;
Y.prototype.open = Y.prototype.Ka;
Y.prototype.close = Y.prototype.close;
Wb.NO_ERROR = 0;
Wb.TIMEOUT = 8;
Wb.HTTP_ERROR = 6;
Xb.COMPLETE = "complete";
$b.EventType = G;
G.OPEN = "a";
G.CLOSE = "b";
G.ERROR = "c";
G.MESSAGE = "d";
B.prototype.listen = B.prototype.ra;
W.prototype.listenOnce = W.prototype.sa;
W.prototype.getLastError = W.prototype.Ma;
W.prototype.getLastErrorCode = W.prototype.qa;
W.prototype.getStatus = W.prototype.S;
W.prototype.getResponseJson = W.prototype.Ja;
W.prototype.getResponseText = W.prototype.Y;
W.prototype.send = W.prototype.$;
var esm = { createWebChannelTransport: function () { return new Ed; }, ErrorCode: Wb, EventType: Xb, WebChannel: $b, XhrIo: W };
var esm_1 = esm.createWebChannelTransport;
var esm_2 = esm.ErrorCode;
var esm_3 = esm.EventType;
var esm_4 = esm.WebChannel;
var esm_5 = esm.XhrIo;

export default esm;
export { esm_2 as ErrorCode, esm_3 as EventType, esm_4 as WebChannel, esm_5 as XhrIo, esm_1 as createWebChannelTransport };
//# sourceMappingURL=index.esm.js.map
