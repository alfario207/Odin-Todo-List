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

export { createProject, getProjects, deleteProject }