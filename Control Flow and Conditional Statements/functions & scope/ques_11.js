//1. Write a function that calculates the factorial of a number.

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

// Example usage
var num = 5;
var result = factorial(num);
console.log("The factorial of " + num + " is: " + result);
