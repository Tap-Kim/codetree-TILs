const [nm, ...lines] = require('fs').readFileSync(0).toString().trim().split("\n");
const [N, M] = nm.trim().split(" ").map(Number);

const A_moves = [], B_moves = [];
let totalTime = 0;
let leadChanges = 0;
let A_position = 0, B_position = 0;
let lastLead = null;
for(let i = 0; i < N + M; i++) {
    const [v, t] = lines[i].trim().split(" ").map(Number);
    if(i > N - 1) {
        B_moves.push([v, t]);
    } else {
        A_moves.push([v, t]);
    }
    totalTime += t;
}

let aIndex = 0, bIndex = 0, aTime = 0, bTime = 0;
for (let time = 1; time <= totalTime; time++) {
    if (aTime < A_moves[aIndex][1]) {
        A_position += A_moves[aIndex][0];
        aTime++;
    } else if (aIndex < N - 1) {
        aIndex++;
        aTime = 1;
        A_position += A_moves[aIndex][0];
    }

    if (bTime < B_moves[bIndex][1]) {
        B_position += B_moves[bIndex][0];
        bTime++;
    } else if (bIndex < M - 1) {
        bIndex++;
        bTime = 1;
        B_position += B_moves[bIndex][0];
    }
    // 선두 결정 및 변경 확인
    let currentLead = A_position > B_position ? 'A' : B_position > A_position ? 'B' : null;

    if (currentLead !== lastLead && currentLead !== null) {
        leadChanges++;
        lastLead = currentLead;
    } 
    else if(currentLead === null && A_position === B_position) {
        if(!(currentLead === null && lastLead === null)) {
            leadChanges++;
        }
        lastLead = currentLead;
    }
}

console.log(leadChanges)