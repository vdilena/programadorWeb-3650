// setItem

var nombreUsuario = prompt("Nombre de usuario")
var password = prompt("Password")

localStorage.setItem("username", nombreUsuario)
localStorage.setItem("password", password)

// getItem

if (localStorage.getItem("username") && localStorage.getItem("password")) {
  console.log(localStorage.getItem("username"), localStorage.getItem("password"))
} else {

  var nombreUsuario = prompt("Nombre de usuario")
  var password = prompt("Password")

  localStorage.setItem("username", nombreUsuario)
  localStorage.setItem("password", password)
}

// removeItem

localStorage.removeItem("username")
localStorage.removeItem("password")