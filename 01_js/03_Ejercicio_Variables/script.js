// Declaración de variables con diferentes tipos de datos
let numeroEntero = 42; // Número entero
let numeroDecimal = 3.14; // Número decimal
let cadenaTexto = "Hola, mundo"; // Cadena de texto
let booleano = true; // Valor booleano
let arreglo = [1, 2, 3, "JavaScript"]; // Arreglo con diferentes tipos de datos
let objeto = { nombre: "Juan", edad: 30 }; // Objeto con pares clave-valor
let indefinida; // Variable declarada pero sin valor asignado
let nulo = null; // Variable con valor nulo

// Constante no modificable
const mes = "Octubre";

// Función que realiza una operación simple con dos números
function operacion(a, b) {
    return a + b;
}

// Funciones para mostrar cada valor usando alert()
function mostrarNumeroEntero() {
    alert("Número entero: " + numeroEntero);
}

function mostrarNumeroDecimal() {
    alert("Número decimal: " + numeroDecimal);
}

function mostrarCadenaTexto() {
    alert("Cadena de texto: " + cadenaTexto);
}

function mostrarBooleano() {
    alert("Booleano: " + booleano);
}

function mostrarArreglo() {
    alert("Arreglo: " + arreglo);
}

function mostrarObjeto() {
    alert("Objeto: " + JSON.stringify(objeto));
}

function mostrarIndefinida() {
    alert("Indefinida: " + indefinida);
}

function mostrarOperacion() {
    alert("Resultado de la operación (5 + 4): " + operacion(5, 4));
}