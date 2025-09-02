let prompt = require("prompt-sync")(); //Import syntax
let n = Number(prompt("Enter a number "));

for (let i = 1; i <= n; i++) {
  let ascii = 65; // ASCII value of 'A'

  for (let j = 1; j <= i; j++) {
    let ch = String.fromCharCode(ascii);
    process.stdout.write(ch + " ");
    ascii++;
  }
  process.stdout.write("\n");
}

//Output
// A
// A B
// A B C
// A B C D
// A B C D E
