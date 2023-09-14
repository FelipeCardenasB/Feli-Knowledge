//Variables

var entrenamiento = "ganar";

var VoyASerElMejor = true;

var practica = "Excelencia";

var perder = null;

var numeroDecimalNegativo = -98.65;

var CualquierCosa
console.log(CualquierCosa);

console.log("Elnumeroes12".length);

var h = "Ola";
console.log(h);

//Operadores y precedencia

console.log(789-2);

console.log(87-98*560)

console.log(789*109890);

console.log(890/67); 
console.log(890%67);

console.log(1+0);

console.log(8+90*65/9-6);
console.log((8+90)*65/(9-6));
console.log((8+90)*65/9-6);

console.log((14+1)*15)
console.log(15%4)

console.log(3-5*2+8); //1
console.log(3+5*2-8); //5
console.log((3+5)*2-8); //8


//Asignacion 
var a = 5;
var b = 8;
var c = 15;
var d = 9;
var e = (a = b = c = d); //Asignacion por derecha en "=" (operaciones comienzan por derecha)

console.log(a); //9
console.log(b); //9
console.log(c); //9
console.log(d); //9
console.log(e); //9





var cajon = "raton";
var cajon1 = "mice";
var cajon2 = "mouse";
var cajon3 = (cajon1 = cajon = cajon2);

console.log(cajon);  //mouse
console.log(cajon1); //mouse 
console.log(cajon2); //mouse
console.log(cajon3); //mouse



var perro = "juju"
var gato = "juju"
console.log(perro);
console.log(gato);

var numeroEntero = 8
console.log(numeroEntero); //8


//Funciones
function PruebaYentrenamiento(x) {console.log(x*8);
}

PruebaYentrenamiento(9);




//Control de flujo (condicionales if, if else & else)

function training(word) {
    if(word.length > 5) {
        console.log("Dato Incorrecto");
    } else if(word === "Ganar" || word == 39) {
        console.log(true);
    } else {
        console.log(false);
    }
};

training("Ganar");                  //true
training(39);                       //true
training("39");                     //true
training("StringDeMasDe5Letras");  //"Dato incorrecto" 
training ("lol")                    //false





function calcularDescuento(articulos, precio) {
    var precioFinal
  
    if (articulos <= 5) {
      //Hasta 5 artículos
      precioFinal = precio * (1 - 0.1)
    } else if (articulos > 5 && articulos <= 10) {
      //De 6 a 10 artículos
      precioFinal = precio * (1 - 0.15)
    } else {
      //De 10 artículos en adelante
      precioFinal = precio * (1 - 0.2)
    }
  
    return precioFinal
  }
  
  calcularDescuento(4, 10) // 9
  calcularDescuento(8, 20) // 17
  calcularDescuento(15, 50) // 40





//Bucles for & while

let swan = 0;
let yin = 3;
let yun = 4;

for(k = 0 ; k <13 ; k++){
    yin = yin + k;
    console.log("Iteracion: ", k); // 0,1,2,3,4,5,6,7,8,9,10,11,12
};
console.log("k (iteracion) + yin (3): ", yin); // 81


while(yun <20) {
    yun = yun + 1;
    console.log(yun); // Desde 5 hasta 20 porque yun vale 4, so it starts from 5
};
     

function esPrimo (num) {              //La funcion debe retornar los numeros primos como true, de lo contrario retornara false  
    if (num <=1){                        //Numeros 0, 1 y negativos no son primos.  Los numeros primos solo son divisibles por
        console.log('Es menor que 1:', false);                                                         //ellos mismos y por 1.
    }                                         
    for (i=2; i<num; i++) {
        if (num % i ===0 && num / i !== 1) {
            console.log('Validaciones, no es primo:', false);
        }
    } console.log('Es primo:', true);                       
}                                                                                                     



 

//Declaracion switch

let pruebaSwitch = "Negro"

switch (pruebaSwitch) {
    case "Naranja":
        console.log("Naranjas");
        break;
    case "Azul":
        console.log("Cielo");
        break;
    case "Negro":
    case "Blanco":
        console.log("Un panda xd");
        break;
    case "Amarillo":
        console.log("Pollito");
        break;
    default:
        console.log("Color no disponible");          

};

console.log("Ingrese un color");



let baz = 9;
let exit = "Neko";

switch(baz) {
  case 9:
    exit += "-chan";
    exit += " desu,";
  case 2:
    exit += " boku no";
    exit += " neko :3";
    exit += "!!!"
    console.log(exit);
    break;
  default:
    console.log("Doesn't exist");
}

console.log("It's how is done");




let hito = "y";
let exit1 = 2; 

switch (hito){
    case "y":
        exit1 += 2; 
        exit1 += 3; 
    case "x":
        exit1 -= 10;  // La operacion es exit1 (2) + 2 + 3 = 7 - 10 = -3
        console.log ("R/: Operacion: ", exit1); // -3
        break;
    default:
        console.log ("idk");           
};

console.log("    Multiples operaciones, ejemplo con numeros.")





//Break


function mostrandoElBreak (valorx){
    let animal = "gato";
    while(animal.length + valorx.length <= 15) {
      if(animal.length + valorx.length == 10 )
      break;
    }
    console.log (animal + valorx);
  }
  
  mostrandoElBreak (" negro");



  ///// E J E R C I C I O
  // SE HACE PIEDRA PAPEL O TIJERAS CON "IF, ELSE IF, ELSE" Y CON "SWITCH".

  /// CONTROLES DE FLUJO

  let jan = 'Rock';
  let ken = 'Paper';
  let pon = 'Scissors';
  
  function juego (you , bot) {
    if (you === jan && bot === pon) {
      console.log(`You won with: ${jan}. 
  Well done!`);
    } else if (you === pon && bot === jan) {
      console.log(`Bot won with: ${jan}. 
  Try again.`);
    } else if (you === ken && bot === jan){
      console.log(`You won with: ${ken}. 
  Well done!`);
    } else if (you === jan && bot === ken) {
      console.log(`Bot won with: ${ken}. 
  Try again.`);
    } else if (you === pon && bot === ken) {
      console.log(`You won with: ${pon}. 
  Well done!`);
    } else if (you === ken && bot === pon + '. Try again.') {
      console.log (`Bot won with: ${pon}. 
  Try again.`);
    } else {
      console.log ('Draw');
    }
  };
  
  juego(ken , jan); // You won with: Paper. 
  //Well done!
  
  juego(pon, jan);  // Bot wins with: Rock. 
  // Try again.



  /// SWITCH
  
jan = 'Piedra';
ken = 'Papel';
pon = 'Tijeras';


let You = pon;
let Bot = ken; 

switch (true) {
    case (You === jan && Bot === pon 
        || You === ken && Bot === jan  
        || You === pon && Bot === ken):
      console.log('Ganaste!');
       break;
    case (You === Bot):
      console.log('Empate');
      break;
    default:
      console.log('Pierdes');
};
  




// Arrays 
//Metodos combinados

let frutas = [];

frutas[1] = 'Maracuya';
frutas[2] = 'Manzana';
frutas[0] = 'Banano'; 

frutas.unshift('Mango'); //Queda de primero en la lista
frutas.push('tresa'); //Queda de ultimo

var arreglo = frutas[4].split(''); // Se convirtió el string en un array para poder ser modificado
arreglo.shift(); // Se quitó la 't'
arreglo.unshift ('F');
var arregloF = arreglo.join(''); //Fresa

console.log(arregloF); // Fresa

frutas.pop(); //remueve el elemento 'tresa' de la lista

frutas.push(arregloF); //Agrega el elemento modificado y arreglado a la lista


console.log(frutas); // [ 'Mango', 'Banano', 'Maracuya', 'Manzana', 'Fresa' ]



//Metodo '.forEach'

let ranNum = [15, 10, 5, 8, 9, 13, 50, 120, 100, 99];

var entreDiezYCien = ranNum.forEach((numi) => {
  if(numi >= 10 && numi <= 100) {
    console.log(numi); // 15, 10, 13, 50, 100, 99
  }
});



let arr = ['Gato', 'Pez', 'Canario', 'Aguila'];

arr.forEach((words) => {
    if (words.length < 6) {
        console.log(words); // Gato, Pez
    } 
});


// Metodo '.map'

let pruebaFeli = ['guila', 'mor', 'rtes'];

pruebaFeli.map((word) => {
    var wordS = word.split('');
    wordS.unshift('A');
    var wordFx = wordS.join(''); 
    console.log(wordFx);       //Agrega una 'A' al inicio de cada palabra    
});                                                // Aguila, Amor, Artes



//Metodo '.splice'

//Dejar solo los animales domesticos

let animalesDomesticos = ['Canario', 'Perro', 'Leon', 'Jirafa', 'Tigre', 'Gato', 'Conejo'];

let pos = 2;
let numElementos = 3;
let añadirUnAnimalD = 'Cuyo';

let adiosSalvajes = animalesDomesticos.splice(pos, numElementos, añadirUnAnimalD); // (2, 3, cuyo)

console.log(animalesDomesticos); // [ 'Canario', 'Perro', 'Cuyo', 'Gato', 'Conejo' ]





// Eliminar los animales domesticos del array y dejar solo los domesticos, ademas añadir 2 animales nuevos en las posiciones
// 2 y 4

let animalesSalvajes = ['Vaca','Leon', 'Canario', 'Aguila', 'Perro', 'Gato', 'Jirafa', 'Tigre', 'Conejo'];

animalesSalvajes.splice(0, 1), //Se va la vaca
animalesSalvajes.splice(1, 1); //Se va el canario
animalesSalvajes.splice(2, 2, 'Oso'); //Se va el perro y el gato y entra el oso.
animalesSalvajes.splice(4, 1, 'Cocodrilo'); // Se va el conejo y se ingresa al cocodrilo en la lista


console.log(animalesSalvajes); // [ 'Leon', 'Aguila', 'Oso', 'Jirafa', 'Cocodrilo', 'Conejo' ]




// Crear una iteracion desde el numero 100 hasta el 200 y que corte en el numero 150
  // Se usó for, continue y break

  console.log('Start.')
for(o = 100; o >= 100; o++) {
  if(o === 150){
    console.log('-cut-')
    continue;
  }                              // Start. 100, 101, 102, 103, 104, 105..., 149 -cut- 151, 152, 153, 154, 155..., 200 End.
  if (o === 201) {
    console.log('End.')
    break;
  }
  console.log(o);
}





// Crear un if con respuestas automaticas segun la situacion sin usar strings de respuesta
  // if con diccionario

  const TYPE = Object.freeze({
    ERROR: Symbol(),
    WARNING: Symbol(),
    INFO: Symbol()
  });
  
  
  function imprimirMensaje (tipo) {
    if (tipo === TYPE.ERROR) {
        return 'Error';
    } else if (tipo === TYPE.WARNING) {
        return 'Advertencia!'
    } else if (tipo === TYPE.INFO) {
        return 'Informacion acerca del producto'
    } else {
        return 'Mensaje no reconocido'
    }
  };
  
  console.log(imprimirMensaje(TYPE.INFO)); // 'Informacion acerca del producto'





// Transformar el array de numbers en strings y agregar el string 'Numbers: ', al inicio de cada elemento

const numisToWords = [2, 4, 6, 8, 10];


numisToWords.map((n) => {
    let noWords = n.toString();
    let separate = noWords.split('');
    separate.unshift('Numbers: ');
    let all = separate.join('');
    console.log(all);     
});





// Comprobar si todos los elementos de un array son iguales

let same = ['si', 'si', 'si', 'no', 'si'];

let allTheSame = same.every(word => same[0] === word);

allTheSame; // false


 // Otra manera (Pero es mas efectiva la primera)

for(i = 0; i < same.length - 1; i++) { // Se pone el length -1 para que se recorra un indice menos
    if(same[i] !== same [i+1]) {    
        console.log(false);                 // Aqui se usa el [i+1] para comparar con el siguiente elemento del array
    }                                 // Ej: [1, 2, 3, 4] ==> el 1, se compara con el 2, el 2, con el 3 y asi sucesivamente
}
console.log(true);




// Crear un array con los dias de la semana donde si es sabado o domingo returne algo como 
// "Es fin de semana" y si es dia entre semana algo como "Es dia laboral"

const dias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



for(i= 0; i < dias.length ; i++) {
    if (dias[i] === dias[0] || dias[i] === dias[dias.length -1]) {
        console.log('Es fincho: ' + dias[i]); // Sunday, Saturday
    } else {
        console.log('A trabajar vago: '+ dias[i]); // Monday, Tuesday, Wednesday, Thursday, Friday
    }
}



   // Otra manera de hacerlo


function dependeElDia (dia) {
    if (dia === dias[0] || dia === dias[dias.length -1]) {
        console.log(`Fincho: ${dia}`); // Sunday, Saturday
    } else {
        console.log(`Entre semana: ${dia}`); // Monday, Tuesday, Wednesday, Thursday, Friday
    }
}


for(dia of dias){
    dependeElDia(dia);
}
// O tambien
for(i = 0; i < dias.length; i++){
  dependeElDia(dias[i]);
}




// El 9 debe ser el primer numero entero, si lo es debe retornar true, de lo contrario false 
  //Ej: 9 || 9870 || 95 ==> true    ///  89 || 490 || 789 || 35 ==> false


let num = 98

let FirstNine = num.toString();

if(FirstNine[0] === '9') {
    console.log(true); // true
} else {
    console.log(false);
}

console.log(FirstNine); // '98'
                // Se transforma el numero a un string para poder acceder a cada 'letra' por su indice como si fuese un array
     



         
// Unir el array para que quede la palabra 'Kuro neko' y luego transformarla en un array de esos 2 strings


let miniArray = Array.from(['Ku', 'ro', 'neko']);

miniArray; // [ 'Ku', 'ro', 'neko' ]

let oneWord = miniArray.join('');

oneWord; // Kuroneko
Array.from(oneWord); // [ 'K', 'u', 'r', 'o', 'n', 'e', 'k', 'o' ]

let un = oneWord.slice(0, 4);
let ion = oneWord.slice (4);
let space = ' ';

Array.of(un + ' ' + ion) // [ 'Kuro neko' ]

// O tambien
Array(un + space + ion); // [ 'Kuro neko' ]





// Crear una funcion que salude a todos los estudiantes contenidos en un array

let estudiantes = ['Feli', 'Kyoko', 'Marcos', 'Yuki'];

// Con for()

function Saludo (estudiante) {
console.log(`Welcome ${estudiante}!`); // Welcome Feli!, Welcome Kyoko!, Welcome Marcos!, Welcome Yuki!
};

for (i = 0; i < estudiantes.length; i++) {
  Saludo(estudiantes[i]);
}

// O tambien
for(estudiante of estudiantes) {
  Saludo(estudiante)
}


// Con while ()

function salute (estudiante) {
  console.log(`Douzo ${estudiante}!`); // Douzo Feli!, Douzo Kyoko!, Douzo Marcos!, Douzo Yuki!
}

while(estudiantes.length > 0) {
 var estudiante = estudiantes.shift(); // Se pone este Shift para que vaya tomando y eliminando el primer elemento del array
 salute(estudiante);                   // en cada iteracion, hasta llegar a 0 y que la condicion se deje de cumplir
}





// Iterar las notas en un bucle y retornar el promedio 

const grades = [1, 2, 3, 4, 5];

grades.length; // 5

let suma = 0;
let promedio;


for(i = 0; i < grades.length; i++) {
  suma += grades[i]; // 1, 3, 6, 10, 15
  
}

suma; // 15
promedio = suma / grades.length; // 3





// Crear una tabla del 6 que vaya de 0 a 60 

let multiply;
let tablaSeis = [];

for(i = 0; i <= 10; i++) {
    multiply = i * 6;
    tablaSeis.push(multiply);
}

tablaSeis; //[0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]


// O tambien 
let tableOfSix = [];

 for (i = 0; i < 11; i++) {
  tableOfSix.push(i * 6);
 }

 tableOfSix; //[0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]





// Recorrer arreglo y crear & retornar un arreglo con los numeros mayores a 100 sin incluir el 100

var integers = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22];

let hundredPlus = [];

integers.filter((n) => {
    if(n > 100) {
        hundredPlus.push(n);
    }
})

hundredPlus //[200, 120, 260, 148]

// O tambien
let mayorACien = [] = integers.filter((num) => num > 100);

mayorACien;





// Crear un arreglo con los numeros de 100 a 200

// Con While

let i = 100;
let until200 = [];

while(i > 99 && i < 201) {
  until200.push(i++);
}

until200 // Array [100... - ...200]

// Con for

let arrTill200 = [];

for(it = 0; it <= 200; it++) {
  if(it >= 100) {
    arrTill200.push(it);
  }
}

arrTill200; // Array [100... - ...200]





// Se esta creando un programa para estudiantes y se necesita controlar la edad, para que sea menor a 18 y que no sea 0 
// o numeros negativos (porque en una edad eso no existe)

var edad = Number(prompt("Ingrese un valor: "))

while (edad > 18 || edad <= 0){
  edad = Number(prompt("Ingrese un valor correcto: "))
}

console.log("Gracias por ingresar al programa")
 




// Hay un array de estudiantes, una variable 'death' y 'neww'
// Si 'death' es igual a 0 se debe agregar al estudiante 'neww' al final del arreglo sin eliminar a ningun otro 
// y retornar el arreglo
// Si 'death' es mayor que 0 se deben eliminar el numero de estudiantes del final, agregar al estudiante 'neww' y retornar
// el arreglo 
  // SOLO SE DEBEN ELIMINAR TODOS LOS ELEMENTOS DEL ARRAY ORIGINAL, SOLO LOS INDICADOS POR EL INDICADOR 'DEATH'

  let students = ['Feli', 'Kyoko', 'Marcos', 'Yuki'];

  let death = 2;
  let neww = 'Hyori'
  
  while(death > 0) {
      students.pop();
      death--;
  }
  students.push(neww);
  console.log(students); // [ 'Feli', 'Kyoko', 'Hyori' ]
  
  
  
  
  
  let students1 = ['Feli', 'Kyoko', 'Marcos', 'Yuki']
  
  let deleteToAdd = (student, deathh, nuevo) => {
      if(deathh === 0) {
          student.push(nuevo);
          console.log(student);
      } else if(deathh > 0) {
          student.splice(-deathh, deathh, nuevo);
          console.log(student); // [ 'Feli', 'Kyoko', 'Hyori' ]
      }
  }
  
  deleteToAdd (students, death, neww ); 





// Se creara una funcion con un parametro string en la que se detectara si el string tiene la letra 'k' 
// ya sea mayuscula o minuscula y si la tiene retornara 'Tiene la letra k'

function tieneK (string) {
    let arrWord = string.split('');

    for(i = 0; i < arrWord.length; i++)
    if(arrWord[i] === 'k' || arrWord[i] === 'K') {
      console.log('Tiene la letra k');
      break;
    }
  }
    
  tieneK('Kyoko'); // Tiene la letra k
  tieneK('Clock'); // Tiene la letra k
  tieneK('Raton'); 





// Crear una funcion constructora para agilzar el ingreso de datos

class car {
  constructor(brand, model, year) {
      this.marca = brand,
      this.modelo = model,
      this.anio = year,
      this.details = function () {
          return `Este auto es un ${this.marca + ' ' + this.modelo} del año ${this.anio}`
      }
  }
}


const ferrariTestarossa = new car ('Ferrari', 'Testarossa', 1957);
const SubaruImprezaWRC = new car('Subaru', 'Impreza WRC', 1997);

SubaruImprezaWRC.details(); // Este auto es un Subaru Impreza WRC del año 1997 
ferrariTestarossa.year; // 1957





// Hay una funcion con el parametro "car" que es un objeto, si el objeto contiene la propiedad "licencePlate" o "placa" se 
// debe retornar el objeto original con una propiedad "drivingLicense" como true pero si no la tiene se debe retornar el objeto
// original con la propiedad "drivingLicense" como false;

const miAuto = {
  marca: 'Ferrari',
  modelo: 'Testarossa',
  annio: 1957,
  placa: 'B 4118 OZ',
  info: function() {
    return `${this.marca} ${miAuto.modelo} del año ${this.annio} con maricula ${this.placa}.`  
  }
};


function solucion (car) {
  car.licenciaDeConducir;

  if(car.placa === undefined) {
      car.licenciaDeConducir = false;
  } else {
      car.licenciaDeConducir = true;
  }
  return car; // *Retorna el objeto original y la propiedad de licencia de conducir como true,
}

solucion(miAuto);


// Otra manera de realizarlo
drivingLicense(miAuto);

function solucion2 (car) {
  car.drivingLicense = 
  Boolean(car.licensePlate);
  return car;
}  

solucion(miAuto);


//Crear una funcion que reciba un entero y dibuje un cuadrado de esta dimension con simbolos +

function square (n) {
  return Array(n)
  .fill('+' .repeat(n))
  .join('\n')
}

console.log(square(4)); // ++++
                        // ++++
                        // ++++
                        // ++++





 
 



 