// Arithmetic operators
// Addition, Subtraction, Multiplication, Division
console.log(5 + 5); // 10
console.log(5 - 5); // 0
console.log(5 * 5); // 25
console.log(5 / 5); // 1

// Modulo (%), Exponent (**)
console.log(100 % 3); // remainder of 1
console.log(5 ** 5); // 3125

// Assignment Operators (=, +=, -=, *=, /=)
let num = 26;
console.log(num);
num += 1; // 27
console.log(num);
num -= 1; // 26
console.log(num);
num *= 2; // 52
console.log(num);
num /= 2; // 26
console.log(num);

// Comparison Operators
console.log(50 > 23); // true
console.log(23 < 50); // true
console.log(50 >= 50); // true
console.log(50 <= 51); // true

console.log(50 == '50'); // true, loose equality
console.log(50 === '50'); // false, strict equality

// Logical Operators (&&, ||, !)
console.log(true && false) // false (AND)
console.log(50 > 23 && 50 >= 50) // true

console.log(true || false) // true (OR)
console.log(!false) // true (NOT)

// Unary Operators (++, --)
num++; // +1 num
console.log(num);

num--; // -1 num
console.log(num);

// Ternary Operator (condition ? result : else)
let activeStatus = false
let member = activeStatus ? "Registered" : "Not Registered"
console.log(member);

// typeof operator (typeof())
console.log(typeof(activeStatus))
console.log(typeof(member))

let result = 2 + 3 * 4 // PEMDAS/BODMAS
console.log(result);

// String (Concatenation)
let string = "Hello" + " " + "World!" + " " + result;
console.log(string);

// Logical
let x = 10;
let y = 4;
let logic = x > 5 && y < 10
console.log(logic);

// Assignment
num = 27
num += 10; // 37
console.log(num);
num -= 8; // 29
console.log(num);


// parameters = containers for custom values in a function
function greeting(name) {
    console.log("Hey there " + name + "!")
}

// arguments = custom values sent to the function
greeting("Jared");

