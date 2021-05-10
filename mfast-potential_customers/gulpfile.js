var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var minifyCss = require('gulp-cssnano');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('assets/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    // .pipe(minifyCss())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('assets/css'))
    .pipe(livereload());
});
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(['assets/scss/styles.scss'], gulp.series('sass'));
});
gulp.task('default', gulp.series(['sass', 'watch']));
