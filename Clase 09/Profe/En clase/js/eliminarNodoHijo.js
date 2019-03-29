var listaPaises = document.getElementById("listaPaises").children
//var itemSuiza = document.getElementById("itemSuiza")

// Remover item suiza
//listaPaises.removeChild(itemSuiza)
for (var index = 0; index < listaPaises.length; index++) {
  var nodoPais = listaPaises[index]

  if (nodoPais.textContent == "Suiza") {
    document.getElementById("listaPaises").removeChild(nodoPais)
  }
}