const fs = require("fs");
let [_id, _lv] = fs.readFileSync(0).toString().trim().split(" ");

class User {
    constructor(id = 'codetree', lv = 10) {
        this.id = id
        this.lv = lv
    }
}

const user = new User()
console.log(`user ${user.id} lv ${user.lv}`)

user.id = _id
user.lv = _lv
console.log(`user ${user.id} lv ${user.lv}`)