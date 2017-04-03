const gulp = require('gulp'); //in Order to RUN gulp, you need gulp...this puts it in here.
const concat = require('gulp-concat');
const babel = require('gulp-babel');

gulp.task('js', function (){
    gulp.src(['./js/app.js', './js/**/*.js']) //   <====== a Glob pattern:   in the./js directory     ** = recursively      *.js = any filename with .js extension.
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist')) //Where to write the file.. If there is no ./dist directory, it will create one. Dist means DISTRIBUTABLE.
})

gulp.task('css', function(){
    gulp.src(['./styles/base/*.css', './styles/fonts/*.css', './stles/**/*.css'])
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist'));
})

gulp.task('default', ['js', 'css']);
gulp.watch('./js/**/*.js', ['js']); //tells gulp to watch for changes in this location.gulp
gulp.watch('./styles/**/*.css', ['css']);