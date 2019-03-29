//Quiero validar que se ingresen al menos 6 caracteres
function validarCantidadCaracteres(nodoInput) {

  if (nodoInput.value.length < 6) {

    var divError = document.getElementById("error_usuario_incorrecto")
    divError.innerHTML = "El campo debe tener al menos 6 caracteres!"
    divError.style.color = "red"
    nodoInput.className += " is-invalid"
  } else {
    console.log("Tiene los caracteres suficientes!")
  }
}

function resetError(nodoInput) {

  if (nodoInput.value.length >= 6) {
    document.getElementById("error_usuario_incorrecto").innerHTML = ""
    nodoInput.className = "form-control is-valid"
  }
}