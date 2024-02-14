const fs = require("fs"); 
let num = Number(fs.readFileSync(0).toString().trim());

let cnt = 0;
function f(n) {
    cnt++;
    if (n === 1) return 1;
    if (n === 2) return 2;
    return f(n % 2 === 0 ? parseInt(n/2) : (n * 3) + 1)
}

f(num)

console.log(cnt)