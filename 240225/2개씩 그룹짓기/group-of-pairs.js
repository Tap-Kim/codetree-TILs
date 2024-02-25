function maxSum(N, arr) {
    arr.sort((a, b) => a - b);

    let maxSum = 0;
    for (let i = 0; i < N; i++) {
        maxSum = Math.max(maxSum, arr[i] + arr[arr.length - 1 - i]);
    }

    return maxSum;
}

const fs = require("fs");
let [n, b] = fs.readFileSync(0).toString().trim().split("\n");
const arr = b.trim().split(' ').map(Number);

console.log(maxSum(Number(n), arr))