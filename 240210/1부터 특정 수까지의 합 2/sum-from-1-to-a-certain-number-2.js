function recursive(n) {
    if (n === 0) {
        return 0;
    }
    return recursive(n - 1) + n;
}

const fs = require("fs"); 
let num = Number(fs.readFileSync(0).toString().trim());

console.log(recursive(num))