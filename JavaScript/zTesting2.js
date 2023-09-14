//Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
// Guardar cada nuevo valor en un arreglo y retornarlo.
// Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
// la ejecución y retornar el string: "Se interrumpió la ejecución".
// [PISTA]: utiliza el statement 'break'.



// function breakStatement (num) {
//     let i = 0;
//     let suma = 0;
//     let oneTwo = [];

//     for(i = 0; i < 10; i++) {
//         num += 2;
//         suma += num;
//         oneTwo.push(num);
//         if(suma === i ) { 
//         }
//     }
//     return oneTwo;
// }

// breakStatement(0)




// Hay una funcion con el parametro "car" que es un objeto, si el objeto contiene la propiedad "licencePlate" o "placa" se 
// debe retornar el objeto original con una propiedad "drivingLicense" como true pero si no la tiene se debe retornar el objeto
// original con la propiedad "drivingLicense" como false;


function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:
 
    let sum = 0;
    let oneTwo = [];
 
   for(i = 0; i < 10; i++) { 
    num += 2;
    sum += num;
    oneTwo.push(num);
    for (o = 0; o < oneTwo.length; o++) {
       if(o = sum) {
          return 'Se interrumpió la ejecución';
       }
       if(o = sum) {
          break;
       }
    }
    }
 }

 breakStatement(50);






// function breakStatement(num) {
//     // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
//     // Guardar cada nuevo valor en un arreglo y retornarlo.
//     // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
//     // la ejecución y retornar el string: "Se interrumpió la ejecución".
//     // [PISTA]: utiliza el statement 'break'.
//     // Tu código:
 
//     let sum = 0;
//     let oneTwo = [];
 
//    for(i = 0; i < 10; i++) { 
//     num += 2;
//     sum += num;
//     oneTwo.push(num);
//     if(sum == i) {
//        console.log('Se interrumpió la ejecución');
//     } if (sum == i) {
//        break;
//     }     
//    }
//    console.log(oneTwo);    
//  }

//  breakStatement(50);





