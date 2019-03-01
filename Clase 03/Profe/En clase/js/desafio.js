var operacion = prompt("Ingrese operacion") // +, -, *, /
var primerNumero = parseInt(prompt("Primero numero"))
var segundoNumero = parseInt(prompt("Segundo numero"))

var resultado = 0

var suma = primerNumero + segundoNumero
var resta = primerNumero - segundoNumero
var multiplicacion = primerNumero * segundoNumero
var division = primerNumero / segundoNumero

switch (operacion) {

  case "+":
    resultado = suma
    break
  case "-":
    resultado = resta
    break
  case "*":
    resultado = multiplicacion
    break
  case "/":

    while (!isFinite(division)) {
      division = primerNumero / parseInt(prompt("Segundo numero"))
    }

    resultado = division
}

document.write(`Resutado: ${resultado}`)