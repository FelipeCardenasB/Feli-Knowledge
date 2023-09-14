//Los arrays o arreglos (son un objeto global dentro de javascript y estan asociados a una serie de metodos)
  
    // Los arrays estan compuestos por elementos e indices o keys (El numero de indices siempre sera menor al numero de elementos
    // ya que el indice de los elementos comienza a contar desde 0)
      // elementos          [ elemento 1, elemento 2, elemento 3, elemento 4 ]
      // keys o indices          0,          1,          2,          3



// Crear Array.

var listaDeCompras = [];

listaDeCompras[0] = 'Galletas';
listaDeCompras[1] = 'Mango';
listaDeCompras[3] = 'Carne'
listaDeCompras[2] = 'Comida para gato'
listaDeCompras[5] = 'Helado'

//Ver elementos del array.

console.log(listaDeCompras); // ['Galletas', 'Mango', 'Comida para gato', 'Carne', <1 empty item>, 'Helado'] => imprime en orden 
                               //numerico. No hay elemento 4 por lo que en lugar coloca empty item pero lo cuenta como elemento.


// Otra manera de llamar a un elemento de un array es a traves de la creacion de una variable 

 var elementoDeArray = listaDeCompras[1];
 console.log(elementoDeArray); // Mango


 console.log(listaDeCompras[5]); // Helado  (Como acceder a un elemento del array mediante su indice)

 console.log(listaDeCompras['2']); // Comida para gato

 console.log(listaDeCompras.length); // 6


 // Se puede cambiar un elemento del array indicando su indice y proporcionando un nuevo valor

 listaDeCompras[3] = 'Pollo'; // Se cambia el elemento carne por el elemento pollo  



 //Para acceder al primer y ultimo elemento de un array

 let elementoDelArray = ['Primer e.', 'Segundo', 'Ultimo e.'];

 //Primero
 let primero = elementoDelArray[0]; // Primer e.
 //Ultimo
 let ultimo = elementoDeArray[elementoDelArray.length -1]; // Ultimo e.




// Bucles en los arrays (sirven para recorrer los elementos del array y depende de la condicion asignada ejecutar determinada/s
// instruccion/es)

 // for

let forNums = [1, 2, 3, 4, 5];

for(i = 0; i < forNums.length; i++) {{
    return forNums[i] * 2;
}} // Multiplicara cada numero del array x2


// while 

let arrW = [];
  

while (arrW.length < 3 ) {
    arrW.push('あか: ' + 'Aka(rojo)');
}

console.log(arrW); // [ 'あか: Aka(rojo)', 'あか: Aka(rojo)', 'あか: Aka(rojo)' ]





// METODOS DE LOS ARRAYS (Un metodo es una funcion nativa o preestablecida en los lenguajes de programación, que sirven para
// ahorrar lineas de codigo y realizar tareas de un modo mas simple)

// METODO length (sirve para saber cantidad de elementos de un array)

let MarcasDeAutos = ['Mercedes Benz', 'Aston Martin', 'Ferrari', 'Lamborghini', 'McLaren'];
let numElementos = MarcasDeAutos.length; 
numElementos; // 5
'Numero de marcas en la lista:', MarcasDeAutos.length; // Numero de marcas en la lista: 5 



let misMascotas = ['Alaska', 'Ambar', 'Missy'].length;

console.log(misMascotas); //3





// METODO indexOf (Encuentra el indice de un elemento en el array)

let animales = ['Oso', 'Pajaro', 'Lobo', 'Gacela', 'Guepardo'];
let posicionI = animales.indexOf('Lobo'); 
    posicionI; // 2
animales.indexOf('Oso'); //0
animales.indexOf('Guepardo'); //4





// METODOS push, unshift, pop & shift.

let FPSGames = ['Call of duty', 'Valorant', 'CS:GO' ];

// METODO ".push" (Sirve para agregar un nuevo elemento al final del arreglo y devuelve la nueva longitud del array)
// METODO ".unshift" (Sirve para agregar un nuevo elemento al inicio del arreglo y devuelve la nueva longitud del array)

FPSGames.unshift('XDefiant');   // Pone el elemento agregado ('XDefiant') con el metodo al inicio de la lista.
FPSGames.push ('Gears of war', 'Ghost Recon'); // Pone el elemento agregado ('Gears of war') con el metodo al final de la lista.

// Metodo ".pop" (Sirve para eliminar el ultimo elemento agregado al array)
// Metodo ".shift" (Sirve para eliminar el primer elemento agregado al array)

FPSGames.pop();   // Elimina el elemento ('Gears of war') y si no se hubiese agregado, habria eliminado el elemento CS:GO.
FPSGames.shift(); // Elimina el elemento ('XDefiant') y si no se hubiese agregado, habria eliminado el elemento 'Call of duty'.

console.log (FPSGames); 





// METODO .splice (Sirve para eliminar un unico elemento mediante su posicion o para elminar elementos a partir de una 
// determinada posicion. Tambien sirve para reemplazar un elemento de posicion)

spliceSyntax = (start, deleteCount, item1, item2); // start es la posicion del index desde el que se comienza, delete count es
                                                   // el numero de elementos que se eliminan desde la posicion indicada e item
                                                   // son los elementos que se reemplazan o se agregan.


let eliminarYReemplazar = ['Delete me', 'Debe quedar el que', 'Eliminar', 'Y este de aqui','Se', 'eliminan', 'estos', 'elementos']; 
                                                                         // Index order : [0,1,2,3,4,5,6,7]; num elementos:8

eliminarYReemplazar.splice(0, 1); // Elimina 'Delete me', el elemento del indice 0, cambiando el indice para cada elemento.

let replaceThisElement =  eliminarYReemplazar.splice(1, 1, 'se reemplazó'); // Reemplaza el elemento del indice 1 'Eliminar'

let eliminarElementos = eliminarYReemplazar.splice(3); // Se eliminó desde 'Se' (que estaba en el indice 3 debido a la previa 
                                                          // eliminacion de 'delete Me' del indice 0, por lo que su numero de  
                                                       // indice cambio de posicion de 4 a 3.), todos los elementos desde esa
                                                                                                // posicion fueron eliminados

console.log(eliminarYReemplazar); // [ 'Este queda', 'se reemplazó', 'se conserva' ]

console.log(eliminarElementos);  //  [ 'Debe quedar el que', 'se reemplazó', 'Y este de aqui' ]

//EXTRA
// Formas de eliminar el primer y ultimo elemento de la lista de una manera distinta (en base a encontrar el primer
// y ultimo elemento de un array):

  // array.splice(array[0], 1) ==> para eliminar solo / o desde el primer indice de la lista
  // array.splice(array.length -1) ==> para eliminar el ultimo de la lista.





// METODO .slice (sirve para copiar un array o parte de un array y lo guarda en un nuevo array)

sliceSyntax = (startIndex, finishIndex) // El  elemento del indice de llegada final no sera tomado dentro de los valores copiados

let ciudades = ['Bogotá', 'Madrid', 'Barcelona', 'Dublin', 'Buenos Aires', 'Toronto', 'Los Angeles']
                                                           // Index order: [0,1,2,3,4,5,6];  num elementos: 7

//Para copiar todo el array
let copyAll = ciudades.slice();
copyAll; // [ 'Bogotá', 'Madrid', 'Barcelona', 'Dublin' ]

//Para copiar una parte
let copyCities = ciudades.slice(1, 5); // Copia desde el indice 1 hasta el indice 5 pero no incluye su valor o elemento.

console.log(copyCities); // [ 'Madrid', 'Barcelona', 'Dublin', 'Buenos Aires' ];




// METODO ".includes" (Sirve para determinar si un arreglo incluye o no un elemento, este arroja un valor booleano).

let bandasRockYMetal = ['Avenged Sevenfold', 'Metallica', 'My Chemical Romance', 'The Strokes'];

console.log(bandasRockYMetal.includes('Metallica')); // true

var includeBands = bandasRockYMetal.includes ('Megadeth');
console.log(includeBands); // false




// METODO ".every" (Sirve para saber si absolutamente todos los elementos de un arreglo cumplen con una condicion, da un boolean)

var numeros = [20, 15, 9, 8, 5];

console.log(numeros.every(num =>{
    return num < 50 
})); // true

var cumplenCondicion = numeros.every(num => {
    return num > 5
}); //La condicion es que todos los numeros sean mayores a 5.

console.log (cumplenCondicion); // false
 

 // Con strings
 
 let letters = ['si', 'si', 'si', 'no', 'si'];

 let todosIguales = letters.every(element => letters[0] === element)
 
 console.log(todosIguales); // false




// METODOS split y join.


// METODO ".split" (convierte un string en un arreglo, donde cada elemento contendrá un sub-string, 
                                                //dependiendo del parámetro divisor que indiquemos)


// METODO ".join" (Convierte un arreglo en un string, uniendo todos los elementos en una cadena)


let palabraBase = 'Harros';

let palabraSeparada = palabraBase.split('');         // [ 'H', 'a', 'r', 'r', 'o', 's' ]  (Si en lugar de ('') se hubiera puesto
palabraSeparada.shift();   // Se removió la 'H'    //(' ') O ('letra, vocal o numero'), se hubiesen hecho las separaciones donde
palabraSeparada.pop();     // Se removió la 's'                                                        // hubieran esos valores.                 
palabraSeparada.push('z'); // Se agregó una 'z' al final, que reemplazó a la 's'  


console.log(palabraSeparada); // [ 'a', 'r', 'r', 'o', 'z' ]

palabraArregalda = palabraSeparada.join(''); // Se pone ('') para que una todo sin espacios, si se hubiese colocado un espacio,

console.log(palabraArregalda); // arroz             // palabra o numero, lo hubiera puesto en medio de cada elemento, ej: (' ')
                                                                                                              // ('a r r o z').



palabraConAMayuscula = palabraArregalda[0].toUpperCase() + palabraArregalda.substring(1); // EXTRA (para convertir una letra
console.log(palabraConAMayuscula); // Arroz                                               // en mayuscula y luego mostrar el 
                                                                                                         // string completo.


                                                                                                         

// METODOS forEach y map (Sirven para recorrer elemento por elemento y realizar una accion en cada uno) 


// METODO ".for each" (Permite recorrer un arreglo y realizar una accion sobre el, pero NO hará ningun cambio sobre el mismo)

let numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var numerosPares = numeritos.forEach((numP) => {
    if (numP %2 ===0 ){        // Aqui solo hará console.log de los numeros pares
        console.log(numP);
    }
}); 


var imprimeTodos = numeritos.forEach ((num) => console.log(num)); //Hace un console.log de todos los elementos.


// METODO ".map" (Tambien permite recorrer y realizar acciones en cada elemento de un array, pero este devuelve un nuevo array 
                                                           // con los elementos modificados, este si hace cambios en el array)

                                                           
let num = [1, 3, 5, 7];

var porTres = num.map((numero) => {
     return numero * 3;               // Multiplica los elementos x3 en este caso, y devuelve los resultados.
});

console.log(porTres); // [3, 9, 15, 21]  



let pruebaFeli = ['guila', 'mor', 'rtes'];

var varConA = pruebaFeli.map((word) => {
    var wordS = word.split('');
    wordS.unshift('A');
    var wordFx = wordS.join('');
    console.log(wordFx); //Agrega una 'A' al inicio de cada palabra    
});                      //Aguila, Amor, Artes





// METODO .some (Devuelve true al encontrar el primer objeto que cumpla determinada condicion)

let personas = [
    {name: 'Felipe', age: 21},
    {name: 'Kyoko', age: 17},
    {name: 'Adriana', age: 39},
    {name: 'Carlos', age: 40}
];

let menorDeEdad = personas.some((people) => {
    return people.age < 18;
})

menorDeEdad; // true





// METODO .concat (sirve para sumar arrays y que se vuelvan en uno solo)

let firstArray = ['a', 'b', 'c'];
let arrayPlus = ['d', 'e', 'f'];
let arrayPlus2 = ['g', 'h', 'i'];

let newArray = firstArray.concat(arrayPlus, arrayPlus2);

console.log(newArray); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']





// METODO filter (Sirve para filtrar los elementos de un array que cumplan determinadas condiciones, ya sea una o varias
                                                                         // y crea un array con los elementos filtrados)

const numis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let impares = numis.filter(n => n % 2 === 1);

impares; //[ 1, 3, 5, 7, 9 ]



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

let primos = nums.filter((n) => {
    if(n <= 1) {
        return false;
    }
    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    } {
        return true;
    }
})

console.log(primos); // [ 2, 3, 5, 7, 11, 13, 17 ]





const animals = [
    {nombre: 'Caballo', domestico: true},
    {nombre: 'Gato', domestico: true},
    {nombre: 'Hipopotamo', domestico: false},
    {nombre: 'Jirafa', domestico: false},
    {nombre: 'Perro', domestico: true},
    {nombre: 'Conejo', domestico: true},
    {nombre: 'Hiena', domestico: false},
]

let animalesSalvajes = animals.filter(animal => animal.domestico === false);

console.log(animalesSalvajes); // [
//    { nombre: 'Hipopotamo', domestico: false },
//    { nombre: 'Jirafa', domestico: false },
//    { nombre: 'Hiena', domestico: false }
//  ]

let animalesDomesticos = animals.filter(animal => animal.domestico === true);

console.log(animalesDomesticos); // [
//    { nombre: 'Caballo', domestico: true },
//    { nombre: 'Gato', domestico: true },
//    { nombre: 'Perro', domestico: true },
//    { nombre: 'Conejo', domestico: true }
//  ]





// Para aumentar y disminuir el valor de un array 

const menuRestaurant = ['Hamburguesa', 'Perro caliente', 'Empanadas XXL', 'Salchipapa']; // 4 elementos

menuRestaurant[6] = 'Mazorcada';


// Aumentar (se pone un numero mayor al numero de elementos existentes en el array)

menuRestaurant.length = 10; //['Hamburguesa', 'Perro caliente', 'Empanadas XXL', 'Salchipapa', <2 empty items>, 'Mazorcada',
//                            <3 empty items>]


// Disminuir (Al disminuir se pueden eliminar algunos elementos)

menuRestaurant.length = 2; // ['Hamburguesa', 'Perro caliente']





// Array.from() (Crea un array a partir de un objeto iterable)

let word = 'Palabra';


Array.from(word); // ['P', 'a', 'l', 'a', 'b', 'r', 'a']


Array.from([1, 2, 3], (x) => x + x); // [2, 4, 6] 
                                                   // Para estos casos es necesaria la coma ',' luego del arr
Array.from([3, 2, 1], (y) => y * 2); // [6, 4, 2]





// Array.isArray() (Devuelve true si el valor es un array y false si no lo es)

let anArray = ['Un', 'Array'];

let notAnArray = 'Word';

Array.isArray(anArray); // true
Array.isArray(notAnArray); // false





// Array.of() (Crea una instacia array con un numero de variables que se pasan como argumentos independiente de su tipo)

Array.of(1, 'string', true, false, null, undefined); // [ 1, 'string', true, false, null, undefined ]

Array.of(1, 2, 3); // [1, 2, 3]

Array.of(9); // [9]


// Constructor Array (Tambien crea una instancia array que igual se inicializa con los elementos dados).

    Array(1, 2, 3); // [1, 2 ,3]
    Array('Gato'); // ['Gato']


    // Tambien se puede crear un array usando este constructor con parametros numericos, su propiedad length estara 
                                                // establecida por este numero y sus elementos seran ranuras vacias

    const comida = new Array(4); // [ , , , ]
    
    comida[0] = 'Arroz';
    comida[1] = 'Carne';
    comida[3] = 'Lechuga';

    comida; // ['Arroz', 'Carne', , 'Lechuga']


     // Se puede crear el array si se pasa mas de un argumento al constructor, y el array se crea con los argumentos dados

     let constructor = new Array('Crea nuevo array');

     constructor; // ['Crea nuevo array']
                                                        

    // La diferencia con Array.of() es que se si se inicializa con un solo numero crea un array con ese numero de espacios vacios
       
       Array(); // [ , , , , , , ]
       Array.of(7); // [7]




    
// .findIndex (Devuelve el indice del primer elemento que cumpla con determinada condicion de una funcion)

const fruits = ['Mango', 'Papaya', 'Lulo', 'Melocoton'];

let functIndex = (f) => f.length < 6;

let index = fruits.findIndex(functIndex);

index;// 0  (Mango que esta en el indice 0 cumple dicha condicion)



const n = [1, 7, 4, 6, 5];

let prime = n.findIndex ((num) => {
    if(num <= 1) {
        return false;
    }
    for(i = 0; i < n.length; i++) {
        if (num % i === 0) {
            return false;
        } else {
            return true;
        }
    }
})

prime; // 1 (El 7 es el primer elemento que cumple la condicion de la funcion, ser numero primo)