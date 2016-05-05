var gulp        = require('gulp'),
    del         = require('del'), // rm -rf
    sass        = require('gulp-sass'),
    fs          = require('fs'),
    sourcemaps  = require('gulp-sourcemaps');



gulp.task('sass', function () {
    fs.readFile('APP_VERSION', 'utf8', function (err , data) {
    return gulp.src('garbaui.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed', errLogToConsole: true}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./'));
    });
});

gulp.task('default', ['sass']);