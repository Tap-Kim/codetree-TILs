class Student {
    constructor(name, kor, eng, math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

const fs = require("fs");
let [n, ...data] = fs.readFileSync(0).toString().trim().split("\n");

const list = []
for(let d of data) {
    const [name, k, e, m] =  d.trim().split(" ");
    list.push(new Student(name, k, e, m))
}

list.sort((a,b) => (b.kor - a.kor) || (b.eng - a.eng) || (b.math - a.math))
list.forEach(s => {
    console.log(`${s.name} ${s.kor} ${s.eng} ${s.math}`)
})