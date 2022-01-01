require('./Define')

Define(Function.prototype, 'Hook', {get: function () {
	let fn = this
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
}})

