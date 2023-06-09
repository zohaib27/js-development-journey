//2. Write a program that finds the average of the numbers in an array.

function calculateAverage(numbers) {
    var sum = 0;
    
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    var average = sum / numbers.length;
    return average;
}

// Example usage
var numberArray = [5, 10, 15, 20, 25];
var averageResult = calculateAverage(numberArray);
console.log("The average of the numbers in the array is: " + averageResult);
