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
require('./Object.prototype.Define')
require('./Object.prototype.Extend')
require('./Object.prototype.Clone')
require('./Object.prototype.Each')
require('./Object.prototype.Get')
require('./Object.prototype.Has')
require('./Object.prototype.Includes')
require('./Object.prototype.IsEqual')
require('./Object.prototype.Keys')
require('./Object.prototype.Merge')
require('./Object.prototype.Paths')
require('./Object.prototype.Pick')
require('./Object.prototype.Set')
require('./Object.prototype.Trim')
require('./Object.prototype.Type')
require('./Object.prototype.Values')

/**
* Array class
* @summary [Array@MDN]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array}
* @class Array
* @type {array}
*/
require('./Array.Difference')
require('./Array.From')
require('./Array.IsArray')
require('./Array.Flatten')

require('./Array.prototype.first')
require('./Array.prototype.head')
require('./Array.prototype.last')
require('./Array.prototype.tail')
require('./Array.prototype.Delete')
require('./Array.prototype.DeleteAt')
require('./Array.prototype.Difference')
require('./Array.prototype.Intersection')
require('./Array.prototype.Omit')
require('./Array.prototype.OmitAt')
require('./Array.prototype.Shuffle')
require('./Array.prototype.Union')
require('./Array.prototype.Unique')
require('./Array.prototype.Xor')


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
require('./Function.prototype.Hook')
require('./Function.prototype.Pipe')


/* org.tts.js.core/Global */
require('./log')
require('./logj')




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

require('./Class')
require('./Logger')
