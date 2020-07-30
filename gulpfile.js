var gulp = require('gulp');
var php = require('gulp-connect-php');

var browserSync = require('browser-sync').create();

// Configure PHP server
gulp.task('connect-sync', function () {
  php.server({}, function () {
    browserSync({
      proxy: '127.0.0.1:8000'
    });
  });

  gulp.watch('**/*.php').on('change', function () {
    browserSync.reload();
  });
});

// Watch files
function watchFiles() {
  gulp.watch("./scss/**/*", css);
  gulp.watch(["./js/**/*", "!./js/**/*.min.js"], js);
  gulp.watch("./**/*.php").on('change', function () {
    browserSync.reload()
  });
}
