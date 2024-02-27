class WeatherForcast {
    constructor(date, day, weather) {
        this.date = date
        this.day = day
        this.weather = weather
    }
}

const fs = require("fs");
let [n, ...args] = fs.readFileSync(0).toString().trim().split("\n");


let forcasts = Array(n).fill(new WeatherForcast())
for (let i = 0; i < n; i++) {
    let [date, day, weather] = args[i].split(" ")
    forcasts[i] = new WeatherForcast(date, day, weather)
}

let rainForcasts = []
for (let i = 0; i < n; i++) {
    if(forcasts[i].weather === 'Rain') {
        rainForcasts.push(forcasts[i])
    }
}

let minIndex = 0
for (let i = 0; i < rainForcasts.length; i++) {
    if(rainForcasts[i].date <= rainForcasts[minIndex].date) {
        minIndex = i
        // if(forcasts[i].date === forcasts[minIndex].date 
        //     && forcasts[i].day >= forcasts[minIndex].day) {
        //     minIndex = i                
        // } else {
        //     minIndex = i
        // }   
    } 
}

console.log(`${rainForcasts[minIndex].date} ${rainForcasts[minIndex].day} ${rainForcasts[minIndex].weather}`)