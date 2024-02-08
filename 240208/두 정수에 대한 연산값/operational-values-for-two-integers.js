function func(a, b) {
    return a > b ? `${a + 25} ${b * 2}` : `${a * 2} ${b + 25}`
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [a, b] = input.map(Number);

console.log(func(a, b))