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
		gb: /^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$/,
		ge: /^((\d{4})|(\d{6}))$/,
		ie: /^(?:^[AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$/,
		jp: /^\d{3}(-\d{4})?$/,
		lv: /^([a-zA-Z]{2}-)?(\d{4})$/,
		mv: /^\d{4,5}$/,
		mt: /^[a-zA-Z]{3}\s\d{2,4}$/,
		nl: /^(\d{4})\s?[a-zA-Z]{2}$/,
		pl: /^\d{2}(-)?\d{3}$/,
		pt: /^\d{4}(-)?\d{3}$/,
		sz: /^[a-zA-Z]{1}\d{3}$/,
		tw: /^\d{3}(\d{2})?$/,
		us: /^\d{5}(-\d{4})?$/
	},

	commonZip: {
		countryCode: [
			'is|mg'.split('|'),
			'at|au|bd|be|bg|ch|cx|cy|dk|gl|gw|hu|li|lu|md|mk|mz|no|nz|ph|sd|si|tn|ve|xk|za'.split('|'),
			'as|ba|cu|de|dz|ee|es|fi|fm|gf|gp|gt|gu|hr|ic|id|il|it|ke|kr|kw|lt|ma|me|mh|mm|mp|mq|mx|my|pk|pm|pr|ps|pw|re|sa|sm|th|tr|ua|uy|vi|vn|yu|zm'.split('|'),
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
