//5. Write a program that sorts an array in ascending or descending order.

function sortArray(array,isAscending){
    if(array===0){
        return array;
    }
    for(var i=0;i<array.length - 1;i++){
        for(var j=i + 1; j < array.length;j++){
            if(isAscending){
                if(array[i]  > array[j]){
                    var temp =array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }else{
                if(array[i] < array[j]){
                    var temp =array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
    }
    return array;
}

var array = [30,10,50,40,70,60,90,20,80,100];
var sortedArray = sortArray(array,true);
console.log(sortedArray);



//asccending....increasing..b>a
//desc...decresing..a>b



// 2nd method

function sortArray(array, ascending = true) {
    // Check if the array is empty
    if (array.length === 0) {
      return array;
    }
    // Sort the array in ascending or descending order
    if (ascending) {
      array.sort((a, b) => a - b);
    } else {
      array.sort((a, b) => b - a);
    }
    // Return the sorted array
    return array;
  }
  