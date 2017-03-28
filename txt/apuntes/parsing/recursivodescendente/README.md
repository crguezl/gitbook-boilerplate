## Analizadores Descendentes Recursivos 

### Apuntes sobre Analizadores Descendentes Recursivos 

* [Apuntes de PL: Analizadores Descendentes Predictivos en JavaScript](http://crguezl.github.io/pl-html/node20.html)
  - [Análisis Sintáctico Predictivo Recursivo](http://crguezl.github.io/pl-html/node22.html)
* [repo prdcalc](https://github.com/crguezl/prdcalc)
  - Este es un repo en con una aplicación web en Ruby Sinatra con un parser RDP escrito en CoffeeScript
  - [Fichero `main.coffee` del repo prdcalc](https://github.com/crguezl/prdcalc/blob/master/views/main.coffee)
  - [Fichero `main.js` del repo prdcalc](https://github.com/crguezl/prdcalc/blob/master/views/main.js)
  - [Despliegue en Heroku](https://predictiveparser.herokuapp.com/) (Puede estar caído o eliminado)

#### Repo con la solución de la *Práctica: Analizador Descendente Predictivo Recursivo*

Recuerde que una gramática $G$ es una cuaterna $G =(\Sigma,V,P,S)$.

1.  $\Sigma$ es el conjunto de terminales.
2.  $V$ es un conjunto (disjunto de $\Sigma$) que se denomina
    conjunto de *variables sintácticas* o *categorías gramáticales*,
3.  $P$ es un conjunto de pares de $V \times (V \cup \Sigma)\^\*$. En vez de escribir un par usando la notación $(A, \alpha) \in P$ se escribe $A \rightarrow \alpha$. Un elemento de $P$ se denomina producción.
4.  Por último, $S$ es un símbolo del conjunto $V$ que se denomina
    símbolo de arranque.

Dada una gramática $G=(\Sigma,V,P,S)$ se denota por $L(G)$ o lenguaje
generado por $G$ al lenguaje: 

       $L(G) = \{ x \in \Sigma^* : S \stackrel{*}{\Longrightarrow} x \}$

Esto es, el lenguaje generado por la gramática $G$ esta
formado por las cadenas de terminales que pueden ser <i>derivados</i> 
desde el símbolo de arranque.

Esta es la gramática para nuestra práctica:

1.  $\Sigma = \{ ; =, ID, P, +, \*, (, ), NUM \}$,
2.  $V = \{ statements, statement, expression, term, factor \}$
3.  Productions:
    1.  statements $ \rightarrow$ statement ';' statements $\vert$
        statement
    2.  statement $ \rightarrow$ ID '=' expression $\vert$ P
        expression
    3.  expression $ \rightarrow$ term '+' expression $\vert$ term
    4.  term $ \rightarrow$ factor '\*' term $\vert$ factor
    5.  factor $ \rightarrow$ '(' expression ')' $\vert$ ID $
        \vert$ NUM

4.  Start symbol: $statements$

* [Descripción de la *Práctica: Analizador Descendente Predictivo Recursivo*](http://crguezl.github.io/pl-html/node26.html)
* [Repo parser-pdr-example](https://github.com/ULL-ESIT-PL-1617/parser-pdr-example)
  - [despliegue en Heroku](https://pdr-example.herokuapp.com/) (Puede estar caído o eliminado)

### Tutoriales

* [Wikipedia: Recursive descent parser](https://en.wikipedia.org/wiki/Recursive_descent_parser)
* [Tutorialspoint: Compiler Design - Top-Down Parser](https://www.tutorialspoint.com/compiler_design/compiler_design_top_down_parser.htm)

### Eloquent JS: Chapter 11. Project: A Programming Language

* [Eloquent JS: Chapter 11. Project: A Programming Language](http://eloquentjavascript.net/11_language.html)
* [El lenguaje egg: repo en GitHub](https://github.com/ULL-ESIT-PL-1617/egg)
* [Repo interpreter-egg](https://github.com/ULL-ESIT-PL-1617/interpreter-egg)
