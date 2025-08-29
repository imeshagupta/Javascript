function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
console.log(gcd(48, 18)); // 6

/*
Alternate solution

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(48, 18)); // 6

*/
