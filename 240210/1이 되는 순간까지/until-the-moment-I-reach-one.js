function f(n, cnt) {
    if(n === 1) return cnt;

    if(n % 2 === 0) return f(parseInt(n/2), cnt + 1);
    else return f(parseInt(n/3), cnt + 1);
}

const fs = require("fs"); 
let num = Number(fs.readFileSync(0).toString().trim());

console.log(f(num, 0))