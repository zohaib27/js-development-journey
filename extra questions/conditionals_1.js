
//Conditionals -

//1. Write a program that checks if a given number is positive, negative, or zero.

function checkNumber(number){

if(number>0){
    return "positive";
}else if(number==0){
    return "zero";
}else{
    return "negative";
}

}

console.log(checkNumber(6));
console.log(checkNumber(0));
console.log(checkNumber(-4));