function Producto_pares() {
    // Crear un arreglo de largo 6 con los valores (2,4,6,8,10,12)
    let arreglo = [2, 4, 6, 8, 10, 12];

    // Inicializar el producto en 1
    let producto = 1;

    // Multiplicar todos los valores del arreglo que sean pares
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            producto *= arreglo[i];
        }
    }

    // Mostrar el resultado en un alert
    alert("El producto de los valores pares es: " + producto);
}