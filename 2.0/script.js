// Ejercicio 1
let compras = [];
function ej1_agregar() {
    let input = document.getElementById("input1").value;
    if (input) {
        compras.push(input);
        document.getElementById("input1").value = "";
        mostrarLista("output1", compras);
    }
}

// Ejercicio 2
function ej2_quitar() {
    let eliminado = compras.pop();
    document.getElementById("output2").innerText = eliminado || "(nada)";
    mostrarLista("output2list", compras);
}

// Ejercicio 3
let colores = ["rojo", "azul"];
function ej3_agregarInicio() {
    let color = document.getElementById("input3").value;
    if (color) {
        colores.unshift(color);
        document.getElementById("input3").value = "";
        mostrarLista("output3", colores);
    }
}

// Ejercicio 4
function ej4_quitarPrimero() {
    let eliminado = colores.shift();
    document.getElementById("output4").innerText = eliminado || "(nada)";
    mostrarLista("output4list", colores);
}

// Ejercicio 5
let numeros = [10, 20, 30];
function ej5_modificar() {
    numeros.push(40);
    numeros.shift();
    numeros.unshift(5);
    numeros.pop();
    mostrarLista("output5", numeros);
}

// Ejercicio 6
function ej6_agregarInverso() {
    let orden = [];
    orden.unshift(1);
    orden.unshift(2);
    orden.unshift(3);
    mostrarLista("output6", orden);
}

// Ejercicio 7
let historial = [];
function ej7_agregarMensajes() {
    historial.push("Mensaje 1", "Mensaje 2", "Mensaje 3");
    mostrarLista("output7list", historial);
}
function ej7_eliminarUltimo() {
    let eliminado = historial.pop();
    document.getElementById("output7").innerText = eliminado || "(nada)";
    mostrarLista("output7list", historial);
}

// Ejercicio 8
let cola = ["Cliente1", "Cliente2", "Cliente3"];
function ej8_modificarCola() {
    cola.shift();
    cola.push("Cliente4");
    mostrarLista("output8", cola);
}

// Ejercicio 9
function ej9_reordenar() {
    let nombres = ["Pedro", "Juan", "Luis"];
    nombres.pop();
    nombres.unshift("Mateo");
    nombres.push("Ana");
    mostrarLista("output9", nombres);
}

// Ejercicio 10
function ej10_simular() {
    let pila = [];
    pila.push("Elemento1", "Elemento2", "Elemento3");
    let eliminado1 = pila.pop();
    let eliminado2 = pila.pop();

    let colaNueva = [];
    colaNueva.push("Persona1", "Persona2", "Persona3");
    let atendido1 = colaNueva.shift();
    let atendido2 = colaNueva.shift();

    document.getElementById("output10pila").innerText = `${eliminado1}, ${eliminado2}`;
    document.getElementById("output10cola").innerText = `${atendido1}, ${atendido2}`;
}

// Función genérica para mostrar listas
function mostrarLista(id, arreglo) {
    let ul = document.getElementById(id);
    ul.innerHTML = "";
    for (let item of arreglo) {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = item;
        ul.appendChild(li);
    }
}
