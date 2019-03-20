function Estudiante(firstName, lastName, email, dni) {

  this.firstName = firstName ? firstName : ""
  this.lastName = lastName ? lastName : ""
  this.email = email
  this.dni = dni

  this.getId = function () {
    return dni
  }

  this.getFullName = function () {

    return `Nombre: ${this.firstName}, Apellido: ${this.lastName}, DNI: ${this.dni}, Email: ${this.email}`
  }

}

// obtengo datos de storage
var estudiantesLocal = JSON.parse(localStorage.getItem("estudiantes"))

for (var w = 0; w < estudiantesLocal.length; w++) {

  var nuevoEstudiante = new Estudiante(estudiantesLocal[w].firstName, estudiantesLocal[w].lastName,
    estudiantesLocal[w].email, estudiantesLocal[w].dni)
  console.log(`ID: ${nuevoEstudiante.getId()}, ${nuevoEstudiante.getFullName()}`)
}