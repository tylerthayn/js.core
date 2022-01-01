require('./Define')
require('./Type')

Define(Object.prototype, 'Each', function (nonEnumerable, cb) {
	if (typeof nonEnumerable === 'function') {
		cb = nonEnumerable
		nonEnumerable = false
	}
	if (Type(this, 'array')) {
		for (let i=0; i<this.length; i++) {
			if (cb(this[i], i, this) === false) {return}
		}
	} else {
		let keys = nonEnumerable ? Reflect.ownKeys(this) : Object.keys(this)
		for (let i=0; i<keys.length; i++) {
			if (cb(keys[i], this[keys[i]], this) === false) {return}
		}
	}
})
