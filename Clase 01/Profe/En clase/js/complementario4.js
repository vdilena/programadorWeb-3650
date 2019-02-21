var lista = [2, 6, 1, 7, "-2"]
var suma = 0

suma += lista[0] // suma = suma + lista[0] --> 2
suma += lista[1] // suma = 8
suma += lista[2] // suma = 9
suma += lista[3]
suma += parseInt(lista[4])

document.write(suma)