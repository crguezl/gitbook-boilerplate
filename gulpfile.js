var gulp  = require('gulp');
var shell = require('gulp-shell');

//  "deploy-gitbook": "./scripts/losh deploy-gitbook",
gulp.task('deploy', function () {
  return gulp.src('').pipe(shell(["./scripts/losh deploy-gitbook"]));
});

// npm install -g http-server
//  "generate-gitbook": "./scripts/generate-gitbook",
gulp.task('build', function() {
  return gulp.src('').pipe(shell(['./scripts/generate-gitbook']));
});

// "serve": "gitbook serve txt gh-pages",
gulp.task('serve', function() {
  return gulp.src('').pipe(shell(['gitbook serve txt gh-pages']));
});
