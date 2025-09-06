//Property 1
let s = "education";
console.log(s.length); //9

//Method 1
//slice(start,end) -  It includes start index excluding end index
console.log(s.slice(1, 5)); //Output - duca
console.log(s.slice(-3, s.length)); //Output - ion

//Method 2
//substring(start,end) - similar to slice() but no negative indexes
console.log(s.substring(1, 5)); //duca
console.log(s, substring(2)); //ucation

//Method 3
//toUpperCase() - converts to uppercase

//Method 4
//toLowerCase() - converts to Lowercase

//Method 5
//concat() - concatenates strings
console.log(s.concat(" world"));
//It can add many parameters
console.log(s.concat(" ", "hello", " ", "world"));

//Method 6
//trim() - removes spaces from both sides
let r = "               andcjfns      ";
console.log(r.trim()); //andcjfns

//Method 7
//indexOf(substring) - Removes first index of substring

//Method 8
//lastIndexOf(substring) - returns last index of substring

//Method 9
//includes(substring) - checks if substring exists

//Method 10
//startsWith(substring) - checks if string starts with substring

//Method 11
//endsWith(substring) - checks if string ends with substring

//Method 12
//replace(old,new) - Replaces first occurrence of substring

//Method 13
//replaceAll(old,new) - Replaces all occurrences

//Method 14
//split(separator) - splits string into an array

//Method 15
//charAt(index) - Returns character at index
console.log(s.charAt(2)); //u

//Method 16
//charCodeAt(index) - returns unicode value of character
console.log(s.charCodeAt(0)); //101 because ASCII value of e is 101

//Method 17
//String.fromCharCode - converts ASCII code value to String character
console.log(String.fromCharCode(s.charCodeAt(2)));
