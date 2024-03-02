const fs = require("fs")
const [ab, _n] = fs.readFileSync(0).toString().trim().split("\n");
const [a, b] = ab.trim().split(" ").map(Number);
const n = parseInt(_n);

function toDecimal(n, a, i = _n.length - 1) {
    if (n < 10) return n;
    else if (parseInt(n / 10) === 0) 
        return n % 10;
    else
        return (parseInt(n / 10) * Math.pow(a, i)) + toDecimal(n % 10, i -= 1);
}

let decimal = toDecimal(n, a)
let result = ""
while(decimal > 0) {
    if(decimal <= 0) {
        result = result + "" + decimal;
        break;
    } else {
        result = result + "" + decimal % b;
        decimal = parseInt(decimal / b);
    }
}

console.log(result)