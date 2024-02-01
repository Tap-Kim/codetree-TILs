const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let result = [0, 0, 0,];
for(let i = 1; i <= n; i++) {
    if(i % 12 === 0) result[2]++;
    else if(i % 3 === 0) result[1]++;
    else if(i % 2 === 0) result[0]++;
}

console.log(result.join(' '))