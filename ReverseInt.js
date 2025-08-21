function reverseInt(num) {
  let rev = 0,
    n = Math.abs(num);
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return num < 0 ? -rev : rev;
}
