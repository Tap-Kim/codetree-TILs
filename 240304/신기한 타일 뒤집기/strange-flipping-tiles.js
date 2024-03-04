const OFFSET = 101;
const fs = require("fs");
const [n, ...inputs] = fs.readFileSync(0).toString().trim().split("\n");

const line = Array.from({length: OFFSET * OFFSET}).fill(0);

let startIndex = OFFSET;
for(let i = 0; i < n; i++) {
    const [_x, dir] = inputs[i].trim().split(" ");
    const x = Number(_x);
    let initIndex = i === n - 1 ? startIndex - 1 : startIndex 
    // console.log("##", initIndex)

    if(dir === 'R') {
        for(let j = initIndex; j < initIndex + x; j++) { 
            line[j] = "R"
            startIndex += 1;
            // console.log(j)
        }
        // filterd()
    } else {
        for(let j = initIndex ; j > initIndex - x; j--) { 
            line[j] = "L"
            startIndex -= 1;
            // console.log(j)
        }
        // filterd()
    }
}

let lCnt = 0, rCnt = 0;
for(let i = 0; i < line.length; i++) {
    if(line[i] === 'R') rCnt++;
    else if(line[i] === 'L') lCnt++;
}


function filterd(){
    console.log(line.filter(_ => _ !== 0))
}