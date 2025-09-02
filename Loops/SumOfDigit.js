let pr = prompt("Enter the value of nth natural  no: ");

if (pr === null) {
  console.log("User cancelled the prompt.");
} else {
  let n = Number(pr);
  if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid number");
  } else {
    let sum = 0;
    while (n > 0) {
      let remainder = n % 10;
      sum += remainder;
      n = Math.floor(n / 10);
    }
    console.log(sum);
  }
}
