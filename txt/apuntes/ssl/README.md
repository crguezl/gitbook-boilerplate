## SSL


### How does HTTPS actually work?

Esta sección es copia de:

* [How to Use SSL/TLS with Node.js](https://www.sitepoint.com/how-to-use-ssltls-with-node-js/) By Florian Rappl  September 16, 2015 at SitePoint

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

3. **Key Exchange** 
  - The encryption of the actual message data exchanged by the client and server will be done using a symmetric algorithm, the exact nature of which was already agreed during the **Hello phase**. 
  - A **symmetric algorithm** uses a single key for both encryption and decryption, in contrast to asymmetric algorithms that require a public/private key pair. 
  - Both parties need to agree on this single, symmetric key, a process that is accomplished securely using asymmetric encryption and the server’s public/private keys.
  - The client generates a random key to be used for the main, symmetric algorithm. 
    - It encrypts it using an algorithm also agreed upon during the Hello phase, and the server’s public key (found on its SSL certificate). 
    - It sends this encrypted key to the server, where it is decrypted using the server’s private key, and the interesting parts of the handshake are complete. 

* The parties are sufficiently happy that they are talking to the right person, and have secretly agreed on a key to symmetrically encrypt the data that they are about to send each other. 
* HTTP requests and responses can now be sent by forming a plaintext message and then encrypting and sending it. 
* The other party is the only one who knows how to decrypt this message, and so **Man In The Middle Attackers** 
are unable to read or modify any requests that they may intercept.

#### Certificates

##### Trust

* At its most basic level, an SSL certificate is simply a text file, and anyone with a text editor can create one. 
  * You can in fact trivially create a certificate claiming that you are Google Inc. and that you control the domain gmail.com. 
  * If this were the whole story then SSL would be a joke; identity verification would essentially be 
    - the client asking the server *"are you Google?"*, 
    - the server replying *"er, yeah totally, here’s a piece of paper with ‘I am Google’ written on it"* 
    - and the client saying *"OK great, here’s all my data."* 
  * The magic that prevents this farce is in the **digital signature**, which allows a party to verify that another party’s piece of paper really is legit.
* There are 2 sensible reasons why you might trust a certificate:
  * If it’s on a list of certificates that you trust implicitly
  * If it’s able to prove that it is trusted by the controller of one of the certificates on the above list
  * The first criteria is easy to check. Your browser has a pre-installed list of trusted SSL certificates from Certificate Authorities (CAs) that you can view, add and remove from. 
  * These certificates are controlled by a centralised group of (in theory, and generally in practice) extremely secure, reliable and trustworthy organisations like 
    - Symantec, 
    - Comodo and 
    - GoDaddy. 

    If a server presents a certificate from that list then you know you can trust them.
  * The second criteria is much harder. 
    - It’s easy for a server to say *"er yeah, my name is er, Microsoft, you trust Symantec and er, they totally trust me, so it’s all cool."* 
    -  A somewhat smart client might then go and ask Symantec *"I’ve got a Microsoft here who say that you trust them, is this true?"* 
    - But even if Symantec say *"yep, we know them, Microsoft are legit"*, you still don’t know whether the server claiming to be Microsoft actually is Microsoft or something much worse. 
    This is where digital signatures come in.

##### Digital signatures

* As already noted, SSL certificates have an associated public/private key pair
  *  The public key is distributed as part of the certificate, and the private key is kept incredibly safely guarded
  *  This pair of asymmetric keys is used in the SSL handshake to exchange a further key for both parties to symmetrically encrypt and decrypt data
  *  The client uses the server’s public key to encrypt the symmetric key and send it securely to the server, and the server uses its private key to decrypt it
  *  Anyone can encrypt using the public key, but only the server can decrypt using the private key
* The opposite is true for a digital signature. 
  - A certificate can be *"signed"* by another authority, whereby the authority effectively goes on record as saying *"we have verified that the controller of this certificate also controls the property (domain) listed on the certificate"*. 
  - In this case the authority uses their private key to (broadly speaking) encrypt the contents of the certificate, and this cipher text is attached to the certificate as its digital signature. 
  - Anyone can decrypt this signature using the authority’s public key, and verify that it results in the expected decrypted value. 
  - But only the authority can encrypt content using the private key, and so only the authority can actually create a valid signature in the first place.
* So if a server comes along claiming to have a certificate for Microsoft.com that is signed by Symantec (or some other CA), your browser doesn’t have to take its word for it. 
  - If it is legit, Symantec will have used their (ultra-secret) private key to generate the server’s SSL certificate’s digital signature, and so your browser use can use their (ultra-public) public key to check that this signature is valid. 
  - Symantec will have taken steps to ensure the organisation they are signing for really does own Microsoft.com, and so given that your client trusts Symantec, it can be sure that it really is talking to Microsoft Inc.


##### Self-signing

* Note that all root CA certificates are “self-signed”, meaning that the digital signature is generated using the certificate’s own private key. 
 - There’s nothing intrinsically special about a root CA’s certificate - you can generate your own self-signed certificate and use this to sign other certificates if you want. 
 - But since your random certificate is not pre-loaded as a CA into any browsers anywhere, none of them will trust you to sign either your own or other certificates. 
 - You are effectively saying “er yeah, I’m totally Microsoft, here’s an official certificate of identity issued and signed by myself,” and all properly functioning browsers will throw up a very scary error message in response to your dodgy credentials.
* This puts an enormous burden on all browser and OS publishers to trust only squeaky clean root CAs, as these are the organisations that their users end up trusting to vet websites and keep certificates safe. 
  - [This is not an easy task.](http://security.stackexchange.com/questions/11464/getting-a-root-ca-accepted-in-systems-and-browsers)

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

### Chrome y SSL

* [Chrome help: Manage warnings about unsafe sites](https://support.google.com/chrome/answer/99020?co=GENIE.Platform%3DDesktop&hl=en)
* [ How to manage certificates in chrome](https://productforums.google.com/forum/#!topic/chrome/XFAA9JIK3wM)
