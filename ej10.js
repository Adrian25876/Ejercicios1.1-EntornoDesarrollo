let prompt = require('prompt-sync')();

let diaStr = prompt('Ingrese el día: ');
let mesStr = prompt('Ingrese el mes (número): ');
let añoStr = prompt('Ingrese el año: ');

let dia = Number(diaStr);
let mes = Number(mesStr);
let año = Number(añooStr);

let meses = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

// Función para comprobar si un año es bisiesto
function esBisiesto(año) {
  return (año % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

function esFechaValida(dia, mes, anio) {
  if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(año)) {
    return false;
  }

  if (anio <= 0) return false;
  if (mes < 1 || mes > 12) return false;
  if (dia < 1) return false;

  let diasEnMes;

  switch (mes) {
    case 2:
      diasEnMes = esBisiesto(año) ? 29 : 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      diasEnMes = 30;
      break;
    default:
      diasEnMes = 31;
  }

  if (dia > diasEnMes) return false;

  return true;
}

if (esFechaValida(dia, mes, año)) {
  console.log(`${dia} de ${meses[mes - 1]} de ${año}`);
} else {
  console.log('Fecha no válida.');
}

