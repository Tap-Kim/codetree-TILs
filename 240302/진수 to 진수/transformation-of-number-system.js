const fs = require("fs")
const [ab, _n] = fs.readFileSync(0).toString().trim().split("\n");
const [a, b] = ab.trim().split(" ").map(Number);
const n = parseInt(_n);

const decimal = parseInt(n, a);
const converted = decimal.toString(b);

console.log(converted)