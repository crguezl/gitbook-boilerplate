## Preguntas de Repaso de Expresiones Regulares

1.  Rellene las partes que faltan:


```javascript
> re = /d(b+)(d)/ig
/d(b+)(d)/gi
> z = "dBdxdbbdzdbd"
'dBdxdbbdzdbd'
> result = re.exec(z)
[ ______, _____, ______, index: __, input: 'dBdxdbbdzdbd' ]
> re.lastIndex
______
> result = re.exec(z)
[ ______, _____, ______, index: __, input: 'dBdxdbbdzdbd' ]
> re.lastIndex
______
> result = re.exec(z)
[ ______, _____, ______, index: __, input: 'dBdxdbbdzdbd' ]
> re.lastIndex
______
> result = re.exec(z)
_____
```

2.  Escriba la expresión regular `r` para que produzca el resultado
    final:


```javascript
> x = "hello"
> r = /l(___)/
> z = r.exec(x)
[ 'l', index: 3, input: 'hello' ]
```


3.  Rellene el valor que falta:


```javascript
> z = "dBdDBBD"
> re = /d(b+)(d)/ig
> re.lastIndex = ________
> result = re.exec(z)
[ 'DBBD',
  'BB',
  'D',
  index: 3,
  input: 'dBdDBBD' ]
```

4.  Conteste:

    1.  Explique que hace el siguiente fragmento de código:

            > RegExp.prototype.bexec = function(str) {
            ...   var i = this.lastIndex;
            ...   var m = this.exec(str);
            ...   if (m && m.index == i) return m;
            ...   return null;
            ... }
            [Function]

    2.  Rellene las salidas que faltan:

```javascript
> re = /d(b+)(d)/ig
/d(b+)(d)/gi
> z = "dBdXXXXDBBD"
'dBdXXXXDBBD'
> re.lastIndex = 3
> re.bexec(z)
_____________________________________________________
> re.lastIndex = 7
> re.bexec(z)
_____________________________________________________
```


5.  Escriba una expresión JavaScript que permita reemplazar todas las
    apariciones de palabras consecutivas repetidas (como `hello hello`)
    por una sóla aparición de la misma

6.  ¿Cual es la salida?

        > "bb".match(/b|bb/)

        > "bb".match(/bb|b/)

    Justifique su respuesta.

7.  El siguiente fragmento de código tiene por objetivo escapar las
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
