function isConsecutiveNumberSubSequence(a,b) {
    let aPos = 0;
    while(aPos < a.length) {
        // 연속 시작 체크
        if(a[aPos] === b[0]) {
            let cnt = 0;
            for(let i = 0; i < b.length; i++) {
                if(a[aPos + i] === b[i]) {
                    cnt++;
                }
            }
            if(cnt === b.length) return 'Yes';
        }
        aPos++;
    }
    return 'No'
}

const fs = require("fs");
const [elements, _A, _B] = fs.readFileSync(0).toString().trim().split("\n");
const [n1, n2] = elements.trim().split(" ");
const A = _A.trim().split(" ");
const B = _B.trim().split(" ");

console.log(isConsecutiveNumberSubSequence(A, B))