let a = 7;
let b = 3;

console.log(a / b); //2.3333...
console.log(a % b); //1
console.log(a ** b); //343

//floor ek value niche chla jata hai (floor name se pta chlrha hai)
console.log(Math.floor(a / b)); //2
console.log(10.1); //10
console.log(10.9); //10

//ceil ek value upar chla jata hai (ceil name se pta chlrha hai)
console.log(Math.ceil(a / b)); //3
console.log(10.1); //11
console.log(10.9); //11

// round to the nearest integer (5-9 upper round krega aur 1-4 tak lower round karega)
console.log(Math.round(a / b)); //2
console.log(10.5); //11
console.log(10.4); //10

// trunc removes the decimal part
console.log(Math.trunc(a / b)); //2
console.log(10.1); //10
console.log(10.9); //10

console.log(Math.pow(a, b)); //343

console.log(Math.sqrt(49)); //7

//cube root
console.log(Math.cbrt(27)); //3

console.log(Math.max(1, 5, 3, 9, 2)); //9
console.log(Math.min(1, 5, 3, 9, 2));
//1

// absolute value negative values ko positive me convert krta hai
console.log(Math.abs(-7)); //7
console.log(Math.abs(7)); //7
console.log(Math.abs(-3.5)); //3.5
console.log(Math.abs(3.5)); //3.5

//Math.random() 0 to 1 ki values deta hai excluding 0 and 1
console.log(Math.random()); //0.0 to 0.999999...
console.log(Math.random() * 10); //0.0 to 9.999999...
console.log(Math.floor(Math.random() * 100)); //0 to 99
console.log(Math.floor(Math.random() * 10) + 1); //1 to 10
console.log(Math.floor(Math.random() * 10) + 20); //20 to 29

// like kabhi otp bnana ho to usme random or trunc ka use kr skte hai. trunc isliye kyuki decimal htane ke liye
let otp = Math.trunc(Math.random() * 9000 + 1000); //1000 to 10000; always excluding 1000 and 10000
console.log(otp);

//toFixed() method hame jitne decimal chahiye utne de deta hai
let num = 7.56789;
console.log(num.toFixed(3)); //7.568 aur ye string bna deta hai
