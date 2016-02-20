'use strict';

var expect = require('chai').expect,
	should = require('chai').should(),
	i18nZipcodes = require('./../lib/i18n-zipcodes.js'),
	zipRegexLib = require('./../lib/zipRegexLib.js');

describe('i18nZipcodes: ', function() {
	it('should return true if the zipCodes are validated.', function() {
		expect(i18nZipcodes('FR', '75014')).to.equal(true);
		expect(i18nZipcodes('US', '10007')).to.equal(true);
		expect(i18nZipcodes('JP', '876-0854')).to.equal(true);
	});

	it('should return false if the zipCodes are NOT validated.', function() {
		expect(i18nZipcodes('IS', 'A23')).to.equal(false);
		expect(i18nZipcodes('BE', '12345')).to.equal(false);
		expect(i18nZipcodes('CA', 'J4H 1H')).to.equal(false);
	});

	it('should return true if the zipCodes are validated with lazy inputs.', function() {
		expect(i18nZipcodes('fr', ' 75014  ')).to.equal(true);
		expect(i18nZipcodes(' uS', ' 10007')).to.equal(true);
		expect(i18nZipcodes('Jp ', ' 876-0854 ')).to.equal(true);
	});

	it('should throw an exception if the countryCode is not recognized.', function() {
		(function() {
			expect(i18nZipcodes('ZZ', '12345'));
		}).should.Throw('No Regex corresponds to this country code');
	});

	it('should throw an exception if the arguments are not two strings.', function() {
		(function() {
			expect(i18nZipcodes());
		}).should.Throw('The arguments required are two strings: countryCode, zipCode');
	});

	it('should return false if there is no duplicate countries in the zipRegexLib.', function() {
		var isDuplicateCountriesId = (function() {
			var countryCodeList = Object.keys(zipRegexLib.uniqueZip);

			// Gather all the countryCodes in a single array
			for (var i = 0; zipRegexLib.commonZip.countryCode.length > i; i++) {
				countryCodeList = countryCodeList.concat(zipRegexLib.commonZip.countryCode[i])
			}

			function hasDuplicates(array) {
				var valuesSoFar = {};
				for (var i = 0; i < array.length; ++i) {
					var value = array[i];
					if (value in valuesSoFar) {
						return true;
					}
					valuesSoFar[value] = true;
				}
				return false;
			}

			return hasDuplicates(countryCodeList);
		})();

		expect(isDuplicateCountriesId).to.equal(false);
	});
});
