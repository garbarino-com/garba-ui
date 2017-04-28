var del = require('del');
var gulp = require('gulp');
var debug = require('gulp-debug');
var install = require('gulp-install');
var sass = require('gulp-sass');
var util = require('gulp-util');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

var config = {
  basePaths: {
    src: './app/',
    dist: './dist/'
  }
};

var input = {
  styles: config.basePaths.src + 'scss/*.scss',
  images: config.basePaths.src + 'images/',
  fonts: config.basePaths.src + 'fonts/*'
};

var output = {
  styles: config.basePaths.dist + 'css/',
  images: config.basePaths.dist + 'images/',
  fonts: config.basePaths.dist + 'fonts/'
};

gulp.task('install-dependencies', function () {
  return gulp.src(['./package.json'])
    .pipe(install());
});

// Clean files
gulp.task('clean:sass', function () {
  return del(output.styles + '*.*');
});

gulp.task('clean:fonts', function () {
  return del(output.fonts + '*.*');
});

// Sass task
gulp.task('sass', function() {
  gulp.src(input.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(output.styles))
});

// Copy fonts task
gulp.task('copy-fonts', function () {
  return gulp.src(input.fonts)
    .pipe(debug({title: 'copy-from:'}))
    .pipe(gulp.dest(output.fonts))
    .pipe(debug({title: 'copy-to:'}));
});

// Download dependencies and run sass
gulp.task('build', function (callback) {
  runSequence('install-dependencies', 'clean:sass', 'clean:fonts', 'sass', 'copy-fonts', callback);
});

//Watch task
gulp.task('watch',function() {
  gulp.watch(input.styles, ['build']);
});
