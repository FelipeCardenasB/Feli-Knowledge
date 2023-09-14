// Crear una funcion constructora y hacer un loop para generar una lista de 30 carros que se vayan construyendo solos
// Que se creen nuevas instancias de la funcion constructora


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






// const personas = [
//   {nombre: 'Pablo', edad: 45},
//   {nombre: 'Maria', edad: 34},
//   {nombre: 'Kyoko', edad: 17},
//   {nombre: 'Raul', edad: 13}
// ]


// let find = false;
// let menor1 = personas.forEach((pipol) => {
//   if (!find) {
//     find = pipol.edad > 12
//   }
// })
// console.log(find);


// let menorDeEdad = Boolean(personas.filter((people) => {
//   return people.edad < 18;
// })[0])

// console.log(menorDeEdad);

// let somee = personas.some((people) => {
//   return people.edad < 18
// })

// console.log(somee);

// // for(i = 0; i < 30; i++){
// //   let marca
// // }


// let personas = [
//   {name: 'Felipe', age: 21},
//   {name: 'Kyoko', age: 17},
//   {name: 'Adriana', age: 39},
//   {name: 'Carlos', age: 40}
// ];

// for(i = 0; i < personas.length; i++) {
//   console.log(personas[i].name);
//   console.log(personas[i].age);
// }


let names = [];


 let student = function(name) {
    this.name = name;
    names.push(name);
 }

 let harry = new student('Harry');
 let stephen = new student('Loth');
 

 console.log(names);
