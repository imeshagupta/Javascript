let age = Number(prompt("Enter your age: "));

if (isNaN(age)) {
  console.log("Wrong input");
} else if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
