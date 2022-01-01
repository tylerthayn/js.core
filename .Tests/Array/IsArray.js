require('../Object/Define')

Array.Define('IsArray', function (a) {
	return Object.prototype.toString.call(a) == '[object Array]'
})
