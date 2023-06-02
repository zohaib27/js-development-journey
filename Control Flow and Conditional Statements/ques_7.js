//2. Create a simple calculator program that performs addition, subtraction, multiplication, or division based on user input.

var cnt = 0;

function prompt(s) {
    // console.log("Before If cnt->", cnt);
    if(cnt == 0) {
        cnt++;
        // console.log("1st If cnt->", cnt);
        return 100;
    }
    else if(cnt == 1) {
        cnt++;
        // console.log("2nd If cnt->", cnt);
        return 5;
    }
    // console.log("Last cnt->", cnt);
    return "/";
}

function calculator() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var operator = prompt("Enter the operator (+, -, *, /):");

    var result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Invalid input. Please enter valid numbers.";
    } else {
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Division by zero is not allowed.";
                }
                break;
            default:
                result = "Invalid operator. Please enter a valid operator (+, -, *, /).";
        }
    }

    console.log("Result:", result);
}


// Example usage
calculator();

// console.log(cnt)
// console.log(prompt("1st time"))
// console.log(cnt)
// console.log(prompt("2nd Time"))
// console.log(prompt("3rd Time"))

/**
 * cnt = 0, 1
 * Output
 * 0
 * Before If cnt->0
 * 1st If cnt->1
 * 2
 * 1
 */




// Function declaration / definition
// function sayHello() {
//   console.log("Hello!");  
// }

// Function call/execution
// sayHello();
// var x = "";
// if(x == 2) {
//     console.log("True");
// }