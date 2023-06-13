//10. Write a program to find the largest and 
// smallest numbers in an array using a **`for`** loop.

function findMinMax(array){
    let min= array[0];
    let max=array[0];
    for(i=0 ;i< array.length ;i++){
        if(array[i]< min) {
            min = array[i];
        }
        if(array[i] > max) {
            max = array[i];
        }
    }
    return [min,max];
}

// let arrayList= [5,8,3,23,9,2];
let arrayList= []; // Do a validation check here
let [smallest,largest] =findMinMax(arrayList);

console.log(`smallest number : `,smallest);
console.log(`largest number : `,largest);