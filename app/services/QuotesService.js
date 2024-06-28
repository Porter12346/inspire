import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class QuotesService {
    constructor() {
        console.log('quote serve init');
    }

    async getQuote() {
        let response = await api.get('api/quotes')
        console.log(response.data)
        AppState.quote = response.data
    }
}

export const quotesService = new QuotesService()