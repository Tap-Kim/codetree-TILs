const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());


// i % 4 === 0 => 윤년
// 나머지 => 평년
// 예외) i % 100 === 0 && i % 400 !== 0

let cnt = 0;
for (let i = 1; i <= n; i++){
    if((i % 4 === 0) && !(i % 100 == 0 && i % 400 !== 0)) cnt++;
}

console.log(cnt)