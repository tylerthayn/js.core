require('./Define')

Define(Object.prototype, 'Values', function () {
	let $this = this
	return Object.keys(this).map(function (key) {
		return $this[key]
	})
})
