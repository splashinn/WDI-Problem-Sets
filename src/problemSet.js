// problemSet.js
// WDI Functions problem set
// splashinn

// merge(arr1, arr2)
// Write a function called merge. The function should take two sorted arrays of numbers as input and return
// a merged array of the sorted numbers from the input.
var list1 = [1, 3, 6, 11, 12, 14, 16, 18, 20];
var list2 = [2, 4, 5, 7, 8, 9, 10, 13, 15, 17, 19];

function merge(arr1, arr2) {
  var result = [], next;

  while (arr1.length && arr2.length) {
    result.push((arr1[0] <= arr2[0]) ? arr1.shift() : arr2.shift());
  }
  return result.concat(arr1).concat(arr2);
}
console.log(merge(list1, list2));


// merge(arr1, arr2) solution 2
var list1 = [3, 6, 11];
var list2 = [2, 4, 5, 8, 9];

function merge(arr1, arr2) {
  var result = [], indexOne = 0, indexTwo = 0;
  while (indexOne < arr1.length && indexTwo < arr2.length) {
   if (arr1[indexOne] <= arr2[indexTwo] ) {
     result.push(arr1[indexOne]);
     indexOne++
    } else {
     result.push(arr2[indexTwo]);
     indexTwo++
    }
  }
  return result.concat(arr1.slice(indexOne)).concat(arr2.slice(indexTwo));
}
console.log(merge(list1, list2));


// letterCount(word)
// Write a function that takes a string that finds out how many times a character occurs.
var word = "Kyle and Tina";

function letterCount(letters) {
  var result = {}

  for(var i = 0; i < letters.length; i++) {

    if (result[letters[i]]) {
      result[letters[i]] += 1;
    } else {
      result[letters[i]] = 1;
    }
  }
  return result;
}
console.log(letterCount(word));


// sillySum(arr)
// Write a function that takes an array of numbers and returns the sum of each number multiplied by its index.
