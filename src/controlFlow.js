// reverse.js
// Write a program that will take a hardcoded string and return a reversed version of it. Use a for loop.
function reverse(str) {
  return str.split("").reverse().join("");
}
reverse("building");

// filterLongestWord.js
// Pushes longest word into an array.
function LongestWord(sen) {
    var sentence = sen.split(" ")
                    .sort(function(a, b) {
                        return b.replace(/[^a-zA-Z]/g, "").length - a.replace(/[^a-zA-Z]/g, "").length;
    });
    return sentence.shift();
}

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

// grade.js w/ switch statement
switch (true) {
  case score == 100: alert("Perfect score!"); break;
  case score >= 90:  alert("You got an A");   break;
  case score >= 80:  alert("You got a B");    break;
  case score >= 70:  alert("You got a C");    break;
  case score >= 60:  alert("You got a D");    break;
  default:           alert("Failure.");       break;
}

// pluralizer.js
// Take an input like var thing = "cat", var count = "5", and output the pluralized form of the word; "5 cats".


// tempConvert.js
// Convert a temperature from F to C.
// Output should state NN degrees fahrenheit or NN degrees celsius
function tempConvert(degree) {
  var celsius = degree * 9/5 + 32;
  return (degree + " degrees fahrenheit is equal to " + celsius + " degrees celsius.");
}
