import { timeService } from "../services/TimeService.js";
import { setText } from "../utils/Writer.js";

export class TimeController {
    constructor() {
        console.log('time control init');
        setInterval(this.checkTime, 1000)
    }

    checkTime() {
        let time = new Date()
        let adjustedTime = time.toLocaleTimeString()
        console.log(adjustedTime)
        drawTime(adjustedTime)
    }
}
function drawTime(adjustedTime) {
    setText('time-string', adjustedTime)
}

