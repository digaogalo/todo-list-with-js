let inputNewTask = document.querySelector('#inputNewTask')
let btnAddTask = document.querySelector('#btnAddTask')
let taskList = document.querySelector('#taskList')

inputNewTask.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        let task = {
            name: inputNewTask.value,
            id: idGenerator(),
        }
      addtask(task)
    }
})

btnAddTask.addEventListener('click', (e) => {
    let task = {
        name: inputNewTask.value,
        id: idGenerator(),
    }
     addtask(task)
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

function edit(idTask) {
    alert(idTask)
}

function del(idTask) {
    alert(idTask)
}