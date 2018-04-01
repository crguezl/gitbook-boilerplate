
### Requisitos

1. Use el repo de GitHub dado por la asignación de esta tarea partiendo de la [práctica anterior](https://crguezl.github.io/ull-esit-1617/_book/practicas/practica-egg-2.html)
2. Modifique `set` para que podamos modificar un elemento de un array:
  ```lisp
  $ cat examples/set-arr-arr-3.egg 
  do(
    :=(x, arr[4, 3, arr[2, arr[9, 3],1]]),
    =(x, 2, 1, 1, 5), # x[2][1][1] = 5
    print(<-(x,2,1,1)) # x[2][1][1] is 5
  )
  ```
3. Modifique el `<-` o `element` para que pueda acceder a un array multidimensional como en el ejemplo anterior
4. Modifique las operaciones de adición, and (`&&`), or (`||`) multiplicación, división y restas para que en vez de dos operandos puedan recibir un número  arbitrario:
  ```lisp
  +(4,5,2,1) # 12
  ```
5.  Modifique las operaciones de menor, mayor, `<=`, `>=`, `==`, etc. para que en vez de dos operandos puedan recibir un número  arbitrario:
  ```lisp
  <(2,a,5) # true if 2 < a and a < 5 same as 2 < a < 5
  ```
6. Modifique el traductor y la evaluación para que el punto (`m.a`) permita acceder a los campos y un programa como este funcione
  ```
  $ cat examples/mapmap.egg 
  do {
    :=(m, map("a": map("x": array[70, 100]), "b": array[2,3])),
    print( m), # { a: { x: [ 70, 100 ] }, b: [ 2, 3 ] }
    print(m.a),  #  { x: [ 70, 100 ] }
    print(m.b),  # [ 2, 3 ]
    print(m.a.x.1),  # 100
    print(m.b.1),  # 3
  }
  ```
  Cuando se ejecuta debería producir:
  ```
  $ bin/egg.js examples/mapmap.egg 
  { a: { x: [ 70, 100 ] }, b: [ 2, 3 ] }
  { x: [ 70, 100 ] }
  [ 2, 3 ]
  100
  3
  ```
7. Añada pruebas, integre con [circleci](https://circleci.com/), publique el módulo npm

### Recursos

* [Eloquent JS: Chapter 11. Project: A Programming Language](http://eloquentjavascript.net/11_language.html)
* [El lenguaje egg: repo en GitHub](https://github.com/ULL-ESIT-PL-1617/egg)
* [Repo interpreter-egg](https://github.com/ULL-ESIT-PL-1617/interpreter-egg)
* [NodeJS Readline gist](https://gist.github.com/crguezl/430642e29a2b9293317320d0d1759387)
* En el repo [ULL-ESIT-PL-1617/interpreter-egg](https://github.com/ULL-ESIT-PL-1617/interpreter-egg) se muestra como hacer un bucle REPL
* [XRegExp](http://xregexp.com/)
* Tests. Mocking and Stubbing
    * [Sinon API](http://sinonjs.org/releases/v1.17.7/)
    * [Side effects of stubbing console in tests](https://gyandeeps.com/console-stubbing/)


