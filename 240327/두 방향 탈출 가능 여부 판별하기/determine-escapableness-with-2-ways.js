const [nm, ...matrix] = require('fs').readFileSync(0).toString().trim().split("\n")
const [n, m] = nm.trim().split(" ").map(Number);

const visited = Array.from({ length: n }, () => Array.from({ length : m }).fill(false));

const answer = []
for(let i = 0; i < n; i++) {
    const matrixList = matrix[i].toString().trim().split(" ").map(Number);
    answer.push(matrixList)    
}
let isEscape = 0;
function dfs(x, y) {
    if(x < 0 || y < 0 || x >= n || y >= m || answer[x][y] === 0 || visited[x][y]) {
        return;
    }

    visited[x][y] = true;

    if(x === n - 1 && y === m - 1) {
        isEscape = 1;
        return;
    }

    dfs(x + 1, y);
    dfs(x, y + 1);
}

dfs(0,0)

console.log(isEscape)