function f(n) {
    if(n === 1) return 2;
    if(n === 2) return 4;
    return parseInt(f(n-2) * f(n-1)) % 100;
}

const fs = require("fs"); 
let num = Number(fs.readFileSync(0).toString().trim());

console.log(f(num))