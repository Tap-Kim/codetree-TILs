function calc(a, b) {
    return a > b ? `${a * 2} ${b + 10}` : `${a + 10} ${b * 2}`
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [a, b] = input.map(Number);

console.log(calc(a, b))