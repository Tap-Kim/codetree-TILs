function f(n) {
    if(n === 0) return 1;
    return n * f(n - 1)
}

const fs = require("fs"); 
let num = Number(fs.readFileSync(0).toString().trim()); 

console.log(f(num))