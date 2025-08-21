function isPalindrome(str) {
  let newStr = str.toLowerCase();
  let reversed = newStr.split("").join("");
  return newStr === reversed;
}
console.log(isPalindrome("Madam"));
