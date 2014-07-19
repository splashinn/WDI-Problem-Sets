// problemSet.js
// WDI Functions problem set
// splashinn

// merge(arr1, arr2)
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


// letterCount(word)
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
