function sumarNaturales() { // ejercicio 1
    let num = parseInt(prompt("Ingresa la cantidad de números que deseas sumar:"));
    let suma = 0;
    for(let i = 1; i <= num; i++) {
        suma += i;
    }
    alert("La suma de los primeros " + num + " números naturales es: " + suma);
}

function mostrarPares() { // ejercicio 2
    let array = [];
    for (let i = 1; i <= 200; i++) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    alert("Los 100 primeros números pares son: " + array.join(" - "));
}

function mostrarImpares() { // ejercicio 3
    let array = [];
    for (let i = 1; i <= 200; i++) {
        if (i % 2 === 1) {
            array.push(i);
        }
    }
    alert("Los 100 primeros números impares son: " + array.join(" - "));
}

function sumarCincoNumeros() { // ejercicio 4
    let num1 = parseInt(prompt("Ingresa el primer número:"));
    let num2 = parseInt(prompt("Ingresa el segundo número:"));
    let num3 = parseInt(prompt("Ingresa el tercer número:"));
    let num4 = parseInt(prompt("Ingresa el cuarto número:"));
    let num5 = parseInt(prompt("Ingresa el quinto número:"));
    let suma = num1 + num2 + num3 + num4 + num5;
    alert("El resultado de la suma es: " + suma);
}

function sumarNumeros() { // ejercicio 5
    let n = parseInt(prompt("¿Cuántos números deseas sumar?"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        let num = parseInt(prompt("Ingresa el número " + i + ":"));
        suma += num;
    }
    alert("La suma de los números es: " + suma);
}
