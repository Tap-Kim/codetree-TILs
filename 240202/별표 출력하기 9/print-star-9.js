const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let result = '';

// 공백의 수: n - 1
// 별 찍는 위치: n번째

let row = n;
for(let i = 0; i < n; i++) {
    for(let j = 1; j <= row; j++) {
        if(j < n - i) result += '  ';
        else result += '* ';
    }
    if(i !== 0) {
        for(let j = 0; j < i; j++) {
            result += '* ';
        }
    }
	result += '\n';
}
console.log(result)