/**
 *  상하좌우 인접한 같은 숫자끼리 하나의 블럭
 *  블럭이 4개 이상일때 터짐
 *  블럭의 수 + 최대 블럭의 크기
 *  */ 

const [N, ..._matrix] = require('fs').readFileSync(0).toString().trim().split("\n");
const n = Number(N);
let visited = Array.from({ length: n }, () => Array(n).fill(false))
const matrix = [];
for(let i = 0; i < n; i++){
    const row = _matrix[i].trim().split(" ").map(Number);
    matrix.push(row)
}

const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let maxBlockSize = 0, explondingBlocks = 0;

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(!visited[i][j]) {
            const blockSize = dfs(i, j, matrix[i][j]);
            if(blockSize >= 4) explondingBlocks++;
            maxBlockSize = Math.max(maxBlockSize, blockSize)
        }
    }   
}
console.log(explondingBlocks, maxBlockSize)

function dfs(x, y, cur) {
    if(canGo(x, y, cur)) return 0;
    
    visited[x][y] = true;
    let count = 1;
    for(let i = 0; i < 4; i++) {
        const newX = x + dx[i];
        const newY = y + dy[i]
        count += dfs(newX, newY, cur);
    }

    return count;
} 

function isRange(x,y) {
    return x >= 0 && y >= 0 && x < n && y < n
}
function canGo(x, y, cur) {
    if(!isRange(x,y) || visited[x][y] || matrix[x][y] !== cur) return true;
    return false;
}