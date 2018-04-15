## Práctica: Analizador Descendente Predictivo Recursivo

### Descripción

Diseñe un lenguaje de programación sencillo (Sintáxis convencional *a la C/BASIC/JavaScript/...*). Escriba un analizador sintáctico que genere árboles de análisis abstracto que conformen a los usados por el intérprete del lenguaje Egg.

##### Posibles puntos de partida

* [Niklaus Wirth's PL/0](https://en.wikipedia.org/wiki/Recursive_descent_parser) in the Wikipedia. 
* [Tiny Basic](https://en.wikipedia.org/wiki/Tiny_BASIC)
* [Let's write a recursive-descent parser in C (Part 1)](https://youtu.be/N55XNj8KjC4) YouTube
* [Let's write a recursive-descent parser in C (Part 2)](https://youtu.be/NdW_ApiaivU) YouTube

##### Requisitos

1. Escriba la gramática de manera que sea procesable por un ADPR. Puede usar los operadores
`*` y `+` dentro de la gramática para indicar repeticiones
2. Escriba el analizador sintáctico para dicho lenguaje. Deberá devolver el árbol de análisis
sintáctico conforme a los árboles usados por el intérprete Egg 
3. El lenguaje debe tener 
  - declaraciones (aunque no tiene que ser necesariamente tipeado). Esto es, deberían poder declararse objetos como variables, constantes y funciones
  - sentencias `if`, 
  - `condiciones` como `a <= b`, 
  - `asignaciones`, 
  - alguna forma de bucle, 
  - `funciones` y  llamadas a funciones, 
  - etc.
4. La gramática deberá disponerse de forma que sea analizable por un PDR
5. Escriba pruebas  para el código desarrollado

### Recursos

* [Apuntes de PL: Análisis Sintáctico Predictivo Recursivo](http://crguezl.github.io/pl-html/node22.html)
* [Repo con una solución a un lenguaje similar](https://github.com/crguezl/prdcalc)
  -  [Despliegue en Heroku](https://pl1718-prdcalc.herokuapp.com/)
  - [Fichero main.js con un parser similar al que se solicita](https://github.com/crguezl/prdcalc/blob/master/views/main.js)
* [Repo inicial del que parte la asignación ClassRoom](https://github.com/ULL-ESIT-PL-1617/solution-evalua-pdr)
* [Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
* [Chai](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/chai.html)
* [Covering](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/covering.html)
* [Blanket](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/blanket.html)


