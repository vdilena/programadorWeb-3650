var usuariosValidos = [{
    usuario: "jperez",
    password: "asdf1234"
  },
  {
    usuario: "cgomez",
    password: "qwerty"
  },
  {
    usuario: "vdilena",
    password: "asdf1234"
  }
]

if (!localStorage.getItem("credenciales")) {

  localStorage.setItem("credenciales", JSON.stringify({}))
}

function validarCantCaracteres(input) {

  var valorInput = input.value

  if (valorInput.length < 6) {

    var divError = document.getElementById(`error_${input.id}_incorrecto`)
    divError.innerHTML = `Peligro!! Esta ingresando un ${input.id} incorrecto`
    divError.style.color = "red"
    document.getElementById(input.id).className += " is-invalid"
  }
}

function resetError(input) {

  var idDeInput = input.id
  var divDeError = null

  if (idDeInput == "usuario") {
    divDeError = document.getElementById("error_usuario_incorrecto")
  } else {
    divDeError = document.getElementById("error_password_incorrecto")
  }

  divDeError.innerHTML = ""
  document.getElementById(idDeInput).className = "form-control"

}

function ingresar() {

  var usuarioIngresado = document.getElementById("usuario").value
  var passwordIngresado = document.getElementById("password").value

  if (usuarioIngresado.length >= 6 && passwordIngresado.length >= 6) {

    for (var i = 0; i < usuariosValidos.length; i++) {

      var usuarioValido = usuariosValidos[i]
      if (usuarioValido.usuario == usuarioIngresado &&
        usuarioValido.password == passwordIngresado) {

        // var nuevoDiv = document.createElement("div")
        // nuevoDiv.innerHTML = "<h1 class='text-center'>Ingreso correctamente al sistema!</h1>"
        // nuevoDiv.innerHTML += "<button class='btn btn-danger' onclick='cerrarSesion()'>Cerrar sesion</button>"

        // var container = document.getElementById("container")
        // container.innerHTML = nuevoDiv.innerHTML
        //paginaIngresoSistema()
        irAHome()

        localStorage.setItem("credenciales", JSON.stringify({
          usuario: usuarioIngresado,
          password: passwordIngresado
        }))

        break
      } else {

        var h2Error = document.getElementById("error_credenciales")
        h2Error.innerHTML = "Credenciales incorrectas!"
      }
    }
  }
}

function cerrarSesion() {

  localStorage.removeItem("credenciales")
  location.href = "index.html"
}

function paginaIngresoSistema() {

  var nuevoDiv = document.createElement("div")
  nuevoDiv.innerHTML = "<h1>Ingreso correctamente al sistema!</h1>"
  nuevoDiv.innerHTML += "<button class='btn btn-danger' onclick='cerrarSesion()'>Cerrar sesion</button>"

  var container = document.getElementById("container")
  container.innerHTML = nuevoDiv.innerHTML
}

function irAHome() {
  location.href = "home.html"
}