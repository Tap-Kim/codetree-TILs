// x L x R
//   r r r r
// l l l l l
// r r r r r r r
//       l l l l

const OFFSET = 101;
const fs = require("fs");
const [n, ...inputs] = fs.readFileSync(0).toString().trim().split("\n");

const line = Array.from({length: OFFSET * OFFSET}).fill(0);

let startIndex = OFFSET;
for(let i = 0; i < n; i++) {
    const [x, dir] = inputs[i].trim().split(" ");
    const _x = Number(x);
    if(dir === 'R') {
        for(let j = startIndex + 1; j < startIndex + _x; j++) line[j] = "R"
        startIndex += _x
    } else {
        for(let j = startIndex ; j > startIndex - _x; j--) line[j] = "L"
        startIndex -= _x
    }
}
// console.log(line.filter(_ => _ !== 0))

let lCnt = 0, rCnt = 0;
for(let i = 0; i < line.length; i++) {
    if(line[i] === 'R') rCnt++;
    else if(line[i] === 'L') lCnt++;
}

console.log(`${lCnt} ${rCnt}`)