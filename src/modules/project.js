import Project from "../classes/Projects.js"

const projects = []

function createProject(name) {
    const project = new Project(name)

    projects.push(project)
    console.log(projects)
}

function getProjects() {
    return projects
}

export { createProject, getProjects }