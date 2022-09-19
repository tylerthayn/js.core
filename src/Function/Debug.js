Define(Function, 'Debug', function (name, print, cb) {
	let _log = typeof print === 'undefined' ? function () {} : print == 'json' ? logj : log

	return function () {
		global.DEBUG[name] = arguments
		_log(arguments)
		if (cb !== 'undefined') {
			return cb(arguments)
		} else {
			return arguments
		}
	}
})


