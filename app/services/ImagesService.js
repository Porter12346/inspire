import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class ImagesService {
    constructor() {
        console.log('img serve init');
    }

    async getImage() {
        let response = await api.get('api/images')
        console.log(response.data.largeImgUrl);
        AppState.imageUrl = response.data.largeImgUrl
    }

}

export const imagesService = new ImagesService()