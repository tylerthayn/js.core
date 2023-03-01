require('@tyler.thayn/js.core')
let Fs = require('fs')
let Path = require('path')

function Filter(ast,filters){let _ast=Clone(ast);filters.Keys().forEach(key=>{_ast=_ast.filter(d=>d[key]==filters[key])});return _ast}
function Sort (a, b) {return a.longname.localeCompare(b.longname, 'en'/*, { sensitivity: 'base' }*/)}
function StringifyParam(param){let s=`${param.name}`;return param.optional?`[${s}]`:s}

let package = JSON.parse(Fs.readFileSync(Path.resolve(__dirname, '../../../', 'package.json'), 'utf-8'))

Array.prototype.Debug = function (s = '') {
//	console.log(s.toString()+this.length)
	return this
}



function Render (ast, template = './Template.Readme.js') {
	let Template = require(template)

	function Process (doclet, ast, indent = 0) {
		Template.Start('item', indent, doclet)

		let _ast = Filter(ast, {memberof: doclet.longname})
		if (_ast.length > 0) {
			//Template.Start('children', indent+3)

			let _ast = Filter(ast, {memberof: doclet.longname, scope: 'static'})
			if (_ast.length > 0) {
				//Template.Start('static', indent+4)
				Filter(ast, {memberof: doclet.longname, scope: 'static', kind: 'class'}).Debug('\t').forEach(child => Process(child, ast, indent+1))
				Filter(ast, {memberof: doclet.longname, scope: 'static', kind: 'member'}).Debug('\t').forEach(child => Process(child, ast, indent+1))
				Filter(ast, {memberof: doclet.longname, scope: 'static', kind: 'function'}).Debug('\t').forEach(child => Process(child, ast, indent+1))
				//Template.End('static', indent+4)
			}

			_ast = Filter(ast, {memberof: doclet.longname, scope: 'instance'})
			if (_ast.length > 0) {
				//Template.Start('instance', indent+4)
				Filter(ast, {memberof: doclet.longname, scope: 'instance', kind: 'class'}).forEach(child => Process(child, ast, indent+1))
				Filter(ast, {memberof: doclet.longname, scope: 'instance', kind: 'member'}).forEach(child => Process(child, ast, indent+1))
				Filter(ast, {memberof: doclet.longname, scope: 'instance', kind: 'function'}).forEach(child => Process(child, ast, indent+1))
				//Template.End('instance', indent+4)
			}

			_ast = Filter(ast, {memberof: doclet.longname, kind: 'event'})
			if (_ast.length > 0) {
				//Template.Start('event', indent+4)
				Filter(ast, {memberof: doclet.longname, kind: 'event'}).forEach(child => Process(child, ast, indent+2))
				//Tempalte.End('event', indent+4)
			}

			//Template.End('children', indent+3)

		}

		Template.End('item', indent, doclet)

	}

	// Filter non comment asts
	ast = ast.filter(t => t.Get('comment', '') != '')

	Template.Start('doc', 0, {name: package.name})
	Filter(ast, {scope: 'global', kind: 'class'}).sort(Sort).Debug().forEach(t => {Process(t, ast, 1)})

	Filter(ast, {scope: 'global', kind: 'function'}).sort(Sort).Debug().forEach(t => {Process(t, ast, 1)})
	Filter(ast, {scope: 'global', kind: 'member'}).sort(Sort).Debug().forEach(t => {Process(t, ast, 1)})
	Template.End('doc')


	//Filter(ast, {kind: 'module'}).sort(Sort).forEach(t => {Process(t, ast)})
	//Filter(ast, {kind: '').sort(Sort).forEach(t => {Process(t, ast)})
//log(JSON.stringify(Template.data, null, '\t'))
//log(JSON.stringify(Template.names, null, '\t'))
	return Template.Export()

}


if (require.main === module) {
	$fs.writeFileSync(process.argv[2], Render(JSON.parse($fs.readFileSync($path.resolve(__dirname, '../../tmp/ast'), 'utf-8')), process.argv[3]), 'utf-8')
} else {
	module.exports = Render
}
