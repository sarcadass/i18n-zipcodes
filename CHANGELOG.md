# Changelog

## v4.0.0

### Features
- Update `KR` zipcode regex [@rpaasche](https://github.com/rpaasche)

### Miscellaneous
- Update dev dependencies


## v3.1.0

### Features
- Set back `GB` country code to be [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) compliant. `UK` country code will fallback to `GB` for backward compatibility [@jariz](https://github.com/jariz)
- Update `IE` zipcode regex [@jariz](https://github.com/jariz)

### Miscellaneous
- Update dev dependencies
- Add code coverage
- Add tests
- Add `build` NPM script
- Setup Travis CI for PR and remote branches
- Setup CD to publish package on new releases
- Keep only useful files for package (reduce package size)


## v3.0.0

### Features
- ⚠️ Remove [obsolete](https://en.wikipedia.org/wiki/ISO_3166-2:CS) **CS** code (Serbia and Montenegro). Use **RS** (Serbia) & **ME** (Montenegro) that already exist in the lib.

### Miscellaneous
- Update README


## v2.0.0

### Features
- ⚠️ Replace **GB** by **UK**
- Update **UK** Regex (ex **GB**) to cover all **UK** zipcodes
- Add **CO** (Colombia) support

### Miscellaneous
- Update dependencies
- Add a header prefix on dist files to identify lib and version


## v1.0.3 (from v1.0.0)

### Miscellaneous
- Add MIT License
- Add manual test HTML file
- Update dependencies
- Update node versions on travis.yml
