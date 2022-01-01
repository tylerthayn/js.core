require('../Define')

Define(Function.prototype, 'Hook', {get: function () {
	let fn = this
	return {
		'Pre': function () {

		},
		'Post': function () {


		}
	}
}})

