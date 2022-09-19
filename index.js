(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define('@js/core', ['lodash'], factory)
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory(require('lodash'))
	} else {
		factory(_)
	}
}(function (_) {

		
	/**	
	* Array class	
	* @summary [Array@MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array}	
	* @class Array	
	* @global	
	* @type {array}	
	*/	
		
	/**	
	* Function class	
	* @summary [String@MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function}	
	* @class Function	
	* @global	
	* @type {function}	
	*/	
		
	/**	
	* Object class	
	* @summary [Object@MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object}	
	* @class Object	
	* @global	
	* @type {object}	
	*/	
		
	/**	
	* String class	
	* @summary [String@MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String}	
	* @class String	
	* @global	
	* @type {string}	
	*/	
	

}))