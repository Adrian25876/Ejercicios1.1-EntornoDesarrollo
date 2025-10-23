//Una tienda ofrece un descuento del 15% sobre el total de la compra durante el mes de octubre. Dado un mes y un importe, calcular cuál es la cantidad que se debe cobrar al cliente.
let prompt = require('prompt-sync')();

let mes = prompt('Ingrese el mes: ');
let importeStr = prompt('Ingrese el importe de la compra: ');
let importe = Number(importeStr);

if (isNaN(importe) || importe < 0) {
  console.log('Por favor ingrese un importe válido y positivo.');
} else {
  if (mes.trim().toLowerCase() === 'octubre') {
    let descuento = importe * 0.15;
    let importeFinal = importe - descuento;
    console.log(`Es octubre, se aplica un descuento del 15%. Importe a cobrar: $${importeFinal.toFixed(2)}`);
  } else {
    console.log(`No hay descuento. Importe a cobrar: $${importe.toFixed(2)}`);
  }
}
