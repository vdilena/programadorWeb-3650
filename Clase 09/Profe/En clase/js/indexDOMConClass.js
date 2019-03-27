var listaPaises = document.getElementsByClassName("lista")
for (var i = 0; i < listaPaises.length; i++) {

  var contenidoActual = listaPaises[i].textContent
  listaPaises[i].innerHTML = (i + 1) + "_" + contenidoActual
}