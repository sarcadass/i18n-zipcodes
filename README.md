# i18n-zipcodes
International zipcodes validator based on Regex for Node.js and the browser.

## Install
**For Node.js:**
```sh
$ npm install --save i18n-zipcodes
```

**For the browser:**
* Download the script in the `dist` folder

## Usage
**For Node.js**
```js
// i18nZipcodes(countryCode, zipCode)

i18nZipcodes('us', '90210')
// true

i18nZipcodes('fr', '5632')
// false
```

**For the browser:**
```html
<script src="i18n-zipcodes.min.js"></script>
<script>
    console.log(i18nZipcodes('fr', '75014'));
    //Return true
</script>
```

## 116 Countries supported
Country codes use the [ISO 3166-1](https://fr.wikipedia.org/wiki/ISO_3166-1) format.

  'ad',
  'ar',
  'bm',
  'bn',
  'br',
  'ca',
  'fo',
  'fr',
  'gb',
  'ge',
  'ie',
  'jp',
  'kr',
  'lv',
  'mv',
  'mt',
  'nl',
  'pl',
  'pt',
  'sz',
  'tw',
  'us',
  'is',
  'mg',
  'at',
  'au',
  'bd',
  'be',
  'bg',
  'ch',
  'cx',
  'cy',
  'dk',
  'gl',
  'gw',
  'hu',
  'li',
  'lu',
  'md',
  'mk',
  'mz',
  'no',
  'nz',
  'ph',
  'sd',
  'si',
  'tn',
  've',
  'xk',
  'za',
  'as',
  'ba',
  'cs',
  'cu',
  'de',
  'dz',
  'ee',
  'es',
  'fi',
  'fm',
  'gf',
  'gp',
  'gt',
  'gu',
  'hr',
  'ic',
  'id',
  'il',
  'it',
  'ke',
  'kw',
  'lt',
  'ma',
  'me',
  'mh',
  'mm',
  'mp',
  'mq',
  'mx',
  'my',
  'pk',
  'pm',
  'pr',
  'ps',
  'pw',
  're',
  'sa',
  'sm',
  'th',
  'tr',
  'ua',
  'uy',
  'vi',
  'vn',
  'yu',
  'zm',
  'am',
  'az',
  'bj',
  'by',
  'cn',
  'in',
  'kg',
  'kz',
  'mn',
  'ro',
  'rs',
  'ru',
  'sg',
  'tj',
  'tm',
  'uz',
  'cz',
  'gr',
  'se',
  'sk'
