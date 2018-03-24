
### Requisitos

1. Use el repo de GitHub dado por la asignación de esta tarea partiendo de la [práctica anterior](https://crguezl.github.io/ull-esit-1617/_book/practicas/practica-egg.html)
2. Haga que el ejecutable `egg` funcione como un bucle REPL cuando no se le proporciona un fichero de entrada
  ```lisp
  [~/ull-pl1718-campus-virtual/tema3-analisis-sintactico/src/egg/crguezl-egg(private)]$ bin/egg.js
  > def(x, array(1,2,array(3,4))) # x = [1,2,[3,4]]
  [ 1, 2, [ 3, 4 ] ]
  > <-(x,2) # 3d element
  [ 3, 4 ]
  > <-(x,0) # 1st element
  1
  > # Pulsamos CTRL-D
  > goodbye!
  ```
9. Modifique la versión actual del lenguaje egg para que acepte como entrada este programa en [`examples/reto.egg`](https://github.com/ULL-ESIT-PL-1617/egg/blob/reto/examples/reto.egg) en la rama `reto` del repo:
  ```lisp
  do {
    def(sum,  ; function
      -> { nums, 
        do {
           := (i, 0), # Creates a local variable i and sets to 0
           := (s, 0), # Creates local var s and sets to 0
           while { <(i, length(nums)),
             do { =(s, +(s, <-(nums, i))),
                =(i, +(i, 1))
             }
           },
           s
        }
     )
   },
   print(+("sum(array[1, 2, 3]) := ", sum(array[1, 2, 3])))
  }
  ```
2. Introduzca una prueba en `test/test.js` que demuestre que una entrada como la de [`examples/scope-err.egg`](https://github.com/ULL-ESIT-PL-1617/egg/blob/reto/examples/scope-err.egg):
  ```lisp
  do( 
    set(x,9),
    print(x) # ReferenceError: Tried setting an undefined variable: x
  )
  ```
  produce una excepción de este estilo: `SyntaxError: Unexpected input after reached the end of parsing 1: 5) ;`
  Estudie [la API de Should.js](https://shouldjs.github.io/#should-throws)

2. Introduzca una prueba en `test/test.js` que demuestre que una entrada como la de `examples/number-as-fun-err.egg`: 
  ```lisp
  4(5) ; Calling a number as a function
  ```
  produce una excepción

2. Introduzca una prueba en `test/test.js` que demuestre que una entrada como la de `examples/one.egg`: 
  ```lisp
  do(
    define(x, 4),
    define(setx, fun(val, 
        set(x, val)
      )
    ),
    setx(50),
    print(x)
  )
  ```
  produce una salida en `stdout` de 50. 
  * Utilice la técnica de *stubbing*. Test stubs are software components that simulate the behaviors of other software components that a module undergoing tests depends on. Haga *stubbing* sobre `console.log`
  * Algo como esto le puede ayudar con el stubbing:

  ```js
  describe("run", function() {
    let originalLog;
    beforeEach(function() {
      originalLog = console.log;
      console.log = function (...args) { 
        ...
      };
    });
    // test code here
    afterEach(function() {
      ...
    });
    it("testing one.egg with mocking of console.log", function() {
      ...
    }
  }
  ```
  Si quiere saber mas sobre stubbing estudie la librería [sinon](http://sinonjs.org/)
6. Añada índices negativos (a la Ruby) para los arrays
7. Añada mapas/hashes al lenguaje
9. Modifique el AST para dar una solución OOP con clases: una clase `Value`, una clase `Word`, una clase `Apply`, ...
de manera que cada clase de objeto dispone de un método `evaluate`. 
La función `evaluate` con el `switch` desaparece en esta versión
9. Parta de este [repo](https://github.com/ULL-ESIT-PL-1617/egg)

### Recursos

* [Eloquent JS: Chapter 11. Project: A Programming Language](http://eloquentjavascript.net/11_language.html)
* [El lenguaje egg: repo en GitHub](https://github.com/ULL-ESIT-PL-1617/egg)
* [Repo interpreter-egg](https://github.com/ULL-ESIT-PL-1617/interpreter-egg)
* [NodeJS Readline gist](https://gist.github.com/crguezl/430642e29a2b9293317320d0d1759387)
* En el repo [ULL-ESIT-PL-1617/interpreter-egg](https://github.com/ULL-ESIT-PL-1617/interpreter-egg) se muestra como hacer un bucle REPL
* [XRegExp](http://xregexp.com/)

