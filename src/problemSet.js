// problemSet.js
// WDI Functions problem set
// splashinn

// lists to be sorted
var list1 = [3, 6, 11];
var list2 = [2, 4, 5, 8, 9];

function merge(arr1, arr2) {
  var result = [], next;

  while (arr1.length && arr2.length) {
    result.push((arr1[0] <= arr2[0]) ? arr1.shift() : arr2.shift());
  }
  return result.concat(arr1).concat(arr2);
}
console.log(merge(list1, list2));
