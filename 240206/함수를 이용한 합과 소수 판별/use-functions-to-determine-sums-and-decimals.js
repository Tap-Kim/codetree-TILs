function isPrime(n){
    for(let i = 2; i < n; i++) {
        if(n % i === 0) { 
            return false;
        }
    }
    return n > 1;
}

function isEvenSumNumber(n) {
    const charList = String(n).split('');
    let sum = charList.reduce((acc, cur) => (acc + parseInt(cur)), 0);
    return sum % 2 === 0;
}

function getResult(a,b) {
    let cnt = 0;
    for(let i = a; i <= b; i++) {
        if(isPrime(i) && isEvenSumNumber(i))  {
            cnt++;
        }
    }
    return cnt;
}


const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [a, b] = input.map(Number);
console.log(getResult(a,b))