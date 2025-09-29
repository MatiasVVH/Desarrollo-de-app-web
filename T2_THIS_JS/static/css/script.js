// Función para sumar likes
function liked(element) {
    // Busca el span dentro del botón
    let span = element.querySelector("span");
    let count = parseInt(span.innerText); // Convierte el texto en número
    count++; // Suma 1
    span.innerText = count; // Actualiza el número en pantalla
}
