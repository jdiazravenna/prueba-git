// console.log('Hola')

// Tipos de datos no Primitivos

// Arrays

// Un arreglo tiene elementos de cualquier tipo: cadena, números, booleans, null, undefined
// arrays, objetos, etc

// DECLARACION DE ARREGLOS

const arregloVacio = [] // recomendado de uso, no usar Array()

const ListaDeNumeros = [25, 36, 72, 63, 1988]
const ListaDeValores = ['Hola', 1, 2, 3, 'como estas', 152, true, null]

console.log(arregloVacio)

console.log(ListaDeNumeros)
console.log(ListaDeValores)

// Lectura de los elementos de un arreglo

console.log(ListaDeValores[-2])

// Escritura de un arreglo
console.log(ListaDeValores)

ListaDeValores[0] = 'Juan'
ListaDeValores[3] = 9999
console.log(ListaDeValores)

// insertar nuevos elementos en un arreglo o array

const ListaDeNombres = ['Juan', 'Elizabeth', 'Gian', 'Allison', 'Nikole']

console.log(ListaDeNombres)

ListaDeNombres.push('Juliana') // Añade el item en la ultima posición
console.log(ListaDeNombres)

// Remover un elemento de un arreglo o array

ListaDeNombres.pop(ListaDeNombres)
console.log(ListaDeNombres) // Remueve el ultimo elemento

// Insertar un elemento en una posición determinada

ListaDeNombres.splice(0, 0, 'Hola')
console.log(ListaDeNombres)

// Eliminar un elemento del arreglo

ListaDeNombres.splice(3, 1, 'hola') // Eliminamos el elemento en la posicion 3, y agregamos un texto o elemento
console.log(ListaDeNombres)

// Obtener el tamaño del arreglo

console.log(ListaDeNombres.length)
console.log('Buenaventura'.length)

// Obtener el ultimo elemento del arreglo

console.log(ListaDeNombres[ListaDeNombres.length - 1])
console.log(ListaDeNombres.at(0))
console.log(ListaDeNombres.at(-2))

// Funcion Slice (investigar)

var nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
var masculinos = nombres.slice(1, 2);
console.log(masculinos)