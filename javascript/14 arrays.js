// push method
let fruits = ["apple", "Orange", "Banana", "Mango"];
fruits.push("Grapes");
console.log(fruits[0]);

// pop method

fruits.pop("Grapes");

console.log(fruits);

console.log("=====unshift=====");
let fruit_unshift = ["banana", "oranoge"];
fruit_unshift.unshift("apple", "grape");
console.log(fruit_unshift);

console.log("==== shift() ====");
let fruit_shift = ["apple", "banan", "orange"];
fruit_shift.shift();
console.log(fruit_shift);

console.log("==== length property");
let lengthFruit = ["apple", "banana", "grapes"];
console.log(lengthFruit.length);

console.log("===== indexOf proprty");

let fruits2 = ["orange", "banana", "grapes", "papaya"];
let x = fruits2.indexOf("orange");
y = fruits.indexOf("banana");
console.log(x);
console.log(y);

console.log("====concat method=====");
var arr1 = [1, 3, 4, 67];
var arr2 = [5, 78, 2];
var arr3 = arr1.concat(arr2);
console.log(arr3);

console.log("====slice method ====");
console.log(arr1.slice(1, 3));

console.log("====splice=====");
var arr4 = [1, 3, 4, 5, 6, 7, 8];
console.log(arr4.splice(2, 1, 20));
