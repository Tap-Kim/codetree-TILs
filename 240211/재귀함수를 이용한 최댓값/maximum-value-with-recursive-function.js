function f(arr) {
    arr.sort()
    return arr.at(-1)
}

const fs = require("fs");
let [n, arr] = fs.readFileSync(0).toString().trim().split("\n");

console.log(f(arr.trim().split(' ')))