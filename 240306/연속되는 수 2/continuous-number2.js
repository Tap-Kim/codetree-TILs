const inputs = require('fs').readFileSync(0).toString().trim().split("\n").map(Number);

const arr = Array.from({length: inputs.length}).fill(0)
let position = 0;
arr[position] = 1;

for(let i = 1; i < inputs.length; i++) {
    if(i === 0 || inputs[i] !== inputs[i - 1]) {
        position++;
        arr[position] = 1;
    } else {
        arr[position]++;
    }
}



console.log(Math.max(...arr))