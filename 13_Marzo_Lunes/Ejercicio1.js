// Juego de la patata caliente. Guardar un número aleatorio que el usuario no sepa cuál es. El usuario tiene que adivinar el número en la menor cantidad de intentos posibles. Le deberemos pedir un número y ayudarle a descubrirlo diciéndole si es mayor o menor.


const randomNumber = (min, max) => {

    min = Math.ceil(-9999999);
    max = Math.floor(9999999);
    return Math.floor(Math.random() * (max - min + 1) + min);

}

console.log(randomNumber())


const patatoide = () => {

    if (patata === randomNumber()) {
        alert("Bieeeeeeeen")
    } else {
        if (patata > randomNumber() || patata < randomNumber()) {
            patata = parseInt(prompt(`Introduzca el número de la patata caliente: (un valor entre "-9999999" y "9999999"`))
        }
    }
    console.log(patata)
}

patatoide()

