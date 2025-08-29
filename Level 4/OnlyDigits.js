function onlyDigits(str) {
  return /^\d+$/.test(str);
}
console.log(onlyDigits("12345")); // true
console.log(onlyDigits("12a3")); // false
