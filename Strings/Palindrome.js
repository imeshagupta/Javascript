let prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");

let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
  rev += str.charAt(i);
}
if (rev == str) {
  console.log("palindrome");
} else {
  console.log("no palindrome");
}

//Efficient approach
let isPalindrome = true;
let i = 0;
let j = str.length - 1;
while (i < j) {
  if (str.charAt[i] != str.charAt[j]) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}
if (isPalindrome) {
  console.log("Palindrome");
} else {
  console.log("No Palindrome");
}
