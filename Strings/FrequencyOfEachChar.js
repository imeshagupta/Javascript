let prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");

let arr = new Array(128).fill(0);

for (let i = 0; i < str.length; i++) {
  let indx = str.charCodeAt(i);
  arr[indx]++;
}

let visited = new Array(128).fill(false);

for (let i = 0; i < str.length; i++) {
  let indx = str.charCodeAt(i);
  if (!visited[indx]) {
    console.log(str[i] + " appears at " + arr[indx] + " times.");
    visited[indx] = true;
  }
}
