"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWith = void 0;
var ObjManeger = (function () {
    function ObjManeger(managedObj) {
        this.managedObj = managedObj;
    }
    ObjManeger.prototype.map = function (func) {
        var objs = Object.entries(this.managedObj).map(function (_a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], value = _c[1];
            return (_b = {},
                _b[key] = func(value, key),
                _b);
        });
        var next = Object.assign.apply(Object, __spread([{}], objs));
        return new ObjManeger(next);
    };
    ObjManeger.prototype.getObj = function () {
        return this.managedObj;
    };
    return ObjManeger;
}());
var makeWith = function (obj) { return new ObjManeger(obj); };
exports.makeWith = makeWith;
