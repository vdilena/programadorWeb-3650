//typeof: tipo de valor de una variable
/*
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
var frutas = ["Pera", "Manzana", "Naranja", "Mango", "Durazno", "Coco", "Tomate"]
console.log(frutas.join("-"))

var objetos = [{
  nombre: 'Renault',
  modelo: 2018
}, {
  nombre: 'Fiat',
  modelo: '2015'
}]

//slice
//var frutasRecortado = frutas.slice(0, 4) // Devuleve de Pera a Mango
var frutasRecortado = frutas.slice(3, 5) // Desde manzana hasta mango
console.log("Con slice")
console.log(frutasRecortado)
console.log(frutas)

//splice
var frutasRecortado = frutas.splice(2, 4)
console.log("Con splice")
console.log(frutasRecortado)
console.log(frutas)

//funciones de callbacks autoejecutables

setTimeout(function () {
  console.log("Despues de unos segundos!")
}, 1000)

// aplicar suma
function aplicarSuma(a, b) {
  console.log(b)
  return a + b
}

console.log(aplicarSuma(1))
*/


//filter
function Alumnos(nombre, apellido, edad) {

  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
}

var alumnos = [
  new Alumnos("Carolina", "Gomez", 19),
  new Alumnos("Juan", "Perez", 17),
  new Alumnos("Maria", "Jimenez", 18),
  new Alumnos("German", "Alvarez", 16)
]


// Quiero obtener todos los alumnos mayor o igual a 18, y que me lo devuelva en otro array
/*
var alumnosMayores = []
or (var i = 0; i < alumnos.length; i++) {

  if (alumnos[i].edad >= 18) {
    alumnosMayores.push(alumnos[i]) // alumnosMayores = [...alumnosMayores, alumnos[i]]
  }
}*/
/*
var alumnosMayores = alumnos.filter(function (item) {
  return item.edad >= 18
})

// Version arrow function
var alumnosMayoresAF = alumnos.filter(item => item.edad >= 18)

console.log(alumnosMayores)
console.log(alumnosMayoresAF)

var numeros = [1, 6, 3, 7]
var numerosMayoresA5 = numeros.filter(item => item > 5) // en arrow function, como tengo solo un parametro, puedo escribirlo asi
console.log(numerosMayoresA5)
*/

/*Me tiene que devolver cada elemento salvo los casos en los que el numero sea negativo*/

var numerosAAnalizar = [1, 9, 6, 0, -4, 3]
var filtrarPorNumerosPositivos = numerosAAnalizar.filter((numero) => {

  if (numero >= 0) {
    return numero
  }
})

//console.log(filtrarPorNumerosPositivos) // [1, 10, 15, 6]

//map

/**
 * Quiero obtener un array como resultado de multiplicar a cada numero del array inicial, por dos
 */
var inicial = [1, 9, 6, 0, -4, 3]
var resultado = inicial.map(item => item * 2)
//console.log(resultado)
//console.log(inicial)

/**
 * Tengo un array de objetos Producto, con nombre y stock, quiero vaciar el stock de todos los productos que tengan mas de 400
 */

function Producto(nombre, stock) {

  this.nombre = nombre
  this.stock = stock

  this.vaciarStock = function () {
    this.stock = 0
  }
}

var productos = [
  new Producto("Televisor Lg", 300),
  new Producto("Heladera Gafa", 250),
  new Producto("Televisor Sony", 150),
  new Producto("Heladera Wirpool", 800)
]

//productos.map(item => item.vaciarStock())

//console.log(productosSinStock)
//console.log(productos)

// reduce
/**
 * Quiero la suma de todos los elementos del array
 */
var numeros = [1, 6, 8, 5, 2]

var resultado = numeros.reduce((acumulado, valorActual) => {
  return acumulado + valorActual
})

//console.log(resultado)
var arrayASumar = []
var resultado = productos.reduce((itemAnterior, itemActual) => {
  arrayASumar.push(itemAnterior.stock += itemActual.stock)
  return itemActual
})

var resultado = arrayASumar.reduce((acumulado, valorActual) => acumulado + valorActual)
console.log(resultado)