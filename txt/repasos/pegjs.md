### PEGJS

* ¿Que opción debemos pasar a `pegjs` para que admita que las acciones semánticas se especifiquen en `CoffeeScript`?
* Escriba en PEGJS un traductor de expresiones aritméticas a postfijo.  Una expresión como `a = 4*b+c` se debe traducir por `4 b * c + &a = `

* Escriba un PEGJS que traduzca secuencias de expresiones aritméticas separadas por puntos y comas 
a JavaScript.  Una secuencia de expresiones como 
```
b = 5;
c = 2;
a = 4*b+c;
b+c+a 
```
se debería traducir como:
```
var b = 5;
var c = 2;
var a = 4*b+c;
b+c+a
```
* Escriba un peg que reconozca las sentencias `if then ...` e `if then ... else ...` asociando cada `else` con el `if` mas cercano
```
if a then if b then o else o
```
* Escriba un peg que reconozca los comentarios Pascal anidados
* Escriba un peg que reconozca el lenguaje
$$ \{ a^nb^nc^n / n \ge 1 \} $$
* Indique como es la estructura de tabla de símbolos de un compilador y como se construye.
Explique como el anidamiento de las tablas de símbolos refleja el ámbito de las variables
* Indique como se hace el análisis de tipos en un compilador mediante la decoración del árbol con el atributo `tipo`. Señale las diferentes formas en la que se pueden resolver las cincompatibilidades de tipos

