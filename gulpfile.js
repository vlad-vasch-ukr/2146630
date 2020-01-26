'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
 
sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({

      browsers: ['last 2 versions'],
      
      cascade: false
      
      }))
    .pipe(gulp.dest('./styles'));
});
 
gulp.task('scss:watch', function () {
  gulp.watch('./scss/**/*.scss', gulp.parallel('scss'));
});