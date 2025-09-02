//Installing package - prompt-sync  bcoz normal prompt terminal me nahi chlta
//Install command - npm install prompt-sync

let prompt = require("prompt-sync")(); //Import syntax
let a = prompt("Enter a number ");
process.stdout.write(a);
