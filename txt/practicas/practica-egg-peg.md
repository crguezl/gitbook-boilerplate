## Práctica: Reescribir el Compilador de Egg usando PEG.js para Generar los árboles

### Descripción


Re-escriba la fase de análisis sintáctico [del lenguaje Egg](https://github.com/ULL-ESIT-PL-1617/egg/blob/master/README.md) usando PEG.js. Básicamente el único fichero que cambia es `parse.js` que será generado a partir de `parse.peg`.

En `parse.peg` irá 
  * El análisis léxico+sintáctico del lenguaje. 
  * Recuerde dividir el fichero en dos secciones con la parte de tokens en un lado y la gramática en el otro
  * Este es un buen momento para meditar su diseño del lenguaje Egg e introducir modificaciones
  * Las acciones semánticas son las de construcción del AST 
  * Medite también sobre si quiere rediseñar algo en su AST


### Recursos

* [PEGs](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pegjs/PEGS.html) Viejos apuntes del profesor
* [PEG.js](https://pegjs.org/documentation) PEG.js Documentation
* [El lenguaje egg: repo en GitHub](https://github.com/ULL-ESIT-PL-1617/egg)
* [Eloquent JS: Chapter 11. Project: A Programming Language](http://eloquentjavascript.net/11_language.html)
* [Repo interpreter-egg](https://github.com/ULL-ESIT-PL-1617/interpreter-egg)
* [NodeJS Readline gist](https://gist.github.com/crguezl/430642e29a2b9293317320d0d1759387)
* [Apuntes de PL: Análisis Sintáctico Predictivo Recursivo](http://crguezl.github.io/pl-html/node22.html)
* [Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
* [Chai](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/chai.html)
* [Covering](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/covering.html)
* [Blanket](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/blanket.html)



