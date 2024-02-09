const fs = require("fs");
const [question, condition] = fs.readFileSync(0).toString().trim().split("\n");

function getIndex() {
    return question.indexOf(condition) || -1;
}


console.log(getIndex())