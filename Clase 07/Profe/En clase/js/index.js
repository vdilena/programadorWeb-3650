//typeof: tipo de valor de una variable

var elementosSueltos = []

var nombre = "Juan"
elementosSueltos.push(nombre)

var numeroEntero = 50
elementosSueltos.push(numeroEntero)

var numeroFloat = 2.6
elementosSueltos.push(numeroFloat)

var validacion = true
elementosSueltos.push(validacion)

var objeto = {}
elementosSueltos.push(objeto)

var otroArray = [1, 3, 6]
elementosSueltos.push(otroArray)

function funcionEjemplo() {
  return true
}
elementosSueltos.push(funcionEjemplo)

for (var j = 0; j < elementosSueltos.length; j++) {
  document.write(`El tipo del elemento es ${typeof(elementosSueltos[j])} <br>`)
}

// Metodos de strings

// length: cantidad de caracteres
var palabra = " Buenas noches clase 4125 56 clase"

console.log(`Longitud palabra: ${palabra.length}`)

// trim: quitar espacios iniciales y finales:
console.log("  Esta es una palabra estre espacios!  ".trim())

//indexOf: devuelve el indice de la primera ocurrencia de la palabra buscada
console.log(palabra.indexOf("noches")) // 7
console.log(palabra.indexOf("clases")) // -1
console.log(palabra.indexOf(" noches ")) // 6
console.log(palabra.trim().indexOf("4125 56"))
console.log(palabra.indexOf("noche"))
console.log(palabra.indexOf("as")) // 5

//lastIndexOf: me devuelve la ultima ocurrencia de un string
console.log(palabra.lastIndexOf("as"))
console.log(palabra.lastIndexOf("clase"))

//split: transformar a traves de un separador, un string a un array

var numeros = "1,9,8,-5,4"
/*var arrayNumeros = []
arrayNumeros[0] = numeros[0]
arrayNumeros[1] = numeros[2]
arrayNumeros[2] = numeros[4]
arrayNumeros[0] = numeros[0]
arrayNumeros[0] = numeros[0]*/
var arrayNumeros = numeros.split(",")
console.log(arrayNumeros)

var otraPalabra = "Hola Clase PW de CH"
var resultado = otraPalabra.split(" ")
console.log(resultado)

// includes
console.log(otraPalabra.includes("PW")) // true
console.log(otraPalabra.includes("Clase P")) // true

// substring: devuelve una porcion de string
console.log(otraPalabra.substring(5, 10))

// replace: me devuelve un string resultado de reemplazar una palabra
var palabraReemplazada = otraPalabra.replace("PW", "Programador Web")
console.log(palabraReemplazada)

// Funciones de Array

// pop: quita el ultimo elemento del array
var numeros = [5, 8, 6, -2]
console.log(numeros.pop())
console.log(numeros)

// join: transforma un array a un string, usando un cararter unificador
var frutas = ["Pera", "Manzana", "Naranja"]
console.log(frutas.join("-"))

var objetos = [{
  nombre: 'Renault',
  modelo: 2018
}, {
  nombre: 'Fiat',
  modelo: '2015'
}]

//slice

//splice