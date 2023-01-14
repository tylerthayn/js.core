
## @tyler.thayn/js.core  


### Array  

	Difference(lists)  {array}
	Flatten(depth)  {array}
	From(value)  {array}
	IsArray(object)  {boolean}
	first {*}  
	head {array}  
	last {*}  
	tail {array}  
	Delete(elements, array)  
	DeleteAt(indexes, array)  
	Difference(lists)  {array}
	Intersection(lists)  {array}
	Omit(elements)  {array}
	OmitAt(indexes)  {array}
	Pick(elements)  {array}
	Shuffle()  
	Union(lists)  {array}
	Unique(lists)  {array}
	Xor(lists, array)  

### Function  

	Debug(name, logFn, (callback})  
	Delay(time, cb, args)  
	Noop()  

### Object  

	Extensions {Object}  
	Clone()  {object}
	Define(name, value, [enumerable])  {object}
	Each(fn, this)  
	Extend(source)  {object}
	Get(path, default)  {*}
	Has(paths)  {boolean}
	Includes(paths)  {boolean}
	IsEqual(objects)  {boolean}
	Keys()  {array}
	Merge(sources)  {object}
	Paths([depth], paths)  
	Pick(paths)  {object}
	Set(path, value)  {object}
	Trim()  {object}
	Type([compare])  {string|boolean}

### String  

	AsAscii()  {string}
	AsBase64()  {string}
	AsUrlMatch()  {string}
	CamelCase([UpperCamel])  {string}
	Capitalize([AllWords])  {string}
	Hash(type)  {string}
	IsBase64()  {boolean}
	IsEmpty()  {boolean}
	IsJson()  {boolean}
	Pad(length, [char], [rightPad])  {string}
	Repeat(n)  {string}

###   

	Clone(parent)  {object}
	Define(undefined, name, value, [enumerable])  {object}
	Extend(target, sources)  {object}
	IsEqual(objects)  {boolean}
	log(msg)  
	logj(object)  
	Merge(target, sources)  {object|array}
	Type(item, [compare])  {string|boolean}
	Uuid()  {string}
	global {object}  
