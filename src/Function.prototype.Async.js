require('./Define')

Define(Function.prototype, 'Async', {get: function () {
	let fn = this

	let o = {
		ToPromise: () => {
			return function () {
				let args = Array.From(arguments)
				return fn.apply(this, args.head).then(function () {
					args.last.apply(this, [null].concat(arguments))
				}).catch(args.last)
			}
		}
	}

	if (module && module.exports) {
		let Deasync = require('deasync')
		o.ToSync: () => {
			return Deasync(fn)
		}
	}
	return o
}})
