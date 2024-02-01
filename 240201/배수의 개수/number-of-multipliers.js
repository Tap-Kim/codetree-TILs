const fs = require("fs");
const lines = fs.readFileSync(0).toString().split("\n");

let cntList = [0, 0];

for(let i = 0; i< lines.length; i++) {
    if(Number(lines[i]) % 3 === 0) cntList[0]++;
    if(Number(lines[i]) % 5 === 0) cntList[1]++;
}

console.log(cntList[0], cntList[1])