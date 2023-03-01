let Handlebars = require('Handlebars')
Handlebars.registerHelper('CamelCase', function (s) {
    return s.CamelCase(true)
})
Handlebars.registerHelper('JSON', function (o) {
    return JSON.stringify(o, null, '\t')
})
Handlebars.registerHelper('Returns', function (rets, options) {
	return rets.map(r => options.fn(r))
})
Handlebars.registerHelper('Iterate', function (list, options) {
	return list.map(r => options.fn(r))
})
Handlebars.registerHelper('ParseLinks', function (s) {
	return s
})
Handlebars.registerHelper('Kind', function (type, doclet) {
	return doclet.kind == type
})

Handlebars.registerHelper('Usage', function (type, doclet) {
	return ''
})

Handlebars.registerHelper('Filename', function (path) {
	return $path.basename(path)
})

Handlebars.registerHelper('Join', function (names, s) {
	return names.join(s)
})

Handlebars.registerHelper('Location', function (meta) {
	return '<a href="'+$path.resolve(meta.path, meta.filename)+'" target="_blank">'+$path.relative($path.resolve('./'), $path.resolve(meta.path, meta.filename))+':'+meta.lineno+'</a>'
})





let sections = {}

let templates = {}
$fs.readdirSync($path.resolve(__dirname, 'templates')).forEach(t => {
	templates[t.replace(/\.(handlebars|tmpl|html)/, '')] = Handlebars.compile($fs.readFileSync($path.resolve(__dirname, 'templates', t), 'utf-8'))
})

log(templates)
let html = $fs.readFileSync($path.resolve(__dirname, 'Template.html'), 'utf-8')
html.match(/\<\!-- (?:start|end):(.+?) --\>.+?\<\!-- (?:start|end):\1 --\>/sg).forEach(m => {
	let data = m.match(/\<\!-- (start|end):(.+?) --\>/)
	sections.Set(data[2]+'.'+data[1], Handlebars.compile(m.match(/\<\!-- (?:start|end):.+? --\>(.+?)\<\!-- (?:start|end):.+? --\>/s)[1].trim()))
})


exports.out = []
function Out (s) {
	exports.out.push(s)
}

exports.data = {}
exports.names = []

function StringifyParam(param){let s=`${param.name}`;return param.optional?`[${s}]`:s}

exports.Export = function () {
	return exports.out.join('\n')
}

exports.End = function (section, level, doclet) {
	let s = sections.Get(section+'.end',)(doclet)
	Out('\t'.Repeat(level) + s.replace(/^/mg, '\t'.Repeat(level)))

//	Out('\t'.Repeat(level) + '</'+section+'>\n')
//	return sections.Get(section+'.end', '')
/*
	if (section == 'children') {

	} else if (section == 'doc') {

	} else if (section == 'instance') {



	} else if (section == 'item') {


	} else if (section == 'static') {


	}


	return ''
*/
}

exports.Render = function (doclet, level) {
	//exports.data.Set(doclet.longname, doclet)
	//exports.names.push(doclet.longname)

//	Out(sections['Item']({doclet: doclet, level: level}))

/*
	if (doclet.kind == 'class' || doclet.kind == 'module' || doclet.kind == 'namespace') {
		Out('\n'+'\t'.repeat(level)+'### '+doclet.longname+'  \n')
	} else if (doclet.kind == 'function') {
		Out('\t'.repeat(level)+doclet.name+'('+(doclet.params ? doclet.params.map(p => StringifyParam(p)).join(', ') : '')+')  '+doclet.Get('returns', []).map(ret => '{'+ret.Get('type.names', []).join('|')+'}'))
	} else if (doclet.kind == 'member') {
		Out('\t'.repeat(level)+doclet.name+' '+'{'+doclet.type.names.join('|')+'}  ')
	} else if (doclet.kind == 'event') {
		Out('\t'.repeat(level)+doclet.name)
	}
*/

}


exports.Start = function (section, level = 0, doclet = {}) {
	let s = sections.Get(section+'.start',)(doclet)
	Out('\t'.Repeat(level) + s.replace(/^/mg, '\t'.Repeat(level)))

//	Out('\t'.Repeat(level) + '<'+section+'>\n')
//	return sections.Get(section+'.start', '')
/*
	if (section == 'children') {
		return sections.Get(section+'.start', '')
	} else if (section == 'doc') {
		return sections.Get(section+'.start', '')
	} else if (section == 'instance') {



	} else if (section == 'item') {


	} else if (section == 'static') {


	}
	return ''
*/
}



