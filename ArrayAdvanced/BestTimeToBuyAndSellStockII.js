let prices = [7, 1, 5, 3, 6, 4];
let total = 0;
for (let i = 0; i < prices.length; i++) {
  if (prices[i + 1] > prices[i]) {
    total += prices[i + 1] - prices[i];
  }
}

console.log(total);
