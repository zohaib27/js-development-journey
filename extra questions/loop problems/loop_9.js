//9. Write a program to calculate the average of 
// a list of numbers using a **`while`** loop.

function calculateAverage(numbers){
    let sum = 0;
    let count =0 ;

    // calculate sum of numbers

    let i = 0;
    while(i < numbers.length){
        sum = sum + numbers[i];
        count++;
        i++;
    }
    
//calculate average
const average = sum / count;
return average;
}

const numberList= [6,8,9,5,15,7];
const avg= calculateAverage(numberList);
console.log(`the average is: ${avg}`);