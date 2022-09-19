/**
* Extend the contents of two or more objects into the target object
* @memberof Object#
* @instance
* @function Extend
* @param {...(object|array)} source
* @return {object}
*/
Define(Object.prototype, 'Extend', function () {
	return _.merge.apply(null, [this].concat(Array.From(arguments)))
})
