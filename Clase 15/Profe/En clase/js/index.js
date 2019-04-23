var request = $.ajax({
  url: "https://jsonplaceholder.typicode.com/users",
  method: "GET"
})

request.done(function (datos) {

  if (Array.isArray(datos)) {

    // recorro array de datos
    for (var i = 0; i < datos.length; i++) {

      // guardo los datos que vienen en el array
      var nombre = datos[i].name
      var userName = datos[i].username
      var email = datos[i].email
      var empresa = datos[i].company.name

      // creamos nodos li
      var nodoLi = $('<li class="card"></li>')
        .append(`<div>Nombre: ${nombre}</div>`)
        .append(`<div>Username: ${userName}</div>`)
        .append(`<div>Email: ${email}</div>`)
        .append(`<div>Empresa: ${empresa}</div>`)

      $("#listaUsuarios").append(nodoLi)
    }
  } else {

    // guardo los datos que vienen en el array
    var nombre = datos.name
    var userName = datos.username
    var email = datos.email
    var empresa = datos.company.name

    // creamos nodos li
    var nodoLi = $('<li class="card"></li>')
      .append(`<div>Nombre: ${nombre}</div>`)
      .append(`<div>Username: ${userName}</div>`)
      .append(`<div>Email: ${email}</div>`)
      .append(`<div>Empresa: ${empresa}</div>`)

    $("#listaUsuarios").append(nodoLi)
  }

})

request.fail(function (error) {
  document.write(`Error numero: ${error.status}`)
})