// Con el operador condicional, pedir al usuario que ingrese su sueldo bruto y si supera los 20000€, se le debe aplicar un descuento del 20%. Si no supera los 20000€, el descuento será del 10%.


const pedirSueldo = () => {

 let sueldo = parseInt(prompt("Ingrese su sueldo: "));
 
return sueldo
}

const calcularDescuento = (sueldo) => {

    
    let descuento;
console.log(sueldo,descuento)
 if (sueldo >= 20000) {
    let descuento = (sueldo * 20) / 100;

 } else {
    if (sueldo < 20000) {
        descuento = (sueldo * 10) / 100;
    }
 }
 console.log(sueldo,descuento)
 mensaje(descuento, sueldo)
}


const mensaje = (descuento, sueldo) => {

    let sueldoFinal = sueldo - descuento;
    console.log(sueldoFinal)

}
pedirSueldo()
calcularDescuento()

