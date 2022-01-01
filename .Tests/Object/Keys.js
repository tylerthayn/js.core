require('./Define')

Define(Object.prototype, 'Keys', function () {
	let keys = []
	for (let key in this) {
		keys.push(key)
	}
	return keys
})
