function registrarParticipantes() {
    let participantes = [];
    let contador = 0;
    let nombre = prompt("Ingrese un nombre (escriba 'salir' para terminar):");

    while (nombre !== "salir") {
    participantes.push(nombre);
    contador = contador + 1;
    nombre = prompt("Ingrese un nombre (escriba 'salir' para terminar):");
    }

    console.log("Total de participantes:", contador);
    console.log("Lista:", participantes.join(", "));

    if (contador > 5) {
    console.log("🎉 ¡Gran participación! Más de 5 personas se han registrado.");
    }
}






function simularCaja() {
    let productos = ["manzana", "pan", "leche"];

    for (let i = 0; i < 5; i++) {
    if (productos.length > 0) {
        let vendido = productos.pop();
        console.log("Producto vendido:", vendido);
    } else {
        console.log("Sin stock");
    }
    }

    productos.push("huevos");
    productos.push("jugo");
    console.log("Productos repuestos:", productos.join(", "));
}
