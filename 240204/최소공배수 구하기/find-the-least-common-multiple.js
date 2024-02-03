function gcd(a,b) {
    if(b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a,b) {
    return a * b / gcd(a,b)
}

const fs = require('fs');
const lines = fs.readFileSync(0).toString().trim();
const [a, b] = lines.split(' ').map((num) => parseInt(num));

console.log(lcm(a, b));