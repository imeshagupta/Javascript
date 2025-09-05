let pr = prompt("Enter the value of nth natural  no: ");

if (pr === null) {
  console.log("User cancelled the prompt.");
} else {
  let n = Number(pr);
  if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid number");
  } else {
    for (let i = 2; i <= Math.floor(n / 2); i++) {
      if (n % i === 0) {
        console.log(i);
      }
    }
    console.log(n);
  }
}
