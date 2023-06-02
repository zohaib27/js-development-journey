//3. Write a program that finds the maximum and minimum values in an array using functions.

function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }

    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

function findMin(arr) {
    if (arr.length === 0) {
        return null;
    }

    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

// Example usage
var numbers = [5, 2, 9, 1, 7];
var maxNumber = findMax(numbers);
var minNumber = findMin(numbers);

console.log("Maximum value:", maxNumber); // 9
console.log("Minimum value:", minNumber); // 1
