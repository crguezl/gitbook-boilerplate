## Preguntas de Repaso de OOP

1.  Escriba un código JavaScript que defina una clase `Persona` con
    atributos `nombre` y `apellidos` y que disponga de un método
    `saluda`.

2.  Escriba un código ECMA6 que defina una clase `Persona` con atributos
    `nombre` y `apellidos` y que disponga de un método `saluda`.

1. Explique las diferencias en la salida entre este código 

<table>
<tr>
<td>
```
      function Person() {
        this.age = 0;

        function growUp() {
          this.age += 10;
        }
        growUp();
        console.log(this.age);
      }
      var p = new Person();
```
</td>
<td>
y este otro:
```
      function Person() {
        this.age = 0;

        var growUp = () => {
          this.age += 10;
        }
        growUp();
        console.log(this.age);
      }

      var p = new Person();
```
</td>
</tr>
</table>

Justifique su respuesta.

2. Explique que hacen los métodos `bind`, `apply` y `call` y cuales son sus similitudes y diferencias
3. ¿Cual es el significado del primer argumento del método `Object.cretate`? ¿Y el segundo? 
4. Todo objeto JavaScript tiene una propiedad `"prototype"` ¿verdadero o falso?
5. La propiedad `prototype` de una función es un objeto de tipo `Function` ¿verdadero o falso?
6. El `prototype` de una función es un objeto de tipo `Function` ¿verdadero o falso?
7. ¿Cual es el problema con este código? ¿Como se arregla el problema?
```
Object.prototype.nonsense = "hi";
for (var name in map)
  console.log(name);
```
<!---
for (var name in map) {
  if (map.hasOwnProperty(name)) {
    // ... this is an own property
  }
}-->
8. ¿Que significa que una propiedad es no-enumerable?
<!-- Object.defineProperty(Object.prototype, "hiddenNonsense",
                      {enumerable: false, value: "hi"});
-->
