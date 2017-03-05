<!-- toc -->

# <div class="ull">Repasos, Ejercicios y Preguntas</div>

!INCLUDE "jquery.md"

!INCLUDE "underscore.md"

!INCLUDE "localstorage.md"

!INCLUDE "heroku.md"

!INCLUDE "ssh.md"

!INCLUDE "ecma6.md"

!INCLUDE "mongo.md"

!INCLUDE "ejs.md"

!INCLUDE "pug.md"

!INCLUDE "sass.md"

!INCLUDE "regexp.md"

## Preguntas de Repaso de JSON

1.  ¿Como se llama el método que permite obtener una representación como
    cadena de un objeto? ¿Que parámetros espera? ¿Como afectan dichos
    parámetros?

## Preguntas de Repaso de OOP

1.  Escriba un código JavaScript que defina una clase `Persona` con
    atributos `nombre` y `apellidos` y que disponga de un método
    `saluda`.

2.  Escriba un código ECMA6 que defina una clase `Persona` con atributos
    `nombre` y `apellidos` y que disponga de un método `saluda`.

## Preguntas de Repaso de Code Smelling

1.  Defina el término <span>*code smelling*</span>

2.  ¿Que diferencia hay entre un <span>*code smell*</span> y un
    <span>*bug*</span>?

3.  Explique el code smell <span>*Duplicated Code*</span>

4.  Explique el Switch smell

## Preguntas de Repaso de HTML

1.  ¿Cual debe ser el valor del atributo `rel` para usar la imagen como
    favicon?

        <link rel="_____________" href="etsiiull.png" type="image/x-icon">

!INCLUDE "css.md"

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

!INCLUDE "gulp.md"

!INCLUDE "npm.md"


## Preguntas de Repaso de Karma

1.  Explique como funciona Karma

2.  ¿Con que comando puedo crear el fichero de configuración de Karma?

3.  ¿Que debemos poner en la entrada `frameworks` de karma para el
    ejemplo de la temperatura?

            frameworks: ['_____'],

4.  La librería/plugin `karma-mocha` provee el adapter de Karma para
    Mocha. ¿Como le pasamos opciones para configurar Mocha desde Karma?
    Rellene las partes que faltan:


```javascript
client: {
  args: ['--grep', 'pattern'], // solo pruebas que casan con pattern
  mocha: {
    __: '___'
  }
},
```


5.  Explique que debe ponerse (y que no) en la sección `files` del
    fichero de configuración de Karma ¿Donde son cargados dichos
    ficheros?:

            files: [ ... ],

6.  Los preprocesadores en Karma nos permiten procesar los ficheros en
    `files` antes de que sean cargados en el navegador.

```javascript
          preprocessors = {
            '**/*.coffee': 'coffee',
            '**/*.html': 'html2js'
          };
```

    ¿Que hace el preprocesador `html2js`? ¿Que hace el preprocesador
    `coffee`?

7.  Complete la función `setup` de las pruebas de la práctica de la
    temperatura con Mocha, Chai y Karma:


```javascript
setup(function(){
  if (typeof ________ !== 'undefined') {
      document.body.innerHTML = ________['tests/test.html'];
      original = document.______________('original');
      converted = document.______________('converted');
  }
});
```


¿Como se llama la variable en la que se guardan los HTML de los
ficheros cargados en los navegadores?

8.  ¿Que es PhantomJS? ¿Como funciona?

## Preguntas de Repaso de Ajax


1.  What method of the `req` object returns a boolean value that is
    `true` if the request’s `X-Requested-With` header field is
    `XMLHttpRequest`, indicating the intent to retrieve data from the
    URL without having to do a full page refresh?.

    Fill the gap:

```javascript
        app.get('/chuchu', function (req, res) {
          var isAjaxRequest = req.______________;
          ...
        }
```

2.  La siguiente vista incluye el código JavaScript de un request Ajax:


```javascript
        <!doctype html>
        <html>
          <head>
            <title><%- title %></title>
          </head>
          <body>
            <h1><%- title  %></h1>
            <ul>
              <li><a href="http://jquery.com/" id="jq">jQuery</a>
              <li><a href="/chuchu">Visit chuchu!</a>
            </ul>
            <div class="result"></div>
            <script src="https://code.jquery.com/jquery-2.1.3.js"></script>
            <script>
              $( document ).ready(function() {
                  $( "#jq" ).click(function( event ) {
                      event.preventDefault();
                      $.get( "/chuchu", {nombres: ["juan", "pedro"]}, function( data ) {
                        $( ".result" ).html( data["answer"]);
                        console.log(data);
                      }, 'json');
                  });
              });
            </script>
          </body>
        </html>
```

    Supongamos que el servidor express.js responde al request con:

```javascript
        res.send('{"answer": "Server responds: hello world!"}')
```

    1.  ¿Como podemos acceder en el servidor express.js al objeto
        `{nombres: ["juan", "pedro"]` enviado desde el cliente como
        segundo argumento de `$.get`?

    2.  ¿Cuando se ejecuta la callback asociada con la llamada a
        `$.get`?

    3.  ¿Que contendrá el parámetro `data` pasado a la callback?

    4.  ¿Que hace el cuarto parámetro de `$.get`?

3.  En el código de la práctica de Ajax CSV cuando se hacía click en uno
    de los botones con los nombres de los ficheros de ejemplo se
    ejecutaba en el cliente la función `dump`:

```javascript
        const dump = (fileName) => {
          $.get(fileName,function (data){
            $("#original").val(data);
          });
        };
```

    ¿En que ruta/middleware del servidor express son servidos estos
    requests?. Explique el funcionamiento de este código.

!INCLUDE "rest.md"

## Preguntas de HTTPS
!INCLUDE "https.md"

## Preguntas de Passport
!INCLUDE "passport.md"

## Preguntas de Rutas en ExpressJS
!INCLUDE "expressroutes.md"

## Preguntas de MarkDown
!INCLUDE "markdown.md"

## Preguntas de GitBook
!INCLUDE "gitbook.md"
