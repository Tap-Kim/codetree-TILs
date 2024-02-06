function onjeonsu(a, b) {
    let cnt = 0;
    for(let i = a; i <= b; i++) {
        if(
            !(i % 2 === 0) 
            && !(String(i).at(-1) === '5')
            && !(i % 3 === 0 && i % 9 !== 0)
        ) {
            cnt++;
        }
    }
    return cnt;
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [a, b] = input.map(Number);

console.log(onjeonsu(a,b));