function capitalizeWords(str) {
  return str
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world")); // "Hello World"

/*
Step 1 – split(" ")

"hello world" → ["hello", "world"]

String is broken into an array of words.

Step 2 – map()

Runs the arrow function on each word w:

For "hello" → w[0].toUpperCase() = "H"
w.slice(1) = "ello"
Combined → "Hello"

For "world" → "W" + "orld" → "World"

Result after map → ["Hello", "World"]

Step 3 – join(" ")

Joins array back into string with spaces → "Hello World"
*/
