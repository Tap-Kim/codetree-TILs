function gcd(a, b) {
    if(b > 0) return gcd(b, a % b);
    return a;
}

const fs = require('fs');
const lines = fs.readFileSync(0).toString().trim();
const [a, b] = lines.split(' ').map(num => parseInt(num));
console.log(gcd(a,b))