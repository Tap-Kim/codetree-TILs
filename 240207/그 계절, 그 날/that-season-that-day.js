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
    } else if(month >= 12 || [1, 2].includes(month)){
        if(isYun(year)) {
            return date > 29 ? -1 : 'Winter';
        } else {
            return 'Winter';
        }
    } else {
        return -1;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [Y,M,D] = input.map(Number);

console.log(getFourSeaon(Y,M,D));