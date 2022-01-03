/**
* Js Core
* @module @js/core
*/

require('./global')

require('lodash')

require('./Define')
require('./Extend')
require('./Clone')
require('./IsEqual')
require('./Merge')
require('./Type')

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
require('./Array.From')
	require('./Array/Intersection')
	require('./Array.IsArray')
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
require('./String.prototype.AsAscii')
require('./String.prototype.AsBase64')
require('./String.prototype.AsUrlMatch')
require('./String.prototype.CamelCase')
require('./String.prototype.Capitalize')
require('./String.prototype.Hash')
require('./String.prototype.IsBase64')
require('./String.prototype.IsEmpty')
require('./String.prototype.IsJson')
require('./String.prototype.Match')
require('./String.prototype.Pad')
require('./String.prototype.Repeat')

require('./Function.Debug')
require('./Function.Delay')
require('./Function.Noop')

require('./Function.prototype.Async')
require('./Function.prototype.Promise')
require('./Function.prototype.Sync')
require('./Function.prototoype.Hook')
require('./Function.prototype.Pipe')


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
