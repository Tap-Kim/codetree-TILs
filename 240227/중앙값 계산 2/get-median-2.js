const fs = require("fs");
let [_, _nums] = fs.readFileSync(0).toString().trim().split("\n");
const nums = _nums.trim().split(' ')

const inputList = []
const result = []
nums.forEach((n, i) => {
    inputList.push(n);
    if((i + 1) % 2 !== 0) {
        const sortedNums = [...inputList].sort((a,b) => a - b)
        const len = sortedNums.length / 2
        result.push(sortedNums[Math.floor(len)])
    }
})

console.log(result.join(" "))