import { AppState } from "../AppState.js";
import { api } from "../services/AxiosService.js";
import { todosService } from "../services/todosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class TodosController {
    constructor() {
        console.log('todos controller init');
        AppState.on('account', this.getTodos)
    }

    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            Pop.error(error)
        }
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
}
