//Jab i 1 hoga to andar ka console.log print hoga aur fir inner loop apni end condition tak chalega
//fir i ki increment condition chalegi i.e. it became i = 2
// Same for i =2,3,4

//Note --> Jab ham kisi iteration ke baad firse loop me jaate hai to andar ki jo bhi values hogi wo restart ho jayegi

for (let i = 1; i <= 4; i++) {
  console.log(i + " execution");

  for (let j = 1; j <= 3; j++) {
    console.log("Hello");
  }
}
