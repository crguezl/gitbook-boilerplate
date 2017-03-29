## Preguntas de Repaso de Expresiones Regulares


1.  Escriba una expresión JavaScript que permita reemplazar todas las
    apariciones de palabras consecutivas repetidas (como `hello hello`)
    por una sóla aparición de la misma

2.  ¿Cual es la salida?

        > "bb".match(/b|bb/)

        > "bb".match(/bb|b/)

    Justifique su respuesta.

3.  El siguiente fragmento de código tiene por objetivo escapar las
    entidades HTML para que no sean intérpretadas como código HTML.
    Rellene las partes que faltan.


```javascript
var entityMap = {
    "&": "&___;",
    "<": "&__;",
    ">": "&__;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

function escapeHtml(string) {
  return String(string).replace(/_________/g, function (s) {
    return ____________;
  });
```
