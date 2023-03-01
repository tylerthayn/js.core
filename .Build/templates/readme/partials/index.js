let $fs = require('fs')
let $path = require('path')

module.exports = {
	'function': $fs.readFileSync($path.join(__dirname, 'function.handlebars'), 'utf-8'),
	'item': $fs.readFileSync($path.join(__dirname, 'item.handlebars'), 'utf-8')
}
