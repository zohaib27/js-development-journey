//5. Write a program that sorts an array in ascending or descending order.

function sortArray(array, order) {
    if (order === 'ascending') {
        return array.sort(function(a, b) {
            return a - b;
        });
    } else if (order === 'descending') {
        return array.sort(function(a, b) {
            return b - a;
        });
    } else {
        console.log("Invalid order specified.");
        return array;
    }
}

// Example usage
var originalArray = [5, 2, 8, 1, 9];
var ascendingArray = sortArray(originalArray, 'ascending');
console.log("Original Array:", originalArray);
console.log("Array Sorted in Ascending Order:", ascendingArray);

var descendingArray = sortArray(originalArray, 'descending');
console.log("Original Array:", originalArray);
console.log("Array Sorted in Descending Order:", descendingArray);






