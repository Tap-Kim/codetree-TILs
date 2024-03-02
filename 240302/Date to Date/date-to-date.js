//                    1.  2.  3.  4.  5.  6.  7.  8.  9. 10. 11. 12.
// num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const NUM_OF_DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const fs = require("fs");
const [m1, d1, m2, d2] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let daySum = 1;
for(let i = m1; i <= m2; i++) {
    daySum += NUM_OF_DAYS[i - 1];
}

daySum -= d1;
daySum += d2;

console.log(daySum)