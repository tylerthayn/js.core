require('../Object/Define')

Define(String.prototype, 'Repeat', function (n) {
	let s = ''
	for (let i=0; i<n; i++) {s += this}
	return s
})
