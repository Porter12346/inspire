import { AppState } from "../AppState.js";
import { api } from "../services/AxiosService.js";
import { todosService } from "../services/todosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";

export class TodosController {
    constructor() {
        console.log('todos controller init');
        AppState.on('account', this.displayForm)
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

    displayForm() {
        let form = document.getElementById("todo-form")
        let count = document.getElementById("todo-count")
        form.style.display = 'block'
        count.style.display = 'block'
    }

    drawTodos() {
        let todosHTMLString = ''
        let todos = AppState.todos
        todos.forEach(todo => {
            todosHTMLString += `<div
                class="border border-light border-1 d-flex justify-content-between todosBg text-light align-items-center rounded mt-1">
                <input class="form-check-input fs-4 my-0 mx-1" type="checkbox" onchange="app.TodosController.toggleTodo('${todo.id}')" ${todo.completed ? "checked" : ""}>
                <p class="m-0">${todo.description}</p>
                <button class="btn btn-outline-danger mdi mdi-delete" onclick="app.TodosController.deleteTodo('${todo.id}')"></button>
            </div>`
        });
        setHTML('todos-section', todosHTMLString)
        let num = 0
        todos.forEach(todo => {
            if(todo.completed != true)num++
        });
        setText('todo-count', `${num} Todos remaining`)
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
            this.drawTodos()
        } catch (error) {
            Pop.error(error)
        }
    }

    async deleteTodo(id) {
        try {
            if (window.confirm("Are you sure you want to delete this item?")) {
                await todosService.deleteTodo(id)
            }
        } catch (error) {
            Pop.error(error)
        }
    }
}
