// obtener el value sin Jquery
/*var nombre = document.getElementById("nombre").value
console.log(nombre)*/

// obtener el value con Jquery
/*var nombre = $("#nombre").val()
console.log(nombre)*/

//obtener elementos que tienen la misma class sin JQ
/*var nombres = document.getElementsByClassName("item-lista")
console.log(nombres)*/

//obtener elementos que tienen la misma class con JQ
/*var nombres = $(".item-lista")
nombres.each(function () {
  //console.log($(this).text())
  console.log($(this).html())
})*/

//acceder al texto de los parrafos
var parrafos = $("p")

parrafos.each(function () {
  console.log($(this).text())
})

// acceder a propiedades de un elemento

// accedeer a clase de un elemento sin JQ
/*var claseDeInputNombre = document.getElementById("nombre").className
console.log(claseDeInputNombre)*/

// accedeer a clase de un elemento con JQ
/*var claseDeInputNombre = $("#nombre").prop("class")
console.log(claseDeInputNombre)*/

// prop, puede acceder a cualquier propiedad de la etiqueta

// Agregar clases con Jquery
$("#nombre").addClass("agrandarLetra")

// Sacar una clase
$("#nombre").removeClass("control")

// Quiero saber si un elemento tiene una clase
//console.log($("#nombre").hasClass("agrandarLetra")) // Devuelve true/false

// Acceder al contenido HTML de un elemento
/*var listaContenedor = $("#contenedor")
console.log(listaContenedor.html())

// Limpiar dinamicamente HTML
$("#contenedor").html("")*/

// Eventos

//onclick sin JQ
function ejecutarClick() {
  console.log("Se hizo un click!")
}

//onclick con JQ
$("#boton").click(function () {
  console.log("Click con Jquery!")
})

// quiero acceder a la lista desplegable
$("#paises").change(function () {
  console.log($(this).val())
})

$("#nombre").blur(() => {
  console.log("Se perdio el foco del input!")
})