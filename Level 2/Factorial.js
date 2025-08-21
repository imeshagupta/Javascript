//With recursion
function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

//Without recursion
function factorialIterative(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorialIterative(4));
