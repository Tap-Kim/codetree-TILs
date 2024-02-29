// 1 + 8 = 9 => 1
// 3 +4 = 7 => 2
// 5 +5 = 10 =>3
// 7 + 0  = 7 =>4 

class Distince {
    constructor(x, y, num) {
        this.x = x;
        this.y = y;
        this.num = num
    }
}

const fs = require("fs");
let [n, ...data] = fs.readFileSync(0).toString().trim().split("\n");

const distinces = [];
for(let i = 0; i < n; i++) {
    const [x, y] = data[i].trim().split(" ");
    distinces.push(new Distince(x, y, i + 1))
}

function compare(a, b) {
    const disA = Math.abs(a.x) + Math.abs(a.y);
    const disB = Math.abs(b.x) + Math.abs(b.y);
    
    if(disA === disB) return a.num - b.num;
    return disA - disB
}

distinces.sort(compare)

for(const d of distinces) {
    console.log(d.num)
}