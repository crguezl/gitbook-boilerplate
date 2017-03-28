## Práctica: Evaluar Analizador Descendente Predictivo Recursivo

### Aceptar Tarea

* [Aceptar asignación de la tarea]()

### Forma de trabajo

* Use su portátil o su cuenta en c9 para llevar a cabo los objetivos planteados.
* Esta práctica se divide en objetivos o hitos:  indique al profesor  cuando ha terminado y suba los enlaces a los repos y despliegues.

### Descripción

Esta es la gramática para la que tiene que escribir un analizador recursivo descendente predictivo:

1.  Σ = { ADDOP, MULOP, '(', ')', NUM },
2.  V = {  expression, term, factor }
3.  Productions:
    2.  expression → term ( ADDOP term)* 
    3.  term → factor (MULOP factor)*
    4.  factor → '(' expression ')' | NUM

Donde:

            ADDOP = /[+-]/
            MULOP = /[*/]
            ID = /[a-z_]\w*/i
            NUM = /\d+/

### Hitos

1. Use el repo de GitHub dado por la asignación de esta tarea 
2. Escriba un analizador sintáctico para la gramática dada
3. Evalúe las expresiones
### Recursos



