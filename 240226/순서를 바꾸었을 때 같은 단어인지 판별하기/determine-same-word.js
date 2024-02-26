const fs = require('fs')
const [A, B] = fs.readFileSync(0).toString().trim().split("\n");

const sortedA = A.split('').sort().join('')
const sortedB = B.split('').sort().join('')
const result = sortedA === sortedB ? 'Yes' : 'No'
console.log(result)