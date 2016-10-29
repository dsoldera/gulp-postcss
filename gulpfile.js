"use strict";

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    postcssnested = require('postcss-nested'),
    cssmqpacker = require('css-mqpacker'),
    csscomb = require('gulp-csscomb'),
    lost = require('lost'),
    reporter = require("postcss-reporter");

/*************************************************/

gulp.task('default', function () {
	var processors = [
    autoprefixer({browsers: ['last 2 version']}),
    postcssnested(),
    cssmqpacker(),
    csscomb()
  ];
	return gulp
	 .src('./src/styles.css')
	 .pipe(postcss(processors))
	 .pipe(gulp.dest('./dist'));
});

gulp.task('autoprefixer', function() {
    return gulp
	 .src('./src/styles.css')
	 .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
	 .pipe(gulp.dest('./dist'));
});

gulp.task('cssnano', function() {
    return gulp
     .src('./src/styles.css')
     .pipe(postcss([ cssnano() ]))
     .pipe(gulp.dest('./dist'));
});

gulp.task('csscomb', function () {
  return gulp
    .src('./src/styles.css')
    .pipe(csscomb())
    .pipe(gulp.dest('./dist'));
});

gulp.task('lost', function() {
    return gulp
    .src(
        ['./src/lost*.css']
        )
    .pipe(postcss([ lost() ]))
    .pipe(gulp.dest('./dist'));
});
