# i18n-zipcodes [![Build Status](https://travis-ci.org/sarcadass/i18n-zipcodes.svg?branch=master)](https://travis-ci.org/sarcadass/i18n-zipcodes) [![codecov](https://codecov.io/gh/sarcadass/i18n-zipcodes/branch/master/graph/badge.svg)](https://codecov.io/gh/sarcadass/i18n-zipcodes)

International zipcodes validator in Javascript, based on Regex for Node.js and the browser.

## Install

### For Node.js:
```sh
$ npm install i18n-zipcodes
```

### For the browser:
* Download the script in the `dist` folder


## Usage

```js
i18nZipcodes(countryCode: string, zipCode: string): boolean
// countryCode param is case insensitive
```

### For Node.js
```js
// CommonJS Syntax
const i18nZipcodes = require('i18n-zipcodes');
// or ES Syntax
import i18nZipcodes from 'i18n-zipcodes';

i18nZipcodes('US', '90210'); // true

i18nZipcodes('fr', '5632'); // false
```

### For the browser
```html
<script src="i18n-zipcodes.min.js"></script>
<script>
    console.log(i18nZipcodes('fr', '75014')); // true
</script>
```


## 115 Countries supported
Country codes use the [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) format.

### A
- 🇦🇩 (`AD`) Andorra
- 🇦🇲 (`AM`) Armenia
- 🇦🇷 (`AR`) Argentina
- 🇦🇸 (`AS`) American Samoa
- 🇦🇹 (`AT`) Austria
- 🇦🇺 (`AU`) Australia
- 🇦🇿 (`AZ`) Azerbaijan

### B
- 🇧🇦 (`BA`) Bosnia and Herzegovina
- 🇧🇩 (`BD`) Bangladesh
- 🇧🇪 (`BE`) Belgium
- 🇧🇬 (`BG`) Bulgaria
- 🇧🇯 (`BJ`) Benin
- 🇧🇲 (`BM`) Bermuda
- 🇧🇳 (`BN`) Brunei
- 🇧🇷 (`BR`) Brazil
- 🇧🇾 (`BY`) Belarus

### C
- 🇨🇦 (`CA`) Canada
- 🇨🇭 (`CH`) Switzerland
- 🇨🇳 (`CN`) China
- 🇨🇺 (`CU`) Cuba
- 🇨🇽 (`CX`) Christmas Island
- 🇨🇾 (`CY`) Cyprus
- 🇨🇿 (`CZ`) Czechia

### D
- 🇩🇪 (`DE`) Germany
- 🇩🇰 (`DK`) Denmark
- 🇩🇿 (`DZ`) Algeria

### E
- 🇪🇪 (`EE`) Estonia
- 🇪🇸 (`ES`) Spain

### F
- 🇫🇮 (`FI`) Finland
- 🇫🇲 (`FM`) Micronesia
- 🇫🇴 (`FO`) Faroe Islands
- 🇫🇷 (`FR`) France

### G
- 🇬🇪 (`GE`) Georgia
- 🇬🇫 (`GF`) French Guiana
- 🇬🇱 (`GL`) Greenland
- 🇬🇵 (`GP`) Guadeloupe
- 🇬🇷 (`GR`) Greece
- 🇬🇹 (`GT`) Guatemala
- 🇬🇺 (`GU`) Guam
- 🇬🇼 (`GW`) Guinea-Bissau

### H
- 🇭🇷 (`HR`) Croatia
- 🇭🇺 (`HU`) Hungary

### I
- 🇮🇨 (`IC`) Canary Islands
- 🇮🇩 (`ID`) Indonesia
- 🇮🇪 (`IE`) Ireland
- 🇮🇱 (`IL`) Israel
- 🇮🇳 (`IN`) Inde
- 🇮🇸 (`IS`) Iceland
- 🇮🇹 (`IT`) Italy

### J
- 🇯🇵 (`JP`) Japan

### K
- 🇰🇪 (`KE`) Kenya
- 🇰🇬 (`KG`) Kyrgyzstan
- 🇰🇷 (`KR`) South Korea
- 🇰🇼 (`KW`) Kuwait
- 🇰🇿 (`KZ`) Kazakhstan

### L
- 🇱🇮 (`LI`) Liechtenstein
- 🇱🇹 (`LT`) Lithuania
- 🇱🇺 (`LU`) Luxembourg
- 🇱🇻 (`LV`) Latvia

### M
- 🇲🇦 (`MA`) Morocco
- 🇲🇩 (`MD`) Moldova
- 🇲🇪 (`ME`) Montenegro
- 🇲🇬 (`MG`) Madagascar
- 🇲🇭 (`MH`) Marshall Islands
- 🇲🇰 (`MK`) North Macedonia
- 🇲🇲 (`MM`) Myanmar
- 🇲🇳 (`MN`) Mongolia
- 🇲🇵 (`MP`) Northern Mariana Islands
- 🇲🇶 (`MQ`) Martinique
- 🇲🇹 (`MT`) Malta
- 🇲🇻 (`MV`) Maldives
- 🇲🇽 (`MX`) Mexico
- 🇲🇾 (`MY`) Malaysia
- 🇲🇿 (`MZ`) Mozambique

### N
- 🇳🇱 (`NL`) Netherlands
- 🇳🇴 (`NO`) Norway
- 🇳🇿 (`NZ`) New Zealand

### P
- 🇵🇭 (`PH`) Philippines
- 🇵🇰 (`PK`) Pakistan
- 🇵🇱 (`PL`) Poland
- 🇫🇷 (`PM`) Saint Pierre and Miquelon
- 🇵🇷 (`PR`) Puerto Rico
- 🇵🇸 (`PS`) Palestine
- 🇵🇹 (`PT`) Portugal
- 🇵🇼 (`PW`) Palau

### R
- 🇷🇪 (`RE`) Réunion
- 🇷🇴 (`RO`) Romania
- 🇷🇸 (`RS`) Serbia
- 🇷🇺 (`RU`) Russian Federation

### S
- 🇸🇦 (`SA`) Saudi Arabia
- 🇸🇩 (`SD`) Sudan
- 🇸🇪 (`SE`) Sweden
- 🇸🇬 (`SG`) Singapore
- 🇸🇮 (`SI`) Slovenia
- 🇸🇰 (`SK`) Slovakia
- 🇸🇲 (`SM`) San Marino
- 🇸🇿 (`SZ`) Swaziland

### T
- 🇹🇭 (`TH`) Thailand
- 🇹🇯 (`TJ`) Tajikistan
- 🇹🇲 (`TM`) Turkmenistan
- 🇹🇳 (`TN`) Tunisia
- 🇹🇷 (`TR`) Turkey
- 🇹🇼 (`TW`) Taiwan

### U
- 🇺🇦 (`UA`) Ukraine
- 🇬🇧 (`UK`) United Kingdom
- 🇺🇸 (`US`) United States of America
- 🇺🇾 (`UY`) Uruguay
- 🇺🇿 (`UZ`) Uzbekistan

### V
- 🇻🇪 (`VE`) Venezuela
- 🇻🇮 (`VI`) Virgin Islands (U.S.)
- 🇻🇳 (`VN`) Viet Nam

### X
- 🇽🇰 (`XK`) Kosovo

### Y
- (`YU`) Yugoslavia

### Z
- 🇿🇦 (`ZA`) South Africa
- 🇿🇲 (`ZM`) Zambia
