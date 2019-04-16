$("#firstName").keyup(tieneContenido)
$("#comments").keyup(tieneContenido)
$("#email").keyup(esUnEmailValido)
$("#submitButton").click(habilitarBoton)

function tieneContenido() {

  var campo = $(this)
  var id = campo.prop("id")

  if (campo.val().length == 0) {

    campo.addClass("is-invalid")
    campo.removeClass("is-valid")
    $(`#msjError-${id}`).text("El campo es requerido")
    $(`#msjError-${id}`).css("color", "red")
  } else {

    campo.addClass("is-valid")
    campo.removeClass("is-invalid")
    $(`#msjError-${id}`).text("")
  }

  habilitarBoton()
}

function esUnEmailValido() {

  var campo = $(this)
  var textoAMostrar = ""
  var esValido = true

  if (!campo.val().includes("@")) {
    textoAMostrar += "Debe contener arroba (@) "
    esValido = false
  }
  if (!campo.val().includes(".")) {
    textoAMostrar += "Debe contener punto (.) "
    esValido = false
  }

  if (esValido) {

    campo.addClass("is-valid")
    campo.removeClass("is-invalid")
    $("#msjError-email").text("")
  } else {
    campo.addClass("is-invalid")
    campo.removeClass("is-valid")
    $("#msjError-email").text(textoAMostrar)
    $("#msjError-email").css("color", "red")
  }

  habilitarBoton()

  /*var esValidoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(campo.val())
  if (!esValidoEmail) {
    textoAMostrar += "Debe ser un email valido!"
    $("#msjError-email").text(textoAMostrar)
    $("#msjError-email").css("color", "red")
  }*/
}

function habilitarBoton() {

  var cantValidos = $(".is-valid")

  if (cantValidos.length > 2) {
    $("#submitButton").prop("disabled", false)
  } else {
    $("#submitButton").prop("disabled", true)
  }
}