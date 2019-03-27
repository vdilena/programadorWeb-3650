function guardarEnLocalStorage(clave, array) {
  var arrayAJson = JSON.stringify(array)
  localStorage.setItem(clave, arrayAJson)
}

guardarEnLocalStorage("lista", ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS'])