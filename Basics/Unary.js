// Unary operators -
// Two types = post and pre
// Pre - ++a, --a (phle change kro fir use kro)
// Post - a++, a-- (phle use kro fir change kro)

let p = 1;
let q = ++a;
console.log(p); //2
console.log(q); //2
let r = p++;
console.log(p); //3
console.log(r); //2

let a = 11,
  b = 22;
let c = a + b + a++ + b++ + ++a + ++b;
console.log(a); //13
console.log(b); //24
console.log(c); //103

let d = true;
d++;
console.log(d); //2

let i = 11;
j = --(i++);
console.log(i); //error