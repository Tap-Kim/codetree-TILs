class Agent {
    constructor(grade, point) {
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
const sorted = agents.sort((a,b) => a.point - b.point)
console.log(`${sorted[0].grade} ${sorted[0].point}`)