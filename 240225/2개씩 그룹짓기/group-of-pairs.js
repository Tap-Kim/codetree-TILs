function maxSum(N, arr) {
    arr.sort()
    let maxSumList = [];
    for(let i = 0; i < N; i++) {
        maxSumList.push(arr[i] + arr[arr.length - 1 - i]);
    }

    return Math.max(...maxSumList)
}

const fs = require("fs");
let [n, b] = fs.readFileSync(0).toString().trim().split("\n");
const arr = b.trim().split(' ').map(Number);

console.log(maxSum(Number(n), arr))