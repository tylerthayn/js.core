require('../Global/global')
require('./Define')
require('../Array/From')
const lodash = require('lodash')

/**
* Extend the contents of two or more objects into the target object
* @memberof global.
* @function Extend
* @param {(object|array)} target
* @param {...(object|array)} sources
* @return {object}
*/
Define(global, 'Extend', function () {
	return lodash.merge.apply(null, arguments)
})
