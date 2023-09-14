// Bucles (Un bucle es una secuencia de instrucciones que se le asignan a una condicion y se ejecuta hasta que la condicion 
// asignada deje de cumplirse).


// for (Se usa cuando sabemos la cantidad de pasos que se quieren ejecutar/ cuando sabemos las veces que la estructura repetira
                                                                                                 // una o varias isntrucciones)
let suma = 0

for (i =0 ; i<10 ; i++) {
    suma = suma + i;
    console.log('Variable de iteracion: ', i);
}
console.log('Variable Suma: ', suma);



let prueba = 0
for (e =1 ; e<=5 ; e++) {
    prueba = prueba + e;
    console.log("Iteracion o:"+ e);
}
console.log("Suma var prueba:", prueba);



// for ... of  (Se usa para recorrer los valores de los elementos de un array pero no puede cambiar su valor original)

// Syntaxis
for ( var elemento of array){
    //Bloque de código
}

let array = [1, 2, 3, 4, 5];

for (var elemento of array){
    return elemento; // 1, 2, 3, 4, 5 ==> devuelve los elementos del array
}



let ingredientes = ['Azucar', 'Huevos', 'Harina', 'Levadura'];

function prepararPan (ingrediente) {
    console.log(`Para la preparacion necesitamos ${ingrediente}`)
}

for (ingrediente of ingredientes) {     //Para la preparacion necesitamos Azucar
    prepararPan(ingrediente);          //Para la preparacion necesitamos Huevos                                                                                                                                                                     
}                                      //Para la preparacion necesitamos Harina
                                       //Para la preparacion necesitamos Levadura 


    // Otra manera de realizar esta misma operacion es
for (i = 0; i < ingredientes.length; i++) {
    prepararPan (ingredientes[i]);
}


// Para cambiar el array original con el bucle for 

let numbers = [5, 4, 3, 2, 1];

for (i = 0; i < numbers.length; i++) {
    numbers[i] *= 2;
}

console.log(numbers); // [ 10, 8, 6, 4, 2 ]

// Para hacer un duplicado con los nuevos valores sin cambiar el array original

var duplicateOfNumbers = [];

for (number of numbers) {
    duplicateOfNumbers.push(numbers * 2);
}

duplicateOfNumbers; // [ 10, 8, 6, 4, 2 ]   && el array original no cambia






// while (Permite repetir una accion siempre que su condicion sea verdadera)

Syntaxys; while (condición) {
    // Bloque de código
    // Cambiar la condición para salir del bucle
}
 

let sumar = 0; 

while(sumar < 7){
    sumar = sumar + 1; // 1, 2, 3, 4, 5, 6, 7
    console.log(sumar); 
}

let add = 0; 
while(add <= 10) {
    return 
}



// let o = 1;
// while (true) {console.log(o++); } // !!! NO EJECUTAR (Imprime para siempre xd)






// Do... While (Esta sentencia crea un bucle hasta que la condicion de comprobacion se considera como falsa)

let a = 0;
let result = ''

do {
    a += 1;       // o tambien (a = a + 1;)
    result += a;  // o tambien (result = result + a;)
} while (a < 7);  // es verdadera desde que sea menor < que 7

console.log (result); // '1234567'
 console.log (a); // 7


 
let f = 1;

while (f >= 0 && f <= 100) {
    console.log('Only while: ', f++); //solo while
};


do {
    console.log ('do & while: ', f++); 
} while(f > 0 && f <= 110);
