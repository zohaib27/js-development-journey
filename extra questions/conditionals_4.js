//4. Write a program that determines if a given string is a palindrome.


function isPalindromeV2(str) {
    // Remove non-alphaters and convert to lowercase
    const alphanumericStr.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = alphanumericStr
    .split('')
    .reverse()
        .join('');
    
    // Compare the original and reversed strings
    return alphanumericStr === reversedStr;
  }
  
  // Example usage
//   const inputString = "Madam Arora teaches malayalam";
//   const isPalindromic = isPalindrome(inputString);
//   console.log(`Is the string a palindrome? ${isPalindromic}`);
  
    
//  TALAT
//  01234
//  firstChar == Last Char , N/2

// RACECAR
// 0123456
// 1 - 1, 7 -1
// 0, 6
// 1, 5 

function isPalindromeV1(str) {
    for(var  i = 0; i < str.length / 2; i++) {
        var firstChar = str[i]; // 2
        var seondChar =
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        f(firstChar !== seondChar) {
            return "Not Palindrome";
        } 
    }

    return "Palindrom";
}

function reverse(str) {
    var revString = "";
    var arrChar = [];
    
    for(var  i =  str.length - 1; i >= 0; i--) {
        revString = revString + str[i];
        arrChar.push(str[i]);
    }

    console.log(arrChar);

    return revString;
}


function isPalindrome(str) {
    return str == reverse(str);
}



console.log(isPalindrome("talat"))
console.log(reverse("Zohaib"))