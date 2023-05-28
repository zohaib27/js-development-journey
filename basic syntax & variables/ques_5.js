//5. Write a program that calculates the area of a rectangle given its length and width.

// Function to find the area of a rectangle
function findArea(length, width) {
    return length * width;
}

// Input for width and height
var length = 15;
var width = 30;

// Calculate the area
var area = findArea(length, width);

// Output the results
console.log("Area of rectangle: " + area);