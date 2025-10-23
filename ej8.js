//Realizar un algoritmo que dado un número entero, visualice en pantalla si es par o impar. En el caso de ser 0, debe visualizar “el número no es par ni impar” (para que un número sea par, se debe dividir entre dos y que su resto sea 0).
let prompt = require('prompt-sync')();

let numStr = prompt('Ingrese un número entero: ');
let num = Number(numStr);

if (!Number.isInteger(num)) {
  console.log('Por favor, ingrese un número entero válido.');
} else {
  if (num === 0) {
    console.log('El número no es par ni impar.');
  } else if (num % 2 === 0) {
    console.log(`El número ${num} es par.`);
  } else {
    console.log(`El número ${num} es impar.`);
  }
}
