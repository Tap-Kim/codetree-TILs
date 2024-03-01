const fs = require("fs");
let [n, ...data] = fs.readFileSync(0).toString().trim().split("\n");


const sorted = []
for(let i = 0; i < n; i++) {
    const [h, w] = data[i].trim().split(" ");
    sorted.push(({ h: Number(h), w: Number(w), index: i}));
}

sorted.sort((a, b) => a.h - b.h || b.w - a.w )

for (let i = 0; i < n; i++) {
    console.log(`${sorted[i].h} ${sorted[i].w} ${sorted[i].index + 1}`)
}