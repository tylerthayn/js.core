let $fs = require('fs')
let $path = require('path')

module.exports = {
	'readme': $fs.readFileSync($path.join(__dirname, 'readme.handlebars'), 'utf-8')
}

Define(module.exports, '_partials', {
	Badges: $fs.readFileSync($path.join(__dirname, 'Badges.partial'), 'utf-8'),
	Installation: $fs.readFileSync($path.join(__dirname, 'Installation.partial'), 'utf-8'),
	item: $fs.readFileSync($path.join(__dirname, 'item.partial'), 'utf-8'),
	License: $fs.readFileSync($path.join(__dirname, 'License.partial'), 'utf-8'),
	Outline: $fs.readFileSync($path.join(__dirname, 'Outline.partial'), 'utf-8'),
	param: $fs.readFileSync($path.join(__dirname, 'param.partial'), 'utf-8'),
	property: $fs.readFileSync($path.join(__dirname, 'property.partial'), 'utf-8'),
	type: $fs.readFileSync($path.join(__dirname, 'type.partial'), 'utf-8')
})
