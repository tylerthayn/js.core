/**
* String as ascii text
* @memberof String#
* @instance
* @function AsAscii
* @returns {string} text - The ascii text
*/	
require('../Object/Define')

Define(String.prototype, 'AsAscii', function (test) {
	try {
		if (typeof Buffer === 'function' && 'from' in Buffer) {return Buffer.from(this, 'base64').toString('ascii')} //NodeJs
		if (typeof atob === 'function') {return atob(this)} //Browser
		if (typeof Utilities === 'object' && 'base64Decode' in Utilities) {return Utilities.newBlob(Utilities.base64Decode(this, Utilities.Charset.UTF_8)).getDataAsString()} //GScripts
	} catch (e) {if (typeof test !== 'boolean' || test === false) {console.log(`String.AsAscii('${this}'): invalid conversion`)}}
	return this
})
