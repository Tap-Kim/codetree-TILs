function f(n, current = 1, sum = 0) {
    if(current > n) return sum;

    if(n % 2 === 0 && current % 2 === 0) 
        return f(n, current + 1, sum + current)
    else if(n % 2 !== 0 && current % 2!== 0) 
        return f(n, current + 1, sum + current)
    else 
        return f(n, current + 1, sum)
}

const fs = require("fs");
let num = Number(fs.readFileSync(0).toString().trim());

console.log(f(num))