//3. Write a program that swaps the values of two variables without using a temporary variable.

function swapVariables(a, b) {
    console.log("Before swapping: a =", a, "b =", b);

    // Swapping values without using a temporary variable
    b = b - a;
    a = a + b;
    b = a - b;

    console.log("After swapping: a =", a, "b =", b);
}

// Example usage
var x = 10;
var y = 20;
swapVariables(x, y);
