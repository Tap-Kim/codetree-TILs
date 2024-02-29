class Person {
    constructor(n, h, w) {
        this.n = n;
        this.h = h;
        this.w = w;
    }
}

const fs = require("fs");
let [n, ...inputs] = fs.readFileSync(0).toString().trim().split("\n");

const persons = []
for(const p of inputs) {
    const person = p.trim().split(" ")
    persons.push(new Person(person[0], person[1], person[2]))
}

function compare(a, b) {
    if(a.h === b.h) return b.w - a.w
    return a.h - b.h
}

persons.sort(compare)
for(const p of persons) {
    console.log(`${p.n} ${p.h} ${p.w}`)
}