// El 'Hoisting' es cuando las variables y funciones se procesan antes de que se ejecute cualquier tipo de codigo

console.log (hoisting); // undefined

let hoisting = 'Dará undefined ya que se llamo a la variable antes de declararla';



var x = 5;

(function () {
  console.log("x:", x); // no obtenemos '5' sino 'undefined', pero si 'var x = 10; no estuviese, retornaria el valor de '5'.
  var x = 10;                                                                               // que obtiene del scope global.
  console.log("x:", x); // 10
})();


WenasFuncion ();

function WenasFuncion () {
    console.log('Aqui se puede llamar a la funcion antes de declararla, y sirve caso contrario que con variables, con ellas dará: ' +
    prueba); // "... dará: undefined"
    var prueba = 'Test';
};








// 'use strict' sirve para indicarle al interprete de JvS que el codigo que sigue estará en modo estricto, cambiando la manera
//  en la que se ejecutan algunas instrucciones y evitar algunos errores en el codigo.




 // evita la creacion de variables globales accidentales (Por si se comete un error de typeo o tambien si se crea una variable
 // sin poner antes un let, const o var)

 'use strict'; 

 let namae = 'Kyoko'
 let edad = 17;

 if (edad > 16 ){
     nmae = 'Someone else'
 } 
 console.log(nmae); //Sin use strict se crearia la variable global 'nmae', pero con use strict aparece un error.



 // Atributos de solo lectura (Si se pone un atributo de solo lectura con 'use strict' y luego se intenta asignar otro valor
 // retorna un error)

 'use strict';
 const usuario = {};
 Object.defineProperty (usuario, 'nombre', {value: 'Felipe', writable: false});

 usuario.nombre = 'Mikasa';
 console.log(usuario.nombre); // Sin use strict no muestra el valor que se editó, pero con use strict muestra un error
                              // al ser un objeto no editable.



 // Objetos no extensibles (El .preventExtensions evita que se agreguen mas propiedades a objetos de las que ya están,
 // asi que si intentamos agregar una propiedad en modo normal despues de poner la extension, simplemente no la muestra, pero
 // en modo estricto va a dar un error.)

 'use strict';
 const user = {name: 'Feli',
 favoriteFood: 'Pasta',
 edad: 22
 };
 Object.preventExtensions (user);

 user.juegoJugadoActualmente = 'Valorant'; //Da error en use strict al ser un objeto no extensible.

 console.log(user);



 // Parametros duplicados (El use strict evita que hayan dos parametros iguales en una funcion, en modo normal solo salta
 // undefined o toma el valor del parametro duplicado (el 2do), en cambio con use strict si hay parametros duplicados da error)

 'use strict';
 function nombrar (nombre, apellido, nombre) {
     return `Hola ${nombre} ${apellido}`;
 }

 console.log(nombrar ('Felipe', 'Cardenas'));



 // Delete (El delete permite eliminar propiedades de un objeto o elementos de un array, devolviendo true o false para saber
 // si se eliminó o no, en cambio con use strict, cuando se intenta eliminar algo que no se puede o que daria false, muestra
 // un error)

 'use strict'
 function strictDelete () {
    console.log('No se puede borrar')
 }
 const noSeBorra = 'No se puede borrar, dara false en modo normal y en modo estricto error'

 //delete strictDelete; // Dará un error
 //delete noSeBorra;    // "No se puede llamar a delete en un identificador en modo strict"



 // 'arguments' & 'eval' (En modo normal no pasa nada, pero en modo strict no se pueden declarar variables con esos nombres)

 'use strict'
 let NOeval = "Uso no valido de 'eval' en modo estricto"
 let NOarguments = "Uso no valido de 'arguments' en modo strict"



// with (la instruccion with sirve para extender la cadena de scopes temporalmente pero en modo strict no se puede usar
// osino devuelve error)

'use strict';
'with' (documents.forms[0]) ;{ //Subrraya el with como error e indica que no se puede usar en modo strict.
    email.value = '';
    password.value = '';
};



// Palabras reservadas (Hay palabras reservadas que no se pueden usar para declarar variables o funciones, y en el modo strict
// se incluyen algunas mas)

'use strict';
var no_se_pueden_usar_en_modo_normal = ['class', 'enum', 'extends', 'super', 'export', 'const', 'export', 'import' && 'etc'];
var let = 'private, public, package, etc...' // Da error, no se pueden usar en modo estricto estas y mas palabras reservadas.



// Funciones libres (Importante!)

'use strict';
const otroUsuario = {
    namee: 'Feli',
    saludar: function () {
        console.log (`Hola ${this.namee}, este es el modo strict.`);
    }
}
otroUsuario.saludar (); // Hola Feli, este es el modo strict.

const saludar = otroUsuario.saludar;
saludar(); // Hola unefined, este es el modo strict.

        // <>Esto pasa porque al no llamar la funcion sobre el objeto otroUsuario es como si se estuviera llamando sobre el 
        // objeto global "window." y como este no tiene una propiedad "namee" entonces salta undefined.
        // Pasa solo en modo normal


        // <>En modo strict salta un error, ya que al llamar saludar() asi suelta ya no sería propiedad del objeto global sino
        // que directamente ya no tendría propiedad, lo que dejaría el "this" como si fuera undefined, traduciendo un 
        // "undefined.nombre" y no se puede acceder a ninguna propiedad bajo el valor undefined, por lo que dara un error.

