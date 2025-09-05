a = 12;
console.log(a); //12

//var function -scope hota hai
//that means function ke andar declare kiya to usi function tak limited hoga,lekin block {} ke andar bhi declare karo to wo block ke bahar accessible hota hai
a = 12;
console.log.log(a); //12
var a;

//let block scope hota hai i.e. {} ke andar hi accesible hota hai
let a = 12;
console.log(a); //12

//const bhi block scope hota hai par ham usko re assign nahi kr skte
const a = 12;
console.log(a); //12
