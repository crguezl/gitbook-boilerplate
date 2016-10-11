## Práctica: Nueva funcionalidad para el Paquete NPM: plugins

### Descripción

#### Objetivo

El objetivo de esta práctica  es extender el [package NodeJS  publicado](practicanm.md) en [npm](https://www.npmjs.com) con una nueva funcionalidad
que permita el despliegue en diferentes plataformas via plugins externos.

#### Punto de partida

El paquete se construye a partir de
* El código que haya desarrollado en la [práctica en la que creamos el package NodeJS](practicanm.md).
* El código que haya desarrollado en la [práctica en Despliegues en iaas y heroku](practicaniaas.md).

#### La opción `--deploy`

* Se trata de añadir al ejecutable `gitbook-start` una opción `--deploy` o `-d` que va seguida de un tipo de despliegue:
```bash
$ gitbook-start -d ull-iaas-es --d heroku
```
o bien
```bash
$ gitbook-start -deploy ull-iaas-es --deploy heroku
```
Que indica que nuestro usuario quiere que se le provea de tareas `gulp` denominadas `deploy-ull-iaas-es` y `deploy-heroku` que despliegan el libro en los diferentes  sites.

#### Sugerencias

*  Para implementar la ejecución de la llamada en línea de comandos:
```bash
$ gitbook-start -d ull-iaas-es --d heroku
```
El ejecutable hace un `require` de los plugins que implementan los despliegues solicitados.
Esto es, deberán existir plugins `gitbook-start-plugin-iaas-ull-es` y
`gitbook-start-plugin-heroku` que exportan un objeto que dispone de un
método `deploy()`, de manera que si desde el código principal se llama a un código como este:
```bash
var iaas = require("book-start-plugin-iaas-ull-es");
var result = iaas.deploy(book);
```
despliega el libro en la máquina virtual de `iaas.ull.es`
* El método `deploy()`proveído por el plugin deberá retornar un objeto describiendo los resultados del despliegue como
  - Salida por `stdout` en la máquina remota
  - Salida por `stderr`en la máquina remota
  - Códigos de error si los hubiera
  - etc.
* El método `deploy(book)` recibe un argumento con toda el estado del libro: esto es, la información/estado que hayamos podido recopilar sobre el objeto libro (por ejemplo: autor, email, título, url de github, el directorio a desplegar, etc. en general, con todas las opciones que se pasaron por línea de comandos). Esto es, toda la información que sea necesaria para preparar el código de despliegue

### Referencias

* [Dependency Injection Pattern](../apuntes/patterns/dependencyinjection.md)
* [Inversion of Control Pattern](../apuntes/patterns/inversionofcontrol.md)
* [Strategy Pattern](../apuntes/patterns/strategypattern.md)
* [Creación de Paquetes y Módulos en NodeJS](../apuntes/nodejspackages.md)
* [Gulp](../apuntes/gulp/README.md)
* [ejs](https://www.npmjs.com/package/ejs)
para la creación de plantillas
* [Paquetes - como `fs` - para el manejo de archivos en Node.JS](../apuntes/fs.md)
