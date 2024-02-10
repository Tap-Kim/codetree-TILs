const fs = require("fs"); 
let num = Number(fs.readFileSync(0).toString().trim());

function recursive(n) {
    if(n === 0) return;
    recursive(n - 1)
    console.log("HelloWorld")
}

recursive(num)