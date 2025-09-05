let newArr = [];
// i<= newArr.length isliye nhi likha kyuki length 1 to 5 count hoti hai aur index 0 to 4 hota hai aur hamara counter variable 0 se start horha hai
for (let i = 0; i < newArr.length; i++) {
  newArr[i] = Number(prompt("Enter a number: "));
}
console.log(newArr);
