import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class WeatherService {
    constructor() {
        console.log('WeatherService init');
    }
    async getWeather() {
        let response = await api.get('api/weather')
        console.log(response.data.main.temp);
        AppState.tempCelsius = Math.round((response.data.main.temp) - 273.15)
        AppState.tempFahrenheit = Math.round(((9 / 5) * AppState.tempCelsius) + 32)
        console.log(AppState.tempFahrenheit);
        console.log(AppState.tempCelsius)
    }

changeTempType() {
        AppState.displayTempFahrenheit = (!AppState.displayTempFahrenheit)
}

}

export const weatherService = new WeatherService()