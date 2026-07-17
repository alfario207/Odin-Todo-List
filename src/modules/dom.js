function newProject() {
    const project = document.querySelector('#new-project')
    
    project.addEventListener('click', () => {
        const input = document.createElement('input')
        input.classList.add('form-input')
    })
}

export { newProject }