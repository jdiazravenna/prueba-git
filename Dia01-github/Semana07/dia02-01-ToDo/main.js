//console.log('Hola')

// task__input
//task__list

const taskInput = document.querySelector('.task__input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

taskAdd.addEventListener('click', function(event){
    // se ejecuta cuando hacemos clic en el boton Añadir tarea
    //console.log('click')
    //const button = document.createElement('button')
    //button.textContent = 'Hola Soy un Botón!'
    //document.body.appendChild(button)

    //const h1 = document.createElement('h1')
    //h1.textContent = 'Hola soy un título'
    //document.body.appendChild(h1)
    if (taskInput.value.trim() === ''){ //trim le quita los espacios en blanco a la derecha e izquierda
        alert('El campo está vacío')
    return}

    const li = document.createElement('li')

    let checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox') // cambiamos el tipo a checkbox
    li.appendChild(checkBox)

    let span = document.createElement('span')
    span.textContent = taskInput.value
    li.appendChild(span)

    //li.textContent = taskInput.value
    taskList.appendChild(li)

    // añadir boton al LI con el texto borrar
    const button = document.createElement('button')
    button.textContent = 'Borrar tarea'
    li.appendChild(button)
        
    taskInput.value = ''
})

taskList.addEventListener('click', function(event){
    //console.log('click tasklist')
    const target = event.target // declaramos target
    
    console.log({target})

    if (target.tagName === 'BUTTON'){ //tag name siempre esta en mayusculas
        target.parentElement.remove() //elimina la linea LI 
    }
    if (target.tagName === 'INPUT' && target.type === 'checkbox'){
        //target.parentElement.style = 'color: red';
        console.log(target.classList.toggle('checked')) // le añade la clase checked (toggle)
    }
})