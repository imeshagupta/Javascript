let a = 1;
let b = 2;
let temp;
temp = a; // c= 1, a=1, b=2
a = b; // c=1, a=2, b=2
b = temp; // c=1, a=2, b=1
console.log("a =", a);
console.log("b =", b);
