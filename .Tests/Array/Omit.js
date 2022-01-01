require('../Object/Define')

Define(Array.prototype, 'Omit', function () {
	let a = [], omit = []
	for (let i=0; i<arguments.length; i++) {
		omit.push(arguments[i])
	}
	this.forEach(function (e) {
		if (!omit.contains(e)) {
			a.push(e)
		}
	})
	return a
})
