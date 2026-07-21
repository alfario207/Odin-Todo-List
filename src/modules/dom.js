import editImg from '../assets/edit.svg'
import deleteImg from '../assets/delete.svg'
import { createProject, getProjects, deleteProject } from './project.js'

const myProjects = document.getElementById('my-projects')
const newBtn = document.querySelector('#new-project')
const form = document.querySelector('.projects-form') 
const input = document.querySelector('.input-form')
const cancel = document.querySelector('.cancel-btn')

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

    const del = document.createElement('img')
    del.src = deleteImg
    del.alt = 'delete icon'

    del.addEventListener('click', () => {
        deleteProject(project.name)
        renderProjects()
        console.log('deleted', project)
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
    // input.blur()
}

function setupProjectForm() {
    newBtn.addEventListener('click', () => {
        newBtn.classList.add('visibility')
        form.classList.remove('visibility')
        input.focus()
    })
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const projectName = input.value.trim()

        if (!projectName) return 
        
        createProject(projectName)
        renderProjects()
        
        closeProjectForm()
    })

    cancel.addEventListener('click', () => {
        closeProjectForm()
    })
}

export { setupProjectForm }