const inputs = require('fs').readFileSync(0).toString().trim().split("\n").map(Number);

const arr = []
let cnt = 0;
for(let i = 0; i < inputs.length; i++) {
    cnt++;
    if(i === 0 || inputs[i] !== inputs[i - 1]) {
        arr.push(cnt)
        cnt = 0;
    } 
}


console.log(Math.max(...arr))