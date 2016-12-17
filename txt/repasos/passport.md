* ¿Que es OAuth?
  - OAuth provides a method for users to grant third-party limited access (in scope, duration, etc.) access to their resources without sharing their passwords
* ¿Quienes son los cuatro roles que aparecen en una autenticación con OAuth?
  1. resource owner: An entity capable of granting access to a protected resource. When the resource owner is a person, it is referred to as an end-user. (El usuario)
  2. resource server: The server hosting the protected resources, capable of accepting and responding to protected resource requests using access tokens. (El servidor de Pinterest)
  3. client: An application making protected resource requests on behalf of the resource owner and with its authorization (por ejemplo, una app cliente en el teléfono de pinterest).
    - The term " client" does not imply any particular implementation characteristics (e.g., whether the application executes on a server, a desktop, or other devices).
  4. authorization server: The server issuing access tokens to the client after successfully authenticating the resource owner and obtaining authorization (por ejemplo, Facebook)
* ¿Qué tres elementos deinformación suelen ser necesaria a la hora de registrar nuestra aplicación ante un preoveedor de  OAuth?
  - Before using OAuth with your application, you must register your application with the service.
  - This is done through a registration form in the developer or API portion of the service's website, where you will provide the following information (and probably details about your application):
    1. Application Name
    2. Application Website
    3. Redirect URI or Callback URL
*  ¿Que se debe poner en *Redirect URI or Callback URL* cuandos e está registrando nuestra aplicación?
  - The redirect URI is where the service will redirect the user after they authorize (or deny) your application, and therefore the part of your application that will handle authorization codes or access tokens.
* ¿Que es *passport*, que funcionalidades provee  y como funciona?
  - Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.
* 
