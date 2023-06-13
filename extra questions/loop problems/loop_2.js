//2. Write a program to calculate the sum of numbers from 1 to 100 using a **`while`** loop.

function addNumbers( ){
    let sum= 0;
    let i=1;
    while( i<= 100){
        sum=sum+ i;
        i++;
    } 
    return sum;  
}


 const totalSum= addNumbers();

console.log("The sum of numbers from 1 to 100 is:",totalSum);