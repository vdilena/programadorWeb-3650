function dividir() {

  var numeroUno = parseInt(prompt("Primer numero"))

  while (isNaN(numeroUno)) {
    numeroUno = parseInt(prompt("Primer numero"))
  }

  var numeroDos = parseInt(prompt("Segundo numero"))

  while (!isFinite(numeroUno / numeroDos)) {
    numeroDos = parseInt(prompt("Segundo numero"))
  }

  return numeroUno / numeroDos
}

document.write(`El resultado es ${dividir()}`)