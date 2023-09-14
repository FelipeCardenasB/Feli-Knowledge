function viajar(destino) {
    if (destino === "Canada") {
        console.log ("Gire a la izquierda");
    } else if (destino === "Rusia") {
        console.log ("Gire a la Derecha");
    } else {
        console.log ('Nos perdimos');
    }
}

viajar ('Colombia');


function comer(platillo) {
    if (platillo === 'desayuno') {
        return 'mañana';
    } else if (platillo === 'cena') {
        return 'noche';
    }
}

comer('cena') // 'noche'



function puedeManejar(edad) {
    if (edad >= 18) {
        console.log(true);
    } else {
        console.log(false);
    }
};

puedeManejar(21);



function aprenderAProgramar(dedicacion) {
    if (dedicacion === 'alta') {
        console.log('se puede');
    } else if (dedicacion === 'baja') {
        console.log('no se puede');
    } else {
        console.log('No hay nada');
    }
};

aprenderAProgramar('alta')



// Operador ternario (Es una forma de generar el if y el else en una sola linea)


//condition (if)    ""    : (else)   ""
 condicion   ?     true   :         false;



 var edad = 21;

 var operadorTernario = edad >= 18 ? 'Es mayor de edad.' : 'No es mayor de edad.';
 
 console.log(operadorTernario); // 'Es mayor de edad'