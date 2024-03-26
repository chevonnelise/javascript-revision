// conditional statements

// if
let number = 26;
if (number > 23) {
    console.log("You're less than 23!");
}

// if / else if / else
if (number > 25) {
    console.log("You're greater than 25!");
} else if (number < 25) {
    console.log("You're less than 25!");
} else {
    console.log("You're equal to 25!");
}


// switch
let day = 'St. Patricks Day'

// if you have a single variable with multiple exact value checks, switch is a good choice for readability.
// But if your conditions involve complex logic, multiple variables, or comparisons beyond strict equality, use if statements for more flexibility.
// switch will decide the starting point of your code running based on if a value is equal or not to a case
switch (day) {
    case 'Monday': // if its equal to this
        console.log("It's the start of the week!");
        break;
    case 'Friday':
        console.log("It's the end of the week!");
        break;
    default:
        console.log("It's a regular day.");
        break;
}

/* Loops */
// for loop
// for (assignment; condition; increment) {}
for (let i = 0; i < 5; i++) {
    console.log('Count: ', i); // 0, 1, 2, 3, 4
}
console.log("=============");

// while loop
// while (condition) {}
let count = 0;
while (count < 5) {
    console.log('Count: ', count);
    count++;
}

// simple validation
// let input = prompt("Enter your name: ")
// while (input == "") {
//     input = prompt("No value! Please enter your name: ")
// }

// do while loop (simple validation)
// runs the code first, and checks the condition last
let input = ""
do {
    input = prompt("Please enter your name: ")
} while (input == "")