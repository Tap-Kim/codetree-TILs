const fs = require("fs");
const lines = fs.readFileSync(0).toString().trim().split("\n");
const [row, col] = lines[0].split(' ').map(num => parseInt(num));

let result = '';

for(let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) {
        result += '* ';
    }
    result += '\n';
}
console.log(result)