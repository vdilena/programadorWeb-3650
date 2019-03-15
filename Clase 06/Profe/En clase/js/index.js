/*
let

var numero = 9
for (let index = 0; index < 10; index++) {
  numero++
}
console.log(index) // not defined
*/

/*
const CERO = 0
console.log(CERO)
*/


// objetos antes
/*var ford = {
  color: "Azul",
  modelo: "2013",
  puertas: 5
}

var fiat = {
  color: "Verde",
  modelo: "2008",
  puertas: 4
}

var mb = {
  color: "Gris",
  modelo: "2017",
  puertas: 6
}*/

/*
// clase Auto
function Automovil(color, modelo, puertas) {

  //propiedades
  this.color = color ? color : "Azul"
  this.modelo = modelo ? modelo : "2015"
  this.puertas = puertas ? puertas : 3
  this.velocidad = 0

  //metodo
  this.acelerar = function () {
    for (var i = 1; i <= 100; i++) {
      this.velocidad++
    }
  }

}

var ford = new Automovil("Verde", "2008", 4)
//console.log(ford)
var fiat = new Automovil("Gris", "2017", 6)
//console.log(fiat)
var automoviles = [ford, fiat]
//console.log(automoviles)

ford.acelerar()

console.log(ford.velocidad)
*/

function Categoria(nombre) {

  this.nombre = nombre
}

function Producto(nombre, stock, precio, categoria) {

  this.nombre = nombre
  this.stock = stock
  this.precio = precio
  this.categoria = categoria

  this.comprar = function (precio) {

    if (this.stock > 0 && precio == this.precio) {
      this.stock--
    }
  }

  this.mostrarCategoria = function () {
    return this.categoria.nombre
  }


  this.modificarCategoria = function () {
    this.categoria.nombre = this.categoria.nombre + "02"
    return this.categoria.nombre
  }
}

var categoriaTelevisor = new Categoria("Televisor")
var televisor = new Producto("LG", 300, 15000, categoriaTelevisor)

televisor.comprar(parseInt(prompt("Pagar")))
//console.log(televisor.stock)
//console.log(televisor.mostrarCategoria())
console.log(televisor)
televisor.modificarCategoria()
console.log(televisor)