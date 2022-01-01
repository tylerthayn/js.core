require('../global')
require('../Extend')

/*
AsyncToSync
AsyncToPromised
PromisedToAsync
PromisedToSync
SyncToAsync
SyncToPromised

Async(fn).ToPromised()
Async(fn).ToSync()
Promised(fn).ToAsync()
Promised(fn).ToSync()
Sync(fn).ToAsync()
Sync(fn).ToPromised()

Hook(fn).Pre()
Hook(fn).Post()
Pipe(fns...)
*/




Extend(Function,  {
	'Async': (fn) => {
		return {
			'ToPromised': () => {
				return function () {
					let args = Array.From(arguments)
					return fn.apply(this, args.head).then(function () {
						args.last.apply(this, [null].concat(arguments))
					}).catch(args.last)
				}
			},
			'ToSync': () => {
				return AsyncToSync(tn)
			}
		}
	},
	'Promised': (fn) => {
		return {
			'ToAsync': () => {
				return function () {
					let args = Array.prototype.slice.call(arguments, 0, -1)
					let cb = Array.prototype.slice.call(arguments,-1)
					fn.apply(this, args).then((...retVal) => {
						cb.apply(this, [null].concat[retVal])
					}).catch(cb.call(this, error))
				}
			},
			'ToSync': () => {
				return PromisedToSync(fn)
			}
		}
	},
	'Sync': (fn) => {
		return {
			'ToAsync': () => {
				return function () {
					let args = Array.prototype.slice.call(arguments, 0, -1)
					let cb = Array.prototype.slice.call(arguments,-1)
					try {
						cb(null, fn.apply(this, args))
					} catch (e) {cb(e)}
				}
			},
			'ToPromised': () => {
				return function () {
					let args = Array.prototype.slice.call(arguments, 0, -1)
					let cb = Array.prototype.slice.call(arguments,-1)
					return new Promise((resolve, reject) => {
						try {
							resolve(fn.apply(this, args))
						} catch (e) {reject(e)}

					})
				}
			}
		}
	},
	'Hook': (fn) => {
		return {
			'Pre': (hooks) => {
				if (typeof hooks === 'function') {
					hooks = [hooks]
				}

				return function () {
					let _args = Array.From(arguments)
					hooks.forEach((hook) => {
						hook.apply(this, _args.head)
					}, this)
					fn.apply(this, _args)
				}
			},
			'Post': (hooks) => {
				if (typeof hooks === 'function') {
					hooks = [hooks]
				}

				return function () {
					let _args = Array.From(arguments)
					fn.apply(this, _args.head.push((error, result) => {
						hooks.forEach((hook) => {
							hook.apply(this, _args.head)
						}, this)
						_args.last.call(this, error, result)
					}))
				}
			}
		}
	},
	'Pipe': (fns) => {
		return function () {
			let _args = Array.From(arguments)
			let cb = _args.pop()

			function exec () {
				if (fns.length == 0) {
					return cb(null, _args)
				}
				let fn = fns.shift()
				return fn.apply(this, _args.push((error, result) => {
					if (error) {
						return cb(error)
					} else {
						_args = result
						return exec
					}
				}))
			}

		}
	}
}

function FromASync (fn) {
	return {
		'ToPromised': () => {
			return function () {
				let _args = arguments
				return new Promise((resolve, reject) => {
					fn.call(this, _args, (error, result) => {
						if (error) {
							return reject(error)
						} else {
							return resolve(result)
						}
					})
				})
			}
			return AsyncToPromised(fn)
		},
		"ToSync": () => {
			return function () {

			}
		}
	}
})






