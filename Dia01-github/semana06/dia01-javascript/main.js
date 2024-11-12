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

// Condicionales (IF)

if (true){
    // El bloque que se ejecuta si la condicion es verdadera (true)
}
const numero=3
const Espar = numero % 2 === 0
if (Espar){
console.log('Este numero es par', numero)
}
// Condicionales (If, Else)

if (true){
 // se ejecuta si es verdadero
}
else{
 // se ejecuta si es falsa
}

if (Espar){
    console.log('Este numero es par', numero)
} else{
    console.log('Este numero es Impar', numero)
}

// Condicionales (If, Else if, else)

if (true){
    // se ejecuta este bloque si la condicion es verdadera
} else if(true){
    //se ejecuta si el primer if es falso
} else if(true){
    // se ejecuta si los anteriores son falsos
} else{
    // se ejecuta si ninguna condicion anterior es verdadera
}

const heroe = 'Spiderman'
if (heroe === 'batman'){
    console.log('Yo soy Batman')
} else if(heroe === 'Spiderman'){
    console.log('No me quiero ir señor Stark, no me quiero ir')
}else if(heroe === 'Iron man'){
    console.log('Yarvis, dame las coordenadas')
}else {
    console.log('No soy un héroe :(')
}

// Condicionales (Switch)

const heroe2 = 'Iron Man'
switch (heroe2){
    case 'Batman':
        console.log('Yo soy batman')
        break
    case 'Spiderman':
        console.log('no me quiero ir señor Stark, no me quiero ir')
        break
    case 'Iron Man':
        console.log('Yarvis, muestrame las coordenadas')
        break
    default:
        console.log('No soy un héroe')
}

//Estructuras repetitivas

//for (Sirv para repetir una o varias instrucciones)

for(let i = 0; i < 10; i++){
    console.log(i)
}

// While

let j = 0
while (j < 10){
    console.log('while', j)
    j = j + 1
}

// Do while

let k=0
do{
    console.log('do while', k)
    k = k + 1
   }while (k < 10)

// 1. Determinar si la edad de una persona es mayor o menor de edad, mostrando 'Mayor de edad' o 'menor de edad' segun corresponda

const persona = 18
if (persona >= 18){
    console.log('Esta persona es "Mayor de edad"')
}else{
    console.log('Esta porsona es "menor de edad"')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'

const idioma = 'Ingles'

if (idioma=='Español'){
    console.log('Hola')
}else if(idioma=='Ingles'){
    console.log('Hello')
}else if(idioma=='Italiano'){
    console.log('Ciao')
}else{
    console.log('no se reconoce idioma')
}

// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número
const divisible = 1

if(divisible%3 ==0 && divisible%5==0){
    console.log('fizzbuzz')
}else if(divisible%3==0){
    console.log('fizz')
}else if(divisible%5==0){
    console.log('buzz')
}else{
    console.log(divisible)
}

// 4. Retornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1



// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10

// Funciones (son bloques de código que podemos reutilizar)
// Declaracion de funciones

function Nombredelafuncion(){
    // Cuerpo de la funcion y aqui va la logica a ejecutar y reutilizar
}

// Ejecutar, aqui estamos llamando a la funcion
Nombredelafuncion()

// Funciones sin parametros

function ImprimirNombre(){
    console.log('Hola soy Juan')
    console.log('y Soy FrontEnd')
}
ImprimirNombre()

// Funciones con parámetros y valores por defecto

function Imprimirunnombre(nombre){
    if(nombre === undefined)
    nombre= 'anónimo'
    console.log('Hola soy ' + nombre)
}
Imprimirunnombre()
Imprimirunnombre('Juan')

function imprimirNombreApellidoEdad(nombre, apellido, edad){
   // console.log('Hola soy '+ nombre + apellido + ' y tengo ' + edad + ' años' )

    console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad} años`)
}
imprimirNombreApellidoEdad('Juan ', 'Díaz', '36')

// Ejercicios

// ToDo: usando las funciones si la edad de una persona es mayor de edad o menor de edad mostrando 'mayor de edad' o 'mejor de edad
function esMayoroMenorDeEdad(edad){
    if(edad >= 18){
        console.log('Es mayor de edad')
    }else{
        console.log('Es menor de edad')
    }
}

esMayoroMenorDeEdad(20)

// FUNCIONES CON RETORNO

function esMayorOMenorDeEdadConRetorno(edad) {
    if (edad >= 18) {
      return 'Mayor de edad'
    } else {
      return 'Menor de edad'
    }
  }
  
  const resultado = esMayorOMenorDeEdadConRetorno(15)
  
  console.log('Resultado:', resultado)
  
  console.log(esMayorOMenorDeEdadConRetorno(25)) // 'Mayor de edad'
  console.log(esMayorOMenorDeEdadConRetorno(12)) // 'Mayor de edad'

// Retornar true si un numero es primo si no devolver false
// pista, un numero primo es divisible entre el mismo y entre 1

function EsPrimo(primo){
    for (var i = 2; i < primo; i++){
        if (primo % i ===0){
            return false;
        }
    } return numero !== 1;
}

console.log(EsPrimo(2))
console.log(EsPrimo(3))
console.log(EsPrimo(20))
console.log(EsPrimo(11))