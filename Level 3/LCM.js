function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
console.log(lcm(12, 18)); // 36

/*
Alternate solution 1

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(lcm(12, 18)); // 36


Alternate solution 2:

function lcm(a, b) {
  let lcm = Math.max(a, b);
  while (true) {
    if (lcm % a === 0 && lcm % b === 0) return lcm;
    lcm++;
  }
}

console.log(lcm(12, 18)); // 36

*/
