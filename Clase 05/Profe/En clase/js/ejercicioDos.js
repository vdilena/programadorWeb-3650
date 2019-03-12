var numeros = [1, 6, 7, 4, 9, 0, 7]

// Primera forma
/*function existeNumeroNegativo() {

  var encontro = false

  for (var i = 0; i < numeros.length; i++) {

    if (numeros[i] < 0) {
      encontro = true
      break
    }
  }

  return encontro
}

function escribirResultado(encontro) {

  if (encontro) { // encontro == true
    document.write("Hay negativos")
  } else {
    document.write("No hay negativos")
  }
}

escribirResultado(existeNumeroNegativo())*/

function devolverNumerosNegativos() {

  var resultado = []
  numeros.forEach(function (numero) {

    if (numero < 0) {
      resultado.push(numero)
    }
  })

  return resultado

}

var negativos = devolverNumerosNegativos()
console.log(negativos)
console.log(`Hay ${negativos.length} numeros negativos!`)