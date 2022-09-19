/**
* global reference
* @global
* @name global
* @type {object}
*/
if (typeof global !== 'object') {
	if (typeof window === 'object') {
		window.global = window
	} else {
		this.global = this
	}
}
