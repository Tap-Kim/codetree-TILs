function isYun(n) {
    if (n % 4 === 0) {
        return true;
    }
    if (n % 4 === 0 && n % 100 === 0) {
        return false;
    }
    if (n % 4 === 0 && n % 100 === 0 && n % 400 === 0) {
        return true;
    }
    return true;
}

const fs = require("fs"); 
let date = Number(fs.readFileSync(0).toString().trim()); 
console.log(isYun(date));