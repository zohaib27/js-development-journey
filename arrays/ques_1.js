// 1. Create an array of numbers and write a program to find the sum of all the elements.

function addSum(arrayNum){
    sum =0;
    for(i =0 ;i< arrayNum.length ;i++){
        sum= sum+ arrayNum[i];
    }
    return sum;
}

arrayNum = [5,10,15,20];
console.log(addSum(arrayNum));