//In JavaScript, String is a group/combination/collection/sequence of characters enclosed within double/single quotes
// It is not an array, it behaves like an array object

//String is an immutable in nature .i.e. apni original state change na krna

//Array is immutable in nature

//See example below
let arr = [10, 20, 30];
arr[1] = 100;
console.log(arr); //[10,100,30]

let str = "education";
str[1] = "z";
console.log(str); //education

//This can be possible ---->
str += " world";
console.log(str); //education world
