Array
	Difference(lists)
	Flatten(depth)
	From(value)
	IsArray(object)

	first {*}
	head {array}
	last {*}
	tail {array}
	Delete(elements, array)
	DeleteAt(indexes, array)
	Difference(lists)
	Intersection(lists)
	Omit(elements)
	OmitAt(indexes)
	Pick(elements)
	Shuffle()
	Union(lists)
	Unique(lists)
	Xor(lists, array)

Function
	Debug(name, logFn, (callback})
	Delay(time, cb, args)
	Noop()


Object
	Extensions {Object}

	Clone()
	Define(name, value, [enumerable])
	Each(fn, this)
	Extend(source)
	Get(path, default)
	Has(paths)
	Includes(paths)
	IsEqual(objects)
	Keys()
	Merge(sources)
	Paths([depth], paths)
	Pick(paths)
	Set(path, value)
	Trim()
	Type([compare])

String

	AsAscii()
	AsBase64()
	AsUrlMatch()
	CamelCase([UpperCamel])
	Capitalize([AllWords])
	Hash(type)
	IsBase64()
	IsEmpty()
	IsJson()
	Pad(length, [char], [rightPad])
	Repeat(n)

Clone(parent)
Define(undefined, name, value, [enumerable])
Extend(target, sources)
IsEqual(objects)
log(msg)
logj(object)
Merge(target, sources)
Type(item, [compare])
Uuid()
global {object}
