const gulp = require('gulp');
const electron = require('electron-connect').server.create();

gulp.task('serve', function() {
  electron.start();

  gulp.watch([`${__dirname}/src/*.js`], electron.restart);
  gulp.watch([`${__dirname}/main.js`], electron.restart);
  // gulp.watch('./build/**/*', electron.reload);
});
