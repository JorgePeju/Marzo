//  1. Para comenzar vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTM, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones

//  Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8




const notaMedia = () => {

let notas;
let media;

  notas = {
    nombre: "Juan",
    ingles: 9,
    programacion: 8,
    html: 7,
}

media = (notas.ingles + notas.programacion + notas.html) / 3;

console.log(`La nota media de ${notas.nombre} es de ${media}`) 

};

    console.log(notaMedia)


// 2. Define un objeto, mediante una expresión, que tenga dos propiedades: precio y descuento y un método neto. El método calculará el precio con el descuento aplicado. Los valores se pedirán por teclado

// Por ejemplo objeto vestido, precio 400 y descuento 10. El método devolverá como resultado 360 (400 - 10*400/100).

const precioVestido = () =>{
const objProducto ={

    precio : 0,
    descuento : 0,
    neto: 0,

};

objProducto.precio = prompt(parseInt("Introduzca el precio del vestido"));
objProducto.descuento = prompt(parseInt("Introduzca el descuento aplicado"));

objProducto.neto = objProducto.precio - (objProducto.descuento*objProducto.precio/100);

console.log(`El precio neto es de ${objProducto.neto}`)
}

// precioVestido()


// En esta propuesta debes crear una clase de nombre piedra (con class o con function) con dos propiedades: masa, volumen y un método densidad que calcule este valor (masa/volumen). Luego instancia al menos un objeto de esta clase, dale un valor a su masa y a su volumen y ejecuta el método densidad.

// Por ejemplo objeto oro, masa de la muestra 194 gr y volumen 10 cc. Densidad deberá devolver 19,4.


const pesoPiedra = () => {

     
    class piedra {
        constructor(masa,volumen){
           this.masa = masa;
           this.volumen = volumen;
           this.densidad= masa/volumen;
        }
    }

    let oro = new piedra(194,10);


    console.log("densidad " + oro.densidad);


}

pesoPiedra();

// 4. Construye una clase usando function para implementar una cuenta de efectivo. Poseerá dos propiedades: nombre del titular y saldo. Además debe tener dos métodos: ingresar() y retirar(). El primero incrementa el saldo en la cantidad indicada en el argumento y el segundo lo reduce. No se puede sacar más de lo que exista en el saldo. .

// A los métodos los invocaremos con las llamadas ingresar(1000) o retirar(100) Tras ingresar el saldo será 1000 y trs retirar el saldo será 900..

const cuentasEfectivo = () => {

     Cuenta = function(nombre, saldo){
        this.titular = nombre;
        this.saldo = saldo;

        this.ingresar= function(cantidadSaldo){
            this.saldo += cantidadSaldo
        }

       this.retirar = function(cantidadSaldo){
            if(cantidadSaldo <= this.saldo){
                   this.saldo -= cantidadSaldo
                 }
          }
    }

    var micuenta = new Cuenta('Juan', 0);

    micuenta.ingresar(1000);
    console.log("El saldo actual es "+micuenta.saldo);
    micuenta.retirar(100);
    console.log("El saldo actual es "+micuenta.saldo);


}
 cuentasEfectivo()


 // 5. Crea una clase Ficha, con su constructor, que se usará para almacenar el número de kilómetros recorridos por una persona en cada sesión de ejercicios. Las propiedades de la clase serán:
//  nombre
//  sesiones
//  numsesioens
// El nombre es el de la persona, en los sesiones se almacenará el numero de kilometros recorridos en cada sesión y numsesiones contien el númeor de sesiones anotadas.

// Tiene dos métodos:

// anotar: anota los kilómetros
// media: calcula la media de kilómetros recorridos

///////////////

// Cada persona tendrá su ficha construída con esta clase.

// Si ejecuto anotar(8), anotar(10), anotar(6), en las sesiones se anotarán 8, 10, 6.

// Si escribo media() devolverá 8 ((8+10+6)/3).

// En la solución se usa el camino má primitivo posible: arrays y bucles básicos

ficha = function (nombre, sesiones, numsesiones){
    this.nombre = nombre;
    this.sesiones = sesiones;
    this.numsesiones= numsesiones;
    this.anotar= function(cantidad){
        
    }
    
}