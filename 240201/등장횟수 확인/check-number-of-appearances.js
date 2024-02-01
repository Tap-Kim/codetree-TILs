const fs = require("fs");
const lines = fs.readFileSync(0).toString().trim().split("\n");

let cnt = 0;
for(let i = 0; i < lines.length; i++) {
    if(lines[i] % 2 === 0) cnt++;
}

console.log(cnt)