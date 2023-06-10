//10. Write a program that determines the eligibility for voting based on a given age (e.g., 18 or above).

function eligiblityVoting(age){
    if(age >= 18){
        return "you are eligible to vote";
    }else{
        return "you are not eligible to vote";
    }
}

console.log(eligiblityVoting(28));
console.log(eligiblityVoting(16));
console.log(eligiblityVoting(18));