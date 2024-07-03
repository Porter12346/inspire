import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setText } from "../utils/Writer.js";

export class QuotesController {
    constructor() {
        console.log('quotes contr  init');
        this.getQuote()
        AppState.on('quote', this.drawQuote)
    }

    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            Pop.error(error)
        }
    }

    drawQuote() {
        let quote = AppState.quote.content
        let author = AppState.quote.author
        setText('quote-string', `"${quote}"`)
        setText('author-string', `-${author}`)
    }
}