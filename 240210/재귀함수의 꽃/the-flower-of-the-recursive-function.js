function recursive(n) {
    if(n === 0) {
        return;
    }

    process.stdout.write(n + " ");
    recursive(n - 1)
    process.stdout.write(n + " ");
}

const fs = require("fs"); 
let num = Number(fs.readFileSync(0).toString().trim());

recursive(num)