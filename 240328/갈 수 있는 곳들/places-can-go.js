const [nm, ...rest] = require('fs').readFileSync(0).toString().trim().split("\n");
const [n, m]  = nm.trim().split(" ").map(Number);

const matrix = [];
for(let i = 0; i < n; i++) {
    matrix.push(rest[i].trim().split(" ").map(Number))
}

const k = [];
for(let i = n; i < rest.length; i++) {
    k.push(rest[i].trim().split(" ").map(Number))
}
let visited = Array.from({ length: n }, () => Array(n).fill(false));

let queue = [];
function bfs() {
    const dxs = [0, 1, 0, -1], dys = [1, 0, -1, 0];
    
    while(queue.length > 0){
        const [x, y] = queue.shift();
        for(let dir = 0; dir < 4; dir++) {
            const newX = x + dxs[dir], newY = y + dys[dir];
            if(canGo(newX, newY)) {
                visited[newX][newY] = true;
                queue.push([newX, newY])
            }
        }
    }
}

k.forEach(([r,c]) => {
    visited[r - 1][c - 1] = true;
    queue.push([r - 1,c - 1]);
    bfs();
})

let cnt = 0;
for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(visited[i][j]) cnt++;
    }    
}
console.log(cnt)

function canGo(x,y) {
    if(x < 0 ||  y < 0 || x >= n || y >= n || matrix[x][y] === 1 || visited[x][y]) return false;
    return true;
}