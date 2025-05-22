// Ejercicio 1: ¿Par o Impar?
function parOImpar() {
  let numero = prompt("Ingrese un número:");
  numero = Number(numero);

  if (numero % 2 === 0) {
    alert("El número es par");
  } else {
    alert("El número es impar");
  }
}

// Ejercicio 2: Calculadora de IMC
function calcularIMC() {
  let peso = prompt("Ingrese su peso en kg:");
  let altura = prompt("Ingrese su altura en metros:");

  peso = Number(peso);
  altura = Number(altura);

  let imc = peso / (altura * altura);

  if (imc < 18.5) {
    alert("Bajo peso");
  } else if (imc >= 18.5 && imc <= 24.9) {
    alert("Peso normal");
  } else {
    alert("Sobrepeso");
  }
}

// Ejercicio 3: Calculadora de Notas
function calcularNotas() {
  let nota1 = prompt("Ingrese la primera nota (1 a 7):");
  let nota2 = prompt("Ingrese la segunda nota (1 a 7):");
  let nota3 = prompt("Ingrese la tercera nota (1 a 7):");

  nota1 = Number(nota1);
  nota2 = Number(nota2);
  nota3 = Number(nota3);

  let promedio = (nota1 + nota2 + nota3) / 3;

  if (promedio < 4.0) {
    alert("Reprobado");
  } else {
    alert("Aprobado");
  }
}
