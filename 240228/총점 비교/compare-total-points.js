class Student {
    constructor(name, a, b, c) {
        this.name = name;
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

const fs = require("fs");
let [n, ...data] = fs.readFileSync(0).toString().trim().split("\n");

const students = []
for(let d of data) {
    const s = d.trim().split(' ')
    students.push(new Student(s[0],Number(s[1]),Number(s[2]),Number(s[3])))
}

students.sort((a,b) => (a.a + a.b + a.c) - (b.a + b.b + b.c))
students.forEach(s => {
    console.log(`${s.name} ${s.a} ${s.b} ${s.c}`)
})