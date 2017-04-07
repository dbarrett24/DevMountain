/*var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    print = require('gulp-print'),
    babel = require('gulp-babel');
    //babel-preset-es2015
    */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();


// gulp.task('clean', function (cb) {
//     del([
//         'dist'
//     ], cb);
// });

// gulp.task('build-css', ['clean'], function () {
//     return gulp.src('./styles/*')
//         .pipe(sourcemaps.init())
//         .pipe(sass())
//         .pipe(cachebust.resources())
//         .pipe(concat('styles.css'))
//         .pipe(sourcemaps.write('./maps'))
//         .pipe(gulp.dest('./dist'));
// });


// gulp.task('build-js', ['clean'], function() {
//    return gulp.src('js/**/*.js')               
    //   .pipe(sourcemaps.init())
    //   .pipe(print())                        
    //   .pipe(babel({ presets: ['es2015'] }))
    //   .pipe(concat('bundle.js'))
    //   //.pipe(uglify())
    //   .pipe(sourcemaps.write('./')) 
    //   .pipe(gulp.dest('./dist/js')); 
// });

// gulp.task('build', [ 'clean', 'build-css', 'build-js'], function() {
//     return gulp.src('index.html')
//         .pipe(cachebust.references())
//         .pipe(gulp.dest('dist'));
// });

// gulp.task('watch', function() {
//     return gulp.watch(['./index.html','./partials/*.html', './styles/*.*css', './js/**/*.js'], ['build']);
// });