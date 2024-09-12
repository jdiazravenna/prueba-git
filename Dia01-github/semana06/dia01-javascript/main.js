console.log('Hola a Todos y Todes')

//COMENTARIOS

/*
PARA COMENTAR VARIAS
LINEAS A LA VEZ

*/

//TIPOS DE DATOS

// PRIMITIVOS: Number, STRING, BOOLEAN (TRUE, FALSE), 
// UNDEFINED, NULL, BIGINT, SYMBOL

// NO PRIMITIVOS: NUMBER

console.log(20)
console.log(15.6)
console.log(0.999)
console.log(-35)

//STRINGS

console.log('Elizabeth') //string
console.log("Minaya")//string
console.log("Juan 'Díaz' Ravenna") //string

//UNDEFINED
let nombre //declaracion de una variable
console.log(nombre)
console.log(typeof nombre)

//NULL

let apellido = null
console.log(apellido)
console.log(typeof apellido)

//Bigint (para guardar numeros muy grandes)

//Symbol (ayudan a crear valores unicos e irrepetibles)

// variables y constantes

// ECMASCRIPT 5 === ES5
// ECMASCRIPT 6 === ES6

// var -> ES5 (forma de declarar una variable, pero no es recomendado
// su declaracion es a nivel de la funcion)

// const -> ES6 (el uso de const es recomendado, para datos q no van a cambiar)

const edad = 36 // es obligatorio iniciarlo
// edad = 90 // Uncaught TypeError: Assignment to constant variable.
const _edad = 20
const edadDeMiHijoMayor = 12
const PI = 3.1416
const EMPRESA = 'JDR'
const esMayorDeEdad = false

// let --> ES6 (el uso de let, es lo recomendado, para datos que si van a cambiar en el transcurso de uso del programa)

let edad2 = 35 // no es obligatorio inicializar

edad2 = 39 //reasignamos un valor numérico
console.log(typeof edad2)
edad2 = "Juan"
console.log(typeof edad2)

console.log(15 + '9') // cuando ve un + y encuentra una cadena de texto, concatena todo

// operadores matemáticos

