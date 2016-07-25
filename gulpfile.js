"use strict";

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    postcssnested = require('postcss-nested'),
    cssmqpacker = require('css-mqpacker'),
    csscomb = require('postcss-csscomb'),
    reporter = require("postcss-reporter");


/*************************************************/
gulp.task('postcss-plugins', function () {
	var processors = [
    autoprefixer({browsers: ['last 10 version']}),
    postcssnested(),
    cssmqpacker(),
    cssnano(),
  ];

	return gulp
		.src('./src/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest'));
});

gulp.task('autoprefixer', function() {
	return gulp
		.src('./src/*.css')
		.pipe(postcss([ autoprefixer({ browsers: ['last 7 versions'] }) ]))
		.pipe(gulp.dest('./dest'));
});
