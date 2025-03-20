let edad6 = 20; 
let aceptaTerminos = true;

if (edad6 >= 18 && aceptaTerminos) {
    document.getElementById("resultado6").textContent = "Acceso permitido";
} else {
    document.getElementById("resultado6").textContent = "Acceso denegado";
}

let edad7 = 65; 
let esEstudiante = false;

if (edad7 > 60 || esEstudiante) {
    document.getElementById("resultado7").textContent = "Descuento aplicado";
} else {
    document.getElementById("resultado7").textContent = "No tienes descuento";
}

let usuario = "usuario123"; 
let contrasena = ""; 

if (!usuario || !contrasena) {
    document.getElementById("resultado8").textContent = "Error: Debes ingresar usuario y contraseña";
} else {
    document.getElementById("resultado8").textContent = "Inicio de sesión exitoso";
}

let energiaSuficiente = true; 
let interruptorEncendido = false; 

if (energiaSuficiente && interruptorEncendido) {
    document.getElementById("resultado9").textContent = "Máquina encendida";
} else {
    document.getElementById("resultado9").textContent = "No se puede encender la máquina";
}

let bloqueado = false; 
let tieneCredenciales = true; 

if (!bloqueado || !tieneCredenciales) {
    document.getElementById("resultado10").textContent = "Acceso denegado";
} else {
    document.getElementById("resultado10").textContent = "Acceso permitido";
}
