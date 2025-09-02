let pr = prompt("Enter the value of nth natural  no: ");

if (pr === null) {
  console.log("User cancelled the prompt.");
} else {
  let n = Number(pr);
  if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid number");
  } else {
    let isPrime = true;
    for (let i = 2; i <= Math.floor(n / 2); i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    console.log(isPrime);
  }
}

//Another approach

function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return true;
  if (num % 2 == 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
    if (num % i == 0) return false;
  }
  return true;
}
console.log(isPrime(29)); // true;
