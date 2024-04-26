/*
    1 Create a function that will return the sum 3 numbers
    2 Create a function that will return the difference of the 2 numbers
    3 Create a function that will return the product of the 2 numbers
    4 Create a function that will return the average of the 2 numbers
*/

// Function to return the sum of three numbers
function sumOfThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

// Function to return the difference of two numbers
function differenceOfTwoNumbers(num1, num2) {
    return num1 - num2;
}

// Function to return the product of two numbers
function productOfTwoNumbers(num1, num2) {
    return num1 * num2;
}

// Function to return the average of two numbers
function averageOfTwoNumbers(num1, num2) {
    return (num1 + num2) / 2;
}

const resultSum = sumOfThreeNumbers(1, 2, 3);
console.log("Sum:", resultSum);

const resultDifference = differenceOfTwoNumbers(10, 5);
console.log("Difference:", resultDifference);

const resultProduct = productOfTwoNumbers(4, 5);
console.log("Product:", resultProduct);

const resultAverage = averageOfTwoNumbers(6, 8);
console.log("Average:", resultAverage);