const [nk, ...rest] = require('fs').readFileSync(0).toString().trim().split("\n");

// n: 격자 수, k: 반복할 횟수
const [n, k] = nk.trim(0).split(" ").map(Number);

const matrix = []
for(let i = 0; i < n; i++) {
    matrix.push(rest[i].trim().split(" ").map(Number));
}

// 시작 지점
const [startX, startY] = rest.at(-1).trim().split(" ").map(Number);

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
let x = startX - 1, y = startY - 1;
let curr_v = matrix[x][y];
const visited = Array.from({length: n}, () => Array(n).fill(false));

function canGo(_x, _y, max) {
    if(_x < 0 || _y < 0 || _x >= n || _y >= n 
    || matrix[_x][_y] >= curr_v || matrix[_x][_y] <= max || visited[_x][_y]) { 
        return false;
    }
    return true;
}

if(n === 1 && k >= 1) {
    console.log(startX, startY)
    return;
}

for(let i = 0; i < k; i++) {
    let max = -1, nextX = -1, nextY = -1;
    
    for(const [dx, dy] of directions) {
        const newX = x + dx, newY = y + dy;
        if(canGo(newX, newY, max)) {
            max = matrix[newX][newY];
            nextX = newX;
            nextY = newY;
            visited[newX][newY] = true
        }
    }

    if(nextX === -1 || nextY === -1) {
        break;
    }

    x = nextX, y = nextY;
}

console.log(x, y)


// const visited = Array.from({length: n}, () => Array(n).fill(false));
// visited[x][y] = true;
// queue.push([x, y])

// function bfs(){
//     let moves = 1;
//     while(queue.length > 0) {
//         const [x, y] = queue.shift();

//         for(const [dx, dy] of directions) {
//             const newX = x + dx, newY = y + dy;
//             if(canGo(newX, newY)) {
//                 visited[newX][newY] = true;
//                 queue.push([newX, newY]);
//                 curr_v = matrix[newX][newY]
//                 moves += 1;
//             }
//         }
//     }
//     return [-1, -1]
// }

// const result = bfs();

// matrix.forEach(t => console.log(t))
// console.log(visited)