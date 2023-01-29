## To Do List with Javascript 

In this list I use pure JS we can create a task , edit and delete , there so details I need to do . 

I solve a bug , when we click on add button the task duplicate . So i use this code do Debbug the app 

function uniqueId () {
    let itemList = document.querySelector('#taskList').children
    let idGenerate = []

    for(let i = 0; i < itemList.length; i++) {
        idGenerate.push(itemList[i].id) 
        }

        let idCounter = 0
        let id = idGenerator()

        while(idCounter <= qtyIdAvailable &&
            idGenerate.indexOf(id.toString()) > - 1){
                id = idGenerate
                idCounter++

                if(idCounter >= qtyIdAvailable) {
                    alert ('Woops,we are out of IDs =/')
                    throw new Error('No more IDs =/')
                }
            }
            return id
    }
