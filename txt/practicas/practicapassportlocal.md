## Práctica: Passport y LocalStrategy

<!--sec data-title="Descripción" data-id="sectiondescripcion" data-show=true ces-->
### Objetivo:

* El servidor proveído por el plugin (sea `iaas`o `heroku`) deberá autenticar al lector
del libro  usando `LocalStrategy`. 
  - El uso de la `LocalStrategy` para autenticación debería ser opcional
  - Se supone que se guarda la información sobre los usuarios `{login, name, password (encrypted)}` que pueden acceder al libro en un fichero JSON.
  - Añada una ruta al servidor `/login/register` para que el usuario pueda registrarse. En esta ruta se despliega una vista con un formulario que permite al lector registrarse
  - En el caso de Heroku la volatilidad de la máquina virtual hace que esta solución tenga problemas. Se pueden hacer los cambios permanentes asegurandose que los cambios son añadidos y empujados al repo de Heroku o mas general, guardándo el fichero en algún repo privado externo 

<!-- endsec -->

<!--sec data-title="Ejemplos y Referencias" data-id="sectionejemplos" data-show=true ces-->

### Ejemplos

* [Express 4.x app using Passport for authentication with username and password](https://github.com/ULL-ESIT-SYTW-1617/express-4.x-local-example)

#### Ejemplo de uso de `inquirer`

```javascript
'use strict';
var inquirer = require('inquirer');

var questions = [
  {
    type: 'input',
    name: 'first_name',
    message: 'What\'s your first name'
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'What\'s your last name',
    default: function () {
      return 'Doe';
    }
  },
  {
    type: 'input',
    name: 'phone',
    message: 'What\'s your phone number',
    validate: function (value) {
      var pass = value.match(/^\d+$/i);
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    }
  }
];

inquirer.prompt(questions).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});
```
Ejemplo de ejecución:
```bash
[~/local/src/javascript/learning/use-credential(master)]$ node input.js 
? What's your first name Casiano
? What's your last name Doe
? What's your phone number 111222
{
  "first_name": "Casiano",
  "last_name": "Doe",
  "phone": "111222"
}
```

#### Ejemplo de uso de `credential` e `inquirer`

```javascript
var inquirer = require('inquirer');
var credential = require('credential'),
  pw = credential(),
  pass = 'chuchu';

pw.hash(pass, function (err, hash) {
  if (err) { throw err; }
  console.log('Store the password hash:\n', hash);
  var questions = [{ message: "Enter your password", type: 'password', name: 'password'}];
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    var userPass = userInput.password;
    console.log(userPass);
    pw.verify(hash, userPass, function (err, isValid) {
      var msg;
      if (err) { throw err; }
      msg = isValid ? 'Passwords match!' : 'Wrong password.';
      console.log(msg);
    });
  });
});
```
El resultado de una ejecución es parecido a este:

```bash
[~/local/src/javascript/learning/use-credential(master)]$ node hash.js 
Store the password hash:
{
  "hash":"lFPjexO2wJKgliHvoGC4hTdrb6PbwZfKskhY9DP0GA2sHS8BfkZel0JlQ4YNNKvykDox7Bwwpvdx6Pxic84L6Oby",
  "salt":"gQ+LdSLI5Qxx9owI/ulxd/Qn5uiBfkEof1UzUCWCT8FJCA7LsCZSzn4fMxB/Lb+grqRBwPA24tE5MtKyw49PnfPo",
  "keyLength":66,
  "hashMethod":"pbkdf2",
  "iterations":340230
 }
? Enter your password ******
{ password: 'chuchu' }
chuchu
Passwords match!
```

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
