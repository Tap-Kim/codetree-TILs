const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let result = "";

const len = 100 - n;
let std = n;
for(let i = 0; i <= len; i++, std++) {
    if(std >= 90) result += 'A ';
    else if(std >= 80 && std < 90) result += 'B ';
    else if(std >= 70 && std < 80) result += 'C ';
    else if(std >= 60 && std < 70) result += 'D ';
    else if(std < 60) result += 'F ';
}

console.log(result);