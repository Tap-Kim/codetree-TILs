function gcd(a,b) {
    if(b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a,b) {
    return (a * b) / gcd(a, b);
}
function f(arr, index = 0) {
    if(index === arr.length - 1) return arr[index];
    return lcm(arr[index], f(arr, index + 1));
}


const fs = require("fs"); 
const [n, _arr] = fs.readFileSync(0).toString().trim().split('\n')
const arr = _arr.trim().split(' ')

console.log(f(arr))