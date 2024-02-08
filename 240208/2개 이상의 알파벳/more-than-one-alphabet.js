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

for(let cnt of map.values()){
    if(cnt > 1 ) {
        console.log('Yes')
        return;
    }
}
console.log('No');