const cositas = (n)=> {
    let secuencia = [0, 1];
    for (let i = 2; i <= n; i++) {
      secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
    }
    return secuencia;
  }
  
  // Ejemplo de uso
  console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]