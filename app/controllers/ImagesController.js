import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";

export class ImagesController {
    constructor() {
        console.log('img cont init');
        this.getImage()
    }

    async getImage() {
        try {
            let image = await imagesService.getImage()
            this.drawImage(image)
        } catch (error) {
            Pop.error(error)
        }

    }
    drawImage(image) {
        document.body.style.backgroundImage = `url(${image})`

    }
}
