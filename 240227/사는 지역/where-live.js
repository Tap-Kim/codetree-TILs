class Person {
    constructor(name, addr, loc) {
        this.name = name;
        this.addr = addr;
        this.loc = loc;
    }
}

const fs = require("fs");
let [a, ...persons] = fs.readFileSync(0).toString().trim().split("\n");

let results = Array(persons.length).fill(new Person)
for(let i = 0; i < persons.length; i++){
    const [name, addr, loc] = persons[i].trim().split(" ")
    results[i] = new Person(name, addr, loc)
}

const p = results.sort((a,b) => a.name > b.name ? -1 : 1)[0]
console.log(`name ${p.name}`)
console.log(`addr ${p.addr}`)
console.log(`city ${p.loc}`)