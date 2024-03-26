// Implicit - JS converts for you
/* 
    Guide: https://betterprogramming.pub/implicit-and-explicit-coercion-in-javascript-b23d0cb1a750
*/
console.log(12 + "") // 12 converted to a string
console.log("15" * 2) // 30
console.log(undefined + 6) // NaN
console.log(true + true) // JS converts true to 1, and false to 0 = 2
// Explicit - You want to convert it yourself
let number = Number("23");
console.log(number, typeof(number));

number = Boolean(number);
console.log(number, typeof(number)); // true since it's not 0

number = String(number);
console.log(number, typeof(number)); // true

let floatingNumber = Number("2.17");
console.log(floatingNumber, typeof(floatingNumber)); // 2.17

// functions
function sum(x, y) {
    return x + y;
}
console.log(sum(9, 10));