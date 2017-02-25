## Cookies


* An **HTTP cookie** (web cookie, browser cookie) is a small piece of data that a server sends to the user's web browser, that may store it and send it back together with the next request to the same server. See [HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) at MDN
* Cookies were designed to be a reliable mechanism for websites to remember stateful information 
* They can be used to remember arbitrary pieces of information that the
user previously entered into form fields 
*  **Cookies for Session Management**: the server sends a cookie to the client using a [set-cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) header. The cookie contains a unique session identifier (typically, a long string of random letters and numbers). 
  - Because cookies are sent to the server with every request the client makes, that session identifier will be sent back to the server every time the user visits a new page on the website, which lets the server know which client is
* **Cookies for logging into websites**: When the user visits a website's login page, the web server typically sends the client a cookie containing a unique session identifier. When the user successfully logs in, the server remembers that that particular session identifier has been authenticated, and grants the user access to its services.
* **Session cookie**: exists only in temporary memory while the user navigates the website. Web browsers normally delete session cookies when the user closes the browser
* **Persistent cookie**: expires at a specific date or after a specific length of time.

### Ejemplo Simple

[import, title:"hello-cookie.js"](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples/blob/master/hello-cookie.js)

###Recursos

* [Repositorio con ejemplos de uso de cookies en express](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples)

### Tutoriales 
* [Cookie Management in Express](https://www.codementor.io/noddy/cookie-management-in-express-js-du107rmna) 
  - [hello-cookie.js](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples/blob/master/hello-cookie.js)
* [A very basic session auth in node.js with express.js](http://www.codexpedia.com/node-js/a-very-basic-session-auth-in-node-js-with-express-js/)

### Apuntes en Ruby sobre Cookies

* [Cookies y Rack](http://crguezl.github.io/apuntes-ruby/node401.html)
* [Sesiones y Cookies en Sinatra](http://crguezl.github.io/apuntes-ruby/node455.html)
* [HTTP](http://crguezl.github.io/apuntes-ruby/node388.html)


### Cookies y Seguridad

#### HttpOnly

* `HttpOnly` is a flag that can be included in a `Set-Cookie` response header. 
* The presence of this flag will tell browsers to not allow client side script access to the cookie (if the browser supports it). 
* This is important because it helps protect your cookie data from malicious scripts and helps mitigate the most common XSS attacks.
  - Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted web sites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user.
* Here is how you can tell Express to set your cookie using the HttpOnly flag:
```javascript
res.cookie('sessionid', '1', { httpOnly: true });
```

#### Secure

* The Secure flag is included in a `Set-Cookie` response header. 
* The presence of the secure flag tells web browsers to only send this cookie in requests going to HTTPS endpoints. 
* This is very important, as the cookie information will not be sent on an unencrypted channel. 
* This helps mitigate some exploits where your browser is redirected to the HTTP endpoint for a site rather than the HTTPS endpoint and thus potentially exposing your cookies to someone in the middle of the traffic.
* Here is how you can tell Express to set your cookie using the Secure flag:
```javascript
res.cookie('sessionid', '1', { secure: true });
```

