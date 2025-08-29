function isPalindrome(str) {
  let newStr = str.toLowerCase();
  let reversed = newStr.split("").reverse().join("");
  return newStr === reversed;
}

console.log(isPalindrome("Madam"));
