var listaAlumnosInicial = ["Carolina", "Juan", "Pedro", "Maria"]

function devolverListaDelLS(key) {

  var listaAlumnos = localStorage.getItem(key)

  if (listaAlumnos) {
    return JSON.parse(listaAlumnos)
  } else {
    return []
  }
}

if (!localStorage.getItem("alumnos")) {
  localStorage.setItem("alumnos", JSON.stringify(listaAlumnosInicial))
}

console.log(devolverListaDelLS("alumnos"))