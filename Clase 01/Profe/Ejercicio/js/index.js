/*var numero = 25
document.write(numero)
console.log(numero)*/

//document.write("<br>")

var nombre = "Juan" // cadena de caracteres o string
//document.write(nombre)
console.log(nombre)

var numero = 5 // number (entero, decimal y exponencial)
console.log(numero)

var condicion = true // booleanos: true/false

var variableNula = null // valor nulo

// valor de tipo array

var lista = [] // inicializar un array
lista.push(6)
lista.push(5)
lista.push(-3)
lista.push(2)

console.log(lista)

var nombres = ["Juan", "Carolina", "Pedro"] // inicializacion con valores
console.log(nombres)

//document.write(lista[2])

// Objetos simples
var libro = {
  'nombre': '1984',
  'autor': 'Orwell',
  'editorial': 'debolsillo',
  'isbn': 5454545454,
  'numero': 6
}

var numeroUno = 6
var numeroDos = 10
var resutadoSuma = numeroUno + numeroDos
//document.write(`Suma : ${resutadoSuma} <br>`)
// suma
//document.write("Suma : " + (numeroUno + numeroDos) + "<br>")

//resta
//document.write(`Resta : ${numeroUno - numeroDos} <br>`)

//multiplicacion
//document.write(`Multiplicacion : ${numeroUno * numeroDos} <br>`)

//division
//document.write(`Division : ${numeroUno / numeroDos} <br>`)

//incrementar
var subtotal = 5
console.log(subtotal)
subtotal++ // subtotal = subtotal + 1
console.log(subtotal)

//decrementar
var decrementado = 9
console.log(decrementado)
decrementado-- //decrementado = decrementado -1
console.log(decrementado)

//prompt
//var nombre = prompt("Como te llamas?")
//document.write(nombre)

var numeroUno = prompt("Numero 1")
var numeroDos = prompt("Numero 2")

document.write(parseInt(numeroUno) + parseInt(numeroDos))