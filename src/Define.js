const dataDesc = new Set(['configurable', 'enumerable', 'get', 'set'])
const accDesc = new Set(['configurable', 'enumerable', 'writable', 'value'])
const _define = (typeof Reflect !== 'undefined' && Reflect.defineProperty) ? Reflect.defineProperty : Object.defineProperty

function IsDataDesc(keys){return keys.every(k=>dataDesc.has(k))}
function IsAccessorDesc(keys){return keys.every(k=>accDesc.has(k))}
function IsObject (val) {return val != null && typeof val === 'object' && Array.isArray(val) === false}

function IsDescriptor (obj, key, checkProto) {
	if (!IsObject(obj)) return false
	let desc = key ? Object.getOwnPropertyDescriptor(obj, key) : obj

	if (!desc && key && checkProto !== false && obj.constructor) {
		desc = Object.getOwnPropertyDescriptor(obj.constructor.prototype, key)
		if (!IsObject(desc)) return false
		if (typeof desc.configurable !== 'boolean' || typeof desc.enumerable !== 'boolean') {
			return false
		}
	}

	let keys = Object.keys(desc);
	if (IsDataDesc(keys)) {
		if (typeof desc.get !== 'function' && desc.get !== void 0) return false
		if (typeof desc.set !== 'function' && desc.set !== void 0) return false
		return true
	}

	if (IsAccessorDesc(keys)) {
		return typeof desc.writable === 'boolean'
	}
	return false
}

function Define (obj, key, val, enumerable = false) {

	if (!IsObject(obj) && typeof obj !== 'function' && !Array.isArray(obj)) {
		throw new TypeError('expected an object, function, or array')
	}

	if (typeof key !== 'string') {
		throw new TypeError('expected "key" to be a string')
	}

	if (IsDescriptor(val)) {
		if (enumerable) {
			val.enumerable = true
		}
		_define(obj, key, val)
		return obj
	}

	_define(obj, key, {
		configurable: true,
		enumerable: enumerable,
		writable: true,
		value: val
	})

	return obj
}


/**
* Defines object elements
* @memberof global.
* @function Define
* @param {object}
* @param {string} name - Name of property
* @param {*} value - Value of property
* @param {boolean} [enumerable]
* @returns {object}
*/
Define(global, 'Define', Define)

