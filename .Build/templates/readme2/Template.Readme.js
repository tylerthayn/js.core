function StringifyParam(param){let s=`${param.name}`;return param.optional?`[${s}]`:s}

exports.End = function (section) {

	if (section == 'children') {


	} else if (section == 'instance') {



	} else if (section == 'item') {


	} else if (section == 'static') {


	}


	return ''
}

exports.Render = function (doclet, level) {
	if (doclet.kind == 'class' || doclet.kind == 'module' || doclet.kind == 'namespace') {
		return '\n'+'\t'.repeat(level)+'### '+doclet.longname+'  \n'
	} else if (doclet.kind == 'function') {
		return '\t'.repeat(level)+doclet.name+'('+(doclet.params ? doclet.params.map(p => StringifyParam(p)).join(', ') : '')+')  '+doclet.Get('returns', []).map(ret => '{'+ret.Get('type.names', []).join('|')+'}')
	} else if (doclet.kind == 'member') {
		return '\t'.repeat(level)+doclet.name+' '+'{'+doclet.type.names.join('|')+'}  '
	} else if (doclet.kind == 'event') {
		return '\t'.repeat(level)+doclet.name
	}
	return ''

}


exports.Start = function (section) {

	if (section == 'children') {

	} else if (section == 'doc') {
		return `\n## ${arguments[1]}  \n`
	} else if (section == 'instance') {



	} else if (section == 'item') {


	} else if (section == 'static') {


	}
	return ''
}



