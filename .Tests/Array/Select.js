require('../Object/Define')

Define(Array.prototype, 'Select', function () {
	let a = [], select = []
	for (let i=0; i<arguments.length; i++) {
		select.push(arguments[i])
	}
	select.forEach(function (index) {
		a.push(this[index])
	}, this)
	return a
})
