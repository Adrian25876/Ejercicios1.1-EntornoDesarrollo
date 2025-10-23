//Realizar algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo de grado superior o no. Para acceder a un grado superior, si se tiene un título de bachiller, en caso de no tenerlo, se puede acceder si hemos superado una prueba de acceso.
let tieneBachiller = prompt("¿Tienes título de bachiller? (si/no)").toLowerCase();

if (tieneBachiller === "si") {
    console.log("Puedes acceder a cursar un ciclo formativo de grado superior.");
} else if (tieneBachiller === "no") {
    let superoPrueba = prompt("¿Has superado la prueba de acceso? (si/no)").toLowerCase();
    if (superoPrueba === "si") {
        console.log("Puedes acceder a cursar un ciclo formativo de grado superior.");
    } else {
        console.log("No puedes acceder a cursar un ciclo formativo de grado superior.");
    }
} else {
    console.log("Respuesta no válida. Por favor, responde con 'si' o 'no'.");
}