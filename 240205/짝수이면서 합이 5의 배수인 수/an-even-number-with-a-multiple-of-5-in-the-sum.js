const fs = require("fs"); 
let n = Number(fs.readFileSync(0).toString().trim()); 

function getYesOrNo(){
    const condition = String(n).split('').reduce((acc,cur) => acc + Number(cur),0) % 5 === 0
    if(n % 2 === 0 && condition){
        return 'Yes';
    }
    return 'No';
}

console.log(getYesOrNo());