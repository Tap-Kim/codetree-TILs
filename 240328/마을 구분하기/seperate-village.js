const [n, ..._matrix] = require('fs').readFileSync(0).toString().trim().split("\n");
const N = Number(n);

const visited = Array.from({ length: N }, () => Array(N).fill(false))

const matrix = [];
for(let i = 0; i < N; i++){
    const row = _matrix[i].trim().split(" ").map(Number);
    matrix.push(row)
}

// function dfs(x,y) {
//     if(x < 0 || y < 0 || x >= n || y >= n || matrix[x][y] === 0 || visited[x][y]) {
//         return 0;
//     }

//     visited[x][y] = true;

//     let cnt = 1;
//     cnt += dfs(x + 1,  y);
//     cnt += dfs(x - 1,  y);
//     cnt += dfs(x,  y + 1);
//     cnt += dfs(x,  y - 1);

//     return cnt;
// }

// const village = [];
// for(let i = 0; i < n; i++) {
//     for(let j = 0; j < n; j++) {
//         if(matrix[i][j] && !visited[i][j]) {
//             village.push(dfs(i,j))
//         }
//     }
// }

function canGo(x, y) {
    if(x < 0 || y < 0 || x >= N || y >= N || matrix[x][y] === 0 || visited[x][y]) {
        return false;
    }
    return true;
}

let cnt = 0;
function dfs(x,y) {
    if(canGo(x,y)) {
        return;
    }

    // 0: 오른쪽, 1: 아래쪽, 2: 왼쪽, 3: 위쪽
    const dxs = [0, 1, 0, -1], dys = [1, 0, -1, 0];
    for(let dir = 0; dir < 4; dir++) {
        const newX = x + dxs[dir], newY = y + dys[dir];
        if(canGo(newX, newY)) {
            visited[newX][newY] = true;
            cnt += 1;
            dfs(newX, newY)
        }
    }
}

const village = [];
for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
        if(canGo(i,j)) {
            visited[i][j] = true;
            cnt = 1;
            dfs(i,j);
            village.push(cnt);
        }
    }
}

console.log(village.length)
village.sort((a,b) => a - b).forEach(n => console.log(n))