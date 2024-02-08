function checkDifferentAlphabets(string) {
    const uniqueAlphabets = new Set(string)
    return uniqueAlphabets.size >= 2 ? "Yes" : "No";
}

const fs = require("fs");
let input = fs.readFileSync(0).toString()

console.log(checkDifferentAlphabets(input))