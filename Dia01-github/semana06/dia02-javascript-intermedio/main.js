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

let nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
let masculinos = nombres.slice(1, 2);
console.log(masculinos)

// Métodos de Arreglos

// Metodo includes, nos indica si el valor que se pasa como parámetro se encuentra en el arreglo y siempre devuelve un boolean (True o False)

const languajes = ['JavaScript', 'php', 'python', 'C#', 'C++', 'java', 'python']
console.log(languajes.includes('java')) // true
console.log(languajes.includes('cobol')) // false

// Método Filter, nos ayuda a ubicar un elemento dentro de un arreglo, usando una condicion, y devuelve un booleano

const languages = ['JavaScript', 'php', 'python', 'C#', 'C++', 'java', 'python']

const resultado = languages.filter(function (language){
  //return languaje === 'java'
  //return languaje !== 'java'
  return language.toLowerCase().includes('c')
})
console.log(resultado)

// Metodp Map, evalua un arreglo y lo modifica, y hay q pasarle una función

const nombresconTitulo = languages.map(function (language){
    return '*' + language + '*'
})
console.log(nombresconTitulo)
console.log(languages)


// Sort, ordena alfabeticamente el arreglo
languages.sort()
console.log(languages)

// Método FOREACH, nos ayuda a recorrer un arreglo sin tener ningun retorno de datos

const miArreglo = []

languages.forEach(function (language) {
  miArreglo.push('El mejor: ' + language)
})

console.log(miArreglo)

// Método REDUCE, nos ayuda a acumular los valores de un arreglo

const numeros = [3, 40, 100, 7, 50]

// Con un FOR
let suma = 0
for (let i = 0; i < numeros.length; i++) {
  suma = suma + numeros[i]
}
console.log(suma)

// Con Reduce

const sumatoria = numeros.reduce(
  function(acumulador, valorActual) {
    return acumulador + valorActual
  },
  0
)

console.log(sumatoria)

// OBJETOS

/*
{
key1: value1,
key2: value2,
key3: value3
}
*/

const miObjetoVacio= {}

const miObjeto ={
    nombre: 'Juan',
    apellido: 'Díaz',
    colorfavorito: 'azul',
    'mi edad': 36,
    coloresfavoritos: ['naranja', 'verde', 'rojo'],
    cursos: [
        {
        id: 1,
        nombre: 'Matematicas',
        nota: 19
    },
    {   
        id: 2,
        nombre: 'Quimica',
        nota: 13
}],
devolverCursosAprobados: function(){
    return this.cursos.filter(function (curso){
        return curso.nota > 13
    })
}
}
console.log(miObjetoVacio)
console.log(miObjeto)
console.log(miObjeto.devolverCursosAprobados())

// Leer los campos de un objeto (notaacion de punto y corchete)

console.log(miObjeto.nombre)
console.log(miObjeto.apellido)
console.log(miObjeto.edad) // undefined

console.log(miObjeto['mi edad'])

console.log(miObjeto.coloresfavoritos)
console.log(miObjeto.coloresfavoritos[2])
console.log(miObjeto.cursos)
console.log(miObjeto.cursos[1])
console.log(miObjeto.cursos[1].nota)

// Eliminar propiedades de un objeto

console.log(miObjeto)
delete miObjeto.colorfavorito // Elimina color favorito del arreglo
delete miObjeto.cursos

// Insertar una nueva propiedad a un objeto

miObjeto.platillofavorito = 'Lomo Saltado'
console.log(miObjeto)
miObjeto['Juegos favoritos'] = ['Crash team racing', 'mario kart', 'PES 2022']

console.log(miObjeto)

// Destructuring arreglos y objetos

// es una forma de extraer elementos/propiedades de un objeto o un arreglo en nuevas variables

// En objetos 😁 windows + .

const nombreValue = miObjeto.nombre
const apellidoValue = miObjeto.apellido
const colorFavoritoValue = miObjeto.colorFavorito

console.log(nombreValue, apellidoValue, colorFavoritoValue)

const { nombre, apellido, colorFavorito } = miObjeto

console.log(nombre, apellido, colorFavorito)

const {
  nombre: nombreConUnAlias,
  apellido: apellidoConUnAlias,
  cursos: cursosValor
} = miObjeto

console.log(nombreConUnAlias, apellidoConUnAlias, cursosValor)

// DESTRUCTURING: ARRAYS

const amigos = ['leo', 'marcial', 'diego', 'yesica', 'victor']

const [amigo1, amigo2, amigo3, , amigo4] = amigos

console.log(amigo1, amigo2, amigo3, amigo4)

const [a1, a2, ...mejoresAmigos] = amigos

console.log(a1, a2, mejoresAmigos)

// SPREAD OPERATOR (operador ...)

// Extraer las propiedades de un objeto/arreglo para reutilizarlo en otros objetos/arreglos

const producto = {
  nombre: 'Laptop',
  precio: 4890,
  categoria: 'tech'
}

const cliente = {
  nombre: 'Alessandro',
  isVip: true
}

console.log(producto + cliente) // ❌ 💔 [object Object][object Object]

const nuevoObjeto = { ...producto, ...cliente } // ⛔ Cuidado

console.log(nuevoObjeto)

// SPREAD OPERATOR, evitando colisiones de propiedades

const nuevoObjetoSinColisiones = {
  product: { ...producto },
  cliente: { ...cliente }
}

console.log(nuevoObjetoSinColisiones)
console.log(nuevoObjetoSinColisiones.product.nombre) // Laptop
console.log(nuevoObjetoSinColisiones.cliente.nombre) // Alessandro

// OTROS MÉTODOS DE OBJETOS

console.log(Object.keys(producto)) // Obtenemos solo las claves (keys) del objeto dentro de un arreglo de cadenas.
console.log(Object.values(producto)) // Obtenemos solo los values (values) del objeto dentro de un arreglo de cadenas.
console.log(Object.entries(producto)) // Convertimos un objeto en un arreglo

// EJEMPLO FINAL CON OBJETOS

const hero = 'Victor'

if (hero === 'Batman') {
  console.log('Hola soy Bruce')
} else if (hero === 'Spiderman') {
  console.log('Hola soy Peter')
} else if (hero === 'Ironman') {
  console.log('Hola soy Tony')
} else {
  console.log('No soy un heroe 😒')
}

const SUPER_HEROS = {
  'Batman': 'Hola soy Bruce',
  'Spiderman': 'Hola soy Peter',
  'Ironman': 'Hola soy Tony',
}

if (!SUPER_HEROS[hero]) {
  console.log('No soy un heroe 😒')
} else {
  console.log(SUPER_HEROS[hero])
}

console.log(SUPER_HEROS[hero] ?? 'No soy un heroe 😉')



// TODO: Desarrollar 1 reto del siguiente link para mañana
// TODO: Desarrollar 3 retos más del siguiente link para el próximo miércoles

// https://2021.adventjs.dev/challenges