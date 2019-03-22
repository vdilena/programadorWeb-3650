var listaPalabras = ["Palabra 1", "Palabra 2", "Palabra 3", "Palabra 4", "Palabra 5", "Palabra 6"]

function sacarDesdeCuartoASextoElemento() {
  return listaPalabras.splice(3)
}

console.log(sacarDesdeCuartoASextoElemento())
console.log(listaPalabras)