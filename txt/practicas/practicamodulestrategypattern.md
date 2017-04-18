## Práctica: Creación de Paquetes NPM y Strategy Pattern

### Descripción

Uno de los objetivos de esta práctica  es aprender a crear packages NodeJS y publicarlos en [npm](https://www.npmjs.com). El paquete se construye a partir de
el código que se desarrolló en la [práctica evaluar strategy pattern](practicaevaluastrategypattern.md).

* Se trata de construir un primer módulo npm `ull-shape` con el código de la clase `Shape`
* Se construirá un módulo npm `ull-shape-triangle` que contenga la clases `Triangle`
* En general, para cada tipo particular de forma geométrica `x` se construirá un módulo npm `ull-shape-x` que contenga la clase `X`
* Cada miembro del equipo implantará el solo al menos uno de los plugin `ull-shape-x`: si hay tres miembros cada uno implantará una forma distinta
* Como deberán publicar en el site de [npm](https://www.npmjs.com) los módulos asegúrense de ponerle a sus paquetes un nombre único que no coincida con el de los otros alumnos, por ejemplo `ull-shape-team-name` y `ull-shape-x-team-name`
* Añada a los otros miembros del equipo como `contributors`. Véase [las seccion people fields de package.json](https://docs.npmjs.com/files/package.json#people-fields-author-contributors)
* Escriba documentación para cada uno de los módulos (Véase [documentation.js](http://documentation.js.org/), [jsdoc](https://www.npmjs.com/package/jsdoc), [docco](http://jashkenas.github.io/docco/))
* Añada pruebas para cada uno de los módulos
* Integre usando Travis
* En esta tarea deberá trabajar con varios repos, uno 

### Referencias

* Véase la sección
[Creación de Paquetes y Módulos en NodeJS](../apuntes/nodejspackages.md)
* Documentación:  [documentation.js](http://documentation.js.org/), [jsdoc](https://www.npmjs.com/package/jsdoc), [docco](http://jashkenas.github.io/docco/))
* Véase la sección [Gulp](../apuntes/gulp/README.md)
* [Apuntes: Code Smells](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/codesmell.html)
* [Principios de Diseño](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/designprinciples.html)
* [Patrones de Diseño](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/)
* [ECMAScript 6 Power Tutorial: Class and Inheritance](https://code.tutsplus.com/tutorials/ecmascript-6-power-tutorial-class-and-inheritance--cms-24117)
* [Object-Oriented JavaScript — A Deep Dive into ES6 Classes](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)
* [Strategy Pattern](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/strategypattern.html)
* [Apuntes: Pruebas. Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
* [Apuntes: Pruebas. Should](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html#shouldl)
* [Apuntes: Integración Contínua. Travis](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/travis.html)


