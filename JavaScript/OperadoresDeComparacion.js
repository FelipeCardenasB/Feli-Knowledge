//Operaciones de comparacion
console.log(4<7);
console.log(4<1);
console.log(4>4);
console.log(4==7);
console.log(6==6);

 //Igualdad vs igualdad estricta
 console.log (3==3);      //true
 console.log(3===3);      //true
 console.log(3=="3");     //true
 console.log(3==="3");    //false
 console.log("3"===3);    //false
console.log("f"=="f");    //true
console.log("5"==="5");   //true


 //Asignacion y asociatividad
 var a = 1;
 var b = 2;
 var c = (a = b);

 console.log(a); // 2
 console.log(b); // 2
 console.log(c); // 2


 console.log(86/2/3); //(Division tiene asociatividad a la izquierda, comienza desde izquierda)


 
 //Extra training
 var z = "bufanda";
 console.log(z);
 console.log(z=="bufanda");

 var h = "carro";
 console.log(h);
 console.log(h==="carro");

 var u = 9;
 console.log(u);
 console.log(u==9); //true
 console.log(u=="9"); //true
 console.log(u==="9"); //false

var perro = "gato";
console.log(perro);
console.log(perro==="gato"); //true
console.log(perro=="gato"); //true



