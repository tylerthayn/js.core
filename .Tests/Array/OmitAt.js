require('../Object/Define')

Define(Array.prototype, 'OmitAt', function () {
	let a = [], omitIndexes = []
	for (let i=0; i<arguments.length; i++) {
		omitIndexes.push(arguments[i])
	}
	for (var i=0; i<this.length; i++) {
		if (!omitIndexes.contains(i)) {
			a.push(this[i])
		}
	}
	return a
})
