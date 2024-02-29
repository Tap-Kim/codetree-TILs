const fs = require("fs");
let [n, data] = fs.readFileSync(0).toString().trim().split("\n");
const inputs = data.trim().split(" ").map(Number);
let originList = inputs.map((num, index) => ({num: Number(num), index}))

originList.sort((a, b) => a.num - b.num || a.index - b.index);
originList = originList.map((origin, i) => ({...origin, orderedIndex: i}));
originList.sort((a,b) => a.index - b.index)

const list = []
for(let i = 0; i < n; i++) {
    list.push(originList[i].orderedIndex + 1)
}
console.log(list.join(' '))