const fs = require("fs");
let [n, data] = fs.readFileSync(0).toString().trim().split("\n");
const inputs = data.trim().split(" ").map(Number);

let originList = inputs.map((num, index) => ({num: Number(num), index}))
const answer = Array.from({length: n}).fill(0)
originList.sort((a, b) => a.num - b.num || a.index - b.index);

for(let i = 0; i < n; i++) {
    answer[originList[i].index] = i + 1;
}

console.log(answer.join(' '))