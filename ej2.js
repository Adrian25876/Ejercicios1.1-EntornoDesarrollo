// Se pide un algoritmo que lea dos números desde teclado,
// calculando y escribiendo en pantalla el valor de su suma, resta, producto y división.

let prompt = require('prompt-sync')();

let okNums = true;

let a = prompt('Introduzca a:');
// typeof a === 'string'
// si a = 'asdf' => Number(a) === NaN (Not-a-Number)

console.log(Number(a));

if ( Number.isNaN(Number(a)) ) {
    // declaracion de cadena con backtip ` que permite interpolacion de variables ${a}
    console.log(`a = ${a} no es un número válido!!!`);
    okNums = false;
} else {
    a = Number(a);
    // typeof a === 'number'
}

let b = prompt('Introduzca b:');
// typeof b === 'string'

if ( Number.isNaN(Number(b)) ) {
    // declaracion de cadena con backtip ` que permite interpolacion de variables ${a}
    console.log(`b = ${b} no es un número válido!!!`);
    okNums = false;
} else {
    b = Number(b);
    // typeof b === 'number'
}

if (okNums) {
    let suma = a + b;
    let resta = a - b;
    let prod = a * b;

    console.log(`suma = ${suma}, resta = ${resta}`);
} else {
    console.log('Numero/s no operables!');
}
