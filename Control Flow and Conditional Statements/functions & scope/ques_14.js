//4. Create a function that calculates the area of a circle given its radius.

function calculateCircleArea(radius) {
    if (radius <= 0) {
        return "Radius should be a positive number.";
    }

    var area = Math.PI * Math.pow(radius, 2);
    return area;
}

// Example usage
var circleRadius = 5;
var area = calculateCircleArea(circleRadius);

console.log("The area of the circle is:", area);
