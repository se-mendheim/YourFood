'use strict';

var boolToStr = Boolean.prototype.toString;

var tryBooleanObject = function booleanBrandCheck(value) {
	try {
		boolToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var boolClass = '[object Boolean]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isBoolean(value) {
	if (typeof value === 'boolean') {
		return true;
	}
	if (value === null || typeof value !== 'object') {
		return false;
	}
	return hasToStringTag && Symbol.toStringTag in value ? tryBooleanObject(value) : toStr.call(value) === boolClass;
};
