require('./Define')
require('../Global/global')
const lodash = require('lodash')

/**
* Recursively (deep) clone
* @global
* @function Clone
* @param {object} parent - Parent value to clone
* @return {object} - The cloned object
*/
Define(global, 'Clone', lodash.cloneDeep)

/**
* Recursively (deep) clone
* @memberof Object#
* @instance
* @function Clone
* @return {object} - The cloned object
*/
Define(Object.prototype, 'Clone', function () {
	return Clone(this)	
})
