//6. Write a program that determines the largest among three numbers.

function findLargestNumber(x,y,z){
    var largest = x ;

    if(y > largest){
        largest = y;
    }else{
        largest = z;
    }
    return largest;
}

console.log(findLargestNumber(15,10,12));

console.log(findLargestNumber(65,100,32));
console.log(findLargestNumber(45,10,82));
console.log(findLargestNumber(19,10,12));