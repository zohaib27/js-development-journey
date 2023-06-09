//1. Create an array of numbers and write a program to find the sum of all the elements.

function calculateSum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Example usage
var numbers = [5, 10, 15, 20, 25];
var sum = calculateSum(numbers);

console.log("The sum of the numbers is:", sum);
