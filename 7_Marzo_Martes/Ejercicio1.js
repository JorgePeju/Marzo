// Muestra un reloj en pantalla con fecha y hora y que se actualice cada segundo. Usar la función setTimeout().

document.addEventListener('DOMContentLoaded', () => {

    const obtenerHoraActual = () => {
        let fecha = new Date();

        let horas = fecha.getHours();
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();

        if (minutos < 10) {
            minutos = "0" + minutos;
        } else {
            minutos = minutos.toString();
        }

        if (segundos < 10) {
            segundos = "0" + segundos;
        } else {
            segundos = segundos.toString();
        }

        let stringHora = horas + ":" + minutos + ":" + segundos;
        return stringHora;
    }

    const mostrarHora = () => {
        let divReloj = document.getElementById("reloj");
        let divFecha = document.getElementById("fecha");
        let stringHora = obtenerHoraActual();
        let stringFecha = new Date().toLocaleDateString();

        divReloj.innerHTML = stringHora;
        divFecha.innerHTML = stringFecha;
    }



    mostrarHora();


    setInterval(mostrarHora, 1000);
});