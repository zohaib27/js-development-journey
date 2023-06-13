//5. Write a program to generate and print the 
//Fibonacci sequence up to a given number using a **`while`** loop.

function fibonacciSequence(limit){
    let sequence=[];
    let a=0;
    let b=1;

    while(a<=limit){
     sequence.push(a);
     let next= a+b;
     a=b;
     b=next;
    }
    return sequence;

}

console.log(fibonacciSequence(5));
console.log(fibonacciSequence(100));
console.log(fibonacciSequence(200));