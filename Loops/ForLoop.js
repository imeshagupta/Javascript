//agar hame number of iterations pata hai to for loop use karo

for (let i = 0; i <= 10; ) {
  console.log(i);
}
// valid program but goes infinite loop

for (let i = 0; ; ) {
  console.log(i);
}
// valid program but goes infinite loop

for (;;) {
  console.log("infinite loop");
}
// valid program but goes infinite loop

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (var i = 1; i < 10; i++) {
  console.log(i);
}
console.log(i);
//phle 1 to 9 tk jayega loop aur bahar wla console 10 print karega kyuki var function scope hota hai

for (let j = 1; j < 10; j++) {
  console.log(j);
}
console.log(j);
//phle 1 to 9 tk jayega loop aur bahar wla console print karega - kyuki let block scope hota hai
//Uncaught ReferenceError: j is not defined
