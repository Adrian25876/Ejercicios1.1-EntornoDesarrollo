// Se pide realizar un algoritmo que lea dos números e indique el mayor

// https://www.npmjs.com/package/prompt-sync?activeTab=versions
// Esta forma de importar paquete es la nativa de Node
// y se conoce por ser CommonJS modules
let prompt = require('prompt-sync')();

let flagformatoOk = true;

let a = prompt("Introduzca a: ");
a = Number(a);

if (Number.isNaN(a)) {
    // Backtick declara cadena con capacidad de interpolación de cadena
    console.log(`Error de formato: a = ${a} no es un número!`);
    flagformatoOk = false;
}

let b = prompt("Introduzca b: ");
b = Number(b);

if (Number.isNaN(b)) {
    console.log(`Error de formato: b = ${b} no es un número!`);
    flagformatoOk = false;
}

if (flagformatoOk) {
    // Hago los cálculos o procesos
    if (a > b) {
        console.log(`El mayor es ${a}`);
    } else if (a == b) {
        console.log("Son iguales");
    } else {
        // b > a
        console.log(`El mayor es ${b}`);
    }
} else {
    console.log("No se puede calcular, formato de número incorrecto!");
}

