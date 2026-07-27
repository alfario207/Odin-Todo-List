import editImg from '../assets/edit.svg'
import delImg from '../assets/delete.svg'

const todos = document.getElementById('todos')
const newTask = document.getElementById('new-task')
const form = document.querySelector('.todos-form')
const close = document.querySelector('#close')
const cancel = document.querySelector('#cancel')

const title = document.getElementById('title')
const description = document.getElementById('description')
const priority = document.getElementById('priority')
const date = document.getElementById('date')
const notes = document.getElementById('notes')

function createTodoItem() {
    const todoItem = document.createElement('div')
    todoItem.classList.add('todo-item')

    const todoContent = document.createElement('div')
    todoContent.classList.add('todo-item-content')
    
    const todoLeft = document.createElement('div')
    todoLeft.classList.add('todo-left')

    const todoTitle = document.createElement('div')
    todoTitle.classList.add('todo-title')
    
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    
    const title = document.createElement('h2')
    title.textContent = `create react project`
    
    const description = document.createElement('p')
    description.textContent = `lorem ipsum `
    
    const todoRight = document.createElement('div')
    todoRight.classList.add('todo-right')

    const todoPriority = document.createElement('div')
    todoPriority.classList.add('todo-priority')

    const priority = document.createElement('p')
    priority.textContent = `medium`
    
    const todoDate = document.createElement('div')
    todoDate.classList.add('date')
    
    const date = document.createElement('p')
    date.textContent = `18 jul`
    
    const todoBtn = document.createElement('div')
    todoBtn.classList.add('todo-btn')
    
    const edit = document.createElement('img')
    edit.src = editImg
    edit.alt = 'edit icon'
    
    const del = document.createElement('img')
    del.src = delImg
    del.alt = 'delete icon'
    
    todoTitle.append(title, description)
    todoPriority.appendChild(priority)
    todoDate.appendChild(date)
    todoBtn.append(edit, del)
    
    todoLeft.append(checkbox, todoTitle)
    todoRight.append(todoPriority, todoDate, todoBtn)
    
    todoContent.append(todoLeft, todoRight)

    todoItem.appendChild(todoContent)
    todos.appendChild(todoItem)

    return todoItem
}

function clearTodoForm() {
    title.value = ''
    description.value = ''
    priority.value = ''
    date.value = ''
    notes.value = ''
}

function openForm() {
    form.classList.remove('visibility')
    newTask.classList.add('visibility')

    title.focus()
}

function closeForm() {
    clearTodoForm()
    form.classList.add('visibility')
    newTask.classList.remove('visibility')
}

function setUpTodosForm() {
    newTask.addEventListener('click', () => {
        openForm()
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault()



        closeForm()
    })

    cancel.addEventListener('click', () => {
        console.log('btn clicked')
        closeForm()
    })

    close.addEventListener('click', () => {
        console.log('btn clicked')
        closeForm()
    })
}

export { createTodoItem, setUpTodosForm }