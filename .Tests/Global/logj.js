require('../Object/Define')
require('./global')

Define(global, 'logj', function (v) {
	if (typeof DriveApp !== 'undefined' && DriveApp.toString() == 'Drive') {
		Logger.log(JSON.stringify(v, null, 4))
	} else {
		console.log(JSON.stringify(v, null, 4))
	}
})
