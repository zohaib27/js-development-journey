//8. Write a program to print the multiplication table of a given number using a **`for`** loop.

function multiplicationTable(number){
    
    for(i=1 ;i<=10 ; i++){
        var result = number * i ;
        console.log(`${number} x ${i} = ${result}`);
}
} 
multiplicationTable(4);

multiplicationTable(7);