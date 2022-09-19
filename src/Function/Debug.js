/**
 * Debug Helper Function
 *
 * @memberof Function.
 * @function Debug
 * @param {string} name
 * @param {function} logFn
 * @param (callback} cb
 */
Define(Function, 'Debug', function (name, logFn, cb) {

	return function (...args) {
		global.DEBUG[name] = arguments
		logFn(arguments)
		if (cb !== 'undefined') {
			return cb(arguments)
		} else {
			return arguments
		}
	}
})


