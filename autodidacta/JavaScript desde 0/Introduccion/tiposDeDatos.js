// Cadena de texto

const nombre = 'Juan'
const parrafo = 'Este es un párrafo'
console.log(nombre, parrafo)

// arrays

const arreglo = ['texto', 452, true, {propiedad: 'valor'}[1, 2, 3]]
console.log(arreglo)

// Objetos

const persona = ['Juan', 27, true]
const persona2 = {
    Nombre: 'Juan Díaz',
    edad: 36,
    nacionalidad: 'Peruano',
    automovil: {
        Marca: 'Kia',
        Modelo: 'Sportage 2015',
        Color: 'Gris mineral'
    }
}
console.log(persona2)
console.log(persona2.automovil)

// Funciones

function MensajePantalla(){
    console.log('Hola Mundo!, este es un mensaje')
}
MensajePantalla()
