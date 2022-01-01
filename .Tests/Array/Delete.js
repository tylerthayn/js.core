require('../Object/Define')

Define(Array.prototype, 'Delete', function () {
	for (let i=0; i<arguments.length; i++) {
		let index = this.indexOf(arguments[i])
		while (index !== -1) {
			this.splice(index, 1)
			index = this.indexOf(arguments[i])
		}
	}
	return this
})
