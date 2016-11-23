## SSL

### How does HTTPS actually work?

#### The SSL layer has 2 main purposes:
  - Verifying that you are talking directly to the server that you think you are talking to
  - Ensuring that only the server can read what you send it and only you can read what it sends back
The really, really clever part is that 
**anyone can intercept every single one of the messages you exchange with a server, including the ones where you are agreeing on the key and encryption strategy to use, and still not be able to read any of the actual data you send.**

#### How an SSL connection is established

An SSL connection between a client and server is set up by a handshake, the goals of which are:
- To satisfy the client that it is talking to the right server (and optionally visa versa)
- For the parties to have agreed on a *cipher suite*, which includes which encryption algorithm they will use to exchange data
- For the parties to have agreed on any necessary keys for this algorithm

Once the connection is established, both parties can use the agreed algorithm and keys to securely send messages to each other. We will break the handshake up into 3 main phases - *Hello, Certificate Exchange and Key Exchange*.

1. **Hello** 
  - The handshake begins with the client sending a `ClientHello` message. 
  - This contains all the information the server needs in order to connect to the client via SSL, including the various cipher suites and maximum SSL version that it supports. 
  - The server responds with a `ServerHello`, which contains similar information required by the client, including a decision based on the client’s preferences about which cipher suite and version of SSL will be used.
2. **Certificate Exchange** 
  - Now that contact has been established, the server has to prove its identity to the client. 
  - This is achieved using its SSL certificate, which is a very tiny bit like its passport. 
  - An SSL certificate contains various pieces of data, including the 
     - name of the owner,
     - the property (eg. domain) it is attached to, 
     - the certificate’s public key, 
     - the digital signature and 
     - information about the certificate’s validity dates. 
  - The client checks that it either implicitly trusts the certificate, or that it is verified and trusted by one of several Certificate Authorities (CAs) that it also implicitly trusts. 
  - Note that the server is also allowed to require a certificate to prove the client’s identity, but this typically only happens in very sensitive applications.
### Teoría

* [How does HTTPS actually work?](http://robertheaton.com/2014/03/27/how-does-https-actually-work/) por Rob Heaton
*  Introducción
  - {% youtube %}https://youtu.be/JCvPnwpWVUQ{% endyoutube %}

* [SSL and HTTPS](https://youtu.be/S2iBR2ZlZf0) MIT OpenCourseWare
  - {% youtube %}https://youtu.be/S2iBR2ZlZf0{% endyoutube %}
  - MIT 6.858 Computer Systems Security, Fall 2014
  - View the complete course: [http://ocw.mit.edu/6-858F14](http://ocw.mit.edu/6-858F14)
  - Instructor: [Nickolai Zeldovich](https://www.youtube.com/user/chebureka)

### Tutoriales sobre HTTPS y SSL con NodeJS

* [How to Use SSL/TLS with Node.js](https://www.sitepoint.com/how-to-use-ssltls-with-node-js/) By Florian Rappl  September 16, 2015 at SitePoint
* [Adding HTTPS (SSL) to Express 4.X Applications](http://blog.ayanray.com/2015/06/adding-https-ssl-to-express-4-x-applications/)
  - GitHub repo: [ayanray/express4_SSL_example](https://github.com/ayanray/express4_SSL_example)
* [Express over HTTPS](http://blog.mgechev.com/2014/02/19/create-https-tls-ssl-application-with-express-nodejs/)
* [Walkthrough: How to set up HTTPS / SSL with node.js and name.com / RapidSSL](https://youtu.be/r92gqYHJc5c)
  - [GitHub repo: coolaj86/nodejs-ssl-e](https://github.com/coolaj86/nodejs-ssl-example)
  - [Blog: How to create a Certificate Signing Request (CSR) for HTTPS (TLS/SSL) RSA PEMs](https://coolaj86.com/articles/how-to-create-a-csr-for-https-tls-ssl-rsa-pems/)


### Recursos: Certificados

* [Certificados SSL para máquinas IaaS de PAS/PDI](https://docs.google.com/document/d/1noIAcAEzX1PuxxSLWuiTKzkLurAm9fL6vUmZN-A-kpE/edit#heading=h.32nscii6jiop)
* [Let's Encrypt](https://letsencrypt.org/docs/): Let’s Encrypt is a Certificate Authority (CA).
* [Linux man openssl command](https://linux.die.net/man/1/openssl)
  * [genrsa](https://linux.die.net/man/1/genrsa) generate an RSA private key
  * [req](https://linux.die.net/man/1/req)  certificate request and certificate generating utility.
  * [x509 - Certificate display and signing utility](https://linux.die.net/man/1/x509)




### Módulos NodeJS para HTTPS
* [pem](https://www.npmjs.com/package/pem):  A nodeJS module to create private keys and certificates with node.js and io.js
* [express-sslify: Enforces SSL for node.js express projects. This simple module enforces HTTPS connections on any incoming GET and HEAD requests.](https://www.npmjs.com/package/express-sslify)
* [express-ssl: Enforce SSL for Express apps](https://www.npmjs.com/package/express-ssl)

