const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function square() {
    let result = '';

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            result += '*';
        }
        result += '\n';
    }
    return result;
}

console.log(square())
console.log(square())