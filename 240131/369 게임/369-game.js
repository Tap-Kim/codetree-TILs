const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let result = '';

for(let i = 1; i <= n; i++) {
    if(i % 3 === 0) result += '0 ';
    else if(
        String(i).split('').indexOf('3') > 0 
        || String(i).split('').indexOf('6') > 0 
        || String(i).split('').indexOf('9') > 0
        ) result += '0 ';
    else result += i + ' ';
}
console.log(result)