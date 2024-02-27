class Agent {
    constructor(grade = 'A', point = 0) {
        this.grade = grade;
        this.point = point;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let agents = Array(input.length).fill(new Agent());
for (let i = 0; i < input.length; i++) {
    let [grade, point] = input[i].split(" ");
    agents[i] = new Agent(grade, Number(point));
}
const minPoint = Math.min(...agents.map(a => a.point))
const min = agents.findIndex((f) => String(minPoint).indexOf(String(f.point)))

console.log(`${agents[min - 1].grade} ${agents[min - 1].point}`)