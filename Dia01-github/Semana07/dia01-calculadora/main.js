// console.log('Hola JS')

let numeroActual = '0'
let operador = '' // + - * /
let operando = '' // 1 2 22 55 1578 9646351

const inputDisplay = document.querySelector('.display')
const buttons = document.querySelectorAll('button')

buttons.forEach(function(button){
    console.log(button.textContent)

    button.addEventListener('click', function(event){
     // console.log(event)
    const buttonSelected = event.target // boton seleccionado
    const buttonText = buttonSelected.textContent //valor del boton seleccionado

    //console.log(buttonText)

    // Añadiremos la logica de la calculadora
        if ('+-*'.includes(buttonText)){
            //console.log('Presionaste el operador', buttonText)
            //asignamos el operador actual
            operador = buttonText
            operando = Number(numeroActual) 
            numeroActual = 0

        }else if(buttonText === '='){
            // console.log('Presionaste el signo', buttonText)
            // aqui realizamos las operaciones matemáticas en base al numero actual y operando
            if (operador === '+'){
                numeroActual = Number(operando) + Number(numeroActual)
            }else if(operador === '-'){
                numeroActual = Number(operando) - Number(numeroActual)
            }else if (operador === '*'){
                numeroActual = Number(operando) * Number(numeroActual)
            }

        }else if (buttonText === 'AC'){
            // console.log('Presionaste el boton', buttonText)
            numeroActual = '0'
            operador = ''
            operando = ''
        }else {
            //cuando hemos presionado solo los numeros
           // console.log('Presionaste el número' ,buttonText)
            numeroActual = numeroActual + buttonText
        }
        inputDisplay.value = Number(numeroActual)
    })
})

// console.log(buttons)
// console.log({inputDisplay})
// inputDisplay.value = '9999'