import { AppState } from "../AppState.js";
import { api } from "../services/AxiosService.js";
import { todosService } from "../services/todosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class TodosController {
    constructor() {
        console.log('todos controller init');
        AppState.on('account', this.getTodos)
        AppState.on('todos', this.drawTodos)
    }

    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            Pop.error(error)
        }
    }

    drawTodos() {
        let todosHTMLString = ''
        let todos = AppState.todos
        todos.forEach(todo => {
            todosHTMLString += `<div
                class="border border-light border-1 d-flex justify-content-between todosBg text-light align-items-center rounded mt-1">
                <input class="form-check-input fs-4 my-0 mx-1" type="checkbox" onchange="app.TodosController.toggleTodo('${todo.id}')" ${todo.completed ? "checked" : ""}>
                <p class="m-0">${todo.description}</p>
                <button class="btn btn-outline-danger mdi mdi-delete"></button>
            </div>`
        });
        setHTML('todos-section', todosHTMLString)
    }

    async postTodo() {
        event.preventDefault()
        let form = event.target
        let data = getFormData(form)
        try {
            await todosService.postTodo(data)
        } catch (error) {
            Pop.error(error)
        }
    }

    async toggleTodo(id) {
        try {
            await todosService.toggleTodo(id)
        } catch (error) {
            Pop.error(error)
        }
    }
}
