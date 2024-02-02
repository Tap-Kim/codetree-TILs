const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let result = '';

let row = n;
for(let i = 0; i < n; i++) {
    for(let j = 0; j < row; j++) {
        if(j < n - i) result += '*';
        else result += ' ';
    }
    for(let j = n; j > 0; j--) {
        if(j > n - i) result += ' ';
        else result += '*';
    }
	result += '\n';
}
console.log(result)