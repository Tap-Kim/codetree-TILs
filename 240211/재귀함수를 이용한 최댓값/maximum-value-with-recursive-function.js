function f(arr) {
    arr.sort((a,b) => b - a)
    return arr[0]
}

const fs = require("fs");
let [n, arr] = fs.readFileSync(0).toString().trim().split("\n");

console.log(f(arr.trim().split(' ')))