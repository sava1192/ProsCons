'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
// var concatCss = require('gulp-concat-css');

var sass_path = './scss/*.scss';
var css_path = './css'

gulp.task('sass', function() {
    gulp.src(sass_path)
        .pipe(sass().on('error', console.log))
        .pipe(gulp.dest(css_path));
});

gulp.task('default', function() {
    gulp.watch(sass_path, ['sass']);
});
