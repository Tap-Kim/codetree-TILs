const [inputs, ...datas] = require('fs').readFileSync(0).toString().trim().split("\n");
const [VERTICES_NUM, EDGES_NUM] = inputs.trim().split(" ").map(Number);
const edgeList = datas.map(d => d.split(" ").map(Number));

let graph = Array.from({length: VERTICES_NUM + 1}, () => []);
edgeList.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
});

const visited = Array(VERTICES_NUM + 1).fill(false);

function dfs(vertex) {
    visited[vertex] = true;
    graph[vertex].forEach((next) => {
        if(!visited[next]) {
            dfs(next)
        }
    })
}

dfs(1);

const cnt = visited.filter((v, i) => v && i !== 1).length;

console.log(cnt)