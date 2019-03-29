// Quiero acceder al padre del nodo que tiene id itemSuiza, y mostrar todo el contenido por consola

var itemSuiza = document.getElementById("itemSuiza")

// Muestro por consola nodo padre
//console.log(itemSuiza.parentNode)
var nodoPadre = itemSuiza.parentNode

// Quiero agregarle un nuevo elemento
var nuevoPais = document.createElement("li")
nuevoPais.innerHTML = "Paraguay"

nodoPadre.appendChild(nuevoPais)