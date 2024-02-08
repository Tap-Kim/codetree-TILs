function diveNumber(n) {
    return n % 2 === 0 ? parseInt(n / 2) : n;
}

const fs = require("fs");
let [_, numbers] = fs.readFileSync(0).toString().trim().split("\n")
let input = numbers.split(" ").map(Number)

console.log(input.map(diveNumber).join(' '))