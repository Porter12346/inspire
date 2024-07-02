import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class TodosService {


    constructor() {
        console.log('todo service init');
    }

    async getTodos() {
        if (AppState.account) {
            let response = await api.get('/api/todos')
            console.log(response.data);
            AppState.todos = response.data
        }
        else {
            console.log('not logged in');
        }

    }

    async postTodo(data) {
        let response = await api.post('/api/todos', data)
        console.log(response)
    }

    async toggleTodo(id) {
        let todo = AppState.todos.find(todo => todo.id = id)
        // let response = api.get(`api/todos/${id}`)
        // console.log(response)
        let completed = { completed : !todo.completed }
        let response = await api.put(`api/todos/${id}`, completed)
        todo.completed = !todo.completed
        console.log(response)
    }
}

export const todosService = new TodosService