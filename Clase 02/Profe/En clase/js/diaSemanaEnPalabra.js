/**
 * Quiero obtener, a partir del dia de semana en palabra, el numero correspondiente
 * 
 * Ej: Lunes --> 1
 * Ej: Martes --> 2
 */

var diaSemanaEnPalabra = prompt("Ingrese dia de semana").toLowerCase()
var resultado

switch (diaSemanaEnPalabra) {
  case "lunes":
    resultado = 1;
    break;
  case "martes":
    resultado = 2;
    break;
  case "miercoles":
    resultado = 3;
    break;
  case "jueves":
    resultado = 4;
    break;
  case "viernes":
    resultado = 5;
    break;
  case "sabado":
    resultado = 6;
    break;
  case "domingo":
    resultado = 7;
    break;
  default:
    resultado = 0;
    break;
}

document.write(`Dia de la semana en numero: ${resultado}`)