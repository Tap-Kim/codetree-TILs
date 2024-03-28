// * 인접 행렬
// while을 돌면서 queue가 빌 때까지 돈다
// 현재 queue를 앞에서 pop 값을 cur_v 값을 가진다.
// row 만큼 매번 돌며
// graph[curr_v][next_v]의 현재 row의 y행만큼 돌고 visited하지 않을 경우
// visited = true, queue.push(next_v)

// * 인접 리스트
// // * 인접 행렬
// while을 돌면서 queue가 빌 때까지 돈다
// graph[curr_v] -> next_v 만큼 돌고, visited[next_v]를 방문하지 않았으면 위와 동일

// canGo
// x < 0 ||  y < 0 || x > n || y > m || graph[x][y] === 0 || vistied[x][y]

const [nm, ...lists] = require('fs').readFileSync(0).toString().trim().split("\n");
const [n, m]  = nm.trim().split(" ").map(Number);
const matrix = []
for(let i = 0; i < n; i++) {
    matrix.push(lists[i].trim().split(" ").map(Number))
}
let visited = Array.from({ length: n }, () => Array(m).fill(false));

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

visited[0][0] = true;
queue.push([0,0]);
bfs();

console.log(visited[n - 1][m - 1] ? 1 : 0)

function canGo(x,y) {
    if(x < 0 ||  y < 0 || x >= n || y >= m || matrix[x][y] === 0 || visited[x][y]) return false;
    return true;
}