require('../Object/Define')

Define(Array.prototype, 'first', {get: function () {
	if (this.length > 0) {return this[0]}
	return null
}})
