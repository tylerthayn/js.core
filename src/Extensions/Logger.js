require('../Define')
require('../global')

Define(Object.Extensions, 'Logger', function (o) {

	Define(o, 'error', function () {
		log.apply(null, arguments)
	})

	Define(o, 'log', function () {
		log.apply(null, arguments)
	})

	Define(o, 'info', function () {
		log.apply(null, arguments)
	})

	Define(o, 'trace', function () {
		log.apply(null, arguments)
	})

	return o

})

