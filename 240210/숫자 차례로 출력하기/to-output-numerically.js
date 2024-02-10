const fs = require("fs"); 
let num = Number(fs.readFileSync(0).toString().trim());

function printStar(n) {
    if(n === 0) return;

    for(let i = 0; i < n; i++) process.stdout.write(i + 1 + " ");
    console.log()
    for(let i = n; i > 0; i--) process.stdout.write(i + " ");
}

printStar(num)