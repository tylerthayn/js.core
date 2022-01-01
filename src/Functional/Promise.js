require('../Define')

Define(Function.prototype, 'Promise', {get: function () {
	let fn = this

	return {
		ToAsync: () => {
			return function () {
					let args = Array.prototype.slice.call(arguments, 0, -1)
					let cb = Array.prototype.slice.call(arguments,-1)
					fn.apply(this, args).then((...retVal) => {
						cb.apply(this, [null].concat[retVal])
					}).catch(cb.call(this, error))
				}
		},
		ToSync: () => {
			return function () {

			}
		}
	}
}})
