//Math.pow(2, 3)
var base = parseInt(prompt("Ingresar numero base"))
var potencia = parseInt(prompt("Ingresar potencia"))

var resultado = 1

if (base == 0) {
  resultado = 0
} else {
  for (var x = 1; x <= potencia; x++) {
    resultado *= base
  }
}

console.log(resultado)