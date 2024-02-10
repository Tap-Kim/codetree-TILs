function f(n) {
    if (n < 10) {
        return n ** 2;
    }

    return f(parseInt(n / 10)) + ((n % 10) ** 2);
}

const fs = require("fs"); 
let num = Number(fs.readFileSync(0).toString().trim());

console.log(f(num))