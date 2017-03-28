## Práctica: Evaluar Analizador Descendente Predictivo Recursivo

### Aceptar Tarea

* [Aceptar asignación de la tarea]()

### Forma de trabajo

* Use su portátil o su cuenta en c9 para llevar a cabo los objetivos planteados.
* Esta práctica se divide en objetivos o hitos:  indique al profesor  cuando ha terminado y suba los enlaces a los repos y despliegues.

### Descripción

Esta es la gramática para nuestra práctica:

1.  $$\Sigma = \{ ; =, ID, P, +, \*, (, ), NUM \}$$,
2.  $$V = \{ statements, statement, expression, term, factor \}$$
3.  Productions:
    1.  statement $$ \rightarrow$$ ID '=' expression $$\vert$$ P
        expression
    2.  expression $$ \rightarrow$$ term ( ADDOP term)* 
    3.  term $$ \rightarrow$$ factor (MULOP factor)*
    4.  factor $$ \rightarrow$$ '(' expression ')' $$\vert$$ ID $$
        \vert$$ NUM

### Hitos

1. Use el repo de GitHub dado por la asignación de esta tarea 

### Recursos



