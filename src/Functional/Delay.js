require('../Object/Define')
require('../Global/global')

/**
* Delay function
* @global
* @function Delay
*/
Define(global, 'Delay', function () {
	let args = [...arguments]
	let time = args.shift(), f = args.shift()

	return setTimeout(function () {
		f(...args)

	}, time)
})

