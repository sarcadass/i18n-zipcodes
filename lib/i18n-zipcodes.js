'use strict';

var zipRegexLib = require('./zipRegexLib.js');

module.exports = function(countryCode, zipCode) {
	var countryCodeId, zipCodeId, zipCodeRegex, i;
	var libName = '[i18n-zipcodes]';

	// Check the inputs
	if (typeof countryCode == 'string' && typeof zipCode == 'string') {
		countryCodeId = countryCode.trim().toLocaleLowerCase();
		zipCodeId = zipCode.trim();

	} else {
		throw libName + ' The arguments required are two strings: countryCode, zipCode.';
	}

	if (countryCodeId === 'uk') {
		countryCodeId = 'gb';
  }

	if (countryCodeId === 'cs') {
		throw libName + " Since v.3.0.0, 'CS' has been removed, use 'RS' and/or 'ME' instead.";
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
