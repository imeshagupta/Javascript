let day = 2;

//First Example

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid");
}

//Second Example
switch (day) {
  case 1:
  case 2:
  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid");
}

//Third Example
switch (true) {
  case 19 < 6:
    console.log("hello");
    break;

  case 10 > 9:
    console.log("hey");
    break;
  default:
    console.log("Invalid");
}

//Fourth Example
let num = 0.1 + 0.2;
num = parseFloat(num.toFixed(1));
//OR
//num = Math.round(num*10)/10;
switch (num) {
  case 0.3:
    console.log("Hello");
    break;
  case 0.4:
    console.log("Hey");
    break;
  default:
    console.log("Invalid");
}
