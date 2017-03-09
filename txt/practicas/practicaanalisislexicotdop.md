## Práctica: Analizador Léxico para Un Subconjunto de JavaScript

Vamos a trabajar a partir de este repo de Douglas Crockford:

-  [https://github.com/douglascrockford/TDOP](https://github.com/douglascrockford/TDOP)
-  Autor: [Douglas Crockford](http://www.crockford.com/), douglas@crockford.com
-  Fecha que figura en el repo: 2010-11-12


### Descripción:

    -   [tdop.html](http://crguezl.github.io/ull-etsii-grado-pl-minijavascript/tdop.html) contains a description of Vaughn Pratt’s Top Down Operator
        Precedence, and describes the parser whose lexer we are going to
        write in this lab. Is a simplified version of JavaScript.
    -   The file `index.html` parses `parse.js` and displays its AST.
    -   The page depends on on `parse.js` and `tokens.js`.
    -   The file `tdop.js` contains the Simplified JavaScript parser.
    -   [tokens.js](https://github.com/douglascrockford/TDOP/blob/master/tokens.js) produces an array of token objects from a string. **This is the file we are going to work in this lab**.

Douglas Crockford escribió su analizador léxico sin usar expresiones
regulares. Eso hace que sea extenso (268 líneas). Su analizador es un
subconjunto de JS que no tiene - entre otras cosas - expresiones
regulares ya que uno de sus objetivos era que el analizador se analizara
a si mismo.

Reescriba el analizador léxico en [tokens.js](https://github.com/douglascrockford/TDOP/blob/master/tokens.js) usando expresiones regulares.

### Requisitos

1.  Evite que se hagan copias de la cadena siendo procesada. Muévase
    dentro de la misma cadena usando `lastIndex`. Parta de la
    solución dada por el profesor en 
    - [https://github.com/crguezl/ull-etsii-grado-pl-minijavascript/blob/gh-pages/tokens.js](https://github.com/crguezl/ull-etsii-grado-pl-minijavascript/blob/gh-pages/tokens.js)
2. Mejore la solución en [ https://github.com/crguezl/ull-etsii-grado-pl-minijavascript/tree/gh-pages]( https://github.com/crguezl/ull-etsii-grado-pl-minijavascript/tree/gh-pages)
3.  Haga el despliegue de su aplicación en Heroku o en la máquina virtual del iaas

### Recursos

1.  Una primera solución de la que puede partir se encuentra en:
    -   [https://github.com/crguezl/ull-etsii-grado-pl-minijavascript/tree/gh-pages](https://github.com/crguezl/ull-etsii-grado-pl-minijavascript/tree/gh-pages) en github.
    -   Veala en funcionamiento en [http://crguezl.github.io/ull-etsii-grado-pl-minijavascript/](http://crguezl.github.io/ull-etsii-grado-pl-minijavascript/)
2.  El método `tokens` original retorna el array de tokens. Puede
    encontrarlo en [https://github.com/crguezl/ull-etsii-grado-pl-minijavascript/blob/gh-pages/tokens.js](https://github.com/crguezl/ull-etsii-grado-pl-minijavascript/blob/gh-pages/tokens.js)

3. Para esta práctica es necesario familiarizarse con la forma en que
    funciona la OOP en JS. Vea este [jsfiddle](http://jsfiddle.net/casiano/Mw9dW/)

4.  ```bash
       [~/srcPLgrado/lexical_analysis_top_down_operator_precedence(gh-pages)]$ pwd -P
       /Users/casiano/local/src/javascript/PLgrado/lexical_analysis_top_down_operator_precedence
    ```


