require('../Object/Define')
require('./global')

Define(global, 'log', (typeof DriveApp !== 'undefined' && DriveApp.toString() == 'Drive') ? Logger.log : console.log)
