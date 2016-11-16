## Sequelize


Object-relational mapping (ORM) in computer science is a programming
technique that makes an object out of relational table structure and vice versa,
converting data between incompatible type systems.

Sequelize is a promise-based ORM for Node.js. 
It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL.

* [Object-relational mapping](https://en.wikipedia.org/wiki/Object-relational_mapping)


### [Ejemplo de uso combinado de Express y Sequelize](https://github.com/SYTW/express-example)

En este ejemplo se muestra una aplicación express que permite la creación/destrucción de usuarios y tareas para los mismos
usando [sqlite](http://blog.modulus.io/nodejs-and-sqlite). Es un fork de 
[sequelize/express-example](https://github.com/sequelize/express-example)

* [Express generator](https://expressjs.com/en/starter/generator.html)
* [Sequelize](http://docs.sequelizejs.com/en/latest/docs/getting-started/)
  * [GitHub  repo con ejemplo simple de uso de Sequelize](https://github.com/SYTW/sequelize-getting-started)
* [sequelize-cli](https://github.com/sequelize/cli)
  - [Sequelize migrations tutorial](http://gregtrowbridge.com/getting-started-with-sequelize-and-the-sequelize-cli/)

```bash
sequelize  init                   Initializes the project. [init:config, init:migrations, init:seeders, init:models]
sequelize  init:config            Initializes the configuration.
sequelize  init:migrations        Initializes the migrations.
sequelize  init:models            Initializes the models.
sequelize  init:seeders           Initializes the seeders.
```

```bash
~/src/javascript/learning/sequelize/exp-exa]$ tree -I node_modules
.
├── app.js
├── bin
│   └── www
├── config
│   └── config.json
├── migrations
├── models
│   └── index.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
├── seeders
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade

11 directories, 11 files
```

```bash
[~/src/javascript/learning/sequelize/exp-exa]$ node_modules/sequelize-cli/bin/sequelize init

Sequelize [Node: 4.5.0, CLI: 2.4.0, ORM: 3.25.1]

Loaded configuration file "config/config.json".
Using environment "development".
The file config/config.json already exists. Run "sequelize init --force" to overwrite it.
```

```
tree -I node_modules
.
├── app.js
├── bin
│   └── www
├── config
│   └── config.json
├── migrations
├── models
│   └── index.js
├── npm-debug.log
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
├── seeders
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade

11 directories, 12 files
```

```javascript
[~/src/javascript/learning/sequelize/exp-exa]$  cat config/config.json 
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

```bash
~/src/javascript/learning/sequelize/exp-exa]$ node_modules/sequelize-cli/bin/sequelize model:create --name User --attributes username:string

Sequelize [Node: 4.5.0, CLI: 2.4.0, ORM: 3.25.1]

Loaded configuration file "config/config.json".
Using environment "development".
```

```javascript
[~/src/javascript/learning/sequelize/exp-exa]$ cat models/user.js 
'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
```

```
[~/src/javascript/learning/sequelize/exp-exa]$ node_modules/.bin/sequelize model:create --name Task --attributes title:string

Sequelize [Node: 4.5.0, CLI: 2.4.0, ORM: 3.25.1]

Loaded configuration file "config/config.json".
Using environment "development".
```

```javascript
[~/src/javascript/learning/sequelize/exp-exa]$ cat models/task.js 
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Task;
};
```

```javascript
[~/src/javascript/learning/sequelize/exp-exa]$ cat migrations/20161116212217-create-user.js 
'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};
```

### Material del Curso de MiriadaX "Desarrollo de servicios en la nube con HTML5, Javascript y node.js"
  * La Base de Datos, Sequelize, Heroku, Autoload
    * [Trasparencias: La Base de Datos, Sequelize, Heroku, Autoload](https://github.com/crguezl/miriada-upm-dsnh5jsnode/blob/master/traspas/transp_modulo7.pdf)
    * [Curso MOOC Node.JS. Quiz 7A. La base de datos](https://youtu.be/l5nviUiDRDI) YouTube
    * [Curso MOOC Node.JS. Quiz 7b: sequelize.js y SQLite](https://youtu.be/mU_GDocS_Ys) YouTube
    * [Curso MOOC Node.JS. Quiz 8: Despliegue DB en Heroku](https://youtu.be/_jzjaraiE3A) YouTube
    * [Curso MOOC Node.JS. Quiz 9: Lista de preguntas](https://youtu.be/zGT8rVBe2hY) YouTube
    * [Curso MOOC Node.JS. Quiz 10: Autoload](https://youtu.be/pSDk_l_jhs0) YouTube


### Video Tutorial por Code Cast

1. [Sequelize: An Introduction](https://youtu.be/qsDvJrGMSUY?list=PL5ze0DjYv5DYBDfl0vF_VRxEu8JdTIHlR)
2. [Sequelize: Getting Started](https://youtu.be/6NKNfXtKk0c?list=PL5ze0DjYv5DYBDfl0vF_VRxEu8JdTIHlR)
3. [Sequelize: Defining Models](https://youtu.be/8W_dd3uA1Iw?list=PL5ze0DjYv5DYBDfl0vF_VRxEu8JdTIHlR)
4. [Sequelize: Validation](https://youtu.be/Z1O9iddzcXk?list=PL5ze0DjYv5DYBDfl0vF_VRxEu8JdTIHlR)
5. [Sequelize: Hooks](https://youtu.be/pquxHIBx8ks?list=PL5ze0DjYv5DYBDfl0vF_VRxEu8JdTIHlR)
6. [Sequelize: Inserting Data](https://youtu.be/JAld7bV5qV8?list=PL5ze0DjYv5DYBDfl0vF_VRxEu8JdTIHlR)
