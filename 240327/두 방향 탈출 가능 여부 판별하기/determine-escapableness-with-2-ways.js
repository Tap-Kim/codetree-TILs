const [nm, ...matrix] = require('fs').readFileSync(0).toString().trim().split("\n")
const [n, m] = nm.trim().split(" ").map(Number);

const visited = Array.from({ length: n }, () => Array.from({ length : m }).fill(false));

const answer = []
for(let i = 0; i < n; i++) {
    const matrixList = matrix[i].toString().trim().split(" ").map(Number);
    answer.push(matrixList)    
}

function dfs(x, y) {
    if(x < 0 || y < 0 || x >= n || y >= m || answer[x][y] === 0 || visited[x][y]) {
        return;
    }

    if(x === n - 1 && y === m - 1) {
        visited[x][y] = true;
        return;
    }

    visited[x][y] = true;

    dfs(x + 1, y);
    dfs(x, y + 1);
}

dfs(0,0)

console.log(visited[n - 1][m - 1] ? 1 : 0)