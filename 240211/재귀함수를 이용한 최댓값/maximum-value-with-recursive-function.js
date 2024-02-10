const fs = require("fs");
let [n, _arr] = fs.readFileSync(0).toString().trim().split("\n");
const arr = _arr.trim().split(' ').map(Number)

function f(n) {
    if(n === 0) return arr[0];
    return Math.max(f(n - 1), arr[n])
}

console.log(f(n - 1))