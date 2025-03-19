function Producto_pares() {
    let  temperatura = prompt("temperatura :"); 

    if (temperatura < 0) {
        alert("Hace frío");
    } else if (temperatura >= 0 && temperatura <= 25) {
        alert("La temperatura es agradable");
    } else {
        alert("Hace calor");
    }
}   