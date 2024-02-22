const fs = require("fs");
let [n, ...arr] = fs.readFileSync(0).toString().trim().split("\n");
arr.sort()
for(let str of arr) {
    console.log(str)
}