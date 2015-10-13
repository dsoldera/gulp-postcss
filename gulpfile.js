var postcss = require('gulp-postcss');
var gulp = require('gulp');
var reporter = require("postcss-reporter");
var stylelint = require("stylelint");
var csscomb = require('gulp-csscomb');
var configSuitcss = require("stylelint-config-suitcss");

gulp.task('styles', function() {
  return gulp.src('./src/*.css')
    .pipe(csscomb())
    .pipe(gulp.dest('./dest'));
});

gulp.task('css', function () {
  return gulp.src('./dest/*.css')
    .pipe(postcss([
    stylelint({ // an example config that has four rules 
      "rules": {
        "color-no-invalid-hex": 2,
        "declaration-colon-space-before": [2, "never"],
        "indentation": [2, "space"],
        "number-leading-zero": [2, "always"]
      }
    }),
    reporter({
      clearMessages: true,
    })
  ]));
	/*postcss([
	  stylelint(configSuitcss), // use stylelint-config-suitcss
		reporter()
	])*/
});
