const fs = require("fs");
const [question, condition] = fs.readFileSync(0).toString().trim().split("\n");

function getIndex() {
    for(let i = 0; i < question.length; i++) {
        let end = i, cnt = 0;
        for(let j = 0; j < condition.length; j++, end++) {
            if(condition[j] === question[end]){
                cnt++;
                if(cnt > 1) return i
            }
        }  
        if(cnt > 0) return i;
    }
    return -1;
}

console.log(getIndex())