const OFFESET = 100
const fs = require('fs');
const [n, ...inputs] = fs.readFileSync(0).toString().trim().split("\n");

const arr = Array.from({length: 201}).fill(0);

for(let i = 0; i < n; i++) {
    const [a, b] = inputs[i].trim().split(" ").map(Number);
    for(let j = a; j < b; j++) {
        arr[j + OFFESET]++;
    }
}

console.log(Math.max(...arr))