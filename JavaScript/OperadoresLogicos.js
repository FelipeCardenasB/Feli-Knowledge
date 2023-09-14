// && (And) = Permite conjugar 2 o mas condiciones al mismo tiempo 

function mayorYMenorYpar(num) {
    if (num > 5 && num < 10 && num % 2===0) console.log(true);
    else console.log(false);
};


mayorYMenorYpar(6);    // true
mayorYMenorYpar(7);    // false



// || (Or) = Permite conjugar 2 o mas condiciones, pero con un comportamiento distinto en su evaluacion logica

function operadorOr(str) {
    if(str === "Programmation" || str.length<3) console.log("Verdadero");
    else console.log("Incorrecto");
};


 operadorOr("Programmation"); // Verdadero
 operadorOr("Si");            // Verdadero
 operadorOr("Prueba");        // Incorrecto



 // ! (Not) = Permite verificar condiciones opuestas a las normales

 function negacion(permitir) {
    if(permitir !== true) console.log("Es permitido");
 };


negacion(false); // true
negacion(true); 


//COMBINACION OPERADORES LOGICOS

function combinacionOperadores (numero) {
    if (numero >7 && numero %2===0 || numero ===9 ) console.log(true);
    else console.log(false);
};

combinacionOperadores(8);     //True
combinacionOperadores(9);     //True                                         //Nota:
combinacionOperadores(11);    //False              //Para los operadores logicos la precedencia de operadores sigue aplicando.
combinacionOperadores(14);    //True
  

