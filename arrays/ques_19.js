//4. Create a program that removes duplicate values from an array.

function removeDuplicates(array) {
    var uniqueArray = [];
    
    for (var i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    
    return uniqueArray;
}

// Example usage
var originalArray = [1, 2, 3, 4, 4, 5, 2, 6, 1];
var newArray = removeDuplicates(originalArray);
console.log("Original Array:", originalArray);
console.log("Array without Duplicates:", newArray);



function removeDuplicates(array){
   var uniqueArray=[ ];
   for(var i=0;i<array.length;i++){
   if(uniqueArray.indexOf(array[i])=== -1) {
    uniqueArray.push(array[i]);
   }
   }
 return uniqueArray;  
}

var originalArray=[3,5,7,6,9,4,3,5,8];
var newArray=removeDuplicates(originalArray);
console.log("originalArray:", originalArray);
console.log("array without duplicates:", newArray);