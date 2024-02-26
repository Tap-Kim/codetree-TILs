const fs = require("fs");
let [param, ...rest] = fs.readFileSync(0).toString().trim().split("\n");

const [n, k, T] = param.trim().split(' ');

rest.sort()
const r = rest.filter(f => f.startsWith(T))[k - 1]
console.log(r)