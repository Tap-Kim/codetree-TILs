const [nt, ...inputs] = require('fs').readFileSync(0).toString().trim().split("\n");
const [n, t] = nt.trim().split(" ").map(Number);
const nums = inputs.toString().trim().split(" ").map(Number);

const result = []
let arr = [];
for(let i = 0; i < n; i++) {
    if(t < nums[i]){
        position = i;
        if(i === 0 || nums[i] === arr[arr.length - 1] + 1) {
            arr.push(nums[i])
        } else if(nums[i] !== arr[arr.length - 1] + 1) {
            result.push(arr)
            arr = [nums[i]]
        } else {
            arr.push(nums[i])
        }
    }

    if(i === n - 1) {
        result.push(arr)
    }
} 

const cntList = result.map(numberList => numberList.length)
console.log(Math.max(...cntList))