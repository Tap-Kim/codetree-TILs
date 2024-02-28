const fs = require("fs");
let [n, ...data] = fs.readFileSync(0).toString().trim().split("\n");

const students = []
for(let i = 0; i < n; i++) {
    const [height, weight] = data[i].trim().split(" ")
    students.push({height: Number(height), weight: Number(weight), num: i + 1})
}

function comp(a,b) {
    if((a.height === b.height) && (a.weight === b.weight)) {
        return a.num - b.num;
    }
    if((a.height === b.height)) {
        return b.weight - a.weight;
    }

    return b.height - a.height;
}

students.sort(comp)

for(let s of students){
    console.log(`${s.height} ${s.weight} ${s.num}`)
}