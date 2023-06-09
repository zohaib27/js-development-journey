//3. Implement a function that reverses the order of the elements in an array.

function reverseArray(array) {
    var reversedArray = [];
    
    for (var i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    
    return reversedArray;
}

// Example usage
var originalArray = [1, 2, 3, 4, 5];
var reversedArray = reverseArray(originalArray);
console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);
