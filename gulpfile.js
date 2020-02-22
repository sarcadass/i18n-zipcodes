'use strict';

var gulp = require('gulp'),
	browserify = require('browserify'),
	uglify = require('gulp-uglify'),
	source = require('vinyl-source-stream'),
	rename = require('gulp-rename');

gulp.task('build', function() {
	return browserify({entries: './standalone.js'}).bundle()
		.pipe(source('./i18n-zipcodes.js'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('buildMin', gulp.series('build', function() {
	return gulp.src('./dist/i18n-zipcodes.js')
		.pipe(rename({ suffix: ".min" }))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
}));

gulp.task('default', gulp.series('buildMin'));
