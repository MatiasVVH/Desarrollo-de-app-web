// 1️⃣ Problema 6: Verificación de Acceso con Condiciones Múltiples
let edad6 = 20; // Cambia este valor para probar
let aceptaTerminos = true; // Cambia este valor para probar

if (edad6 >= 18 && aceptaTerminos) {
    document.getElementById("resultado6").textContent = "Acceso permitido";
} else {
    document.getElementById("resultado6").textContent = "Acceso denegado";
}

// 2️⃣ Problema 7: Elegibilidad para un Descuento
let edad7 = 65; // Cambia este valor para probar
let esEstudiante = false; // Cambia este valor para probar

if (edad7 > 60 || esEstudiante) {
    document.getElementById("resultado7").textContent = "Descuento aplicado";
} else {
    document.getElementById("resultado7").textContent = "No tienes descuento";
}

// 3️⃣ Problema 8: Validación de Usuario y Contraseña con NOT
let usuario = "usuario123"; // Cambia este valor para probar
let contrasena = ""; // Cambia este valor para probar

if (!usuario || !contrasena) {
    document.getElementById("resultado8").textContent = "Error: Debes ingresar usuario y contraseña";
} else {
    document.getElementById("resultado8").textContent = "Inicio de sesión exitoso";
}

// 4️⃣ Problema 9: Encendido de una Máquina con Condiciones Lógicas
let energiaSuficiente = true; // Cambia este valor para probar
let interruptorEncendido = false; // Cambia este valor para probar

if (energiaSuficiente && interruptorEncendido) {
    document.getElementById("resultado9").textContent = "Máquina encendida";
} else {
    document.getElementById("resultado9").textContent = "No se puede encender la máquina";
}

// 5️⃣ Problema 10: Acceso Restringido por Estado de Seguridad
let bloqueado = false; // Cambia este valor para probar
let tieneCredenciales = true; // Cambia este valor para probar

if (!bloqueado || !tieneCredenciales) {
    document.getElementById("resultado10").textContent = "Acceso denegado";
} else {
    document.getElementById("resultado10").textContent = "Acceso permitido";
}
