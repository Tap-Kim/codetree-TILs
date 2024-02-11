function f(num) {
    if(num === 0) return 0;
    return f(parseInt(num / 10)) + parseInt(num % 10)
}

const fs = require("fs"); 
let [a, b, c] = fs.readFileSync(0).toString().trim().split(' ');
const num = a * b * c;
console.log(f(num))