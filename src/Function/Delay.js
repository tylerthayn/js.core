/**
* Delay function
* @global
* @function Delay
*/
Define(Function, 'Delay', function () {
	let args = [...arguments]
	let time = args.shift(), fn = args.shift()

	return setTimeout(function () {
		fn(...args)
	}, time)
})

