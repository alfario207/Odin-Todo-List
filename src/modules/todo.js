import Todo from "../classes/todos.js";
import { getSelectedProject } from "./project.js";

let todos = []

function createTodo(title, description, dueDate, priority, notes) {
    const project = getSelectedProject()

    const todo = new Todo(title, description, dueDate, priority, notes, project)

    todos.push(todo)
}

function getTodos() {
    return todos
}

function deleteTodos() {

}

function editTodos() {
    
}