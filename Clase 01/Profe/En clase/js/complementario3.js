var nombre = prompt("Nombre producto")
var categoria = prompt("Categoria")
var stock = prompt("Stock")

var producto = {
  'nombre': nombre,
  'categoria': categoria,
  'stock': stock
}

document.write(`Nombre de producto: ${producto["nombre"]} <br>`)
document.write(`Categoria: ${producto.categoria} <br>`)
document.write(`Stock: ${producto.stock} <br>`)