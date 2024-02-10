function f(n) {
    if(n === 1) return 1;
    if(n === 2) return 1;

    return f(n - 1) + f(n - 2);
}

const fs = require("fs"); 
let num = Number(fs.readFileSync(0).toString().trim());

console.log(f(num))