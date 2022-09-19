/**
 * JSON Logger
 *
 * @global
 * @function logj
 * @param {*} object - Object to log
 */
Define(global, 'logj', function (v) {
	let s = v
	try {
		s = JSON.stringify(v, null, '\t')
	} catch (e) {}
	log(s)
})
