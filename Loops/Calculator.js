/*
1 -> addition
2 -> subtraction
3 -> multiplication
4 -> division
5 -> modulus
6 -> exit
Kuch or press krne pr invalid input
jab operation hojaye to question aaye do you want to continue y/n
*/

let choice;

while (true) {
  choice = prompt(
    "Enter 1 for addition\n" +
      "Enter 2 for subtraction\n" +
      "Enter 3 for multiplication\n" +
      "Enter 4 for division\n" +
      "Enter 5 for modulus\n" +
      "Enter 6 for exit"
  );

  if (choice === null || choice === "6") {
    console.log("Exiting calculator...");
    break;
  }

  let num1 = Number(prompt("Enter first number:"));
  let num2 = Number(prompt("Enter second number:"));

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid number input.");
    continue;
  }

  let result;
  switch (choice) {
    case "1":
      result = num1 + num2;
      break;
    case "2":
      result = num1 - num2;
      break;
    case "3":
      result = num1 * num2;
      break;
    case "4":
      result = num1 / num2;
      break;
    case "5":
      result = num1 % num2;
      break;
    default:
      console.log("Invalid input.");
      continue;
  }

  console.log("Result:", result);

  let cont = prompt("Do you want to continue? (y/n)");
  if (cont === null || cont.toLowerCase() === "n") {
    console.log("Calculator closed.");
    break;
  }
}
