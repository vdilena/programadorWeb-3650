// setItem

var nombreUsuario = prompt("Nombre de usuario")
var password = prompt("Password")

sessionStorage.setItem("username", nombreUsuario)
sessionStorage.setItem("password", password)

// getItem

if (sessionStorage.getItem("username") && sessionStorage.getItem("password")) {
  console.log(sessionStorage.getItem("username"), sessionStorage.getItem("password"))
} else {

  var nombreUsuario = prompt("Nombre de usuario")
  var password = prompt("Password")

  sessionStorage.setItem("username", nombreUsuario)
  sessionStorage.setItem("password", password)
}

// removeItem

sessionStorage.removeItem("username")
sessionStorage.removeItem("password")