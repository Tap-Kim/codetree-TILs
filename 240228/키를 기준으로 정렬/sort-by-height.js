const fs = require("fs");
let [n, ...data] = fs.readFileSync(0).toString().trim().split("\n");

const persons = data.map(d => d.split(" "))

persons.sort((a,b) => a[1] - b[1])
persons.forEach(person => {
    console.log(person.join(' '))
})