// 2. Write a program that finds the average of the numbers in an array.

function averageOfArray(array){
    sum = 0;
    for(i=0 ;i<array.length; i++){
        sum=sum+array[i];
    }
    average= sum/array.length;
    return average;   
}

array =[5,10,20,30,15];
console.log(averageOfArray(array));