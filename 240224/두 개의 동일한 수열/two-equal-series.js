const fs = require("fs");
let [_, a, b] = fs.readFileSync(0).toString().trim().split("\n");
const A = a.trim().split(' ').sort().join('');
const B = b.trim().split(' ').sort().join('');

console.log(A === B ? 'Yes' : 'No')