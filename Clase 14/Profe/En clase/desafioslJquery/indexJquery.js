$("#inputEmail").blur(function () {

  var valorDeInput = $(this).val()
  if (tieneContenido(valorDeInput) && tienePuntoYArroba(valorDeInput)) {
    $(this).addClass("is-valid")
    $(this).removeClass("is-invalid")
  } else {
    $(this).addClass("is-invalid")
    $(this).removeClass("is-valid")
  }
})

function tieneContenido(inputValue) {
  return inputValue.length > 0
}

function tienePuntoYArroba(inputValue) {
  return inputValue.includes("@") && inputValue.includes(".")
}