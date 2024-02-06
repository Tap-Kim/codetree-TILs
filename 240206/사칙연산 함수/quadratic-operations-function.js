const fs = require("fs");
let [_a, operation ,_c] = fs.readFileSync(0).toString().trim().split(" ");

if(['+', '-', '/', '*' ].includes(operation)){
    let result = 0;
    const a = parseInt(_a), c = parseInt(_c);
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