const fs = require("fs");
const [a, operation ,c] = fs.readFileSync(0).toString().trim().split(" ");

if(['+', '-', '/', '*' ].includes(operation)){
    let result = 0;
    switch(operation){
        case '+': 
            result = a + c;
            break;
        case '-': 
            result = a - c;
            break;
        case '/': 
            result = parseInt(a / c);
            break;
        case '*': 
            result = a * c;
            break;
    }
    console.log(`${a} ${operation} ${c} = ${result}`)
} else {
    console.log(False)
}