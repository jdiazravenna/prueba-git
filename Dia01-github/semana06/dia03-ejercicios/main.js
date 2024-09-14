// Contar ovejas donde el color sea rojo y el nombre contenga las letras a y n, 
//incluye mayusculas y minusculas, y no importa los espacios

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ];

  function contarOvejas(ovejas) {
    countsheep = ovejas.filter(oveja => {
      let isRed = oveja.color === 'rojo'
      let isA = oveja.name.toLowerCase().indexOf('a') >= 0
      let isN = oveja.name.toLowerCase().indexOf('n') >= 0
            return (isA && isN && isRed)
    }) 
    return countsheep;
  }
  console.log(contarOvejas(ovejas))


// Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto 
// y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, 
// porque al ser niños, igual han colado más espacios de la cuenta)
// Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, 
// que significa que está tachado y no se tiene que contar.
//Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece.
  
const carta = 'bici coche balón _playstation bici  coche   peluche';

function listadeRegalos(letter) {
  const listaCarta = letter.split(" ");
  return listaCarta.filter((regalo) => {
    let value = regalo.startsWith("_")
    if (value !== true && regalo !=="") return regalo !== value
  })
  .reduce((contador, regalo) => {
    contador[regalo] = (contador[regalo] || 0) + 1;
    return contador
  }, {});
}

const regalos = listadeRegalos(carta)
console.log(regalos)

// Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.

function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50]
  
  let acc = change
  
  return coins
    .reverse()
    .map(function (coin) {
      let quotient = Math.floor(acc / coin)
    
      if (quotient > 0) {
        acc = acc % coin // rediduo
      }
    
      return quotient
    })
  .reverse()
}
console.log(getCoins(51))
console.log(getCoins(3))
console.log(getCoins(5))
console.log(getCoins(16))
console.log(getCoins(100))

// [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
 // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
 // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
// [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
 // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos

 /*
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números han sido asignados a más de un juguete.

¡Encuentre el primer número de identificación que se ha repetido, donde la segunda aparición tiene el índice más pequeño !

En otras palabras, si hay más de un número repetido, debe devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelva -1.
*/

// [2, 1, 3, 5, 3, 2].indexOf(99) // -1

// [2, 1, 3, 5, 3, 2].sort(function(a, b) {
//   // return b - a // Sort Asc con números
//   return b - a // Sort Desc con números
// })

function findFirstRepeated(gifts) {
  const repeats = gifts.map(function(id, index) {
    return {
      id,
      firstIndex: index,
      secondIndex: gifts.indexOf(id, index + 1)
    }
  })
  
  const idsAperecenPorSegundaVez = repeats.filter(id => id.secondIndex !== -1)
  
  const ordenadosPorElIndiceDeLaSegundaAparicion = idsAperecenPorSegundaVez.sort(function(a, b) {
    return a.secondIndex - b.secondIndex
  })
  
  const idsResultantes = ordenadosPorElIndiceDeLaSegundaAparicion.map(item => item.id)
  
  if (idsResultantes.length > 0) {
    return idsResultantes[0]
  }

  return -1
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Even though 2 and 3 are repeated
// 3 appears second time first

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// It is -1 since no number is repeated

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5