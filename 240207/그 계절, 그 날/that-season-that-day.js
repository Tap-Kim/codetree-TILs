function isYun(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
}

function isExistDate(year, month, date) { 
    switch(month) {
        case 1: case 3: case 7: case 8: case 10: case 12:  
            return date <= 31;
        case 2:
            if(isYun(year)) {
                return date <= 29
            } else {
                return date <= 28
            }
        case 2: case 4: case 6: case 9: case 11:
            return date <= 30;
        default:
            return false;
    }
}

function getFourSeaon(year, month, date) {
    if(!isExistDate(year, month, date)) {
        return -1;
    }

    if(month >= 3 && month <= 5){
        return 'Spring';
    } else if(month >= 6 && month <= 8){
        return 'Summer';
    } else if(month >= 9 && month <= 11){
        return 'Fall';
    } else if(month >= 12 || [1,2].includes(month)){
        return 'Winter';
    } else {
        return -1;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [Y,M,D] = input.map(Number);

console.log(getFourSeaon(Y,M,D));