// Hacer una función que muestre la tabla de multiplicar. Preguntar al usuario de qué número quiere la tabla y si no dice ninguno, que se muestre por defecto la del 2. Por defecto se van a mostrar 10 términos de la tabla salvo que se indique lo contrario.

const multiplicar = () => {

    let numero = parseInt(prompt(`Introduzca el número del que quiere la tabla de multiplicar: `))

    if (numero < 0 && numero > 10) {
        numero = parseInt(prompt(`Introduzca un número entre el 1 y 10 la tabla de multiplicar: `))
    } else {
        for (i = 1; i <= 10; i++) {
            
        numero + "x " + i + "= " + numero * i;

        }
        console.log(numero)
    }
}

multiplicar()

