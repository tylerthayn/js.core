require('./Define')

Define(Function.prototype, 'Sync', {get: function () {
	let fn = this

	return {
		ToAsync: () => {
			return function () {
				let args = Array.prototype.slice.call(arguments, 0, -1)
				let cb = Array.prototype.slice.call(arguments,-1)[0]
				try {
					cb(null, fn.apply(this, args))
				} catch (e) {cb(e)}
			}
		},
		ToPromise: () => {
			return function () {
				let args = Array.prototype.slice.call(arguments, 0)
				return new Promise((resolve, reject) => {
					try {
						resolve(fn.apply(this, args))
					} catch (e) {reject(e)}
				})
			}
		}
	}
}})
