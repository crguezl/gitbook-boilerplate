## Práctica: Analizador Descendente Predictivo Recursivo

### Descripción

Diseñe un lenguaje de programación sencillo. 

##### Posibles puntos de partida

* [ Niklaus Wirth's PL/0](https://en.wikipedia.org/wiki/Recursive_descent_parser) in the Wikipedia. 
* [Tiny Basic](https://en.wikipedia.org/wiki/Tiny_BASIC)

##### Requisitos

1. Escriba la gramática de manera que sea procesable por un ADPR. Puede usar los operadores
`*` y `+` para indicar repeticiones
2. Escriba el analizador sintáctico para dicho lenguaje. Deberá devolver el árbol de análisis
sintáctico
3. El lenguaje debe tener declaraciones (aunque no tiene que ser necesariamente tipeado), 
sentencias `if`, `condiciones`, `asignaciones`, alguna forma de bucle, `funciones`, llamadas a funciones, etc.
4. La gramática deberá disponerse de forma que sea analizable por un PDR
5. Escriba pruebas  para el código desarrollado

### Recursos

* [Apuntes de PL: Análisis Sintáctico Predictivo Recursivo](http://crguezl.github.io/pl-html/node22.html)
* [Repo con una solución a un lenguaje similar](https://github.com/crguezl/prdcalc)
  -  [Despliegue en Heroku](http://predictiveparser.herokuapp.com/)
  - [Fichero main.js con un parser similar al que se solicita](https://github.com/crguezl/prdcalc/blob/master/views/main.js)
* [Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
* [Chai](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/chai.html)
* [Covering](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/covering.html)
* [Blanket](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/blanket.html)

