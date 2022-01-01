require('../Object/Define')
require('./Unique')

Define(Array.prototype, 'Union', function () {
	return (this.concat.apply(this, arguments)).Unique()
})
