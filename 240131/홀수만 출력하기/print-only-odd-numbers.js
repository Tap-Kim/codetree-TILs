const fs = require("fs");
const [n, ...lines] = fs.readFileSync(0).toString().split("\n").map(num => parseInt(num));

let result = ''
for(let i = 0 ; i < n; i++) {
    if(lines[i] % 2 !== 0 && lines[i] % 3 === 0) result += lines[i] + "\n"
}

console.log(result)