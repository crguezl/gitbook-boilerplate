### CommonJS Modules. Importación y Exportación

* [NODE.JS module patterns using simple examples](https://darrenderidder.github.io/talks/ModulePatterns). Trasparencias. Muestra ejemplos/patrones de exportación-importación
* [Authoring CommonJS modules](http://know.cujojs.com/tutorials/modules/authoring-cjs-modules)

### Package.json

* [Package.json documentation en npm site](https://docs.npmjs.com/files/package.json)

### El comando npm

* [A Beginner’s Guide to npm — the Node Package Manager](https://www.sitepoint.com/beginners-guide-node-package-manager/)
* [npm](npm.html)

### Ejercicio: Darse de alta en NPM

Para comenzar, crearemos una cuenta de usuario en el repositorio de NPM mediante la cual publicar nuestros propios paquetes:

1. Abrir el navegador.
2. Ir a [https://npmjs.org](https://npmjs.org)
3. Hacer clic en el enlace [sign up](https://www.npmjs.com/login)
4. Rellenar el formulario de alta:
  - ![Formulario para crear la cuenta en npmjs.org](crearcuentanpm.png)
5. Aceptar los términos de licencia.
6. Hacer clic en el botón Create an Account para crear la cuenta.
7. Una vez creada la cuenta, hay que abrir sesión con el servidor NPM para poder publicar paquetes en él. Abrir una consola.
8. Conectar al repositorio: 
   1. `$ npm login`
   2. Rellene los datos que le solicita.
   3. Consultar la cuenta con la que tenemos abierta la sesión:
   ```
    $ npm whoami
   ```
### Scoped Packages

> There are only two hard things in Computer Science: cache invalidation and naming things.

> —Phil Karlton

 Naming things is hard. It’s even harder when there are tens of thousands of other people who want to use the same names that you do. With hundred of thousands of modules on npm, it has been getting hard to find a name that isn’t taken.

Naming things just got a little bit easier for npm users with the introduction of scopes. 

What are scopes?: Scopes are like namespaces for npm packages. Each npm user has their own scope.

```
@username/project-name
```
This means that you don’t have to worry about someone else taking your package name. Only you can add packages in your scope.

Scoped modules also make it possible to put your private code on npm when you sign up for [private modules](https://www.npmjs.com/features). With private modules, you have control over who can see and collaborate on any of the modules in your scope.


Public scoped packages are free. To create a scoped package, all you need to do is add your scope to the front of the name property in `package.json` and run `npm` with the access option:

```
npm publish --access=public
```

* [Working with scoped packages](https://docs.npmjs.com/getting-started/scoped-packages)
* [npm-scope manual: Scoped packages](https://docs.npmjs.com/misc/scope#publishing-public-scoped-packages-to-the-public-npm-registry)

### Semantic versioning and npm

* [Semantic versioning and npm](https://docs.npmjs.com/getting-started/semantic-versioning)

### Creación de Paquetes y Módulos en NodeJS

* [Creating and publishing a node.js module](https://quickleft.com/blog/creating-and-publishing-a-node-js-module/)
  -  For example, you can install packages directly from Github, and even specify a tag, sha, or branch if you want.

          npm install git://github.com/brentertz/scapegoat.git
          npm install git://github.com/brentertz/scapegoat.git#0.1.0

    must be https
  - Publicación con ámbito en una organización:

          [/tmp/scapegoat(master)]$ npm publish --access public
          + @ull-esit-dsi-1617/scapegoat@1.0.2

* [Publishing npm packages tutorial](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Creating NodeJS modules](https://youtu.be/3I78ELjTzlQ)
  - {%youtube%}https://youtu.be/3I78ELjTzlQ{%endyoutube%}
* [Publishing npm Packages](https://youtu.be/BkotrAFtBM0)
  - {% youtube  %}https://youtu.be/BkotrAFtBM0{% endyoutube %}
* [Node js Tutorial: How to create NPM package?](https://youtu.be/sELoj6e1ffM)
  - {% youtube %}https://youtu.be/sELoj6e1ffM{% endyoutube %}
* [Your first Node.js package  por Elijah Insua](https://nodesource.com/blog/your-first-nodejs-package/)
* [Creating and Publishing a Node.js Module](https://quickleft.com/blog/creating-and-publishing-a-node-js-module/) por Brent Ertz
* [npm documentation: Creating Node.js modules](https://docs.npmjs.com/getting-started/creating-node-modules)
* [Interactive release tool for Git repositories. Options: run build command first, release to distribution repository (or branch), create GitHub release, publish to npm](https://github.com/webpro/release-it)

### npm Organizations /npm Organizaciones

Members of an Organization are immediately added to a Developers team that automatically has Read/Write access to all packages published under an Organization scope

* [Publishing an Org Scoped Package](https://www.npmjs.com/docs/orgs/publishing-an-org-scoped-package.html)
  - To create a new scoped package for your Organization scope, create a directory with the name of the package you would like to create. Navigate into that directory and use this command:

                    npm init --scope=<org_scope>

  - By default all scoped packages are published privately. To publish a scoped package publicly, pass the access flag with the value public:

                    npm publish --access public

* [The developers team](https://www.npmjs.com/docs/orgs/the-developers-team.html)
  - The Developers Team is a special Team that is automatically created when you create an Organization. 
  - Members are automatically added to the Developers team:
    - The user who created the Organization is added to this team automatically.
    - Any member added to the Organization is also added to this team automatically.
    - If an Owner adds a new Member to an Organization and does not want that Member to be on the Developers team, an Owner can remove them. ([Learn more about managing teams](https://www.npmjs.com/docs/orgs/managing-teams.html)).
* [npm-team: Manage organization teams and team memberships](https://docs.npmjs.com/cli/team)
* [npm-access: Set access level on published packages](https://docs.npmjs.com/cli/access)

### Creación de Paquetes en el Cliente

* [bower](https://bower.io/)
* [webpack](http://webpack.github.io/docs/motivation.html)
  - [Webpack Tutorial - Replace Gulp/Grunt plugins with a single tool. LearnCode.academy](https://youtu.be/9kJVYpOqcVU) YouTube
* [yarn](https://code.facebook.com/posts/1840075619545360)
* [browserify](http://browserify.org/)
