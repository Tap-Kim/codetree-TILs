function getAnswer(isBool) {
    return isBool ? 'Yes' : 'No';
}

function getResultMonthDate(M,D) {
    let result = 'No';
    switch(M){
        case 2:
            result = getAnswer(D >= 1 && D <= 28);
            break;
        // 31까지
        case 1:case 3:case 5:case 7:case 8:case 10:case 12:
            result = getAnswer(D >= 1 && D <= 31);
            break;
        // 30일 까지
        case 4:case 6:case 9:case 11:
            result = getAnswer(D >= 1 && D <= 30);
            break;
    }
    return result;
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [M, D] = input.map(Number);

console.log(getResultMonthDate(M,D))