import editImg from '../assets/edit.svg'
import deleteImg from '../assets/delete.svg'
import { deleteProject, editProject } from './project.js' 

function newProject() {
    const newBtn = document.querySelector('#new-project')
    const myProjects = document.getElementById('my-projects')
    const form = document.querySelector('.projects-form') 
    const input = document.querySelector('.input-form')
    const cancel = document.querySelector('.cancel-btn')
    
    newBtn.addEventListener('click', () => {
        newBtn.classList.add('visibility')
        form.classList.remove('visibility')
    })
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        console.log('input value', input.value)

        const project = document.createElement('div')
        project.classList.add('project')
        project.setAttribute('id', input.value)
        project.setAttribute('data-id', input.value)

        const name = document.createElement('p')
        name.textContent = input.value

        const projectBtn = document.createElement('div')
        projectBtn.classList.add('project-btn')

        const edit = document.createElement('img')
        edit.src = editImg
        edit.alt = 'edit icon'

        const del = document.createElement('img')
        del.src = deleteImg
        del.alt = 'delete icon'

        del.addEventListener('click', () => {
            deleteProject(id)
        })

        projectBtn.append(edit, del)
        project.append(name, projectBtn)
        myProjects.appendChild(project)

        input.value = ''
        form.classList.add('visibility')
        newBtn.classList.remove('visibility')
    })

    cancel.addEventListener('click', () => {
        input.value = ''
        form.classList.add('visibility')
        newBtn.classList.remove('visibility')
    })
}

export { newProject }