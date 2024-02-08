function absoluteNumber(numerList) {
    console.log(numerList.map(Math.abs).join(' '))
}

const fs = require("fs");
let [N, num] = fs.readFileSync(0).toString().trim().split("\n");
const input = num.split(' ').map(Number)
absoluteNumber(input)