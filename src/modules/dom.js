import editImg from '../assets/edit.svg'
import deleteImg from '../assets/delete.svg'
import { createProject, getProjects, deleteProject, editProject } from './project.js'

const myProjects = document.getElementById('my-projects')
const newBtn = document.querySelector('#new-project')
const form = document.querySelector('.projects-form') 
const input = document.querySelector('.input-form')
const cancel = document.querySelector('.cancel-btn')

let isEdit = false
let editedProject = null

function createProjectItem(project) {
    const projectElement = document.createElement('div')
    projectElement.classList.add('project')
    projectElement.setAttribute('id', project.name)
    projectElement.setAttribute('data-id', project.name)

    const name = document.createElement('p')
    name.textContent = project.name

    const projectBtn = document.createElement('div')
    projectBtn.classList.add('project-btn')

    const edit = document.createElement('img')
    edit.src = editImg
    edit.alt = 'edit icon'

    edit.addEventListener('click', () => {
        input.value = project.name
        isEdit = true

        addProjectsForm()

        if (isEdit) {
            editedProject = project

            editProject(editedProject, input.value)
        } else {
           createProject(input.value)
        }
    })

    const del = document.createElement('img')
    del.src = deleteImg
    del.alt = 'delete icon'

    del.addEventListener('click', () => {
        deleteProject(project.name)
        renderProjects()
    })

    projectBtn.append(edit, del)
    projectElement.append(name, projectBtn)

    return projectElement
}

function renderProjects() {
    const projects = getProjects()

    myProjects.innerHTML = ''

    projects.forEach(project => {
        const element = createProjectItem(project)
        myProjects.appendChild(element)
    })
}

function closeProjectForm() {
    input.value = ''
    form.classList.add('visibility')
    newBtn.classList.remove('visibility')
}

function addProjectsForm() {
    newBtn.classList.add('visibility')
    form.classList.remove('visibility') 
    input.focus()
}

function setupProjectForm() {
    newBtn.addEventListener('click', () => {
        addProjectsForm()
    })
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const projectName = input.value.trim()

        if (isEdit) {
            editProject(editedProject,projectName)
        } else {
            createProject(projectName)
        }
        
        renderProjects()
        
        closeProjectForm()
    })

    cancel.addEventListener('click', () => {
        closeProjectForm()
    })
}

export { setupProjectForm }