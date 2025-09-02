let prompt = require("prompt-sync")(); //Import syntax
let n = Number(prompt("Enter a number "));

for (let i = 1; i <= n; i++) {
  //spaces
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}
