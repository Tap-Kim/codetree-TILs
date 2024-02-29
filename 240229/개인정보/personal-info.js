class Person {
    constructor(n, h, w) {
        this.n = n;
        this.h = h;
        this.w = w;
    }
}

const fs = require("fs");
let inputs = fs.readFileSync(0).toString().trim().split("\n");

const persons = []
for(const p of inputs) {
    const person = p.trim().split(" ")
    persons.push(new Person(person[0], Number(person[1]), Number(person[2])))
}

persons.sort((a,b) => b.n > a.n ? -1 : 1)
console.log('name')
for(const p of persons) {
    console.log(`${p.n} ${p.h} ${p.w}`)
}

console.log()
persons.sort((a,b) => b.h - a.h)
console.log('height')
for(const p of persons) {
    console.log(`${p.n} ${p.h} ${p.w}`)
}