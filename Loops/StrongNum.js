// A strong number is a special number whose sum of the factorial of digits is equal to the original number.

//For example, 145 is a strong number because 1! + 4! + 5! = 145.

let pr = prompt("Enter the value of nth natural  no: ");

if (pr === null) {
  console.log("User cancelled the prompt.");
} else {
  let n = Number(pr);
  if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid number");
  } else {
    let sum = 0;
    let copy = n;
    while (n > 0) {
      let rem = n % 10;
      let fact = 1;

      for (let i = 1; i <= rem; i++) {
        fact *= i;
      }
      sum += fact;
      n = Math.floor(n / 10);
    }
    if (sum === copy) {
      console.log(`${copy} is a Strong Number`);
    } else {
      console.log(`${copy} is not a Strong Number`);
    }
  }
}
