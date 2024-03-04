const OFFSET = 101;
const fs = require("fs");
const [n, ...inputs] = fs.readFileSync(0).toString().trim().split("\n");

const line = Array.from({length: OFFSET * OFFSET}).fill(0);

let startIndex = OFFSET;
for(let i = 0; i < n; i++) {
    const [_x, dir] = inputs[i].trim().split(" ");
    const x = Number(_x);

    if(dir === 'R') {
        for(let j = 0; j < x; j++) { 
            line[startIndex + j] = 'R'
        }
        startIndex += x -1;
    } else {
        for(let j = 0 ; j < x; j++) { 
            line[startIndex - j] = 'L'
        }
        startIndex -= x -1;
    }
}

let lCnt = 0, rCnt = 0;
for(let i = 0; i < line.length; i++) {
    if(line[i] === 'R') rCnt++;
    else if(line[i] === 'L') lCnt++;
}
console.log(`${lCnt} ${rCnt}`)