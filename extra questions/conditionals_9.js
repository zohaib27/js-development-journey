//9. Write a program that checks if a given string is a valid password based on certain criteria (e.g., minimum length, inclusion of special characters).

function isValidPassword(password){
    var minLength = 8;
    var specialChars = "@#_$&* ";
    if(password.length < minLength){
        return "false";
    }
     var hasSpecialChar = false;
     for(i=0;i<password.length;i++){
        var char=password[i];
        if(specialChars.includes(char)){
            hasSpecialChar=true;
            break;
        }
    }
        if(!hasSpecialChar){
            return false;
        }
     return true;  //if all conditions met
} 

console.log(isValidPassword("samsung"));
console.log(isValidPassword("samsung#"));
console.log(isValidPassword("sam@sung"));
console.log(isValidPassword("javascript"));
console.log(isValidPassword("eat&code"));