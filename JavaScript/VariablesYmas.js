var cajon;

//String

var bootcamp = "Henry";

var PrepCourse = "Ganar";

//Numeros

var numeroEntero = 17;

var numeroNegativo = -9;

var numeroDecimal = 89.98;
  
   //NOTA: Para expresar numeros pares, impares y enteros se hace de la siguiente manera:

  //  numeroPar = expresionNumero %2 ===0;
  //  numeroImpar = expresionNumero %2 ===1;
  //  numeroEntero = expresionNumero %1 ===0;
  //  numeroDecimal = expresionNumero %1!==0; //No es oficial, pero lo deduje xd

//Booleanos

var estoyEntendiendo = true;

var noPodreHacerlo = false;

//Undefined

var cajon;

console.log(cajon);

//Null

var absolutamenteNada = null;

//Valor tipo array

let arr = [0, 1, 2, 3, 4, 5];


//Valor tipo objeto

let objctMe = { 
  nombre: "Felipe",
  edad: 22,
  profesion: 'Software engineer',
  rango: 'One of the best in the world (top 1%)',
  completeInfo: function () {
    return `Hi, I'm ${this.nombre}, I'm ${this.edad} years old, I'm a ${this.profesion}, and I'm ${this.rango}, nice to meet you!`
  }
 };





///'Typeof' (Operador que muestra el tipo de variable, palabra clave, cadena u objeto para el que se devolvera su tipo,(parentesis opcionales))

var miFuncion = new Function("5+2")
var forma = "redonda"
var num = 1
var hoy = new Date()


typeof miFuncion === 'function'
typeof forma === 'string'
typeof num === 'number'
typeof hoy === 'object'
typeof noExiste === 'undefined'


//Para true/ false y null arroja el tipo de datos que son

typeof true === 'boolean'
typeof null === 'object'





//Veracidad (Hay un dato de tipo de dato booleano que toma los valores true y false, y todos los datos son resumidos a esos dos valores)

console.log (Boolean(1));           // true
console.log (Boolean(0));           // false
console.log (Boolean(-1));          // true
console.log (Boolean(true));        // true
console.log (Boolean(false));       // false
console.log (Boolean('string'));    // true
console.log (Boolean(null));        // false
console.log (Boolean(undefined));   // false
console.log (Boolean([]));          // true






// 'switch' (Declaracion que evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta 
// declaraciones asociadas a ese case, así como las declaraciones en los case que siguen)


let expr = "Mangos"

switch (expr) {
    case "Naranjas":
      console.log("El kilogramo de naranjas cuesta $0.59.");
      break;
    case "Manzanas":
      console.log("El kilogramo de manzanas cuesta $0.32.");
      break;
    case "Platanos":
      console.log("El kilogramo de platanos cuesta $0.48.");
      break;
    case "Mangos":
    case "Papayas":
      console.log("El kilogramo de mangos y papayas cuesta $2.79.");
      break;
    case "Cerezas":
      console.log("El kilogramo de cerezas cuesta $3.00.");
      break;
    default:
      console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
  }
  
  console.log("¿Hay algo más que te quisiera consultar?");


  //Si no se pone la declaracion "break" se seguira ejecutando la siguiente instruccion; Ej:

  var noBreak = "SinBreak";

  switch (noBreak) {

    case "Break":
      console.log ("Solo ejecuta esta instruccion y se sale del switch");
      break;
    case "SinBreak":
      console.log ("Como no se puso 'break' se ejecuta la siguiente instruccion");
    case "Se ejecuta esta tambien": 
      console.log ("   Justo asi");
  };

  console.log("Asi funciona 'break' en switch");

  // La instancia 'default' se ejecuta si el valor de la expresion no coincide con ningun valor case

  let instDefault = "Gato"

  switch(instDefault) {
    case "Amarillo":
     console.log ("Color");
     break;
    case "Avion":
      console.log ("Medio de transporte");
      break;
    default:
      console.log ("No identificado") // Si la expresion no coincide con las existentes se ejecutara el default

  };

   // Al usar "default entre condiciones" la consola tambien ejecutara la instruccion siguiente al default (en caso de no haber un break
                                  //despues del default, si se coloca break, aunque haya una instruccion abajo se cancelara el switch)

   let prueba_default = "random";

   switch (prueba_default) {
    case 1:
      console.log("1");
      break;
    default:
      console.log("Se ejecuta default y la siguiente instruccion");
      //Aqui como no hay break, se ejecutaria el default y el case 2
    case 2:
      console.log(" Justo asi, tambien se ejecuta esta instruccion del case 2");
   };
  

// switch tambien sirve cuando hay varios valores que se comportan de la misma manera

  let mismoComportamiento = "Cheetah"

  switch (mismoComportamiento) {
    case "Gato":
    case "leopardo":
    case "leon":
    case "Jaguar":           // al ejecutar cualquier case todos daran "Felinos, todos los valores tienen el mismo comportamiento"
    case "Cheetah":
    case "Puma":
      console.log("Felinos");
      break;
    default:
      console.log("Otro tipo de animales") 
  };


 // switch "Operaciones encadenadas con multiples casos"

var foo = 1;    // Al ejecutar, su "Salida" (output) sería == "Salida: Cuál Es Tu Nombre?', se ejecuta desde el case seleccionado, 
var output = "Salida: ";                           //de para abajo mientras se van sumando o encadenando los valores de cada case)
switch (foo) {
  case 10:
    output += "¿Y ";
  case 1:
    output += "Cuál ";
    output += "Es ";
  case 2:
    output += "Tu ";
  case 3:
    output += "Nombre";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Por favor, selecciona un valor del 1 al 5, o el valor 10.");
}







// 'break' (termina el bucle actual, switch o label y lo transfiere a la siguiente sentencia,
//  a la sentencia de terminacion de los elementos)


let pruebaBreak = "Kuro" 

switch (pruebaBreak) {
  case "Kuro":
    console.log ("Negro");
    break;
  case "Shiro":
    console.log ("blanco");
    break;
  case "Aka":
    console.log ("Rojo");
    break; 
  case "Ao":
    console.log("Azul");
    break;
  default:
    console.log("Not yet boi");       
};
                                      //Reproduce solo el valor marcado y salta a la sentencia de terminacion.
console.log ("Colores en japones");


  function comprobarBreak (x) {
    let ran = 0;
    while (ran < 20) {
      if (ran == 12) 
      break;
      ran++;
    };
    console.log (ran * x); //teniendo en cuenta el valor de "x" como 1, el resultado seria 12 debido a que ahi se planto el limite 
  }                                //para que el break se ejecutara en ese punto, si el valor de "x" fuera 2 el resultado seria 24
                                           //, si fuera 3, 36 y asi sucesivamente, x se multiplica por el limite, en este caso 12.
  comprobarBreak(1); 
  
 

  function comprobandoElBreak (numerito) {
    let i = 1;
    while (i < 15) {
      if (i > 8 && i < 14) break; //al parecer va al numero mas bajito entre 8 y 14, es decir, el 9
      i++;
    };
    console.log(i + numerito); // 10
  }
  
  comprobandoElBreak (1);






// 'continue' (Termina la ejecucion de las sentencias (for, while, continue, switch, label, etc..) y continua con la 
//  ejecucion del bucle con la proxima iteracion, basicamente omite que se ejecute el codigo o se salta la iteracion)


const numbers = [0,1,2,3,4,5,6,7,8,9,10];                                      


for (i=0; i < numbers.length; i++) {
    if (i === 6) {               //Aqui indica que cuando el condicional se cumpla y llegue a la posicion #6 se omita este codigo
        continue;                              // y se continue con la iteracion, el 6 esta en esa posicion, por tanto es omitido.
    }
    console.log('Con continue:', numbers[i]); // 0,1,2,3,4,5,7,8,9,10
}         


for (it=0; it < numbers.length; it++) {
  if (it %2 ===0) {
    continue;  //Aqui se omiten los numeros pares
  }
  console.log('Numeros impares:', numbers[it]); // 1,3,5,7,9
}






// 'Scope' (Es entorno donde las variables tienen alcance, este determina que valor tendra la variable dependiendo donde este.)

 //Existen 2 tipos de Scope: 
 //EL global y el local

   //El Scope global son las funciones, variables y lo que esta fuera de un bloque de codigo o una funcion.

   var scopeG = 'global'

   //El scope local por el contrario, es lo que esta dentro de una funcion o bloque de codigo.

   function scopeLocal () {
     var scopeL = 'local'
     return 'llamar al scope: ' + scopeL +
     ', y al: ' + scopeG;
   }

   console.log (scopeLocal());

   // Podemos llamar al scope global desde el local, como en la funcion, pero no podemos llamar al local desde el global, osino
   // pasa esto:

   console.log (scopeL); //Undefined








  //Coerción (Es la forma en la que se puede cambiar un tipo de valor por otro)

   //Existen 2 tipos de coerción:
   //Coerción implicita y explicita
   
     //La coercion implicita es cuando el lenguaje nos ayuda a cambiar el tipo de valor

     let coercionImplicita = 1 + "7";      // "17" => transforma el numero en un string
     let coercionImplicita2= 2 + " gatos"; // "2 gatos"
     let coercionImplicita3= true + "";    // "true" => transforma el booleano en string

     typeof coercionImplicita;  // string
     typeof coercionImplicita2; // string
     typeof coercionImplicita3; // string

     //La coercion explicita es cuando se obliga a que cambie el tipo de valor

     let num = 17;
     let numToString = String(a); // 17 => "17"
     typeof numToString; // string

     let booleano1 = false;
     let booleanToString = String(booleano1); // false => "false" 
     typeof booleanToString; // string

     let numm = 1;
     let numToBoolean = Boolean(numm); // 1 en adelante => true || 0 => false
     typeof numToBoolean; // boolean

     let str = '21';
     let stringToNumber = Number(str); // '21' => 21
     typeof stringToNumber; // Number





// Para obtener las keys y los values (valores) de un objeto como array.

const user = {
  nombre: 'Kyokou',
  email: 'randomemail@gmail.com',
  password: 'wakaranai.123'
};

// keys

console.log(Object.keys(user));


