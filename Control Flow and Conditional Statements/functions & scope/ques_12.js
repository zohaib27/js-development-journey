//2. Implement a function that checks if a given string is a palindrome.

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Reverse the cleaned string
    var reversedStr = cleanStr.split('').reverse().join('');
  
    // Check if the cleaned string and reversed string are equal
    return cleanStr === reversedStr;
}

// Example usage
var str1 = "racecar";
var str2 = "hello";

console.log(isPalindrome(str1)); // true
console.log(isPalindrome(str2)); // false
