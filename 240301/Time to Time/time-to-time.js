const fs = require('fs')
const [a, b, c, d] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const prev = a * 60 + b;
const next = c * 60 + d;

console.log(next - prev)