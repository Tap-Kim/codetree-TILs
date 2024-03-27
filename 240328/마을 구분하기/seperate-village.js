const [n, ..._matrix] = require('fs').readFileSync(0).toString().trim().split("\n");
const N = Number(n);

const visited = Array.from({ length: N }, () => Array(N).fill(false))

const matrix = [];
for(let i = 0; i < N; i++){
    const row = _matrix[i].trim().split(" ").map(Number);
    matrix.push(row)
}

function dfs(x,y) {
    if(x < 0 || y < 0 || x >= n || y >= n || matrix[x][y] === 0 || visited[x][y]) {
        return 0;
    }

    visited[x][y] = true;

    let cnt = 1;
    cnt += dfs(x + 1,  y);
    cnt += dfs(x - 1,  y);
    cnt += dfs(x,  y + 1);
    cnt += dfs(x,  y - 1);

    return cnt;
}

const village = [];
for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(matrix[i][j] && !visited[i][j]) {
            village.push(dfs(i,j))
        }
    }
}

console.log(village.length)
village.sort((a,b) => a - b).forEach(n => console.log(n))