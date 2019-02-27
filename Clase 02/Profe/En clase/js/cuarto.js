var primerNumero = parseInt(prompt("Primer numero"))
var segundoNumero = parseInt(prompt("Segundo numero"))

/*if (segundoNumero != 0) {
  document.write(primerNumero / segundoNumero)
} else {
  document.write("Denominador incorrecto!")
}*/

var resultado = primerNumero / segundoNumero
if (!isFinite(resultado)) {
  document.write("Denominador incorrecto!")
} else {
  document.write(resultado)
}