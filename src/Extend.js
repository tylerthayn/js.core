require('./global')
require('./Define')

(function () {
	var hasOwn=Object.prototype.hasOwnProperty;var toStr=Object.prototype.toString;var defineProperty=Object.defineProperty;var gOPD=Object.getOwnPropertyDescriptor;
	var isArray=function isArray(arr){return'function'==typeof Array.isArray?Array.isArray(arr):'[object Array]'===toStr.call(arr)};
	var isPlainObject=function isPlainObject(obj){if(!obj||'[object Object]'!==toStr.call(obj))return false;var hasOwnConstructor=hasOwn.call(obj,'constructor');var hasIsPrototypeOf=obj.constructor&&obj.constructor.prototype&&hasOwn.call(obj.constructor.prototype,'isPrototypeOf');if(obj.constructor&&!hasOwnConstructor&&!hasIsPrototypeOf)return false;var key;for(key in obj);return'undefined'==typeof key||hasOwn.call(obj,key)};
	var setProperty=function setProperty(target,options){defineProperty&&'__proto__'===options.name?defineProperty(target,options.name,{enumerable:true,configurable:true,value:options.newValue,writable:true}):target[options.name]=options.newValue};
	var getProperty=function getProperty(obj,name){if('__proto__'===name){if(!hasOwn.call(obj,name))return;if(gOPD)return gOPD(obj,name).value}return obj[name]};

	function extend() {
		var options, name, src, copy, copyIsArray, clone;
		var target = arguments[0];
		var i = 1;
		var length = arguments.length;
		var deep = false;

		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		}
		if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
			target = {};
		}

		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = getProperty(target, name);
					copy = getProperty(options, name);

					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							setProperty(target, { name: name, newValue: copy });
						}
					}
				}
			}
		}

		// Return the modified object
		return target;
	};


	/**
	* Extend the contents of two or more objects into the target object
	* @memberof global.
	* @function Extend
	* @param {(object|array)} target
	* @param {...(object|array)} sources
	* @return {object}
	*/
	Define(global, 'Extend', function (...args) {
		return extend.call(null, true, ...args)
	})
})()
