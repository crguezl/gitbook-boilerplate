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
* ¿Como se llaman las tres fases en las que se puede descomponer la etapa de [handshake](http://www.dictionary.com/browse/handshake)?
  - Hello, Certificate Exchange and Key Exchange*
* Describa la primera fase del  *handshake*
  - The [handshake](http://www.dictionary.com/browse/handshake) begins with the client sending a `ClientHello` message. 
  - This contains all the information the server needs in order to connect to the client via SSL, including 
    - the various cipher suites 
    - and maximum SSL version that it supports. 
  - The server responds with a `ServerHello`, which contains similar information required by the client, including 
    - a decision based on the client’s preferences about which cipher suite and version of SSL will be used.
* Describa la segunda fase del  *handshake*
  - Now that contact has been established, the server has to prove its identity to the client. 
  - This is achieved using its SSL certificate, which is a very tiny bit like its passport. 
  - An SSL certificate contains various pieces of data, including the 
     - name of the owner,
     - the property (eg. domain) it is attached to, 
     - the certificate’s public key, 
     - the [digital signature](https://en.wikipedia.org/wiki/Digital_signature) and 
     - information about the certificate’s validity dates. 
  - The client checks that it either 
    - implicitly trusts the certificate, 
    - or that it is verified and trusted by one of several Certificate Authorities (CAs) that it also implicitly trusts. 
  - Note that the server is also allowed to require a certificate to prove the client’s identity, but this typically only happens in very sensitive applications.
* Describa la tercera fase del  *handshake*
  - The encryption of the actual message data exchanged by the client and server will be done using a symmetric algorithm, the exact nature of which was already agreed during the **Hello phase**. 
  - A **symmetric algorithm** uses a single key for both encryption and decryption, in contrast to asymmetric algorithms that require a public/private key pair. 
  - Both parties need to agree on this single, symmetric key, a process that is accomplished securely using asymmetric encryption and the server’s public/private keys.
  - The client generates a random key to be used for the main, symmetric algorithm. 
    - It encrypts it using an algorithm also agreed upon during the Hello phase, and the server’s public key (found on its SSL certificate). 
    - It sends this encrypted key to the server, where it is decrypted using the server’s private key, and the interesting parts of the [handshake](http://www.dictionary.com/browse/handshake) are complete. 
* ¿Que tipo de cifrado se utiliza una vez que a finalizado con éxito la fase de handshake?
  - The parties are sufficiently happy that they are talking to the right person, and have secretly agreed on a key to symmetrically encrypt the data that they are about to send each other. 
