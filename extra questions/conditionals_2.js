//2. Write a program that determines if a given year is a leap year.

function isLeapYear(year){
    if((year % 4==0 && year% 100 !==0)||year%400==0){
        return "This year is leap year";

    }else{
        return "This year is not leap year";
    }
}
console.log(isLeapYear(2000));
console.log(isLeapYear(2010));
console.log(isLeapYear(2005));
console.log(isLeapYear(2020));