const fs = require('fs');
const [n, ...inputs] = fs.readFileSync(0).toString().trim().split("\n");

const arr = Array.from({length: 200}).fill(0);

for(let i = 0; i < n; i++) {
    const [a, b] = inputs[i].trim().split(" ");
    for(let j = a; j < b; j++) {
        arr[j]++
    }
}

console.log(Math.max(...arr))