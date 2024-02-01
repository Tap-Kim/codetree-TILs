const fs = require("fs");
const lines = fs.readFileSync(0).toString().split("\n");

let a = 0, b = 0;

for(let i = 0; i< lines.length; i++) {
    if(Number(lines[i]) % 3 === 0) a++;
    if(Number(lines[i]) % 5 === 0) b++;
}

console.log(a, b)