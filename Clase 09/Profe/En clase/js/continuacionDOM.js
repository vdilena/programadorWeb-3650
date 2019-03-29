var pais = document.getElementById("pais")
console.log(pais.value)
console.log(pais.name)
console.log(pais.className)

var paises = document.getElementsByClassName("item")
for (var i = 0; i < paises.length; i++) {
  //console.log(paises[i].textContent)
  //paises[i].innerHTML = (i + 1) + "_" + paises[i].textContent
  paises[i].innerHTML = ""
}