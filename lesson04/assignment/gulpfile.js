var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefix = require('gulp-autoprefixer'),
  watch = require('gulp-watch'),
  plumber = require('gulp-plumber'),
  browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  gulp.src('css/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(
      autoprefix({
        browsers: ['> .5%'],
      })
    )
    // .pipe(minifycss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());

});

gulp.task('watch', function () {
  gulp.watch('css/*.scss', ['sass']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('browser-sync', function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './',
    },
  });
});

gulp.task('default', ['watch', 'browser-sync']);
