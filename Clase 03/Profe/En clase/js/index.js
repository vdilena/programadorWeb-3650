/**
 * Quiero escribir los numeros del 1 al 10 por pantalla
 */

/*var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])
console.log(numeros[5])
console.log(numeros[6])
console.log(numeros[7])
console.log(numeros[8])
console.log(numeros[9])*/

/*for (var indice = 1; indice <= 10; indice++) { // indice ++ --> indice = indice + 1
  document.write(indice + "<br>")
}*/

/**
 * 
 * Consigna: quiero saber si el numero 3 existe en el array
 * var numeros = [1, 6, 9, 4, 3, 720, 5, 15]
 * 
 * if(numeros[0] == 3) {
				document.write("Existe el numero 3 en el array!")
			} else if(numeros[1] == 3) {
				document.write("Existe el numero 3 en el array!")
			} else if(numeros[2] == 3) {
				document.write("Existe el numero 3 en el array!")
			} else if(numeros[3] == 3) {
				document.write("Existe el numero 3 en el array!")
			} else if(numeros[4] == 3) {
				document.write("Existe el numero 3 en el array!")
			} else if(numeros[5] == 3) {
				document.write("Existe el numero 3 en el array!")
			} else if(numeros[6] == 3) {
				document.write("Existe el numero 3 en el array!")
			} else if(numeros[7] == 3) {
				document.write("Existe el numero 3 en el array!")
			}
 */

/*var numeros = [1, 6, 9, 4, 3, 723, 5, 15]

for (var i = 0; i < numeros.length; i++) {

  //var item = numeros[i]
  if (numeros[i] == 3) {
    //if (item == 3) {
    document.write("Existe el 3!")
  }
}*/

/**
 * consigna: quiero pedirle numeros al usuario, hasta que ingrese N
 */

/*var respuesta = ""
var numeroIteracion = 1

while (respuesta != "n") {

  respuesta = prompt("Quiere continuar? s/n").toLowerCase()
  console.log(numeroIteracion++)
}*/

/**
 * consigna: quiero que el usuario ingrese numeros, los cuales voy a ir sumando, hasta que ingrese caracter n
 */

/*var respuesta = ""
var suma = 0

while (respuesta != "n") {

  respuesta = prompt("Ingrese numero o 'n' para terminar")

  if (!isNaN(parseInt(respuesta))) {
    suma += parseInt(respuesta) // suma = suma + respuesta
  }
}

document.write(suma)*/

/**
 * var numeros = [1, 6, 9, 4, 3, 723, 5, 15]
 * Consigna: quiero buscar en el array, el numero 3, pero, cuando lo encuentre, quiero detener la busqueda
 */

/*var numeros = [1, 6, 9, 4, 3, 723, 5, 15]
var encontro = false
for (var x = 0; x < numeros.length; x++) {

  if (numeros[x] == 6) {
    encontro = true
    console.log("Posicion " + x)
    break
  }

  console.log(x)
}

if (encontro) { //if(encontro == true)
  document.write("Existe el 6")
}*/

/**
 * consigna: quiero escribir por consola, numeros del 1 al 20, pero, cuando llegue al 15, parar de mostrar
 */

/*var i = 0

while (i <= 20) {

  console.log(i)
  i++
  if (i == 15) {
    break
  }
}*/

/**
 * quiero mostrar solo los numeros pares del 1 al 20
 */

/*for (var y = 1; y <= 20; y++) {

  var esPar = (y % 2) == 0 // if((y % 2) == 0) {...}
  if (!esPar) {
    continue
  }

  if (y == 5) {

    console.log(`El valor es: ${y}`)
  }

  console.log(y)
}*/

// do/while
var respuesta = "n"
var suma = 0

do {

  respuesta = prompt("Ingrese numero o 'n' para terminar")

  if (!isNaN(parseInt(respuesta))) {
    suma += parseInt(respuesta) // suma = suma + respuesta
  }
} while (respuesta != "n")

document.write(suma)