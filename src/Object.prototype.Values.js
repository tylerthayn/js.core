require('./Define')
const lodash=require('lodash')

Define(Object.prototype,'Values',function(){
	return lodash.values(this)
})
