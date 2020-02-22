'use strict';

const gulp = require('gulp')
const browserify = require('browserify')
const uglify = require('gulp-uglify')
const source = require('vinyl-source-stream')
const rename = require('gulp-rename')
const header = require('gulp-header')
const appVersion = require('./package.json').version
const libHeader = `/*! i18n-zipcodes v${appVersion} - https://github.com/sarcadass/i18n-zipcodes */\n`

gulp.task('build', function() {
	return browserify({entries: './standalone.js'}).bundle()
		.pipe(source('./i18n-zipcodes.js'))
		.pipe(header(libHeader))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('buildMin', gulp.series('build', function() {
	return gulp.src('./dist/i18n-zipcodes.js')
		.pipe(rename({ suffix: ".min" }))
		.pipe(uglify())
		.pipe(header(libHeader))
		.pipe(gulp.dest('./dist'));
}));

gulp.task('default', gulp.series('buildMin'));
