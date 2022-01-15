require('./Define')
require('./global')
const lodash = require('lodash')

/**
* Recursively (deep) clone
* @global
* @function Clone
* @param {object} parent - Parent value to clone
* @return {object} - The cloned object
*/
Define(global, 'Clone', lodash.cloneDeep)
