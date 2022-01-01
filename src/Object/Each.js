require('./Define')
require('./Type')

/**
* Object elements iterator
* @memberof Object#
* @instance
* @function Each
* @param {function} fn - Iterator function
* @param {object} this - Iterator this value
*/	
Define(Object.prototype, 'Each', function (nonEnumerable, cb) {
	if (typeof nonEnumerable === 'function') {
		cb = nonEnumerable
		nonEnumerable = false
	}
	if (Type(this, 'Array')) {
		for (let i=0; i<this.length; i++) {
			if (cb(this[i], i, this) === false) {return}
		}
	} else {
		let keys = nonEnumerable ? Reflect.ownKeys(this) : Object.keys(this)
		for (let i=0; i<keys.length; i++) {
			if (cb(this[keys[i]], keys[i], this) === false) {return}
		}
	}
})
