// move all zeroes to left and all ones to right

// i aur j dono 0th index pe hain

// i har baar aage badhega par do cases ke sath

// case 1 --> agar 0 hua to j ke sath swap krke aage badhega
//case 2 --> agar 1 hua to bina swap karke aage badhega

//j sirf tab aage badhega jab swapping hogi varna nahi badhega

let arr = [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0];

let i = 0;
let j = 0;

while (i < arr.length) {
  if (arr[i] === 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++; // j sirf swapping me aage badhega
  }
  i++; // i dono cases me aage badhega
}

console.log(arr);
