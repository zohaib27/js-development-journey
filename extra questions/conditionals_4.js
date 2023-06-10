//4. Write a program that determines if a given string is a palindrome.


function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = alphanumericStr.split('').reverse().join('');
    
    // Compare the original and reversed strings
    return alphanumericStr === reversedStr;
  }
  
  // Example usage
  const inputString = "Madam Arora teaches malayalam";
  const isPalindromic = isPalindrome(inputString);
  console.log(`Is the string a palindrome? ${isPalindromic}`);
  
    
