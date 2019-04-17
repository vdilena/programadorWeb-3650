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

guardarUsuariosSiNoLoEstaban()

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

function guardarUsuariosSiNoLoEstaban() {

  if (!localStorage.getItem("usuarios")) {
    localStorage.setItem("usuarios", JSON.stringify(usuariosValidos))
  }
}

// Codigo animacion con Jquery

$("#lista-items").hide()

$("#ver-usuario").one("click", function () {

  var usuarios = JSON.parse(localStorage.getItem("usuarios"))
  for (var index = 0; index < usuarios.length; index++) {
    var nuevoLI = $(`<li class="list-group-item">${usuarios[index].usuario}</li>`)
    $("#lista-items").append(nuevoLI)
  }

  $("#lista-items").show(3000)
})

$("#btnAddUser").click(function () {

  var nuevoUsuario = "hperalta"
  var nuevoLI = $(`<li class="list-group-item">${nuevoUsuario}</li>`)
  nuevoLI.hide()
  $("#lista-items").append(nuevoLI)
  nuevoLI.show(1000)
})