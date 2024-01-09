const Estudiante = prompt("Ingrese el nombre del estudiante:");
const Materia = prompt("Ingrese el nombre de la materia:");

let calificacion1 = parseFloat(prompt("Ingrese la primera calificación (el valor debe estar entre 0 y 10):"));
while (calificacion1 < 0 || calificacion1 > 10) {
  calificacion1 = parseFloat(prompt("La calificación ingresad es errónea, ingrese un valor entre 0 y 10"));
}

let calificacion2 = parseFloat(prompt("Ingrese la segunda calificación (el valor debe estar entre 0 y 10):"));
while (calificacion2 < 0 || calificacion2 > 10) {
  calificacion1 = parseFloat(prompt("La calificación ingresad es errónea, ingrese un valor entre 0 y 10"));
}

let calificacion3 = parseFloat(prompt("Ingrese la tercera calificación (el valor debe estar entre 0 y 10):"));
while (calificacion3 < 0 || calificacion3 > 10) {
  calificacion1 = parseFloat(prompt("La calificación ingresad es errónea, ingrese un valor entre 0 y 10"));
}

const promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

if (promedio >= 7) {
  console.log(`¡${Estudiante}, felicidades! Has aprobado con un promedio de ${promedio}.`);
} else {
  console.log(`${Estudiante}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio}.`);
}
