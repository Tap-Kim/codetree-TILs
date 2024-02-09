const fs = require("fs");
const [question, condition] = fs.readFileSync(0).toString().trim().split("\n");

function getIndex() {
    const index = question.indexOf(condition);
    return index > -1 ? index : -1;
}

console.log(getIndex())