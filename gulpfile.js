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
        .pipe(gulp.dest('dist'))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed', errLogToConsole: true}))
        .pipe(sourcemaps.write())
        .pipe(rename('garbaui.min.css'))
        .pipe(gulp.dest('dist'));
    });
});

gulp.task('default', function() {
    runSequence('delete','sass')
});