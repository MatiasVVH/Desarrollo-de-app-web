let temperatura = 15;

if (temperatura < 0) {
    document.getElementById("resultado2").textContent = "Hace frío";
} else if (temperatura >= 0 && temperatura < 25) {
    document.getElementById("resultado2").textContent = "La temperatura es agradable";
} else {
    document.getElementById("resultado2").textContent = "Hace calor";
}

let nombreUsuario = "usuario123";
let contraseña = "secreto";

if (nombreUsuario === "usuario123" && contraseña === "secreto") {
    document.getElementById("resultado3").textContent = "Acceso concedido";
} else {
    document.getElementById("resultado3").textContent = "Acceso denegado";
}

let numero = -5;

if (numero > 0) {
    document.getElementById("resultado4").textContent = "El número es positivo";
} else if (numero < 0) {
    document.getElementById("resultado4").textContent = "El número es negativo";
} else {
    document.getElementById("resultado4").textContent = "El número es cero";
}

let puntuacion = 85;

if (puntuacion >= 90) {
    document.getElementById("resultado5").textContent = "Excelente";
} else if (puntuacion >= 70 && puntuacion < 90) {
    document.getElementById("resultado5").textContent = "Buen trabajo";
} else {
    document.getElementById("resultado5").textContent = "Necesitas mejorar";
}
