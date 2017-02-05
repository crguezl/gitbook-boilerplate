## Práctica:Primeros pasos en NodeJS  

Reescriba los apuntes realizados en la [Práctica: Tareas Iniciales](practicas/practicatareasiniciales.md)
para seguir una estructura de directorios diferente, simplificando el despliegue en `gh-pages`.

Para ello vamos a partir de un fork del repo [enten/gitbook-boilerplate](https://github.com/enten/gitbook-boilerplate) que ofrece una estructura inicial para la creación de un libro y su despliegue en `gh-pages`.
  * En el directorio `scripts/` se encuentran scripts shell para la construcción y despliegue del libro
  * Este repo utiliza el módulo [gh-pages](https://www.npmjs.com/package/gh-pages) para automatizar el despliegue en `gh-pages` del libro
  * Reescriba los scripts shell en el directorio `scripts/` para la  construcción y despliegue del libro en NodeJS
  * Añada un [`Gulpfile`](https://github.com/gulpjs/gulp) con tareas `build`, `deploy`, `serve`, etc. que automaticen la construcción y despliegue del libro en los diferentes sites
