%### Jison}

* Complete las partes que faltan de esta calculadora escrita en Jison:
```
%%___
%%%
%
%\s+                   /* skip whitespace */
%[0-9]+("."[0-9]+)?\b  return 'NUMBER'
%"*"                   return '*'
%"/"                   return '/'
%"-"                   return '-'
%"+"                   return '+'
%"^"                   return '^'
%"!"                   return '!'
%"%"                   return '%'
%"("                   return '('
%")"                   return ')'
%"PI"                  return 'PI'
%"E"                   return 'E'
%<<EOF>>               return 'EOF'
%.                     return 'INVALID'
%
%/___
%
%%left _______
%%left _______
%%____'^'
%%______   '%'
%%left UMINUS
%%_____    '!'
%
%%start ___________
%
%%% /* language grammar */
%
%expressions
%    : e EOF
%        { typeof console !== 'undefined' ? console.log($1) : print($1);
%          return $1; }
%    ;
%
%e
%    : e '+' e
%        {___________}
%    | e '-' e
%        {___________}
%    | e '*' e
%        {___________}
%    | e '/' e
%        {___________}
%    | e '^' e
%        {__ = Math.pow(______);}
%    | e '!'
%        {{
%          $$ = (function fact (n) { return n==0 ? _ : _____________ })($1);
%        }}
%    | e '%'
%        {$$ = $1/100;}
%    | '-' e %____ ______
%        {_________}
%    | '(' e ')'
%        {________}
%    | NUMBER
%        {____________________}
%    | E
%        {$$ = Math.E;}
%    | PI
%        {$$ = Math.PI;}
%    ;
```
* ¿Cómo  habría que modificar la calculadora  para que las frases de la forma \verb|4-5-8| se interpretaran como \verb|4-(5-8)|?
* ¿Cómo  habría que modificar la calculadora  para que las frases de la forma \verb|4-5*8| se interpretaran como \verb|(4-5)*8|?
* ¿Cómo  habría que modificar la calculadora  para que las frases de la forma \verb|-5*8| se interpretaran como \verb|-(5*8)|?
* ¿Cómo habría que modificar el analizador léxico para que se admitieran comentarios tipo javascript \verb|/* ... */|?
* ¿Con que comando compilamos la gramática Jison anterior para producir el parser?

* Complete el algoritmo de análisis LR.

*
$|x|$ denota la longitud de la cadena $x$. 
* La función \verb|top(k)| devuelve el elemento que ocupa la posición \verb|k| contando desde el \emph{top} de la pila
%* %La función \verb|pop(k)| extrae \verb|k| elementos de la pila.
%*
%La notación \verb|state.attr| hace referencia al atributo
%asociado con cada estado.
%* Denotamos por \verb|Sem| el hash de acciones semánticas
%\end{itemize}
%\begin{verbatim}
% push(__);
% b = yylex();
% for( ; ; ;) {
%   s = top(0); a = b;
%   switch (action[_][_]) {
%     case "shift t" : 
%       t.attr = _.____;
%       push(_); 
%       b = _______;
%       break;
%     case "reduce A ->alpha" : 
%       eval(Sem{_ __ _____}(top(|alpha|-1).attr, ... , top(0).attr)); 
%       pop(|_____|); 
%       push(goto[______][_]); 
%       break;
%     case "accept" : return (1); 
%     default : yyerror("syntax error");
%   }
% }
%\end{verbatim}
%
%* 
%Escriba un traductor de expresiones en infijo (sólo números naturales, \verb|+|, \verb|*| y paréntesis)
%a postfijo usando Jison.
%Una expresión como \verb|3+2*5| deberá traducirse como
%\verb|3 2 5 * +|.
%* 
%\begin{enumerate}
%* 
%Escriba un autómata finito determinista que reconozca el lenguaje 
%de los prefijos viables de la gramática:
%\begin{verbatim}
%e: e '/' e | NUM ;
%\end{verbatim}
%%* 
%%Usando la construcción del subconjunto encuentre un autómata finito determinista que sea equivalente al construído en el apartado anterior
%*
%Encuentre el conjunto de terminales que puede aparecer a continuación de 
%\verb|e| en una derivación de la gramática. 
%*
%Construya la tabla de acciones (\verb|action|) del analizador SLR para esta gramática
%\end{enumerate}

%* 
%Complete las partes que faltan del fichero \verb|auth.rb| que permite 
%autentificación usando OAuth mediante la gema \verb|omniauth|:
%%use provider omniauth.auth name image
%\begin{verbatim}
%require 'omniauth-oauth2'
%require 'omniauth-google-oauth2'
%
%___ OmniAuth::Builder do
%  config = YAML.load_file 'config/config.yml'
%  ________ :google_oauth2, config['identifier'], config['secret']
%end
%
%get '/auth/:name/callback' do
%  session[:auth]  = @auth = request.env['________.____']
%  session[:name]  = @auth['info'].____
%  session[:image] = @auth['info']._____
%  flash[:notice] = 
%      %Q{<div class="success">Authenticated as #{session[:name]}.</div>}
%  redirect '/'
%end
%
%get '/auth/failure' do
%  flash[:notice] = params[:message] 
%  redirect '/'
%end
%\end{verbatim}

%* 
%Complete el código para el análisis de ámbito en esta extensión de la 
%calculadora que admite funciones anidadas.
%
%En primer lugar tenemos las estructuras de datos necesarias:
%\begin{verbatim}
%%{
%var symbolTables = [{ name: '', father: null, vars: {} }];
%var scope = 0; 
%var symbolTable = symbolTables[scope];
%\end{verbatim}
%
%\begin{enumerate}
%*  Complete este accessor para \verb|scope|:
%\begin{verbatim}
%function getScope() {
%  return _____;
%}
%\end{verbatim}
%
%*  La función \verb|getFormerScope| se llama cuando se sale de un ámbito:
%\begin{verbatim}
%function getFormerScope() {
%   _______;
%   symbolTable = symbolTables[_____];
%}
%\end{verbatim}
%*  La función \verb|makeNewScope| se llama cada vez que se entra en un nuevo ámbito:
%\begin{verbatim}
%function makeNewScope(id) {
%   _______;
%   symbolTable.vars[id].symbolTable = symbolTables[_____] =  
%                 { name: id, father: symbolTable, vars: {} };
%   symbolTable = symbolTables[_____];
%   return symbolTable;
%}
%\end{verbatim}
%* 
%Necesitamos una función \verb|findSymbol| para encontrar donde está
%la definición del objeto cuyo nombre es \verb|x|:
%\begin{verbatim}
%function findSymbol(x) {
%  var f;
%  var s = scope;
%  do {
%    f = symbolTables[s].vars[x];
%    ___;
%  } while (______ && !f);
%  s++;
%  return [f, s];
%}
%\end{verbatim}
%* 
%Cuando se detecta una llamada se hacen comprobaciones 
%en la tabla de símbolos:
%\begin{verbatim}
%function functionCall(name, arglist) {
%  var info = findSymbol(name);
%  var s = info[1];
%  info = info[0];
%
%  if (!info || info.type != 'FUNC') {
%    _________________________________________;
%  }
%  else if(arglist.length != info.arity) {
%    __________________________________________;
%  }
%  ....
%}
%\end{verbatim}
%
%*  Complete el código que falta en la acción
%semántica asociada con la definición de una función:
%\begin{verbatim}
%dec 
%    : DEF functionname  optparameters "{" decs statements "}" 
%                  { 
%                     ______________();
%
%                     $$ = translateFunction(...);
%                  }
%    | VAR varlist ';'   { ... }
%    ;
%\end{verbatim}
%* 
%En la produción anterior aparecía \verb|functionname| el cual produce simplemente un identificador:
%\begin{verbatim}
%functionname
%    : ID 
%                  {
%                     if (symbolTable.vars[$ID]) 
%                       throw ___________________________________________;
%                     symbolTable.vars[$ID] = { type: ______, name: ___ };
%
%                     ____________($ID);
%
%                     $$ = $ID;
%                  }
%    ;
%\end{verbatim}
%¿Por qué se crea esta regla de producción? 
%Rellene el código que falta.
%* 
%Cuandos se analiza la definición de parámetros es preciso 
%crear la entrada y guardar la información relevante. Complete 
%el código:
%\begin{verbatim}
%parameters
%    : ID                { 
%                          symbolTable.vars[___] = { type : '_____' };
%                          $$ = [ $ID ]; 
%                        }
%    | parameters "," ID { 
%                          symbolTable.vars[___] = { type : '_____' };
%                          $$ = $1; 
%                          $$.push($ID); 
%                        }
%    ;
%\end{verbatim}
%*  Cuando se usa un identificador hay que comprobar que su 
%uso es conforme a su definición:
%\begin{verbatim}
%e
%    : ID "=" e
%        { 
%           var info = findSymbol($ID);
%           var s = info[1];
%           info = info[0];
%
%           if (info && info.type === 'VAR') { 
%             $$ = binary($e,unary("&"+$ID+", "+(getScope()-s)), "=");
%           }
%           else if (info && info.type === 'PAR') { 
%             $$ = binary($e,unary("&$"+$ID+", "+(getScope()-s)), "=");
%           }
%           else if (info && info.type === 'FUNC') { 
%              ______________________________________________________;
%           }
%           else { 
%              ______________________________________________;
%           }
%        }
%    | ....
%\end{verbatim}
%\end{enumerate}
%* Responda a las siguientes preguntas sobre transformaciones árbol:
%\begin{enumerate}
%* Defina alfabeto con aridad
%* Defina el conjunto de todos los árboles sobre un alfabeto
%* Defina gramática árbol
%* Defina lenguaje generado por una gramática árbol
%* ¿Que es un patrón árbol? ¿Que significa que un árbol casa con un patrón árbol?
%* Defina que es un esquema de transformaciones árbol
%* Escriba en pseudocódigo un esquema de transformaciones árbol 
%para el plegado de constantes
%\end{enumerate}
%
%
%* 
%Calcule los conjuntos \verb|FIRST| y \verb|FOLLOW| para las variables
%sintácticas de esta gramática:
%\begin{verbatim}
%S : A B 'a' A | 'b' S B
%  ;
%A : /* vacío */ | A 'a' 
%  ;
%B : /* vacío */ | B 'b'
%  ;
%\end{verbatim}
%
%%* 
%%Explique que código se debería añadir al
%%ejercicio anterior para traducir una expresion
%%\verb|if expression then expression else expression|.
%
%%* 
%%Haga un diagrama de un stackframe de una llamada explicando
%%las diferentes partes para un lenguaje que admite procedimientos 
%%anidados.
%\end{enumerate}


