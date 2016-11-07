## Práctica: Passport y LocalStrategy

<!--sec data-title="Descripción" data-id="sectiondescripcion" data-show=true ces-->
### Objetivo:

* El servidor proveído por el plugin (sea `iaas`o `heroku`) deberá autenticar al lector
del libro  usando `LocalStrategy`. 
  - Se supone que se guarda la información sobre los usuarios `{login, name, password (encrypted)}` que pueden acceder al libro en un fichero JSON.
  - Añada una ruta al servidor `/login/register` para que el usuario pueda registrarse. En esta ruta se despliega una vista con un formulario que permite al lector registrarse
  - En el caso de Heroku la volatilidad de la máquina virtual hace que esta solución tenga problemas. Se pueden hacer los cambios permanentes asegurandose que los cambios son añadidos y empujados al repo de Heroku o mas general, guardándo el fichero en algún repo privado externo 
  - El uso de la `LocalStrategy` para autenticación debería ser opcional

<!-- endsec -->

<!--sec data-title="Ejemplos y Referencias" data-id="sectionejemplos" data-show=true ces-->

### Ejemplos

* [Express 4.x app using Passport for authentication with username and password](https://github.com/ULL-ESIT-SYTW-1617/express-4.x-local-example)

### Referencias

* [Authentication: OAuth y Passport](../apuntes/authentication/README.md)
* [passport-local](https://github.com/jaredhanson/passport-local) en GitHub
* [credential npm module: Easy password hashing and verification in Node. Protects against brute force, rainbow tables, and timing attacks.](https://www.npmjs.com/package/credential)
* [bcrypt: A bcrypt library for NodeJS.](https://www.npmjs.com/package/bcrypt)
* [inquirer](https://www.npmjs.com/package/inquirer): Inquirer.js strives to be an easily embeddable and beautiful command line interface for Node.js (and perhaps the "CLI Xanadu").
  - [Ejemplos](https://github.com/SBoudrias/Inquirer.js/tree/master/examples)
  - [Ejemplo de Password](https://github.com/SBoudrias/Inquirer.js/blob/master/examples/password.js)
* [read: npm module para leer passwords](https://www.npmjs.com/package/read)

<!-- endsec -->
