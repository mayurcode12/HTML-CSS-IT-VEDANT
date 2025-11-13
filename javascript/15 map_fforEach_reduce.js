console.log("==== map method ====");
let arr = [1, 34, 6, 7, 9];
function multiplywithTwo(e) {
  return e * 2;
}

var multy = arr.map(multiplywithTwo);
console.log(multy);

console.log("===forEach method===");

var arr2 = [1, 2, 3, 4, 5, 67];

var forEachMethod = arr2.forEach((e) => console.log(e));
console.log(forEachMethod);
console.log("Original array", arr2);

console.log("=== filter method");

var arr3 = [1, 2, 3, 4, 5];
function evenNumbers(e) {
  return e % 2 == 0;
}

var usingFilter = arr3.filter(evenNumbers);
console.log(usingFilter);

// factorial of number

num = 6;
arr2 = [];
