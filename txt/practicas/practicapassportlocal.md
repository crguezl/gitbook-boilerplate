## Práctica: Passport y LocalStrategy

<!--sec data-title="Descripción" data-id="sectiondescripcion" data-show=true ces-->
### Objetivo:

* El servidor proveído por el plugin (sea `iaas`o `heroku`) deberá autenticar al lector
del libro  usando `LocalStrategy`. 
  - Se supone que el autor del libro guarda la información sobre los usuarios `{login, name, password}` que pueden acceder al libro en un fichero JSON.
  - Añada una ruta al servidor `/login/setpassword` para que el usuario pueda cambiar la clave. En esta ruta se despliega una vista con un formulario que permite al lector cambiar su clave

<!-- endsec -->

<!--sec data-title="Ejemplos y Referencias" data-id="sectionejemplos" data-show=true ces-->

### Ejemplos

* [Express 4.x app using Passport for authentication with username and password](https://github.com/ULL-ESIT-SYTW-1617/express-4.x-local-example)

### Referencias

* [Authentication: OAuth y Passport](../apuntes/authentication/README.md)
* [credential npm module: Easy password hashing and verification in Node. Protects against brute force, rainbow tables, and timing attacks.](https://www.npmjs.com/package/credential)
* [bcrypt: A bcrypt library for NodeJS.](https://www.npmjs.com/package/bcrypt)
* [read: npm module para leer passwords](https://www.npmjs.com/package/read)

<!-- endsec -->
