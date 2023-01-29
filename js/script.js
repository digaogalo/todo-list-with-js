let inputNewTask = document.querySelector('#inputNewTask')
let btnAddTask = document.querySelector('#btnAddTask')
let taskList = document.querySelector('#taskList')
let editWindow = document.querySelector('#editWindow')
let backgroundEditWindow = document.querySelector('#backgroundEditWindow')
let btnCloseEditWindow = document.querySelector('#btnCloseEditWindow')
let btnTaskUpdate = document.querySelector('#btnTaskUpdate')
let idTaskEdit = document.querySelector('#idTaskEdit')
let inputTaskNameEdit = document.querySelector('#inputTaskNameEdit')




inputNewTask.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        let task = {
            name: inputNewTask.value,
            id: idGenerator(),
        }
      addtask(task)
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
     addtask(task)
})

btnTaskUpdate.addEventListener('click', (e) => {
   e.preventDefault()

   let idTask =  idTaskEdit.innerHTML.replace('#', '')

   let task = {
    name : inputTaskNameEdit.value,
    id : idGenerator()
   }

   let currentTask = document.getElementById(''+idTask+'')

   if (currentTask) {
    let li = createLi(task)
   taskList.replaceChild(li, currentTask)
   changeEditWindow()
   }  
})

function idGenerator() {
    return Math.floor(Math.random() * 3000)
}

function addtask(task) {
    let li = createLi(task)
    taskList.appendChild(li)
    inputNewTask.value = ''
}

function createLi(task) {
    let li = document.createElement('li')

    let span = document.createElement('span')
    span.classList.add('taskText')
    span.innerHTML = task.name

    let div = document.createElement('div')

    let btnEdit = document.createElement('button')
    btnEdit.classList.add('btnAction')
    btnEdit.innerHTML = '<i class="fa fa-pencil"></i>'
    btnEdit.setAttribute('onclick', 'edit('+task.id+')')

    let btnDelete = document.createElement('button')
    btnDelete.classList.add('btnAction')
    btnDelete.innerHTML = '<i class="fa fa-trash"></i>'
    btnDelete.setAttribute('onclick', 'del('+task.id+')')

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
   } 
}

function deleteTask(idTask) {
    let confirmacao = window.confirm('Are you sure you want to delete?')
    if (confirmacao) {
        let li = document.getElementById(''+ idTask + '')
        if (li) {
            taskList.removeChild(li)
        } 
    }
}

function changeEditWindow() {
    editWindow.classList.toggle('open')
    backgroundEditWindow.classList.toggle('open')
}