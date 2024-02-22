const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
const arr = [...input];
arr.sort();
const result = arr.join("");
console.log(result)