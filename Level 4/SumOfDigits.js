function sumOfDigits(num) {
  return num
    .toString()
    .split("")
    .reduce((a, b) => a + Number(b), 0);
}
console.log(sumOfDigits(1234));

//Alternate solution
function sumofDigits(num) {
  num = Math.abs(num);
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumofDigits(1234));
console.log(sumofDigits(-567));
