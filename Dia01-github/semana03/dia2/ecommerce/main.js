// TODO: Al hacer click en los botones - y + decremente o incremente la cantidad.

const menos = document.querySelector('#Menos')
const mas = document.querySelector('#Mas')
const cantidad = document.querySelector('#Cantidad')

let contador = 0

mas.addEventListener('click', function(event) {
  contador = contador + 1

  if (contador > 10) {
    contador = 10
    return
  }

  cantidad.textContent = contador
})

menos.addEventListener('click', function(event) {
  contador = contador - 1

  if (contador < 0) {
    contador = 0
    return
  }

  cantidad.textContent = contador
})