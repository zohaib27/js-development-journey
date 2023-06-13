//4. Write a program to find the factorial of a number using a **`for`** loop.

function factorial(number){
    if(number== 0 || number== 1){
        return 1;
    }else{
        var result=1;
        for(i=2;i<=number;i++){
        result=result * i;
        }
    
    return result;
    }
}

console.log(factorial(7));
console.log(factorial(5));
console.log(factorial(1));
console.log(factorial(9));