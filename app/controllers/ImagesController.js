import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";

export class ImagesController {
    constructor() {
        console.log('img cont init');
        this.getImage()
        AppState.on('imageUrl', this.drawImage)
    }

    async getImage() {
        try {
            await imagesService.getImage()
        } catch (error) {
            Pop.error(error)
        }

    }
    drawImage() {
        let imageUrl = AppState.imageUrl
        document.body.style.backgroundImage = `url(${imageUrl})`

    }
}
