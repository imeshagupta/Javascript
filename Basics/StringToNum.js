let age = Number(prompt("Enter your age:"));
console.log(age);

//Another way
//Syntax of parseInt

//parseInt(string, radix)
//where string -> jo value convert karta hai
//base ya number system like 2 for binary number, 10 for decimal number, 16 for hexadecimal number

//Example -->
let a = parseInt("101", 10);
console.log(a); //101

let b = parseInt("101", 2);
console.log(b); //5

let c = parseInt("1f", 16);
console.log(c); //31
