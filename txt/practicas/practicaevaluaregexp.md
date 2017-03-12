## Práctica: Evaluar Manejo de Expresiones Regulares

### Aceptar Tarea

* [Aceptar asignación de la tarea]()

### Forma de trabajo

* Use su portátil o su cuenta en c9 para llevar a cabo los objetivos planteados.
* Esta práctica se divide en objetivos o hitos:  indique al profesor  cuando ha terminado y suba los enlaces a los repos y despliegues.
* Escriba un  programa NodeJS por ejercicio 
  - En cada programa pruebe su `regexp` con una variedad de cadenas y vuelque 

### Hitos

1. Use el repo de GitHub dado por la asignación de esta tarea 
2.  Escriba una expresión regular que reconozca las cadenas de doble
    comillas. Debe permitir la presencia de comillas y caracteres
    escapados. Pruebe con `'"hello \"world\" and ... "'` 
3. Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo `-2.3e-1`, `-3e2`, `23`, `3.2`)
4.  Escriba un reemplazamiento que cambie todos los fracciones de números `num1/num2`a sus inversos `num2/num1`
5. Escriba una expresión regular que case con los números no primos expresados en unario. Pruebe con `1111`, `111`, `111111`, `1111111`, ...
6.  Se quiere poner un espacio en blanco después de la aparición de cada coma:

        > x = "a,b,c,1,2,d, e,f"
        'a,b,c,1,2,d, e,f'
        > x.replace(/,/g,", ")
        'a, b, c, 1, 2, d,  e, f'

  Se pide que si hay ya un espacio después de la coma, no se duplique.
7. Se pide una expresión regular que case con expresiones del tipo ìdentifier = number`y retorne con cada paréntesis el identificador y el número. Pruebe con "h     = 4", "  temp = 5.6", "  x23= -2.3e1"
8. Escriba una expresión regular que case con los comentarios JavaScript (`'/* comentario */'` ). 

### Recursos

* [Apuntes: Expresiones Regulares](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/regexp/)

