function ejecutarBucleWhile() { //ejercicio de prueba
    let count = 10;
    let array = [];
    while(count >= 1) {
        array.push(count);
        count--;
    }
    alert(`Los números son: ${array.join(" - ")}`);
}

function ejecutarBucleFor() { //ejercicio de prueba
    let count = 10;
    let array = [];
    for (let count = 10; count >= 1; count-- ){
        array.push(count);
    }
    alert(`Los números son: ${array.join(" - ")}`);
}

function contarHastaN() { //ejercicio 1
    let n = parseInt(prompt("Ingresa un número entero:"));
    let count = 1;
    let array = [];
    while(count <= n) {
        array.push(count); //Insertar un valor al final del array
        count++; //incrementa 1 al contador
    }
    alert(`Contando: ${array.join(" - ")}`);
}

function realizarCuentaRegresiva() { //ejercicio 2
    let n = parseInt(prompt("Ingresa un número entero:"));
    let limite =  1;
    let array = [];
    while(limite <= n) {
        array.push(n);
        n--; //disminuye 1 al contador (n)
    }
    alert(`La cuenta regresiva es: ${array.join(" - ")}`);
}

function sumarHastaN() { //ejercicio 3
    let n = parseInt(prompt("Ingresa un número: "));
    let suma = 0;
    let array = [];
    for(let i = 1; i <= n; i++){
        suma += i;
        array.push(i);
    }
    console.log(`La suma de los primeros ${n} números es: ${suma}`);
}

function mostrarMultiplosDeDos() { //ejercicio 4
    let n = parseInt(prompt("Ingresa un número límite:"));
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0){
            console.log(i);
        }
    }
}
