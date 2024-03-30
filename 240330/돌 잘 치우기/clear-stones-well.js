const [nkm, ...rest] = require('fs').readFileSync(0).toString().trim().split("\n");
const [n, k, m] = nkm.split(" ").map(Number);
const grid = [], startPoints = [];

// 입력 분류: 격자 정보와 시작점 정보 분리
rest.forEach((row, i) => {
    if (i < n) {
        grid.push(row.split(" ").map(Number));
    } else {
        startPoints.push(row.split(" ").map(Number));
    }
});

// 돌의 위치 찾기
const rocks = grid.reduce((acc, row, i) => {
    row.forEach((cell, j) => {
        if (cell === 1) acc.push([i, j]);
    });
    return acc;
}, []);

let maxCount = 0;

// 조합 생성 및 각 조합에 대해 최대 방문 가능 칸 수 계산
const combinations = getCombinations(rocks, m);
combinations.forEach(combination => {
    const newGrid = grid.map(row => [...row]);
    combination.forEach(([r, c]) => newGrid[r][c] = 0);
    
    const visited = new Set();
    startPoints.forEach(([r, c]) => {
        bfs(r - 1, c - 1, newGrid, visited);
    });
    maxCount = Math.max(maxCount, visited.size);
});

console.log(maxCount);

// BFS 구현
function bfs(x, y, grid, visited) {
    let queue = [[x, y]];
    while (queue.length) {
        const [x, y] = queue.shift();
        const pos = `${x},${y}`;
        if (visited.has(pos)) continue;
        if (!isInRange(x, y) || grid[x][y] !== 0) continue;

        visited.add(pos);

        [[0, 1], [1, 0], [0, -1], [-1, 0]].forEach(([dx, dy]) => {
            queue.push([x + dx, y + dy]);
        });
    }
}

// 격자 범위 확인
function isInRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

// 조합 생성
function getCombinations(arr, selectNumber) {
    if (selectNumber === 1) return arr.map(value => [value]);
    const combinations = [];
    arr.forEach((value, index) => {
        const smallerCombinations = getCombinations(arr.slice(index + 1), selectNumber - 1);
        smallerCombinations.forEach(combination => {
            combinations.push([value, ...combination]);
        });
    });
    return combinations;
}