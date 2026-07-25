import Project from "../classes/Projects.js"

let projects = []

function createProject(name) {
    const project = new Project(name)

    projects.push(project)
    console.log(projects)
}

function getProjects() {
    return projects
}

function deleteProject(name) {
    projects = projects.filter(project => project.name !== name)
}

function editProject(obj,newName) {
    console.log('PRAM',obj, newName)
    obj.name = newName
    // const project = projects.find(project => project.name === newName)
    // project.name=newName
    // console.log('edIT',project)

    // projects
    // return project
}

export { createProject, getProjects, deleteProject, editProject }