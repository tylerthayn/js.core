require('./Define')

Define(Function.prototype, 'Pipe', function () {
	let fn = this, fns = Array.From(arguments)

	return function () {
		let args = Array.From(arguments)
		let cb = args.pop()

		function exec () {
			if (fns.length == 0) {
				return cb(null, args)
			}
			let fn = fns.shift()
			return fn.apply(this, args.push((error, result) => {
				if (error) {
					return cb(error)
				} else {
					args = result
					return exec()
				}
			}))
		}

		return exec()

	}
})

