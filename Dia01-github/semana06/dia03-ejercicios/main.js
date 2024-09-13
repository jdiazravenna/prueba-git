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
      let isA = oveja.name.toLowerCase().indexOf('a') >= 0;
      let isN = oveja.name.toLowerCase().indexOf('n') >= 0;
      let isRed = oveja.color == 'rojo';
      return (isA && isN && isRed);
    }) ;
    return countsheep;
  }
  console.log(contarOvejas(ovejas));


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