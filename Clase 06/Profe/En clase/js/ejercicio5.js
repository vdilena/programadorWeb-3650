var numeros = [1, 8, 9, 5, 7, 0, 6]

function darVuelta() {

  var numerosADevolver = []

  for (var i = numeros.length - 1; i >= 0; i--) {

    numerosADevolver.push(numeros[i])
  }

  return numerosADevolver
}

console.log(darVuelta())