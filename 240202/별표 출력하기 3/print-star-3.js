const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let result = '';

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(j < i) result += '  ';
        else result += '* ';
    }
    for(let j = 0; j < n; j++) {
        if(j > i) result += '* ';
    }
	result += '\n';
}
console.log(result)