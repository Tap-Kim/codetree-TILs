const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split("\n");
const [, k] = a.trim().split(' ');
const arr = b.trim().split(' ').sort((a, b) => a - b);

console.log(arr[k - 1])