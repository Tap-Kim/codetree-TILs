const fs = require("fs");
const lines = fs.readFileSync(0).toString().split("\n");
const array = lines[0].split(' ').map(num => parseInt(num));

console.log(solution(array))
  
function solution(num) {
    let result = '';
    for(let i = 1; i <= num; i++) {
        if(i % 2 === 0 || i % 3 === 0) result += "1 ";
        else result += "0 ";
    }
    return result;
}