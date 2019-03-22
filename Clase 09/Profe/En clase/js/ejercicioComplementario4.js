function existeHola(palabraIngresada) {
  return palabraIngresada.includes("hola")
}

console.log(existeHola(prompt("Palabra").toLowerCase()))