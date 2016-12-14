## Preguntas de HTTPS

* ¿Cuales son las dos funcionalidades principales proveídas por la capa SSL?
  - Verifying that you are talking directly to the server that you think you are talking to
  - Ensuring that only the server can read what you send it and only you can read what it sends back
* ¿Es posible que alguien intercepte un mensaje utilizando HTTPS?
  - The really, really clever part is that **anyone can intercept every single one of the messages you exchange with a server, including the ones where you are agreeing on the key and encryption strategy to use, and still not be able to read any of the actual data you send.**
* ¿Cuales son los tres objetivos de la fase de *handshake* entre un cliente y un servidor utilizando TLS?
  - To satisfy the client that it is talking to the right server (and optionally visa versa)
  - For the parties to have agreed on a *[cipher suite](https://en.wikipedia.org/wiki/Cipher_suite)*, which includes which encryption algorithm they will use to exchange data
  - For the parties to have agreed on any necessary keys for this algorithm
* ¿En que tres fases se puede descomponer la fase de [handshake](http://www.dictionary.com/browse/handshake)?
  - Hello, Certificate Exchange and Key Exchange*
