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
        AppState.todos.push(response.data)
        console.log(AppState.todos);
    }

    async toggleTodo(id) {
        let todo = AppState.todos.find(todo => todo.id == id)
        // let response = api.get(`api/todos/${id}`)
        // console.log(response)
        let completed = { completed: !todo.completed }
        let response = await api.put(`api/todos/${id}`, completed)
        todo.completed = !todo.completed
        console.log(response)
    }

    async deleteTodo(id) {
        let todoIndex = AppState.todos.findIndex(todo => todo.id == id)
        let response = await api.delete(`api/todos/${id}`)
        console.log(response)
        AppState.todos.splice(todoIndex, 1)
    }
}

export const todosService = new TodosService