function sumaTres(x){
    console.log(x + 3);
}

sumaTres(5);


// 3 MANERAS DE DECLRAR UNA FUNCION

//PRIMERA
function sumaTres(x) {
    return x + 3;
};
//(Se returna el valor) || Funciones declarativas


//SEGUNDA
var sumaTres = function (x) {
    return x + 3;
};
//(Se guarda la funcion dentro de una variable) || Funciones de expresion


//TERCERA
var sumaTres = (x) => {
    return x + 3;
};
// {Se usa la sintaxis funcion de flecha(=>)}


function suma(x, y) {
    console.log(x + y);
}

suma(1, 2);







// Plantilla de cadena de texto por si necesito ingresar muchos datos. ===> ` ${variable}` 

function saludar (miembroDeClase) {
    console.log(`Hola ${miembroDeClase}`);
};

saludar('Felipe');   // Hola Felipe
saludar('Adriana');  // Hola Adriana
saludar('kyoko');    // Hola Kyoko


const usuario = {
    nombre: 'Kyoko',
    edad: 17,
    saludo: function() {
        console.log(`Konnichiwa!
 Douzo ${this.nombre}-san.`);
    }
};

usuario.saludo() // Konnichiwa!
                 //  Douzo Kyoko-san.

