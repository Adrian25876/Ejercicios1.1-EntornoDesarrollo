//Solicita por teclado tres números; si el primero es negativo, muestra el producto de los tres y si no lo es, muestra la suma.
const prompt = require('prompt-sync')({sigint: true});

let num1Str = prompt('Ingrese el primer número: ');
let num2Str = prompt('Ingrese el segundo número: ');
let num3Str = prompt('Ingrese el tercer número: ');

let num1 = Number(num1Str);
let num2 = Number(num2Str);
let num3 = Number(num3Str);

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  console.log('Por favor, ingrese números válidos.');
} else {
  if (num1 < 0) {
    let producto = num1 * num2 * num3;
    console.log(`El primer número es negativo. Producto de los tres: ${producto}`);
  } else {
    let suma = num1 + num2 + num3;
    console.log(`El primer número no es negativo. Suma de los tres: ${suma}`);
  }
}
 
