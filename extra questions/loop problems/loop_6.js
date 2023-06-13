//6. Write a program to check if a number is prime or not using a **`for`** loop.

function isPrimeNumber(number){
    if(number <= 1){
        return false;
    }
        for(i=2 ;i< number ;i++){
        if(number % i == 0){
            return false;
        }
        }
        return true;
    }

    console.log(isPrimeNumber(7));
    console.log(isPrimeNumber(5));
    console.log(isPrimeNumber(8));