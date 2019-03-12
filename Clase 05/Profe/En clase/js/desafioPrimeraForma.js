var studentsList = [{
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
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


function devolverPosicionAlumno(textoABuscar, alumnos) {

  var posicionADevolver = -1

  for (var i = 0; i < alumnos.length; i++) {

    if (alumnos[i].firstName == textoABuscar || alumnos[i].lastName == textoABuscar) {
      posicionADevolver = i
      break
    }
  }

  return posicionADevolver
}

//llamada a la funcion
//devolverPosicionAlumno(prompt("Ingrese nombre o apellido a buscar"))
console.log(devolverPosicionAlumno(prompt("Ingrese nombre o apellido a buscar"), studentsList))