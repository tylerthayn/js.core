require('@js/core')

let defaults = {
	log: {
		log: [],
		realtime: true,
		stream: process.stdout
	}
}

function Builder (options) {
	Extend(this, defaults, options)

	return this
}

Builder.prototype.Build = function (build) {
	let builder = require(build)

}


module.exports = Builder
