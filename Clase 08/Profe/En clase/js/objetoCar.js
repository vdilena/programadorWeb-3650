var cars = [{
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: `Audi TT`,
    brand: 'Audi',
    year: 2017
  },
  {
    model: `Gran turismo`,
    brand: 'Maserati',
    year: 2018
  }
]

function Car(model, brand, year) {

  this.model = model
  this.brand = brand
  this.year = year
  this.id = 0

  this.setId = function (id) {
    return this.id = id
  }

  this.getCarName = function () {
    var nombre = this.model + " " + this.brand + " " + this.year
    return nombre
  }
}

var listaAutosCreadasConObjetosConClases = []
//cars.forEach(function (item) {
for (var i = 0; i < cars.length; i++) {

  var autoNuevo = new Car(cars[i].model, cars[i].brand, cars[i].year)
  listaAutosCreadasConObjetosConClases.push(autoNuevo)
  autoNuevo.setId(listaAutosCreadasConObjetosConClases.length)
}
//console.log(autoNuevo)
//console.log(listaAutosCreadasConObjetosConClases[1])
//console.log(cars[1])
//console.log(listaAutosCreadasConObjetosConClases[1].getId())
console.log(listaAutosCreadasConObjetosConClases)