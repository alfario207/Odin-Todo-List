import Project from "../classes/Projects.js"

let projects = []
let selectedProject = null

function setSelectedProject(project) {
    selectedProject = project
}

function getSelectedProject() {
    return selectedProject
}

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

function editProject(project,newName) {
    project.name = newName
}

export { setSelectedProject, getSelectedProject, createProject, getProjects, deleteProject, editProject }