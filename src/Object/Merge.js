/**
* Assigns own and inherited enumerable string keyed properties of source objects to the object for all destination properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.
* @memberof Object#
* @instance
* @function Merge
* @param {...(object|array)} sources
* @return {object}
*/
Define(Object.prototype, 'Merge', function () {
	return Merge.apply(null, [this].concat(_.toArray(arguments)))
})
