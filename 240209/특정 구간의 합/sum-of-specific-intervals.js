const fs = require("fs");
let [nm, _seq, ...res] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = nm.trim().split(' ');
const seq = _seq.trim().split(' ');

function sum(start, end) {
    let s = 0;
    for(let i = start; i <= end; i++) {
        s += +(seq[i - 1]);
    }
    return s;
}

for(let i = 0; i < m; i++) {
    const [a, b] = res[i].trim().split(' ').map(Number);
    console.log(sum(a, b));
}