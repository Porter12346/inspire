import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setText } from "../utils/Writer.js";

export class WeatherController {
    constructor() {
        console.log('WeatherController init');
        this.getWeather()
        AppState.on('tempFahrenheit', this.drawWeather)
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error)
        }
    }

    changeTempType() {
        weatherService.changeTempType()
        this.drawWeather()
    }

    drawWeather() {
        let tempDisplay = AppState.displayTempFahrenheit ? `${AppState.tempFahrenheit} °F` : `${AppState.tempCelsius} °C`
        setText('weather-label', `${tempDisplay}`)
    }
}
