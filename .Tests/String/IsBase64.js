require('../Object/Define')

Define(String.prototype, 'IsBase64', function () {
	return this.toString() === this.AsAscii(true).AsBase64(true)
})