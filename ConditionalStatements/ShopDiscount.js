let amount = Number(prompt("What is the final amount?"));

let dis = 0;

if (amount > 0 && amount <= 5000) {
  dis = 0;
} else if (amount > 5001 && amount <= 7000) {
  dis = 5;
} else if (amount > 7001 && amount <= 9000) {
  dis = 10;
} else if (amount > 9000) {
  dis = 20;
} else {
  console.log("Invalid amount");
}
console.log(amount - Math.floor((amount * dis) / 100));
