var gulp  = require('gulp');
var shell = require('gulp-shell');

var deploygh = function() {
  "use strict";
  let gh = require('gh-pages');

  let json = require('./package.json');
  let REPO = json.repository.url;
  console.log(REPO);

  gh.publish('./gh-pages', { repo: REPO, logger: function(m) { console.error(m); } });
}

//  "deploy-gitbook": "./scripts/losh deploy-gitbook",
gulp.task('deploy', [ 'build', 'push'], 
           deploygh);

//  "deploy-togbsio": "./scripts/losh deploy-togbsio",
gulp.task('deploygb',
  shell.task(
    "git ci -am 'deploy to gitbooks'"+
    ";"+
    "git push gbs master",
    { verbose: true }
  )
);

//  "deploy-togbsio": "./scripts/losh deploy-togbsio",
gulp.task('push',
  shell.task(
    "git ci -am 'deploy to github'"+
    ";"+
    "git push origin master",
    { verbose: true }
  )
);

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
gulp.task('build2', function() {
  return gulp.src('').pipe(shell(['./scripts/generate-gitbook']));
});

gulp.task('build', shell.task([
      'gitbook build', 
      'rm -fR gh-pages',
      'mv _book gh-pages'],
      { verbose: true }
));

// "serve": "gitbook serve txt gh-pages",
gulp.task('serve', shell.task(
    ['gitbook serve --lrport 99990 --port 43210 `pwd` gh-pages']
  )
);


// open browser at https://crguezl.github.io/ull-esit-1617/
gulp.task('opengh', function() {
  return gulp.src('').pipe(shell(['open https://crguezl.github.io/ull-esit-1617/']));
});

// open browser at https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/
gulp.task('opengb', function() {
  return gulp.src('').pipe(shell(['open https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/']));
});

// open browser at local
gulp.task('open', function() {
  return gulp.src('').pipe(shell(['open localhost:4000']));
});
//
// "serve": "gitbook serve txt gh-pages",
/*
 * compile md files n txt/repasos to latex files in examenes/
 */
gulp.task('exam', shell.task([
      'pandoc txt/repasos/gulpdsi17.md -o examenes/gulpdsi17.tex',
      'pandoc txt/repasos/expressroutesdsi17.md -o examenes/expressroutesdsi17.tex',
      'pandoc txt/repasos/gitbook.md -o examenes/gitbook.tex',
      'pandoc txt/repasos/markdowndsi17.md -o examenes/markdowndsi17.tex',
      'pandoc txt/repasos/npmdsi17.md -o examenes/npmdsi17.tex',
      'pandoc txt/repasos/ssh.md -o examenes/ssh.tex',
      'pandoc txt/repasos/herokudsi17.md -o examenes/herokudsi17.tex',
      'pandoc txt/repasos/rest.md -o examenes/rest.tex',
      'pandoc txt/repasos/https.md -o examenes/https.tex',
      'pandoc txt/repasos/passport.md -o examenes/passport.tex',
      'pandoc txt/repasos/cookies.md -o examenes/cookies.tex',
      'pandoc txt/repasos/regexpdsi2.md -o examenes/regexpdsi2.tex',
      'pandoc txt/repasos/pruebasdsi2.md -o examenes/pruebasdsi2.tex',
  ]));

gulp.task('sytw1617', ['exam'], shell.task(
      'cd examenes; pdflatex template.tex; cp template.pdf sytw1617.pdf'
      ));
gulp.task('opensytw1617', shell.task(['open examenes/sytw1617.pdf']))

gulp.task('dsi1617', ['exam'], shell.task(
      'cd examenes; pdflatex templatedsi17.tex; cp templatedsi17.tex dsi1617.tex; cp templatedsi17.pdf dsi1617.pdf'
      ));

gulp.task('dsi1617-2', ['exam'], shell.task(
      'cd examenes; pdflatex dsi1617-2.tex'
      ));

gulp.task('pl1617', ['exam'], shell.task(
      'cd examenes; pdflatex pl1617.tex'
      ));

