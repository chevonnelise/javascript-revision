let startingNo= prompt("Please enter the starting number of the range: ");
let endingNo = prompt("Please enter the ending number of the range: ");

// validation
while (startingNo === "" || isNaN(startingNo) || endingNo === "" || isNaN(endingNo)) {
    startingNo = prompt("Invalid input! Please enter a valid starting score of the range: ");
    endingNo = prompt("Invalid input! Please enter a valid ending score of the range: ");
}

// Parse input strings to numbers
startingNo = parseInt(startingNo);
endingNo = parseInt(endingNo);

// Loop to print all numbers within the range
while (startingNo <= endingNo) {
    console.log(startingNo);
    startingNo++; 
}