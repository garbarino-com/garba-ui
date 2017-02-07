/* eslint-env node */
/* eslint-disable no-sync */
'use strict';

var gulp        = require('gulp'),
    del         = require('del'), // rm -rf
    sass        = require('gulp-sass'),
    fs          = require('fs'),
    sourcemaps  = require('gulp-sourcemaps'),
    runSequence = require('run-sequence'),
    rename      = require('gulp-rename');

gulp.task('delete', function() {
  return del(['dist']);
});

gulp.task('sass', function () {
  fs.readFile('APP_VERSION', 'utf8', function (err , data) {
  return gulp.src('core/garbaui.scss')
    .pipe(sass())
    .pipe(rename('garbaui.css'))
    .pipe(gulp.dest('dist/stylesheets'))
    .pipe(sass({
      outputStyle: 'compressed',
      errLogToConsole: true
    }))
    .pipe(
      rename('garbaui.min.css')
    )
    .pipe(
      gulp.dest('dist/stylesheets')
    );
  });
});

// StyleLint
gulp.task('stylelint', function lintCssTask() {
  const gulpStylelint = require('gulp-stylelint');

  return gulp
    .src('core/**/*.css')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});

gulp.task('copyFontsIcon', ['delete'], function() {
  return gulp.src('./core/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', function() {
  runSequence('delete','sass', 'copyFontsIcon')
});
