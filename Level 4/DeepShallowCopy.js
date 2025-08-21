let obj = { a: 1, b: { c: 2 } };
let shallow = { ...obj };
let deep = JSON.parse(JSON.stringify(obj));
obj.b.c = 5;
console.log(shallow.b.c); // 5
console.log(deep.b.c); // 2
