//8. Write a program that determines the grade based on a given score using the following criteria:
//- 90 or above: A
//- 80-89: B
//- 70-79: C
//- Below 70: F

function grade(score){
    
    if(score >=90){
        return "grade A";
    }else if( score >=80 && score < 90){
        return "grade B";
    }else if(score >=70 && score < 80){
        return "grade C";
    }else{
        return "F";
    }
}

console.log(grade(85));
console.log(grade(80));
console.log(grade(79));
console.log(grade(63));
console.log(grade(56));
console.log(grade(96));
console.log(grade(70));