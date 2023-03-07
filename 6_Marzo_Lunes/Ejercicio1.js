// Pedirle al usuario una frase y decirle si es palíndromo o no.  Un palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda. Ejemplos de palíndromos para probar: "La ruta nos aporto otro paso natural", “reconocer”, "Atar a la rata", “Dábale arroz a la zorra el abad”, “Somos o no somos”, “A ti no, bonita”, “Allí ves a Sevilla”, “Amad a la dama”, “Amar da drama”, “Arriba la birra”.







const palindromachone = () => {
   
    const frase = prompt("Introduzca su frase:");
  
   
    const palindromo = verificar(frase);
  

    if (palindromo) {
      alert(`La frase "${frase}" es un palíndromo.`);
    } else {
      alert(`La frase "${frase}" no es un palíndromo.`);
    }
  }

  const verificar =(frase) => {

    var re = /[^A-Za-z0-9]/g;

    frase = frase.toLowerCase().replace(re);

    let sinEspacios = "";


    for (let i = 0; i < frase.length; i++) {
      if (frase[i] != " " && frase[i] != ",") {
        sinEspacios += frase[i];
      }
    }

    return sinEspacios === sinEspacios.split("").reverse().join("");
  }

  palindromachone();