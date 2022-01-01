require('../Object/Define')
require('../Global/global')
require('../Global/log')
require('../Global/logj')

Define(global, 'Debug', function (name, print) {
	let logger = typeof print === 'undefined' ? function () {} : print == 'json' ? logj : log

	return function () {
		global.DEBUG[name] = arguments
		logger(arguments)
		return arguments
	}
})


