const OFFESET = 1000;

const [nm, ...lines] = require('fs').readFileSync(0).toString().trim().split("\n");
const [n, m] = nm.trim().split(" ").map(Number);
const nTimeLine = Array.from({ length: OFFESET + 1}).fill(0)
const mTimeLine = Array.from({ length: OFFESET + 1}).fill(0)

let nPosition = OFFESET;
let time = 0;
for(let i = 0; i < n; i++) {
    const [direction, sec] = lines[i].trim().split(" ");
    const second = Number(sec)
    for(let j = 1; j <= second; j++) {
        nPosition += 1;
        nTimeLine[nPosition] = nTimeLine[nPosition - 1] + (direction === 'R' ? +1 : -1);
    }
    time += second;
}
let mPosition = OFFESET;
for(let i = 0; i < m; i++) {
    const [direction, sec] = lines[i + n].trim().split(" ");
    const second = Number(sec)
    for(let j = 1; j <= second; j++) {
        mPosition += 1;
        mTimeLine[mPosition] = mTimeLine[mPosition - 1] + (direction === 'R' ? +1 : -1);
    }
    time += second;
}
for(let i = 1; i < time; i++) {
    if((nTimeLine[OFFESET + i] && mTimeLine[OFFESET + i]) 
        && (nTimeLine[OFFESET + i] === mTimeLine[OFFESET + i])) {
        console.log(i);
        return;
    }
}
console.log(-1)