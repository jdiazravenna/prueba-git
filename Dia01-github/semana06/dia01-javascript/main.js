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

console.log(15 + 9) 
console.log(15 - 9) 
console.log(15 * 9)
console.log(15 / 9) 
console.log(15 % 9) //residuo 
console.log(15 ** 9) //potencia
console.log(Math.pow(2, 3)) // hace lo mismo que 2 ** 3 

// Operador de Asignacion

const genero = 'femenino'

console.log(genero)

// Operadores de comparacion
// Operador de igualdad y desigualdad (==, !=)
// devuelve un valor booleano (true o false)
//este operador no toma en cuenta el tipo de dato al comparar, si no solo sus valores
console.log(1 == 1) //true
console.log(1 == '1') //true

console.log(1 != 1) // false
console.log(1 != '1') // false

// Operadores de comparacion ESTRICTA
// Operador de igualdad y desigualdad (===, !==)
// devuelve un valor booleano (true o false)
//este operador si toma en cuenta el tipo de dato al comparar, no solo sus valores

console.log(1 === 1) // true
console.log(1 === '1') // false
console.log(1 !== '1') // true

// Operadores de comparación (siempre devuelven un booleano)

console.log(8 > 5)
console.log(8 < 5)
console.log(8 >= 5)
console.log(8 <= 5)

// Operadores lógicos (and, or, negacion)

console.log(true && false) // and
console.log(true || false) // or
console.log(!true) //negacion

// Operadores de cadena (concatenacion)

const saludo = 'hola, '
const NombreCompleto = 'Juan ' + 'Díaz,'
const miEdad = 36

const imprimirsaludo = saludo + NombreCompleto + ' Tengo ' + miEdad + ' años '

console.log(NombreCompleto)
console.log(imprimirsaludo)

// Ejercicios

// Retorna true si dos Strings tienen la misma longitud, si no, devolver false

const cadena1 = 'codigo'
const cadena2 = 'cagada'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena2.length)

// 2. (TODO) Retornar true si un numero es menor que 40 sino devolver false
let num1 = 30
console.log(num1 < 40)

// 3. (TODO) Retornar True si un numero es menor que 60 sino devolver False
console.log(num1 < 60)
// 4. (TODO) Retornar True si un numero es par sino devolver False
let num2 = 4
let espar = num2 % 2
console.log(espar == 0)
// 5. (TODO) Retornar True si un numero es impar sino devolver False

let num3 = 3
let esimpar = num3 % 2
console.log(esimpar !== 0)

// 6. (TODO) calcular el area de un triangulo y mostrar su resultado si tenemos 
// los valores base y altura
let base = 3
let altura = 2
let areadetriangulo = (base * altura)/2
console.log(areadetriangulo)

// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma 
// de sus cifras elevada al cubo.
let numero3cifras = "123";
let numero0cifras = 0;
numero3cifras.split('').forEach(numero3cifras => numero0cifras += parseInt(numero3cifras));
console.log(numero0cifras**3)
// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto
// le toca a cada socio según la siguiente tabla:
let montodedinero = 1000
let socioporcenA = 30
let socioporcenB = 20
let socioporcenC = 60

console.log((montodedinero*socioporcenA)/100)
console.log((montodedinero*socioporcenB)/100)
console.log((montodedinero*socioporcenC)/100)


// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%