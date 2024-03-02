//                 1.  2.  3.  4.  5.  6.  7.  8.  9.  10. 11. 12.
const MONTHS = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const fs = require("fs");
let [dates, _day] = fs.readFileSync(0).toString().trim().split("\n");
const day = _day.trim()
const [m1, d1, m2, d2] = dates.trim().split(" ").map(Number);
let totalDays = 1;

for (let month = m1; month < m2; month++) {
    totalDays += MONTHS[month];
}
totalDays -= d1;
totalDays += d2;

function f(n) {
    if(DAYS[n] === day) return true
    else if(n % 7 === n) return false
    else return f(n % 7)
}

let cnt = 0;
for(let i = totalDays; 0 < i; i--) {
    if(f(i - 1)) {
        cnt++;
    }
}

console.log(cnt)