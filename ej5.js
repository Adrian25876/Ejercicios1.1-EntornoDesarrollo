//Algoritmo que lea un número por teclado. En caso de que ese número sea 0 o menor que 0, se saldrá del programa imprimiendo antes un mensaje de error. Si es mayor que 0, se deberá calcular su cuadrado y la raíz cuadrada del mismo, visualizando el número que ha tecleado el usuario y su resultado («Del número X, su potencia es X y su raíz X» ). 
//Para calcular la raíz cuadrada se puede usar la función interna RAIZ(X)  o con una potencia de 0,5.

let prompt = require('prompt-sync')({sigint: true});
let numStr = prompt('Ingrese un número: ');
let num = Number(numStr);

if (isNaN(num)) {
  console.log('Error: debe ingresar un número válido.');
} else {
  if (num <= 0) {
    console.log('Error: el número debe ser mayor que 0. El programa termina.');
  } else {
    let cuadrado = num ** 2;
    let raiz = Math.sqrt(num);
    console.log(`Del número ${num}, su potencia es ${cuadrado} y su raíz ${raiz.toFixed(2)}`);
  }
}
