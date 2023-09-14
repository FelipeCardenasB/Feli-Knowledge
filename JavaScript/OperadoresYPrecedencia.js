//Prueba precedencia
console.log(3+5*2-8); //5

//Prueba precedencia con ()
console.log((3+5)*2-8); //8

//Suma +
console.log(8+39); // 47

//Resta -
console.log(90-76); // 14

//Multiplicacion *
console.log(9*68); // 612

//Division /
console.log(95/6); // 15.833333333333334

//Resto/Residuo %
console.log(95%6); // 5



//(LOS OPERADORES NO SOLO SE APLICAN A NUMEROS)


//Adicion con "Strings" y variables
console.log("Soy " + "Felipe"); // Soy Felipe

var nombre = "Felipe"
var saludo = "Hola " + nombre;
console.log(saludo);           // Hola Felipe


let name1 = "Feli"
console.log ("Hola", name1); //Hola Feli


//Operadores (+= ; -= ; *= ; /= ; %=) {Sirven para sumar o hacer cierta operacion con una variable, para acortar la expresion}

let a = 2;
           //Se quiere hacer una operacion en la que a sea igual a (a + b) 
let b = 5;

     (a = a + b);  // 7

                 //Ambas son lo mismo, '+=' abrevia la expresion

      (a += b);    // 7



      




