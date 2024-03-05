const X_OFFSET = 100, Y_OFFSET = 100;

const [n, ...inputs] = require('fs').readFileSync(0).toString().trim().split("\n")

const arr = Array.from({length: X_OFFSET * 2}).map(() => Array.from({length: Y_OFFSET * 2}).fill(0).map(Number))

for(let i = 0; i < n; i++) {
    const tileColor = i % 2 === 0 ? 'R' : 'B'
    let [x1, y1, x2, y2] = inputs[i].trim().split(" ").map(Number);
    x1 += X_OFFSET; 
    y1 += Y_OFFSET;
    x2 += X_OFFSET; 
    y2 += Y_OFFSET;

    for(let j = Math.abs(x1); j < Math.abs(x2); j++ ){
        for(let k = Math.abs(y1); k < Math.abs(y2); k++ ){
            arr[j][k] = tileColor;
        }    
    }
}

const result = arr.flat().filter(a => a === 'B').length
console.log(result)