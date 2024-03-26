// Variables
let myName = "Jared";
var myHobby = "Coding";
const myAge = 23;

console.log(myName, myHobby);

myName = "Princess";
myHobby = "Eating";
console.log(myName, myHobby);

// Data types
// Dynamic Typing

// Data types
// Dynamic Typing
// Number
let number = 13;
number = 13.37;
number = -13.37;
console.log("Number: ", number);
// String
let hello = "Hello, World!";
hello = 'Hello, World!';
console.log("String: ", hello);
// Boolean
let status = true;
status = false;
console.log("Boolean: ", status);
// Undefined
let nothing;
console.log("Undefined: ", nothing);
// Null
let nullVar = null;
console.log("Null: ", nullVar);

// Reference
// Object
let numberObject = {
    num1: 5,
    num2: 3.14
}
console.log("Object: ", numberObject);
console.log("Value of num1 in the object: ", numberObject.num1);

// Array
// Arrays will start at 0 not 1
// index = distance from the starting value of the array
let stringArray = ["Hello", "JavaScript"]
console.log(stringArray);
console.log(stringArray[0]);


// Function
/*
    function functionName (parameters) {
        // code goes here
    }
*/
function sayHello() {
    console.log("Hello from JavaScript!");
}
sayHello();

// Current Date
console.log(Date())

// New Date
let date = new Date("2022-03-25")
console.log(date)