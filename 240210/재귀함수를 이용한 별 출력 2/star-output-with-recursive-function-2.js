function recursive(n) {
    if(n === 0) return;

    for(let i = 0; i < n; i++) process.stdout.write("* ");
    console.log()
    recursive(n - 1);
    for(let i = 0; i < n; i++) process.stdout.write("* ");
    console.log()
}

const fs = require("fs"); 
let num = Number(fs.readFileSync(0).toString().trim());

recursive(num);