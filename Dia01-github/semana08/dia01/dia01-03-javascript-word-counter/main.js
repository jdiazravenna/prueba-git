const elparrafo = document.querySelector('.Parrafos')
const elpalabras = document.querySelector('.Palabras')
const elletras = document.querySelector('.Letras')
let eltext = document.querySelector('.texto')

let cant_letras = 0
let cant_palabras = 0
let cant_parrafos = 0
let keyCode = ''
let keyCodeold = ' '

document.addEventListener('keydown', function(event) {

    keyCode = event.keyCode
    //console.log(keyCode)
    contar(eltext.value)

  })

  const contar = (valor_texto) => {
    let cant_letras = 0
    let cant_palabras = 0
    let cant_parrafos = 0
    let keyCode = ''
    let keyCodeold = ' '

    elpalabras.textContent=0
    elparrafo.textContent=0
    elletras.textContent=0


    for (i=0 ; i<=valor_texto.length ; i++) {

        keyCode = valor_texto.charCodeAt(i)
        console.log(keyCode)

    if (keyCode == 32 && !(keyCodeold ==32)) {
        elpalabras.textContent = ++cant_palabras

    } else if(keyCode == 10 && !(keyCodeold ==10)) {

        elparrafo.textContent = ++cant_parrafos

        if (!(keyCodeold ==32)) {
            elpalabras.textContent = ++cant_palabras
        }
    } 
    else { if (palabras(keyCode)) {
        elletras.textContent = ++cant_letras
    }
    }
    keyCodeold = keyCode

    }
  }

  const palabras = (keyCode) =>{
        if ((keyCode>96 && keyCode<123) || (keyCode>64 && keyCode<91) ||(keyCode>159 || keyCode<166) || (keyCode==130)) {

            return true
        } else {

            return false
        }

  }