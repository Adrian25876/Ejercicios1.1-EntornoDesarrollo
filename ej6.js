//Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual. Diseñar un algoritmo para este propósito.
let prompt = require('prompt-sync')({sigint: true});

let niñosStr = prompt('Ingrese la cantidad de niños: ');
let niñasStr = prompt('Ingrese la cantidad de niñas: ');

let niños = Number(niñosStr);
let niñas = Number(niñasStr);

if (isNaN(niños) || isNaN(niñas) || niños < 0 || niñas < 0) {
  console.log('Por favor ingrese números válidos y positivos.');
} else {
  let total = niños + niñas;

  if (total === 0) {
    console.log('No hay estudiantes en el curso.');
  } else {
    let porcentajeNiños = (niños / total) * 100;
    let porcentajeNiñas = (niñas / total) * 100;

    console.log(`Porcentaje de niños: ${porcentajeNiños.toFixed(2)}%`);
    console.log(`Porcentaje de niñas: ${porcentajeNiñas.toFixed(2)}%`);
  }
}
