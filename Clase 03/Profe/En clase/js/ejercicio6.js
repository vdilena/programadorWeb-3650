var nombreUsuario = prompt("Ingrese nombre")

var usuarioUno = {
  nombre: "Juan Perez",
  edad: 29,
  tieneAptoMedico: true,
  carreras10: 5,
  carrertas21: 3
}

var usuarioDos = {
  nombre: "Carolina Gomez",
  edad: 17,
  tieneAptoMedico: true,
  carreras10: 7,
  carrertas21: 1
}

var usuarios = [usuarioUno, usuarioDos]
var puedeCorrer = false
for (var i = 0; i < usuarios.length; i++) {

  if (usuarios[i].nombre == nombreUsuario) {

    if (usuarios[i].edad >= 18 && usuarios[i].edad <= 90) {

      if (usuarios[i].tieneAptoMedico) {

        if (usuarios[i].carreras10 >= 5 && usuarios[i].carrertas21 >= 3) {

          puedeCorrer = true
        }
      }
    }
  }
}

if (puedeCorrer) {
  document.write("Puede correr!")
} else {
  document.write("NO puede correr!")
}