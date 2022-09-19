Define(String.prototype, 'Match', function (m) {
	return !(this.match(m) == null)
})
