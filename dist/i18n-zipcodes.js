/*! i18n-zipcodes v2.0.0 - https://github.com/sarcadass/i18n-zipcodes */
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var zipRegexLib = require('./zipRegexLib.js');

module.exports = function(countryCode, zipCode) {
	var countryCodeId, zipCodeId, zipCodeRegex, i;

	// Check the inputs
	if (typeof countryCode == 'string' && typeof zipCode == 'string') {
		countryCodeId = countryCode.trim().toLocaleLowerCase();
		zipCodeId = zipCode.trim();

	} else {
		throw 'The arguments required are two strings: countryCode, zipCode';
	}

	if (countryCodeId === 'gb') {
		throw "[i18n-zipcodes] Since v.2.0.0, 'GB' has been replaced by 'UK'";
	}

	// Associate the good Regex for the countryCode input
	if (zipRegexLib.uniqueZip[countryCodeId] !== undefined) {
		// If `countryCode` parameter is detected as a unique key
		zipCodeRegex = zipRegexLib.uniqueZip[countryCodeId];

	} else {
		// Else `countryCode` parameter is detected as a common key
		for (i = 0; zipRegexLib.commonZip.countryCode.length > i; i++) {
			// Looping through each shared regex countries array
			if (zipRegexLib.commonZip.countryCode[i].indexOf(countryCodeId) > -1) {
				// If a match is found, set the associated regex
				zipCodeRegex = zipRegexLib.commonZip.pattern[i];
				break;
			}
		}
	}

	// Test if it's a valid zipCode
	if (zipCodeRegex !== undefined) {
		return zipCodeRegex.test(zipCodeId);

	} else {
		throw 'No Regex corresponds to this country code';
	}
};

},{"./zipRegexLib.js":2}],2:[function(require,module,exports){
'use strict';

module.exports = {
	uniqueZip: {
		ad: /^(([a-zA-Z]{2}\d{3})|(\d{4}))$/,
		ar: /^((\d{4})|([a-zA-Z]{1}\d{4}[a-zA-Z]{3}))$/,
		bm: /^[a-zA-Z]{2}\s\d{2}$/,
		bn: /^[a-zA-Z]{2}\d{4}$/,
		br: /^(\d{5})(-\d{3})?$/,
		ca: /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/,
		fo: /^([a-zA-Z]{2}-)?(\d{3})?$/,
		fr: /^((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B))[0-9]{3}$/,
		ge: /^((\d{4})|(\d{6}))$/,
		ie: /^(([a-zA-Z]{2}(\s(([a-zA-Z0-9]{1})|(\d{2})))?)|([a-zA-Z]{3}))$/,
		jp: /^\d{3}(-\d{4})?$/,
		kr: /^\d{3}-\d{3}$/,
		lv: /^([a-zA-Z]{2}-)?(\d{4})$/,
		mv: /^\d{4,5}$/,
		mt: /^[a-zA-Z]{3}\s\d{2,4}$/,
		nl: /^(\d{4})\s?[a-zA-Z]{2}$/,
		pl: /^\d{2}(-)?\d{3}$/,
		pt: /^\d{4}(-)?\d{3}$/,
		sz: /^[a-zA-Z]{1}\d{3}$/,
		tw: /^\d{3}(\d{2})?$/,
		uk: /^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$/,
		us: /^\d{5}(-\d{4})?$/
	},

	commonZip: {
		countryCode: [
			'is|mg'.split('|'),
			'at|au|bd|be|bg|ch|cx|cy|dk|gl|gw|hu|li|lu|md|mk|mz|no|nz|ph|sd|si|tn|ve|xk|za'.split('|'),
			'as|ba|cs|cu|de|dz|ee|es|fi|fm|gf|gp|gt|gu|hr|ic|id|il|it|ke|kw|lt|ma|me|mh|mm|mp|mq|mx|my|pk|pm|pr|ps|pw|re|sa|sm|th|tr|ua|uy|vi|vn|yu|zm'.split('|'),
			'am|az|bj|by|cn|co|in|kg|kz|mn|ro|rs|ru|sg|tj|tm|uz'.split('|'),
			'cz|gr|se|sk'.split('|')
		],
		pattern: [
			/^[0-9]{3}$/,
			/^[0-9]{4}$/,
			/^[0-9]{5}$/,
			/^[0-9]{6}$/,
			/^[0-9]{3}\s?[0-9]{2}$/
		]
	}
};

},{}],3:[function(require,module,exports){
(function (global){
var i18nZipcodes = require('./lib/i18n-zipcodes.js');

global.window.i18nZipcodes = i18nZipcodes;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./lib/i18n-zipcodes.js":1}]},{},[3]);
