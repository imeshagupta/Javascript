let prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");
let toggle = "";
for (let i = 0; i < str.length - 1; i++) {
  let ch = str.charCodeAt(i);
  if (ch >= 65 && ch <= 90) {
    toggle += String.fromCharCode(ch + 32);
  } else if (ch >= 97 && ch <= 122) {
    toggle += String.fromCharCode(ch - 32);
  }
}
console.log(toggle);
