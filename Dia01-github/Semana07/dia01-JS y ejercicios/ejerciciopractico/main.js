
const buttonCalcular = document.getElementById('calcular')
const sectionResultado = document.getElementById('resultado')
const inputPeso = document.getElementById('peso')   
const inputAltura = document.getElementById('altura')

buttonCalcular.addEventListener('click', function(event){
    //console.log('click')    

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    
    console.log(peso, altura)
    
    const imc = peso / ((altura/100)**2)

    console.log(imc)

    let resultado = ''

    if (imc < 18.5){
        resultado ='Bajo'
    }else if (imc <= 18.5 && imc <= 24.9){
        resultado ='Normal'
    }else if (imc <= 25 && imc <= 29.9){
        resultado ='Sobrepeso'
    }else if (imc >= 30){
        resultado ='Obeso'
    }else {
        resultado='datos incorrectos'
    }
    console.log(resultado)
    sectionResultado.textContent = 'Tu índice de IMC es ' + resultado + ' con ' +
    imc.toFixed(2)
}) 
