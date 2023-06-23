//3. Implement a function that reverses the order of the elements in an array.

function reverseArray(array){
   var reversedArr = [];
   for( var i=array.length - 1; i>=0 ; i--){
    reversedArr.push(array[i]);
   }
   return reversedArr;
}

array = [4,7,9,25,30];
console.log(reverseArray(array));