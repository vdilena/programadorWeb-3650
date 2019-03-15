var numeros = [6, 9, 2, -7, 5, 8]

var eleccionUsuario = devolverEleccionValida(prompt("Mayor o menor").toLowerCase())

function devolverEleccionValida(eleccion) {

  while (eleccion != "mayor" && eleccion != "menor") {
    eleccion = prompt("Mayor o menor").toLowerCase()
  }

  return eleccion
}

function resultadoEleccion(eleccion, listaNumeros) {

  var mayorOMenor = numeros[0]

  numeros.forEach(function (numero) { // for(var i = 0; i < numeros.length; i++) { ... var numero = numeros[i] ... }

    if (eleccion == "mayor") {

      if (numero > mayorOMenor) {
        mayorOMenor = numero
      }
    }

    if (eleccion == "menor") {

      if (numero < mayorOMenor) {
        mayorOMenor = numero
      }
    }

  })

  return mayorOMenor
}

console.log(resultadoEleccion(eleccionUsuario, numeros))