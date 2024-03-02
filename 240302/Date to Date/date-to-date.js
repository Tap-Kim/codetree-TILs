//                    1.  2.  3.  4.  5.  6.  7.  8.  9. 10. 11. 12.
// num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const NUM_OF_DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const fs = require("fs");
const [m1, d1, m2, d2] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

if (m1 === m2) {
    return d2 - d1 + 1;
}

let totalDays = NUM_OF_DAYS[m1 - 1] - d1;

for (let month = m1; month < m2 - 1; month++) {
    totalDays += NUM_OF_DAYS[month];
}

totalDays += d2;

console.log(totalDays)


// let daySum = 1;
// if(d1 === d2 && m1 === m2) {
//     console.log(daySum)
//     return;
// }

// for(let i = m1; i <= m2; i++) {
//     daySum += NUM_OF_DAYS[i - 1];
// }

// daySum -= d1;
// daySum += d2;

// console.log(daySum)