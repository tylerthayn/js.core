/**
* Js Core
* @module @js/core
*/

require('./global')

require('lodash')

/**
* Object class
* @summary [Object@MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object}
* @class Object
* @type {object}
*/
require('./Object/Define')
require('./Object/Extend')
require('./Object/Clone')
require('./Object/Each')
require('./Object/Get')
require('./Object/Has')
require('./Object/Includes')
require('./Object/IsEqual')
require('./Object/Keys')
require('./Object/Merge')
require('./Object/Paths')
require('./Object/Pick')
require('./Object/Set')
require('./Object/Trim')
require('./Object/Type')
require('./Object/Values')

/**
* Array class
* @summary [Array@MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array}
* @class Array
* @type {array}
*/
require('./Array/first')
require('./Array/head')
require('./Array/last')
require('./Array/tail')
	require('./Array/Delete')
	require('./Array/DeleteAt')
	require('./Array/Difference')
	require('./Array/Flatten')
require('./Array/From')
	require('./Array/Intersection')
	require('./Array/IsArray')
	require('./Array/Omit')
	require('./Array/OmitAt')
	require('./Array/Shuffle')
	require('./Array/Union')
	require('./Array/Unique')
	require('./Array/Xor')


/**
* String class
* @summary [String@MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String}
* @class String
* @type {string}
*/
	require('./String/AsAscii')
	require('./String/AsBase64')
	require('./String/AsUrlMatch')
	require('./String/CamelCase')
	require('./String/Capitalize')
	require('./String/Hash')
	require('./String/IsBase64')
	require('./String/IsEmpty')
	require('./String/IsJson')
	require('./String/Match')
	require('./String/Pad')
	require('./String/Repeat')

/* org.tts.js.core/Functional */
	require('./Functional/Async')
	require('./Functional/Promise')
	require('./Functional/Sync')

	require('./Functional/Hook')
	require('./Functional/Pipe')

	require('./Functional/Debug')
	require('./Functional/Delay')
	require('./Functional/Noop')
	//require('./Functional/Functional')

/* org.tts.js.core/Global */
	require('./Global/log')
	require('./Global/logj')
	require('./Logger')



//Define(global, 'QueryString', require('querystring'))
//Define(global, 'Path', require('path'))
require('./Uuid')
require('./Options')

require('./Extensions')
require('./Plugins')

require('./Extensions/EventEmitter')
require('./Extensions/Logger')
//require('./Extensions/Settings')

//require('./Plugins/MultiLogger')
