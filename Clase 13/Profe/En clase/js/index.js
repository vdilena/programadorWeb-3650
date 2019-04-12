// solo se ejecuta una sola vez

/*$("#btnVotar").one("click", function () {
  console.log(`Voto la opcion: ${  $("select").val() }`)
  $(this).prop("disabled", true)
})*/

// quiero que se ejecute hasta 3 veces
/*var cantVecesClickeada = 0
$("#btnVotar").click(function () {

  cantVecesClickeada++
  if (cantVecesClickeada > 3) {
    $(this).prop("disabled", true)
    return false
  }
  console.log("Entro a click()")
})*/

// crear una nueva opcion dinamicamente (sin JQ)
/*var nuevaOpcion = document.createElement("option")
nuevaOpcion.value = "3"
nuevaOpcion.textContent = "Alfajor de Mouse"
var nodoSelect = document.getElementById("votacion")
nodoSelect.appendChild(nuevaOpcion)*/

/*// crear una nueva opcion dinamicamente (con JQ)
var valorNuevaOpcion = 3
var textoNuevaOpcion = "Alfajor de Mouse"
$("#votacion").append($(`<option id="${valorNuevaOpcion}" value= "${valorNuevaOpcion}">${textoNuevaOpcion}</option>`))

//sacar un elemento
$("#votacion_2").remove()

//quiero acceder al elemento padre de un elmento
console.log($("#votacion_1").parent())*/

// recorrer con each
var valorAEliminar = 2
$("option").each(function () {
  console.log(`Value: ${$(this).val()} - Texto: ${ $(this).text() }`)

  if ($(this).val() == valorAEliminar) {
    $(this).remove()
  }
})