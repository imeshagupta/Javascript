let prices = [7, 1, 5, 3, 6, 4];
let maxProfit = 0;
let min = prices[0];
for (let i = 0; i < prices.length; i++) {
  if (prices[i] < min) {
    min = prices[i];
  }
  maxProfit = Math.max(maxProfit, arr[i] - min);
}

console.log(maxProfit);
