class _007 {
    constructor(code, location, time) {
        this.code = code;
        this.location = location;
        this.time = time;
    }

    getCode() {
        console.log("secret code :", this.code)
    }
    getLocation() {
        console.log("meeting point :", this.location)
    }
    getTime() {
        console.log("time :", this.time)
    }
}

const fs = require("fs");
let [code, location, time ] = fs.readFileSync(0).toString().trim().split(" ");

const secret = new _007(code,location,time)

secret.getCode()
secret.getLocation()
secret.getTime()