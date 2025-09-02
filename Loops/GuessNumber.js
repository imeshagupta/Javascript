let random = Math.floor(Math.random() * 100 + 1);

let guess = 0;
let attempt = 0;

while (guess !== random) {
  guess = Number(prompt("Guess a number between 1 and 100:"));
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Try again between 1 and 100");
    continue;
  }
  attempt++;

  if (guess > random) {
    console.log("Too high!");
  } else if (guess < random) {
    console.log("Too low!");
  } else {
    console.log("Congrats! You guessed it! " + guess);
    console.log("Attempts: " + attempt);
  }
}
