const fs = require("fs");
let input = fs.readFileSync(0).toString()

const map = new Map()

for(let i = 0; i < input.length; i++) {
    const key = input[i]
    if(map.has(key)) {
        map.set(key, map.get(key) + 1);
    } else {
        map.set(key, 1)
    }
}

console.log(map.size > 1 ? 'Yes' : 'No')