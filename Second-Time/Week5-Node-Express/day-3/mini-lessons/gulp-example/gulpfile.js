
const gulp = require('gulp')
  , sass = require('gulp-sass')
  , sourcemaps = require('gulp-sourcemaps')
  , CacheBuster = require('gulp-cachebust')
  , concat = require('gulp-concat')
  , cachebust = new CacheBuster()
  , print = require('gulp-print')
  , babel = require('gulp-babel');



gulp.task('build-css', () => {
  return gulp.src('./styles/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(cachebust.resources())
  .pipe(concat('styles.css'))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist'))
})

gulp.task('build-js', function() {
   return gulp.src('js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', [ 'build-css', 'build-js'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html', './styles/*.scss', './js/**/*.js'], ['build']);
});
