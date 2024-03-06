const [nt, ...inputs] = require('fs').readFileSync(0).toString().trim().split("\n");
const [n, t] = nt.trim().split(" ").map(Number);
const nums = inputs.toString().trim().split(" ").map(Number);

const result = []
let arr = [];
let position = 0
for(let i = 0; i < n; i++) {
    if(t < nums[i]){
        if(i === 0 || i === position + 1) {
            arr.push(nums[i])
        } else {
            result.push(arr)
            arr = []
            arr.push(nums[i])
        }
        position = i;
    }

    if(i === n - 1) {
        result.push(arr)
    }
} 

const cntList = result.map(numberList => numberList.length)
console.log(Math.max(...cntList))