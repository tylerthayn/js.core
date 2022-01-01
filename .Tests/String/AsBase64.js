require('../Object/Define')

Define(String.prototype, 'AsBase64', function (test) {
	try {
		if (typeof Buffer === 'function' && 'from' in Buffer) {return Buffer.from(this).toString('base64')} //NodeJs
		if (typeof btoa === 'function') {return btoa(this)} //Browser
		if (typeof Utilities === 'object' && 'base64Encode' in Utilities) {return Utilities.base64Encode(this)} //GScripts
	} catch (e) {if (typeof test !== 'boolean' || test === false) {console.log(`String.$AsAscii('${this}'): invalid conversion`)}}
	return this
})
