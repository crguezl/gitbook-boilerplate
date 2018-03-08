## Práctica: Analizador Léxico para Un Subconjunto de JavaScript

Vamos a trabajar a partir de este repo de Douglas Crockford:

-  [https://github.com/douglascrockford/TDOP](https://github.com/douglascrockford/TDOP)
-  Autor: [Douglas Crockford](http://www.crockford.com/), [douglas@crockford.com en la Wikipedia](https://en.wikipedia.org/wiki/Douglas_Crockford)
-  Fecha que figura en el repo: 2010-11-12


### Descripción:

-   [tdop.html](http://crguezl.github.io/ull-etsii-grado-pl-minijavascript/tdop.html) contains a description of Vaughn Pratt’s Top Down Operator
    Precedence, and describes the parser whose lexer we are going to
    write in this lab. Is a simplified version of JavaScript.
-   The file [`index.html`](https://github.com/douglascrockford/TDOP/blob/master/index.html) parses [`parse.js`](https://github.com/douglascrockford/TDOP/blob/master/parse.js) and displays its AST.
-   The page depends on on [`parse.js`](https://github.com/douglascrockford/TDOP/blob/master/parse.js) and [`tokens.js`](https://github.com/douglascrockford/TDOP/blob/master/tokens.js).
-   The file [`parse.js`](https://github.com/douglascrockford/TDOP/blob/master/parse.js) contains the Simplified JavaScript parser.
-   [tokens.js](https://github.com/douglascrockford/TDOP/blob/master/tokens.js) produces an array of token objects from a string. 

Douglas Crockford escribió su analizador léxico sin usar expresiones
regulares. Crockford prescindió de las regexp porque 
el analizador sintáctico corresponde a un
subconjunto de JS que no tiene - entre otras cosas - expresiones
regulares y  el autor quería que el analizador se pudiera analizar
a si mismo.


### Requisitos

1. Douglas Crockford escribió su analizador léxico sin usar expresiones
regulares. Reescriba el analizador léxico en [tokens.js](https://github.com/douglascrockford/TDOP/blob/master/tokens.js) usando expresiones regulares.
2.  Evite que se hagan copias de la cadena siendo procesada. Muévase
    dentro de la misma cadena usando `lastIndex`. Quizá usar la opción sticky le ayude.
    Tiene una solución dada por el profesor en 
    - [https://github.com/crguezl/ull-etsii-grado-pl-minijavascript/blob/gh-pages/tokens.js](https://github.com/crguezl/ull-etsii-grado-pl-minijavascript/blob/gh-pages/tokens.js)
3. Modifique la solución de Crockford usado regexps en [tokens.js](https://github.com/douglascrockford/TDOP/blob/master/tokens.js)
4.  Añada un server ([vea aquí un ejemplo](https://github.com/ULL-ESIT-PL-1617/evaluar-manejo-de-cookies-y-sessions-en-expressjs-alu0100825510)) y haga el despliegue de su aplicación en la máquina virtual del iaas o en [Heroku](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/recursos/heroku.html)
6. **Opcional**: Use `sessions` para controlar quien accede a la aplicación. Puede ver un ejemplo de como hacerlo en los ficheros:
  - [ULL-ESIT-PL-1617/evaluar-manejo-de-cookies-y-sessions-en-expressjs](https://github.com/ULL-ESIT-PL-1617/evaluar-manejo-de-cookies-y-sessions-en-expressjs-alu0100825510)
7. Cuando haga la entrega indique los enlaces a los repos (apuntes y analizador) así como a los despliegues

### Recursos

1.  Una solución incompleta  de esta práctica se encuentra en:
    -   [https://github.com/crguezl/ull-etsii-grado-pl-minijavascript/tree/gh-pages](https://github.com/crguezl/ull-etsii-grado-pl-minijavascript/tree/gh-pages) en github.
    -   Veala en funcionamiento en [http://crguezl.github.io/ull-etsii-grado-pl-minijavascript/](http://crguezl.github.io/ull-etsii-grado-pl-minijavascript/)
2.  El método `tokens` retorna el array de tokens [https://github.com/crguezl/ull-etsii-grado-pl-minijavascript/blob/gh-pages/tokens.js](https://github.com/crguezl/ull-etsii-grado-pl-minijavascript/blob/gh-pages/tokens.js)
3.[ULL-ESIT-PL-1617/evaluar-manejo-de-cookies-y-sessions-en-expressjs](https://github.com/ULL-ESIT-PL-1617/evaluar-manejo-de-cookies-y-sessions-en-expressjs-alu0100825510)
4. [Apuntes de Heroku](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/recursos/heroku.html)
5. [Como Desplegar una Aplicación Web en iaas.ull.es](https://github.com/SYTW/iaas-ull-es)
6. [Apuntes: Expresiones Regulares](../apuntes/regexp/README.md)
7. [Eloquent JS: Chapter 9: Regular Expressions](http://eloquentjavascript.net/09_regexp.html)

### Notas para el Profesor

```bash
       [~/srcPLgrado/lexical_analysis_top_down_operator_precedence(gh-pages)]$ pwd -P
       /Users/casiano/local/src/javascript/PLgrado/lexical_analysis_top_down_operator_precedence
```



