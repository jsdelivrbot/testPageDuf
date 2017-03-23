'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');

gulp.task('uglifycss', function () {
    gulp.src('./css/style.css')
        .pipe(uglifycss({
            "maxLineLen": 120,
            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});