require('./Define')

Define(Object.prototype, 'Has', function () {
	for (let i=0; i<arguments.length; i++) {
		if (!Reflect.has(this, arguments[i])) {
			return false
		}
	}
	return true
})
