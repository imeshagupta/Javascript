let pr = prompt("Enter the value of nth natural  no: ");

if (pr === null) {
  console.log("User cancelled the prompt.");
} else {
  if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid number");
  } else {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    console.log(sum);
  }
}
