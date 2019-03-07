var datos = [{
    "username": "jperez",
    "password": "132"
  },
  {
    "username": "cgomez",
    "password": "321"
  },
  {
    "username": "pjimenez",
    "password": "asd123"
  },
]

var inicioSesion = false
var contadorIntentos = 1

while (!inicioSesion && contadorIntentos < 5) {

  var usuario = prompt("Username")
  var password = prompt("Password")

  for (var i = 0; i < datos.length; i++) {

    if (datos[i].username == usuario && datos[i].password == password) {
      inicioSesion = true
      break
    }
  }

  contadorIntentos++

  if (!inicioSesion) {
    alert("Vuelva a intentarlo nuevamente!")
  }

}

if (inicioSesion) { // inicioSesion == true
  document.write("Inicio sesion")
} else {
  document.write("Usuario bloqueado")
}