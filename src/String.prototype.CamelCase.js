require('./Define')

/**
* String converted to camel case
* @memberof String#
* @instance
* @function CamelCase
* @param {boolean} [UpperCamel] - Set if Upper Camel Case
* @returns {string} text - Text with camel case
*/
const preserveCamelCase=a=>{let b=!1,d=!1,e=!1;for(let f=0;f<a.length;f++){const g=a[f];b&&/[a-zA-Z]/.test(g)&&g.toUpperCase()===g?(a=a.slice(0,f)+'-'+a.slice(f),b=!1,e=d,d=!0,f++):d&&e&&/[a-zA-Z]/.test(g)&&g.toLowerCase()===g?(a=a.slice(0,f-1)+'-'+a.slice(f-1),e=d,d=!1,b=!0):(b=g.toLowerCase()===g,e=d,d=g.toUpperCase()===g)}return a}
function camelCase(a,b){b=Object.assign({pascalCase:!1},b);const c=e=>b.pascalCase?e.charAt(0).toUpperCase()+e.slice(1):e;if(a=Array.isArray(a)?a.map(e=>e.trim()).filter(e=>e.length).join('-'):a.trim(),0===a.length)return'';if(1===a.length)return b.pascalCase?a.toUpperCase():a.toLowerCase();if(/^[a-z\d]+$/.test(a))return c(a);const d=a!==a.toLowerCase();return d&&(a=preserveCamelCase(a)),a=a.replace(/^[_.\- ]+/,'').toLowerCase().replace(/[_.\- ]+(\w|$)/g,(e,f)=>f.toUpperCase()),c(a)}
function CamelCase(){const a=camelCase.apply(camelCase,arguments);return a.charAt(0).toUpperCase()+a.slice(1)}

Define(String.prototype, 'CamelCase', function (upper) {
	return (typeof upper !== 'undefined' && upper === true) ? CamelCase(this) : camelCase(this)
})

