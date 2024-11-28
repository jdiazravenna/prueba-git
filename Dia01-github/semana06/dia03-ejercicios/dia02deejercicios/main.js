
// Reto2 (2023) - Ponemos en marcha la fábrica
/*
En el taller de Papá Noel, los elfos tienen una lista de regalos que desean hacer y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres . Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden hacer .
*/

// Método EVERY, devuelve un boolean si todos los elementos del array cumplen una condición
/*
[1, 2, 3, 4, 5].every(numero => numero > 0);

[1, 2, 3, 4, 6, -5].some(numero => numero % 2 === 0);
*/
function manufacture(gifts, materials) {
    return gifts.filter(function (gift) {
      const copyGift = [...gift]
  
      return copyGift.every(function (giftLetter) {
        return materials.includes(giftLetter)
      })
    })
  }
  

  const gifts1 = ['tren', 'oso', 'pelota']
  const materials1 = 'tronesa'
  
  manufacture(gifts1, materials1) // ["tren", "oso"]
  
  const gifts2 = ['juego', 'puzzle']
  const materials2 = 'jlepuz'
  
  manufacture(gifts2, materials2) // ["puzzle"]
  
  const gifts3 = ['libro', 'ps5']
  const materials3 = 'psli'
  
  manufacture(gifts3, materials3) // []
  //Reto3 (2023) - El duende travieso
  /*
  En el taller de Papá Noel, un elfo travieso ha estado jugando con la línea de producción de regalos, añadiendo o quitando un paso no planificado.
  
  Tiene la secuencia original de pasos de fabricación originales y la secuencia modificada que puede incluir un paso adicional o faltarle un paso.
  
  Su tarea consiste en escribir una función que identifique y devuelva el primer paso adicional que se agregó o eliminó en la cadena de fabricación . Si no hay diferencia entre las secuencias, devuelva una cadena vacía.
  */
  
  function findNaughtyStep(original, modified) {
    let cadena1, cadena2;
    let cadena3='';
    if (original.length>modified.length){
        cadena1=original;
        cadena2=modified;
    } else {
        cadena1=modified;
        cadena2=original;
    }
    for(let i=0;i<cadena1.length;i++){
        if(cadena2.includes(cadena1[i])==false) {
            cadena3+=cadena1[i];
        }
    }
    return cadena3;
  }
  
  const original1 = 'abcd'
  const modified1 = 'abcde'
  findNaughtyStep(original1, modified1) // 'e'
  
  const original2 = 'stepfor'
  const modified2 = 'stepor'
  findNaughtyStep(original2, modified2) // 'f'
  
  const original3 = 'abcde'
  const modified3 = 'abcde'
  findNaughtyStep(original3, modified3) // ''
  
  /*
  Por favor, tenga en cuenta:
  
  * Siempre habrá un paso diferente o ninguno.
  * La modificación puede ocurrir en cualquier parte de la cadena.
  * Los pasos originales podrían estar vacíos
  */
  
  /*
  El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
  
  Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
  
  Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
  
  ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...
  
  Ejemplos:
  
  
  "bici coche (balón) bici coche peluche" // -> ✅
  "(muñeca) consola bici" // ✅
  
  "bici coche (balón bici coche" // -> ❌
  "peluche (bici [coche) bici coche balón" // -> ❌
  "(peluche {) bici" // -> ❌
  "() bici" // ❌
  
  
  Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
  */
  
  function isValid(letter) {
    const hasChar = (word, char) => word.includes(char)
    const gifts = letter.match(/\([^)]*\)/g)
    
    if (!gifts) return false
    
    const invalidGifts = gifts.filter(gift => {
      const criteriaA = hasChar(gift, '{')
      const criteriaB = hasChar(gift, '[')
      const criteriaC = hasChar(gift, '()')
      return criteriaA || criteriaB || criteriaC
    })
      
    return invalidGifts.length === 0
  }
  
  isValid("bici coche (balón) bici coche peluche") // -> ✅
  isValid("(muñeca) consola bici") // ✅
  
  isValid("bici coche (balón bici coche") // -> ❌
  isValid("peluche (bici [coche) bici coche balón") // -> ❌
  isValid("(peluche {) bici") // -> ❌
  isValid("() bici") // ❌