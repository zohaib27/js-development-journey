//5. Write a program that determines if a given number is prime or not using a function.

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    // Check for divisibility from 2 to the square root of the number
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Example usage
var num1 = 17;
var num2 = 10;

console.log(num1 + " is prime:", isPrime(num1)); // true
console.log(num2 + " is prime:", isPrime(num2)); // false
