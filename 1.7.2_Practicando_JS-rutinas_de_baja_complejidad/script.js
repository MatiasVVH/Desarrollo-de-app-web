function tablaMultiplicar() {
  let resultado = "";
  let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
  for (let i = 1; i <= 10; i++) {
    resultado += numero + " x " + i + " = " + (numero * i) + "\n";
  }
  document.getElementById("resultado").textContent = resultado;
}

function sumarNumeros() {
  let resultado = "";
  let cantidad = parseInt(prompt("¿Cuántos números deseas sumar?"));
  let suma = 0;

  for (let i = 1; i <= cantidad; i++) {
    let num = parseFloat(prompt("Ingresa el número " + i + ":"));
    suma += num;
  }

  resultado = "La suma total es: " + suma;
  document.getElementById("resultado").textContent = resultado;
}

function numerosPares() {
  let resultado = "";
  let inicio = parseInt(prompt("Ingresa el número inicial:"));
  let fin = parseInt(prompt("Ingresa el número final:"));

  for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
      resultado += i + "\n";
    }
  }

  document.getElementById("resultado").textContent = "Números pares entre " + inicio + " y " + fin + ":\n" + resultado;
}
