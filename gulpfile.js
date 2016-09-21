var gulp  = require('gulp');
var shell = require('gulp-shell');

//  "deploy-gitbook": "./scripts/losh deploy-gitbook",
gulp.task('deploy', function () {
  return gulp.src('').pipe(shell(["./scripts/losh deploy-gitbook"]));
});

//  "deploy-togbsio": "./scripts/losh deploy-togbsio",
gulp.task('deploygb', function () {
  return gulp.src('').pipe(shell(["./scripts/losh deploy-togbsio"]));
});

//"generate-wiki": "./scripts/losh generate-wiki"
//"deploy-wiki": "./scripts/losh deploy-wiki"
gulp.task('deployw', function() {
  return gulp.src('').pipe(shell([
     "./scripts/losh generate-wiki",
     "./scripts/losh deploy-wiki"
     ]))
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

// open browser at local
gulp.task('open', function() {
  return gulp.src('').pipe(shell(['open localhost:4000']));
});
