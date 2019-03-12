var studentsList = [{
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Gomez',
    dni: 45678989
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

function devolverPosicionesAlumno(textoABuscar, alumnos) {

  var posiciones = []

  for (var i = 0; i < alumnos.length; i++) {

    if (
      alumnos[i].firstName == textoABuscar ||
      alumnos[i].lastName == textoABuscar
    ) {
      posiciones.push(alumnos[i])
    }
  }

  if (posiciones.length == 0) {
    return -1
  } else {
    return posiciones
  }
}

//llamada a la funcion
//devolverPosicionAlumno(prompt("Ingrese nombre o apellido a buscar"))
console.log(
  devolverPosicionesAlumno(
    prompt('Ingrese nombre o apellido a buscar'),
    studentsList
  )
)