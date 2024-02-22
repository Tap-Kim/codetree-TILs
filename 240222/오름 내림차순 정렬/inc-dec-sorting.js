const fs = require("fs");
let [, b] = fs.readFileSync(0).toString().trim().split("\n");
let ele = b.trim().split(" ").map(Number);

ele.sort((a,b) => a - b)
console.log(ele.join(" "))

ele.sort((a,b) => b - a)
console.log(ele.join(" "))