function verificarNumero() {
    // Obtener el valor introducido por el usuario
    var numero = document.getElementById('numero').value;
    var resultado = document.getElementById('resultado');

    // Verificar si el número es positivo, negativo o cero
    if (numero > 0) {
        resultado.textContent = "El número es positivo";
    } else if (numero < 0) {
        resultado.textContent = "El número es negativo";
    } else {
        resultado.textContent = "El número es cero";
    }
}
