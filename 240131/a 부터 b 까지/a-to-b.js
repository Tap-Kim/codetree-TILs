const fs = require("fs");
const lines = fs.readFileSync(0).toString().split("\n");
const [a,b] = lines[0].split(' ').map(num => parseInt(num));

let result = String(a);
let n = a;
while(n <= b ) {
    if(n % 2 === 0) {
        n += 3;
        if(n > b) break;
        result += ' ' + n;
    } else {
        n *= 2;
        if(n > b) break;
        result += ' ' + n;
    }
}

console.log(result)