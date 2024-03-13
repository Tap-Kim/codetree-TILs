const dx = [1, 0, -1 ,0], dy = [0, -1, 0, 1];
const [n, ...inputs] = require('fs').readFileSync(0).toString().trim().split('\n');

let nx = 0, ny = 0;
for(let i = 0; i < Number(n); i++) {
    const [dir, _dis] = inputs[i].trim().split(" ");
    const dis = Number(_dis);
    if(dir === 'E') {
        nx = nx + (dx[0] * dis), ny = ny + dy[0];
    } else if(dir === 'S') {
        nx = nx + dx[1], ny = ny + (dy[1] * dis);
    } else if(dir === 'W') {
        nx = nx + (dx[2] * dis), ny = ny + dy[2];
    } else if(dir === 'N') {
        nx = nx + dx[3], ny = ny + (dy[3] * dis);
    }
}

console.log(nx, ny)