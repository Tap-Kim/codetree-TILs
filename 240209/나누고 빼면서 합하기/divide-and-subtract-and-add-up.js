const fs = require("fs");
let [num, _sequence] = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = num.trim().split(" ").map(Number);
let sequence = _sequence.trim().split(" ").map(Number);

let sum = 0;
function getSum() {
    while(m > 0) {
        sum += sequence[m - 1];
        if(m % 2 === 0) m /= 2;
        else m -= 1;
    }
}

getSum()
console.log(sum)