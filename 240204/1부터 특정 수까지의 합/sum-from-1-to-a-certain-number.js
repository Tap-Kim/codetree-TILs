function sum(num) {
    return (num * (num + 1) / 2) / 10
}
const fs = require("fs"); 
let num = Number(fs.readFileSync(0).toString().trim()); 

console.log(sum(num))