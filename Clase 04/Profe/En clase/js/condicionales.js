var usuario = {
  username: "jperez",
  password: "asdf123",
  calle: "callao",
  altura: 650,
  provincia: "BSAS",
  pais: "ARG"
}

var usuarios = []
usuarios.push(usuario)

var usuarioDos = {
  username: "jalvarez",
  password: "32145",
  calle: "riobamba",
  altura: 3000,
  provincia: "BSAS",
  pais: "ARG"
}

// spread operator
usuarios = [...usuarios, usuarioDos] // usuarios = [usuarios[0], usuarioDos]

var usuarioTres = {
  username: "cgomez",
  password: "9874",
  calle: "Clay",
  altura: 2900,
  provincia: "BSAS",
  pais: "ARG"
}

usuarios = [...usuarios, usuarioTres] // usuarios = [usuarios[0], usuarios[1], usuarioTres]

// muestro elementos

//usuarios.forEach(function (elementoActualRecorrido) { // usuarios --> elementoActualRecorrido = usuarios[0]...elementoActualRecorrido = usuarios[1]

/*console.log(elementoActualRecorrido.username)
console.log(elementoActualRecorrido.password)
console.log(elementoActualRecorrido.calle)
console.log(elementoActualRecorrido.altura)
console.log(elementoActualRecorrido.provincia)
console.log(elementoActualRecorrido.pais)*/

/*usuarios.forEach((objeto) => {
  console.log(objeto)
})*/

//console.log("--------------------------")
//})

// validacion de usuario

/**
 * var usuarioTres = {
  username: "cgomez",
  password: "9874",
  calle: "Clay",
  altura: 2900,
  provincia: "BSAS",
  pais: "ARG"
}
 */

var username = prompt("Username")
var password = prompt("Password")
var calle = prompt("Calle")
var altura = prompt("Altura")
var provincia = prompt("Provincia")
var pais = prompt("Pais")

for (var i = 0; i < usuarios.length; i++) {

  var elementoActualRecorrido = usuarios[i]

  if (usuarioValido(elementoActualRecorrido)) {
    console.log("Usuario valido!")
  } else {
    console.log("Usuario no valido, bloqueado!")
  }
}

function usuarioValido(elementoActualRecorrido) {

  return elementoActualRecorrido.username == username &&
    elementoActualRecorrido.password == password &&
    elementoActualRecorrido.calle == calle &&
    elementoActualRecorrido.altura == altura &&
    elementoActualRecorrido.provincia == provincia &&
    elementoActualRecorrido.pais == pais
}