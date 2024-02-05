const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [a, b] = input.map(Number);

function _369(num) {
    return String(num).split('').find(n => ['3','6','9'].includes(n))
}

function _triple(num) {
    return num % 3 === 0;
}

let cnt = 0;
for (let i = a; i <= b; i++) {
    if(_369(i) || _triple(i)) {
        cnt++;
    }
}
console.log(cnt);