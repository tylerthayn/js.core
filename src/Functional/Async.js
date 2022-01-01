require('../Define')

Define(Function.prototype, 'Async', {get: function () {
	let fn = this

	return {
		ToPromise: () => {
			return function () {
				let args = Array.From(arguments)
				return fn.apply(this, args.head).then(function () {
					args.last.apply(this, [null].concat(arguments))
				}).catch(args.last)
			}
		},
		ToSync: () => {

		}
	}
}})
