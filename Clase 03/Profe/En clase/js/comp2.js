var numeros = [88, 55, 20, 91, 70] // resultado final => [3, 9, 6, 15, 21]
var numeroAMultiplicar = parseInt(prompt("Ingrese numero a multiplicar"))

for (var indiceArray = 0; indiceArray < numeros.length; indiceArray++) {

  var resultado = 0

  for (var indiceMultiplicador = 1; indiceMultiplicador <= numeroAMultiplicar; indiceMultiplicador++) {
    resultado += numeros[indiceArray]
  }

  numeros[indiceArray] = resultado

}

console.log(numeros)