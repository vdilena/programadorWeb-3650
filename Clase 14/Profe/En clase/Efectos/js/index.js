// hide: oculta el contenido de la etiqueta donde hace el hide con efecto desde abajo hacia arriba
// show: muestra el contenido de la etiqueta donde hace el show con efecto desde arriba hacia abajo
// fadeIn: muestra el contenido de la etiqueta donde hace el fadeIn con efecto de opacidad cada vez mas oscura
// fadeOut: muestra el contenido de la etiqueta donde hace el fadeOut con efecto de desvanecimiento
// slideDown: similar a show
// slideUp: similar a hide

$("#btnAnimar").click(function () {
  //$("p").hide(3000, function () {

  /*$(this).fadeIn(3000, function () {
    $(this).fadeOut(3000)
  })*/
  /*$(this).text("Este es el nuevo texto!!!")
  $(this).css("color", "blue")
  $(this).show(2000, function () {
    console.log("Se termino de mostrar!")
  })*/
  //})
  $("p").hide(3000, function () {
    $(this).slideDown(3000, function () {
      $(this).css("color", "blue")
      $(this).slideUp(3000, function () {
        console.log("Se termino de hacer slideUp()")
      })
    })
  })
})