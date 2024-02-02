const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let result = '';

for(let i = 0; i < n; i++) {
    for(let j = 0; j <= i; j++) {
        result += '* ';
    }
	result += '\n';
}

for(let i = n - 1; i > 0; i--) {
    for(let j = 0; j < i; j++) {
        result += '* ';
    }
	result += '\n';
}

console.log(result)