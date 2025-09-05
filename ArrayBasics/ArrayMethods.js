// empty array ka mtlb hai jo dynamic array hai ki iski length defined nhi hai i.e. fixed nhi hai
let arr = [];

//push - array ke end me element add karta hai
console.log(arr.push(1)); // 1
console.log(arr); // [ 1 ]
console.log(arr.push(2));
console.log(arr); // [ 1, 2 ]

//pop - array ke end se element remove karta hai
console.log(arr.pop());
console.log(arr); // [ 1 ]

//accessing elements
// array index 0 se start hota hai
console.log(arr[0]); // 1
console.log(arr[1]); // 2

//if you try to access index which is not present in array then it will return undefined
console.log(arr[7]); // undefined

arr[140] = 100; // it will create empty slots from index 2 to 139
console.log(arr);

// different method to create array
// but it is not fixed also, it is also dynamic array
// we can push elements in it or add just by assigning value to index
let arr_new = new Array(3);

//see ---->
arr_new[0] = 1;
arr_new[1] = 2;
arr_new[2] = 3;
arr_new[3] = 4;
arr_new[8] = 9;
console.log(arr_new);

//Note---->
// for a good practice to assign value to array use index method avoid push method for DSA perspective

//Here see why we dont use push method
let arr2 = new Array(3);
arr2.push(10);
console.log(arr2); // It will push 10 to the end of array i.e. index 2
