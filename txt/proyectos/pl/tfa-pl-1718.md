<!-- toc -->
## Trabajo Fin de Asignatura PL 17/18

### Objetivo

La idea general es extender el lenguaje [Egg](https://github.com/ULL-ESIT-PL-1617/egg)
o el lenguaje [Calc](https://crguezl.github.io/ull-esit-1617/_book/practicas/practica-calc-egg.html)

* Especial interés puede ser en extenderlo  como DSL con funcionalidades para 
facilitar la resolución de problemas de un contexto específico que sea del interés del alumno
* En cada caso busque en npm librerías que le den apoyo para que la tarea resulte mas fácil


#### Ejemplo: Egg para facilitar el manejo de GitHub

La idea general es extender el lenguaje [Egg](https://github.com/ULL-ESIT-PL-1718/egg) con funcionalidades para la 
manipulación de GitHub

```
do {
  :=(pl, org("ULL-ESIT-PL-1718")), # Object describing the org
  :=(peoplePL, people(pl)), # Array of objects with the people in the org
  :=(alus, /alu\d+/.match(peoplePL.names())), # Array of strings 
  print(alus)
}
```

#### Ejemplo: Egg para Calculo Científico

La idea general es extender el lenguaje [Egg](https://github.com/ULL-ESIT-PL-1718/egg) con funcionalidades para el cálculo científico

```
do {
  :=(v1, arr(4, 5, 9)),
  :=(v2, arr(3, 2, 7)), 
  :=(s, +(v1, v2)),
  print(s)
}
```

#### Ejemplo: Egg para Describir Tareas

La idea general es extender el lenguaje [Egg](https://github.com/ULL-ESIT-PL-1718/egg) con funcionalidades para la descripción de tareas,
algo así como un `gulpfile.egg`:

```
do {
  task(compile: sh("gcc hello.c"), depends: "mylib"),
  task(mylib: sh("gcc -c -o mylib.o mylib.c")),
  task(default: "compile")
}
```

