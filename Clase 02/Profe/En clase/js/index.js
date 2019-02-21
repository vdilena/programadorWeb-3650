var clima = "lluvioso"

// If/else con igual
/*if (clima == "lluvioso") {
  document.write("El clima esta lluvioso!")
} else {
  document.write("El clima no esta lluvioso!")
}*/

// If/else con distinto o no igual
/*if (clima != "lluvioso") {
  document.write("El clima no esta lluvioso!")
} else {
  document.write("El clima esta lluvioso!")
}*/

// comparacion ternaria
//document.write(clima == "lluvioso" ? "El clima esta lluvioso!" : "El clima no esta lluvioso!")

//switch
//var diaDeSemana = 5
/*if (diaDeSemana == 1) {
  document.write("Lunes")
} else if (diaDeSemana == 2) {
  document.write("Lunes")
} else if (diaDeSemana == 3) {
  document.write("Miercoles")
} else if (diaDeSemana == 4) {
  // ...
}*/

/*switch (diaDeSemana) {

  case 1:
    document.write("Lunes<br>")
    break
  case 2:
    document.write("Martes<br>")
    break
  case 3:
    document.write("Miercoles<br>")
    break
  default:
    document.write("Es un dia distinto!<br>")
    break
}*/

//var numeroUno = 1200
//var numeroDos = "1200"

/*if (numeroUno === numeroDos) {
  document.write("Son iguales")
} else {
  document.write("Son distintos")
}*/

/*if (numeroUno !== numeroDos) {
  document.write("Son distintos")
} else {
  document.write("Son iguales")
}*/

var numeroUno = 1000
var numeroDos = 1200

/*if (numeroUno < numeroDos) {
  document.write("primer numero es menor a segundo")
} else {
  document.write("primer numero es mayor o igual a segundo")
}*/

/*if (numeroUno > numeroDos) {
  document.write("primer numero es mayor a segundo")
} else if (numeroUno == numeroDos) {
  document.write("Son iguales")
} else {
  document.write("primer numero es menor a segundo")
}*/

/*if (numeroUno >= numeroDos) {
  document.write("Numero uno mayor o igual a numero dos")
} else {
  document.write("Numero uno menor a numero dos")
}*/

// NOT
/*var variableBooleana = true

if (!variableBooleana) { // variableBooleana != true o variableBooleana == false
  document.write("El valor es falso!")
}*/

//var nombre = null

/*if (nombre == null || nombre == undefined || nombre == "") {
  document.write("Variable indefinida, o nula o vacia!")
}*/

/*if (!nombre) {
  document.write("Variable indefinida, o nula o vacia!")
}*/


// AND
/*if (a > 4 && b > 4) {
  document.write("Ambos son mayores!")
}*/

// OR
/*if (a < 6 || b > 4) {
  document.write("cumple la condicion!")
}*/
var a = 9
var b = 5
var c = 9
var d = 17


if (cumpleCondiciones()) {
  document.write("cumple la condicion!")
} else {
  document.write("NO cumple la condicion!")
}

// Funciones
function cumpleCondiciones() {
  return a < 6 &&
    b > 4 &&
    c == 36 &&
    d == -2
}