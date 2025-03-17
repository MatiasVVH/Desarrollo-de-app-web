function Suma_indices() {
    // Crear un arreglo de largo 7 con los valores (1,2,3,4,5,6,7)
    let arreglo = [1, 2, 3, 4, 5, 6, 7];

    // Sumar el último valor, con el penúltimo más el primer valor del arreglo
    let suma = arreglo[arreglo.length - 1] + arreglo[arreglo.length - 2] + arreglo[0];

    // Mostrar el resultado en un alert
    alert("La suma es: " + suma);
}