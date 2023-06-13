//7. Write a program that checks if a given number is even or odd.

function isEvenOdd(number){
    if(number % 2== 0){
        return "even number"
    }else{
        return "odd number"
    }
}

console.log(isEvenOdd(10));
console.log(isEvenOdd(3));
console.log(isEvenOdd(78));
console.log(isEvenOdd(5));