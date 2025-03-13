console.log("Vinculado correctamente...");

// Ejercicio 1: Declaración de variables
function declararVariables() {
    let ahora = 2025; // Obtiene el año actual
    let fecha_nac = 1990; // Año de nacimiento (puedes cambiarlo)
    let edad = ahora - fecha_nac; // Calcula la edad

    alert(`Tienes ${edad} años.`);
}

// Ejercicio 2: Asignación de valores
function asignarValores() {
    let var1 = 42; // Asigna un valor a var1
    let var2 = var1; // Asigna el valor de var1 a var2

    alert(`El valor de var2 es: ${var2}`);
}

// Ejercicio 3: Operaciones matemáticas
function realizarOperaciones() {
    let num1 = 10;
    let num2 = 20;
    let num3 = 30;

    let suma = num1 + num2 + num3;
    let resta = num3 - num1;
    let multiplicacion = num2 * num3;
    let division = num1 / 120;

    alert(`Suma: ${suma}\nResta: ${resta}\nMultiplicación: ${multiplicacion}\nDivisión: ${division}`);
}

// Ejercicio 4: Manipulación de cadenas
function manipularCadenas() {
    let direccion = "Calle Principal";
    let n_casa = "123";

    let mensaje = `Vivo en ${direccion} #${n_casa}.`; // Construye el mensaje
    let longitud = mensaje.length; // Obtiene la longitud del mensaje
    let antepenultimo = mensaje[mensaje.length - 3]; // Obtiene el antepenúltimo carácter

    alert(`Mensaje: ${mensaje}\nLongitud: ${longitud}\nAntepenúltimo carácter: ${antepenultimo}`);
}