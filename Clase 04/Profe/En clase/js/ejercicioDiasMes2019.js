var mes = prompt("Ingrese mes").toLowerCase()

switch (mes) {
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    /*for (var i = 1; i <= 31; i++) {
      document.write(i + "<br>")
    }*/
    mostrarDias(31)
    break
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    /*for (var j = 1; j <= 30; j++) {
      document.write(j + "<br>")
    }*/
    mostrarDias(30)
    break
  case "febrero":
    /*for (var k = 1; k <= 28; k++) {
      document.write(k + "<br>")
    }*/
    mostrarDias(28)
    break
  default:

    document.write("El mes ingresado no es valido")
    break
}

function mostrarDias(cantidadDias) {

  for (var i = 1; i <= cantidadDias; i++) {
    document.write(i + "<br>")
  }
}