"use strict";
import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
import babel from "gulp-babel";

gulp.task('scripts', () => {
  return browserify('src/js/app.js')
  .transform('babelify')
  .bundle()
  .pipe(source("bundle.js"))
  .pipe(gulp.dest("dist/js/"))

});


gulp.task('es-commonjs', () => {
  return gulp.src([
      '!src/js/app.js', // <== !
      'src/js/*.js'
    ])
      .pipe(babel())
      .pipe(gulp.dest('src/commonjs'));

});


gulp.task('watch', () => {
    gulp.watch('src/js/*.js', ['scripts', 'es-commonjs']);

});

gulp.task('default',['scripts', 'es-commonjs', 'watch']);
