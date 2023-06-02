//3. Write a program that determines if a year is a leap year.

function isLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

// Example usage
var year = 2024;
isLeapYear(year);
