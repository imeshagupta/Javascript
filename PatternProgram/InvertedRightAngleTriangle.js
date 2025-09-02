let prompt = require("prompt-sync")(); //Import syntax
let n = Number(prompt("Enter a number "));

for (let i = n; i >= 1; i--) {
  for (let j = i; j >= 1; j--) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}

//Alternate Solution
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}

//Alternate Solution 2
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}
