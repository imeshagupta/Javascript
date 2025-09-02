//Jab aisa scenario ho jaha hame kaha tak jana hai uska pata na ho to while use karo

//while ka mtlb hai "jab tak"

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let a = prompt("Kuch bhi dedo('exit for close')");
while (a !== "exit") {
  a = prompt("Kuch bhi dedo('exit for close')");
  console.log(a);
}
