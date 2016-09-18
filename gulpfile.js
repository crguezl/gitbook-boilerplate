var gulp  = require('gulp');
var shell = require('gulp-shell');

//  "deploy-gitbook": "./scripts/losh deploy-gitbook",
gulp.task('deploy', [ 'build'], function () {
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


// open browser at https://crguezl.github.io/ull-esit-1617/
gulp.task('opengh', function() {
  return gulp.src('').pipe(shell(['open https://crguezl.github.io/ull-esit-1617/']));
});

// open browser at https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/
gulp.task('open', function() {
  return gulp.src('').pipe(shell(['open https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/']));
});
