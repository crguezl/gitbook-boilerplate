## Práctica: Autenticación OAuth con Passport

<!--sec data-title="Descripción" data-id="sectiondescripcion" data-show=true ces-->
### Objetivo:

El servidor proveído por el plugin (sea `iaas`o `heroku`) deberá autenticar que el lector
del libro  pertenece  a una organización dada de GitHub (por ejemplo [ULL-ESIT-SYTW-1617](https://github.com/ULL-ESIT-SYTW-1617)). Si es el caso que pertenece podrá seguir leyendo el libro, sino será redirigido a la ruta de autenticación


* Puede partir de los repos de los plugins que ha usado en prácticas anteriores o crear unos nuevos


<!-- endsec -->

<!--sec data-title="Ejemplos y Referencias" data-id="sectionreferencias" data-show=true ces-->

### Referencias

* Sección [OAuth y Passport](../apuntes/authentication/README.md) en los apuntes
* Sección [Rest y GitHub API](../apuntes/rest/README.md) en los apuntes

### Ejemplos y Ayudas

* [GitHub repo demonstrating how to use Express 4.x and Passport to authenticate users using GitHub](https://github.com/ULL-ESIT-SYTW-1617/express-4.x-github-example)
* [GitHub repo demonstrating how to use Express 4.x and Passport to authenticate users using Facebook](https://github.com/ULL-ESIT-DSI-1617/express-4.x-facebook-example)
* [Check membership](https://developer.github.com/v3/orgs/members/#check-membership): Check if a user is, publicly or privately, a member of the GitHub organization.
  ```
   GET /orgs/:org/members/:username
  ```
<!-- endsec -->
