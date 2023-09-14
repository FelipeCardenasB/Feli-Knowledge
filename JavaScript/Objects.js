// Un objeto es una variable que sirve para guardar informacion, en programacion un objeto es una representacion de la realidad
// cuyas caracteristicas propias se definen como atributos y sus acciones como metodos.
   // **En javascript todo es un objeto exceptuando los valores primitivos, ya que no tienen metodos**
var Syntaxis;

let object = {
    propiedadOAtributo: 'Value',
    propiedad: 'Valor1',
    'propiedad 2': 2,   // En la propiedad es opcional poner las comillas, a menos que la propiedad tenga espacios, ahi si es                                    
    atributo3: 'poner coma para separar',                                                                      // obligatorio.   
    atributoToDelete: 'Se va a borrar abajo', 
    'delete me': 1,                                                             
    metodoObjeto: function() {
        return`Recuerda ${this.atributo3} para separar cada atributo`
    },
    metodo2: function() {
      return 'Es un objeto';
    }
};      // Las propiedades son los atributos del objeto, y la propiedad 'metodoObjeto' es un metodo del mismo



// Para acceder a los valores del objeto: (objeto.propiedad)

 // Mediante notacion de punto
 object.metodoObjeto(); // Recuerda poner coma para separar para separar cada atributo 
 
 // Mediante la notacion de corchetes: (objeto["propiedad"]) ==> Se pone el nombre de la propiedad ENTRE COMILLAS en el corchete.
 object['propiedad 2']; // 2              
 object['metodo2']();  // Es un objeto    
 
 //**EXTRA
  // Para acceder a una propiedad con comillas y espacio solo se puede acceder  
   // a traves de la notacion de corchetes. ej: obj = {"propiedad 1": 1} => obj["propiedad 1"]
   // pero si esta entre comillas y no tiene espacio se puede acceder desde la notacion de punto ej: ob = {'new': 2} => ob.new 
   
  // En el metodo de un objeto es necesario poner los parentesis para ejecutar la funcion, si no solo mostrara 
   // la funcion sin ejecutar y en el metodo de corchetes se ponen los parentesis fuera del corchete.                                   
 




// Para añadir una nueva propiedad al objeto se puede hacer a traves de la notacion de corchetes o de punto con el nuevo valor

object. newAtribute = 'Valor añadido';
                                                    //Se añaden al final del objeto
object['new property'] = 'Propiedad añadida';





// Para cambiar una propiedad del objeto tambien se usan las notaciones de punto o corchetes con la propiedad y el nuevo valor

object.propiedadOAtributo = 'Nuevo valor';

object['propiedad 2'] = 'Valor reemplazado';





// Para eliminar una propiedad del objeto se pone la palabra reservada delete seguida de la propiedad del objeto
 // Ejemplo: eliminamos las propiedades metodo2, atributoToDelete y 'delete me'

delete object.metodo2; // Es una funcion pero en el momento de ser eliminada no es necesario colocar los parentesis =>(metodo2())
delete object.atributoToDelete;
                                  // Elimina estas propiedades del objeto.
delete object['delete me'];





// Objeto contexto this (Hace referencia a diferentes valores segun su contexto de ejecucion pero en objetos hace referencia
 // al propio objeto)


const miAuto = {
  marca: 'Ferrari',
  modelo: 'Testarossa',
  annio: 1957,
  placa: 'B 4118 OZ',
  info: function() {
    return `${this.marca} ${miAuto.modelo} del año ${this.annio} con maricula ${this.placa}.`  
  }
};

miAuto.info(); // Ferrari Testarossa del año 1957 con matricula B 4118 OZ.

// ~Aqui 'this' hace referencia al objeto 'miAuto'~ (por lo que poner "this.modelo" o" miAuto.modelo" seria igual).


// Si se pone la propiedad sin el this, va a mostrar un error de referencia, que retornara undefined ya que no lo
// tomara como si fuese propiedad del objeto (En un caso busca una variable con ese nombre, y si existe retornara el
// valor de la variable)
   //Ej:

    let color = 'variable';

    let lapiz = {
      brand: 'Faber Castell',
      color: 'Verde',
      details: function() {
        return `Es un lapiz ${this.brand}, de color: ~${color}~`
      }
    }
    lapiz.details() // Es un lapiz Faber Castell, de color: ~variable~ 

  // No toma la propiedad dentro del objeto sino toma el valor de la variable con el mismo nombre => "color"
  // por esto es importante hacer referencia al objeto. 

 
 
 // Ya que los arrays tambien son objetos se pueden usar sus metodos con la notacion de corchetes (Aunque esto no es recomendable)

 let numeros = [1, 2, 3, 4, 5];

 numeros['length']; // 5
 
 let elevadosAlCuadrado = numeros['map']((num) => num * 2);
 
 elevadosAlCuadrado; // [ 2, 4, 6, 8, 10 ]





// Un objeto puede contener como propiedad otro objeto

const paises = {
  America: {
    AmericaLatina: {
      col: 'Colombia',
      mex: 'Mexico',
      per: 'Peru'
    },
    AmericaDelNorte: {
      can: 'Canada',
      usa: 'Estados Unidos'
    }
  },
  Europa: {
      uk: 'Reino unido',
      alm: 'Alemania',
      esp: 'España'
  },
  Asia: {
      jpn: 'Japon',
      chn: 'China',
      thl: 'Thailandia'
  },
}

paises.America.AmericaLatina.col // Colombia
paises.Asia.jpn // Japon





// Funcion constructora (Sirve para crear varios elementos a partir de un codigo base)
  // Crear varios objetos a partir de un código base se denomina crear una instancia.

function car(brand, model, year) {
  this.brand = brand,
  this.model = model,
  this.year = year
}

 // Para crear un nuevo objeto a partir de la funcion constructora es necesario poner la palabra 'new' antes de la funcion

let newCar = new car('Lamborghini', 'Veneno', 2022);
let newCar2 = new car('Ferrari', 'Testarossa', 1957);

newCar; // car { brand: 'Lamborghini', model: 'Veneno', year: 2022 }
newCar2; // car { brand: 'Ferrari', model: 'Testarossa', year: 1957 }







//Ejercicio, creando un object de mi

let me = { 
    nombre: "Felipe",
    edad: 22,
    profesion: 'Software engineer',
    rango: 'One of the best in the world (top 1%)',
    allInfo: function () {
      return `Hi, I'm ${this.nombre}, I'm ${this.edad} years old, I'm a ${me.profesion}, and I'm ${this.rango}, nice to meet you!`
    }
   };

 me.allInfo(); // Hi, I'm Felipe, I'm 22 years old, I'm a Software engineer, and I'm One of the best in the world (top 1%), nice to meet you!
 me.profesion; // Software engineer








