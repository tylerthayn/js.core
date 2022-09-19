/**
* Delay function
* @memberof Function.
* @function Delay
* @param {number} time - time to delay
* @param {callback} cb - callback function
* @param {...*} args - args to pass to callback
*/
Define(Function, 'Delay', function (time, cb, ...args) {
	return setTimeout(function () {
		cb(...args)
	}, time)
})

