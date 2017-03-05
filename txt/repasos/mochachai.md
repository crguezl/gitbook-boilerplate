## Preguntas de Repaso de Mocha, Chai

1.  ¿Como creamos el directorio con el esqueleto inicial para las
    pruebas con mocha?
<!-- mocha init test
/mocha\s+init\s+\w+/i
-->
2.  Rellene lo que falta en estas pruebas del código del conversor de temperatura:

```javascript
var assert = chai.______;

suite('temperature', function() {
    test('[1,{a: 2}] == [1,{a: 2}]', function() {
      assert._________([1, {a:2}], [1, {a:2}]);
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert._____(converted.innerHTML, /ERROR/);
    });
});
var assert = chai.assert;
```

<!-- primera: assert, segunda: deepEqual, tercera: match -->

3.  Este es un fichero `test/index.html` apto para ejecutar las pruebas
    con Mocha y Chai en la práctica de la Temperatura. Rellene las
    partes que faltan:


```html
[~/srcPLgrado/temperature(karma)]$ cat tests/index.html
<!DOCTYPE html>
<html>
  <head>
    <title>Mocha</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="mocha.css" />
  </head>
  <body>
    <div id="_____"></div>   <!-- para la salida de las pruebas -->
    <input id="original" placeholder="32F" size="50">
    <span class="output" id="converted"></span>

    <script src="________"></script>
    <script src="________"></script>
    <script src="../temperature.js"></script>
    <script>mocha._____('___')</script>
    <script src="tests.js"></script>

    <script>
      mocha.___();
    </script>
  </body>
</html>
```

4.  Rellene las partes que faltan del fichero con las pruebas TDD en
    Mocha y Chai para la práctica de la temperatura:

```javascript
        [~/srcPLgrado/temperature(karma)]$ cat tests/tests.js
        var assert = ____.assert;

        _____('temperature', function() {

            ____('32F = 0C', function() {
                original.value = "32F";
                calculate();
                assert._________(converted.innerHTML, "0.0 Celsius");
            });
        });
```


5.  ¿Como puedo ejecutar las pruebas escritas usando Mocha y Chai usando
    el comando `npm test`?. (no se asume el uso de Karma en esta
    pregunta) Explique como hacerlo.
