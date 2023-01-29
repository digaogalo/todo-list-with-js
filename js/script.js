let inputNewTask = document.querySelector('#inputNewTask')
let btnAddTask = document.querySelector('#btnAddTask')
let taskList = document.querySelector('#taskList')
let editWindow = document.querySelector('#editWindow')
let backgroundEditWindow = document.querySelector('#backgroundEditWindow')
let btnCloseEditWindow = document.querySelector('#btnCloseEditWindow')
let btnTaskUpdate = document.querySelector('#btnTaskUpdate')
let idTaskEdit = document.querySelector('#idTaskEdit')
let inputTaskNameEdit = document.querySelector('#inputTaskNameEdit')
const qtyIdAvailable = Number.MAX_VALUE

inputNewTask.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        let task = {
            name: inputNewTask.value,
            id: idGenerator(),
        }
      addTask(task)
    }
})

btnCloseEditWindow.addEventListener('click', (e) => {
    changeEditWindow()
})

btnAddTask.addEventListener('click', (e) => {
    let task = {
        name: inputNewTask.value,
        id: idGenerator(),
    }
     addTask(task)
})

btnTaskUpdate.addEventListener('click', (e) => {
   e.preventDefault()

   let idTask =  idTaskEdit.innerHTML.replace('#', '')

   let task = {
    name : inputTaskNameEdit.value,
    id : idTask
   }

   let currentTask = document.getElementById(''+idTask+'')

   if (currentTask) {
    let li = createLi(task)
   taskList.replaceChild(li, currentTask)
   changeEditWindow()
   } else {
    alert('HTML element not found')
   }
})

function idGenerator() {
    return Math.floor(Math.random() * qtyIdAvailable)
}

function addTask(task) {
    let li = createLi(task)
    taskList.appendChild(li)
    inputNewTask.value = ''
}

function idGenerator() {
    return uniqueIdGenerator()
}

function uniqueIdGenerator () {
    let itemList = document.querySelector('#taskList').children
    let idGenerator = []

    for(let i = 0; i < itemList.length; i++) {
        idGenerator.push(itemList[i].id) 
        }

        let idCounter = 0
        let id = idGenerator()

        while(idCounter <= qtyIdAvailable &&
            idGenerator.indexOf(id.toString()) > - 1){
                id = idGenerator
                idCounter++

                if(idCounter >= qtyIdAvailable) {
                    alert ('Woops,we are out of IDs =/')
                    throw new Error('No more IDs =/')
                }
            }
            return id
    }

    function addTask(task) {
        let li = createLi(task)
        taskList.appendChild(li)
        inputNewTask.value = ''
    }

function createLi(task) {
    let li = document.createElement('li')
    li.id = task.id

    let span = document.createElement('span')
    span.classList.add('taskText')
    span.innerHTML = task.name

    let div = document.createElement('div')

    let btnEdit = document.createElement('button')
    btnEdit.classList.add('btnAction')
    btnEdit.innerHTML = '<i class="fa fa-pencil"></i>'
    btnEdit.setAttribute('onclick', 'editTask('+task.id+')')

    let btnDelete = document.createElement('button')
    btnDelete.classList.add('btnAction')
    btnDelete.innerHTML = '<i class="fa fa-trash"></i>'
    btnDelete.setAttribute('onclick', 'deleteTask('+task.id+')')

    div.appendChild(btnEdit)
    div.appendChild(btnDelete)

    li.appendChild(span)
    li.appendChild(div)
    return li
}

function editTask(idTask) {
   let li = document.getElementById('' + idTask + '');
   if (li) {
    idTaskEdit.innerHTML = '#' + idTask
    inputTaskNameEdit.value = li.innerText
    changeEditWindow()
   } else {
    alert('HTML element not found')
   }
}

function deleteTask(idTask) {
    let confirmacao = window.confirm('Are you sure you want to delete?')
    if (confirmacao) {
        let li = document.getElementById(''+ idTask + '')
        if (li) {
            taskList.removeChild(li)
        } else {
            alert('HTML element not found')
           }
    }
}

function changeEditWindow() {
    editWindow.classList.toggle('open')
    backgroundEditWindow.classList.toggle('open')
}