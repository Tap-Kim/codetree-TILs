function minValue(a = -100, b = -100, c = -100) {
    return Math.min(a,b,c)
}
const fs = require("fs"); 
let input = fs.readFileSync(0).toString().trim().split(" ");
let nums = input.map(Number);

console.log(minValue(...nums))