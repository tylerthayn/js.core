require('../Object/Define')

Define(String.prototype, 'IsEmpty', function () {
	return (typeof this === 'undefined' || this == null || this.length === 0) ? true : false
})
