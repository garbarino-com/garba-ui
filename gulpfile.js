var autoprefixer = require('gulp-autoprefixer'),
    toolSettings = require('frontend-settings'),
    del = require('del'),
    gulp = require('gulp'),
    debug = require('gulp-debug'),
    install = require('gulp-install'),
    preCommit = require('git-guppy')(gulp),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    styleLint = require('gulp-stylelint'),
    util = require('gulp-util');

// Base paths (root)
var config = {
  basePaths: {
    src: 'app/',
    dist: 'dist/'
  }
};


// Input paths
var input = function () {
  var styles =  config.basePaths.src + 'lib/*.scss';
  var images= config.basePaths.src + 'images/';
  var fonts = config.basePaths.src + 'fonts/*';
  var assets_old = config.basePaths.src + 'lib/_v1.3.2/';
  var fonts_old = assets_old + 'fonts/*';

  return {
    styles: styles,
    images: images,
    fonts: fonts,
    assets_old: assets_old,
    fonts_old: fonts_old
  }
};

// Output paths
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
  gulp.src(input().styles)
    // Output unminified version
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest(output.styles))

    // Output minified version
    .pipe(sass(({
      outputStyle: 'compressed'
    })).on('error', sass.logError))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(output.styles))

    // TODO: Test sourcemaps
    .pipe(sourcemaps.write('./'))

    // TODO: Test autoprefixer
    .pipe(autoprefixer(toolSettings.autoprefixer))
});

// Copy fonts task
gulp.task('copy-fonts', function () {
  return gulp.src([input().fonts, input().fonts_old])
    .pipe(debug([input().fonts, input().fonts_old]))
    .pipe(debug({title: 'copy-from:'}))
    .pipe(gulp.dest(output.fonts))
    .pipe(debug({title: 'copy-to:'}));
});

// StyleLint
gulp.task('lint-styles', function lintCssTask() {
  return gulp
    .src(config.basePaths.src + '**/*.scss')
    .pipe(styleLint({
      config: toolSettings.stylelint,
      failAfterError: false,
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});

// Run this task on dev
gulp.task('build', function (callback) {
  runSequence('install-dependencies', 'clean:sass', 'clean:fonts', 'sass',
    'copy-fonts', 'lint-styles', callback);
});

// Run this task for releases
gulp.task('build:release', function (callback) {
  runSequence('clean:sass', 'clean:fonts', 'sass', 'copy-fonts', callback);
});

// Hook for tasks to be executed on commit
gulp.task('pre-commit', [
  'sass'
]);

// Remove css folder and run sass compiler on file change.
gulp.task('watch', ['clean:sass', 'sass'], function() {
  gulp.watch(input().styles, ['sass']);
});
