// Se pide un algoritmo que lea dos números desde teclado,
// calculando y escribiendo en pantalla el valor de su suma, resta, producto y división.

let prompt = require('prompt-sync')();

let okNums = true;

let aStr = prompt('Introduzca a:');
let a = Number(aStr);
if (Number.isNaN(a)) {
    console.log(`a = ${aStr} no es un número válido!!!`);
    okNums = false;
}

let bStr = prompt('Introduzca b:');
let b = Number(bStr);
if (Number.isNaN(b)) {
    console.log(`b = ${bStr} no es un número válido!!!`);
    okNums = false;
}

if (okNums) {
    let suma = a + b;
    let resta = a - b;
    let prod = a * b;

    console.log(`Suma = ${suma}`);
    console.log(`Resta = ${resta}`);
    console.log(`Producto = ${prod}`);

    if (b !== 0) {
        let div = a / b;
        console.log(`División = ${div}`);
    } else {
        console.log('División no definida (no se puede dividir por cero)');
    }
} else {
    console.log('Número(s) no operable(s)!');
}
