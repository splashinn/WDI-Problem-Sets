// reverse.js
// Write a program that will take a hardcoded string and return a reversed version of it. Use a for loop.
function reverse(str) {
  return str.split("").reverse().join("");
};
reverse("building");

// grade.js
// Output the following letter grade from a variable w/ a test score.
// Display A, B, C, D, F for a score that is an integer between 0-100.
function grade(num) {
  var score = num;

  if (score === 100) {
    console.log("You got a perfect score!");
  } else if (score >= 90) {
    console.log("You got an A!");
  } else if (score >= 80) {
    console.log("You got a B!");
  } else if (score >= 70) {
    console.log("You got a C!");
  } else if (score >= 60) {
    console.log("You got a D!");
  } else {
    console.log("You failed.");
  }
}
grade();

// pluralizer.js
// Take an input like var thing = "cat", var count = "5", and output the pluralized form of the word; "5 cats".
