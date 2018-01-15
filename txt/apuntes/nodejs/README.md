### Debugging NodeJS

* [debugger](https://nodejs.org/api/debugger.html)

Este ejemplo ilustra como hacerlo en versiones `8.*`:


```bash
[~/EJS/chapter6-the-secret-life-of-objects(master)]$ node --version
v8.1.2
```
Véase la tarea `debugger`:

```js
~/PLgradoLocal/campus-virtual/tema1-intro-a-js/practica-oop/OOP(master)]$ cat gulpfile.js
var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("default", ["test"]);

gulp.task("run", shell.task('NODE_PATH=./src node ./src/main.js'));

/*
En versiones v8.*  chrome://inspect en el navegador
https://nodejs.org/en/docs/inspector/
*/
gulp.task('debugger', shell.task('NODE_PATH=./src node --inspect-brk src/main.js'));

gulp.task("test", shell.task("NODE_PATH=./src ./node_modules/mocha/bin/mocha --require should"));
```
Arrancamos:
```
~/EJS/chapter6-the-secret-life-of-objects(master)]$ gulp debug
[09:42:09] Using gulpfile ~/local/src/javascript/learning/oop/oop-eloquentjs-example/gulpfile.js
[09:42:09] Starting 'debug'...
< Debugger listening on ws://127.0.0.1:9229/1389bb6d-364e-45be-8cbb-43ed4cc740e9
< For help see https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in main-draw-table.js:1
> 1 (function (exports, require, module, __filename, __dirname) { var drawIt = require("./lyingoutatable.js").drawIt;
  2 var MOUNTAINS = require("./mountains.json");
  3
```

Si con el navegador `chrome` visitamos la URL
[chrome://inspect](chrome://inspect)
estaremos en la página de depuración de Chrome.

![Debugging NodeJS con Chrome](debugnodejs.png)
