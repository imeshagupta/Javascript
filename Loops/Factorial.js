let pr = prompt("Enter the value of nth natural  no: ");

if (pr === null) {
  console.log("User cancelled the prompt.");
} else {
  let n = Number(pr);
  if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid number");
  } else {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    console.log(fact);
  }
}
