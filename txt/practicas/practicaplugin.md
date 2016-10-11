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
Que indica que nuestro usuario quiere que se le provea de tareas `gulp` denominadas `deploy-ull-iaas-es` y `deploy-heroku` que despliegan el libro en los diferentes  sites. Esto supone que existen módulos [npm](https://www.npmjs.com/) con nombres `gitbook-start-plugin-iaas-ull-es`  y `gitbook-start-plugin-heroku`


#### Sugerencias

*  Para implementar la ejecución de la llamada en línea de comandos:
```bash
$ gitbook-start -d ull-iaas-es --d heroku
```
Esto es, deberán existir plugins `gitbook-start-plugin-iaas-ull-es` y
`gitbook-start-plugin-heroku` que exportan un objeto que dispone de un
método `deploy()`, de manera que si desde un código principal se llama a un código como este:
```bash
var iaas = require("book-start-plugin-iaas-ull-es");
var result = iaas.deploy();
```
se despliega el libro en la máquina virtual de `iaas.ull.es`
* Observe que hay dos fases en este proceso:
  1. cuando se construye la estructura inicial por `gitbook-start` la jerarquía de directorios conteniendo los scripts y ficheros markdown para el libro y
  2. cuando el autor escribe y despliega el libro llamando a `gulp`. Las llamadas a `gulp deploy-...` ocurren en esta segunda fase. El despliegue hace un `require` de los plugins que implementan los despliegues solicitados.

* Es conveniente que el método `deploy()` proveído por el plugin retorne un objeto describiendo los resultados del despliegue como
  - Salida por `stdout` en la máquina remota
  - Salida por `stderr`en la máquina remota
  - Códigos de error si los hubiera
  - etc. Cualquier información adicional que considere conveniente.

* El método `deploy()` puede obtener información sobre el libro a partir del `package.json` generado. También si lo prefieren pueden pasarle un argumento con la información/estado que hayamos podido recopilar sobre el objeto resultante del `package.json`

* Los plugins deben estar correctamente documentados.
  - Por ejemplo, el plugin del `iaas-ull-es` necesita al menos saber la dirección de la máquina virtual y el camino en dicha máquina hasta el repositorio que contiene el libro
  - Pueden aceptar argumentos adicionales en línea de comandos para esta información

  `$ gitbook-start -d iaas-ull-es, --iaas-IP 127.0.25.5 --iaas-path src/chuchu`
  - O bien simplemente que el usuario las añada en el `package.json`
  En cualquier caso debe aparecer en la documentación lo que hay que hacer

### Referencias

* [Dependency Injection Pattern](../apuntes/patterns/dependencyinjection.md)
* [Inversion of Control Pattern](../apuntes/patterns/inversionofcontrol.md)
* [Strategy Pattern](../apuntes/patterns/strategypattern.md)
* [Creación de Paquetes y Módulos en NodeJS](../apuntes/nodejspackages.md)
* [Gulp](../apuntes/gulp/README.md)
* [ejs](https://www.npmjs.com/package/ejs)
para la creación de plantillas
* [Paquetes - como `fs` - para el manejo de archivos en Node.JS](../apuntes/fs.md)
