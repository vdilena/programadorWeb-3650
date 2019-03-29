// Quiero crear un nuevo pais

// Creo un nuevo nodo
var nuevoNodo = document.createElement("li")

// Quiero agregar nodo al UL
var listaPaises = document.getElementById("listaPaises")

// Quiero agregar a Suecia como pais
nuevoNodo.innerHTML = "Suecia"

// Por ultimo quiero agregar (appendear) el nuevo nodo en la ul
listaPaises.appendChild(nuevoNodo)

// Quiero agregar el nodo creado a otra lista
var otraLista = document.getElementById("otraLista")
otraLista.appendChild(nuevoNodo) // si estoy usando el nodo en esta lista, ya no existe en la anterior