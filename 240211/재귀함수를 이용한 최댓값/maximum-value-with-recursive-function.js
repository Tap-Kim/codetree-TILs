function f(arr, n) {
    if(n === 0) return arr[0];
    return Math.max(f(arr, n - 1), arr[0])
}

const fs = require("fs");
let [n, arr] = fs.readFileSync(0).toString().trim().split("\n");

console.log(f(arr.trim().split(' ').map(Number), n - 1))