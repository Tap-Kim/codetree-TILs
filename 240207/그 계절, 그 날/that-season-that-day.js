function isYun(year) {
    return (
            year % 4 === 0 && 
                (
                    (year % 100 !== 0) || 
                    ((year % 100 === 0 || year % 400 === 0))
                )
            )
}

function getFourSeaon(year, month, date) {
    if(month >= 3 && month <= 5){
        return 'Spring';
    } else if(month >= 6 && month <= 8){
        return 'Summer';
    } else if(month >= 9 && month <= 11){
        return 'Fall';
    } else if(month === 2){
        if(isYun(year) && date <= 29) {
            return 'Winter';
        }
    } else if(month >= 12 || month === 1){
        return 'Winter';
    } else {
        return -1;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [Y,M,D] = input.map(Number);

// console.log(getFourSeaon(Y,M,D));
console.log(getFourSeaon(Y,M,D));