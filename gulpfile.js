"use strict";

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    gulpcssnano = require('gulp-cssnano'),
    postcssnested = require('postcss-nested'),
    cssmqpacker = require('css-mqpacker'),
    csscomb = require('gulp-csscomb'),
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
	 .pipe(gulp.dest('./dest'));
});

gulp.task('autoprefixer', function() {
    return gulp
	 .src('./src/styles.css')
	 .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
	 .pipe(gulp.dest('./dest'));
});

gulp.task('cssnano', function() {
    return gulp
     .src('./src/styles.css')
     .pipe(postcss([ nano() ]))
     .pipe(gulp.dest('./dest'));
});

gulp.task('csscomb', function () {
  return gulp.src('./src/gulp-cssnano.css')
    .pipe(csscomb())
    .pipe(gulp.dest('./dest'));
});

gulp.task('gulpcssnano', function () {
  return gulp.src('./src/gulp-cssnano.css')
    .pipe(gulpcssnano())
    .pipe(gulp.dest('./dest'));
});

gulp.task('gulpcssnano', function () {
  return gulp.src('./src/gulp-cssnano.css')
    .pipe(sourcemaps.init())
    .pipe(gulpcssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest'));
});
