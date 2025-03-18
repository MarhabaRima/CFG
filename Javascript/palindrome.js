//Palindrome Substring Coding Challenge 
//Task:
// Palindrome  -  is  a  word,  number,  phrase,  or  other  sequence  of  characters  which  reads  the  same 
// backward as forward, such as ‘madam’ or ‘racecar’. Note that a single character is also a palindrome, 
// for example “a”, “b” etc., as they also read the same backward and forward.  
// Write a function that accepts  a string and returns the  longest  possible palindromic  substring of the string.  
// NB: you can assume that there will be only one longest palindromic substring.  
//-------------------------------------- 
 //Sample Input 
//string = “wrtfawmnoonmz” 
//Sample Output 
//“mnoonm” 
//Hints 
//• Try generating all possible substrings and check their palindrome characteristics. 
//• Remember that a palindrome is a string that is ‘mirrored’ and is symmetrical with respect to 
//its centre (the centre can be a char – odd length or an empty string - even length). Therefore, 
//it is possible to check ‘palindromicity’ of a string by expanding from its centre and checking 
//whether the left and the right sides are mirrored.  


// Function to find the longest palindromic substring
function longestPalindromeSubstring(str) {
    // If the input string is empty, return an empty string
    if (!str || str.length === 0) return "";
    
    let longestPalindrome = ""; // This will store the longest palindromic substring found

    // Function to expand around a potential palindrome center
    function expandAroundCenter(left, right) {
        // Keep expanding as long as the left and right characters match
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;  // Move left pointer to the left
            right++; // Move right pointer to the right
        }
        // Return the palindrome found by slicing the valid part
        return str.slice(left + 1, right);
    }

    // Loop through each character in the string to consider it as a palindrome center
    for (let i = 0; i < str.length; i++) {
        // Expand around the single-character center (odd-length palindromes)
        let oddPalindrome = expandAroundCenter(i, i);
        // Expand around the two-character center (even-length palindromes)
        let evenPalindrome = expandAroundCenter(i, i + 1);
        
        // Check if the found palindrome is longer than the current longest
        if (oddPalindrome.length > longestPalindrome.length) {
            longestPalindrome = oddPalindrome;
        }
        if (evenPalindrome.length > longestPalindrome.length) {
            longestPalindrome = evenPalindrome;
        }
    }
    
    return longestPalindrome; // Return the longest palindromic substring found
}

// Example usage
let string = "wrtfawmnoonmz";
console.log(longestPalindromeSubstring(string)); // Output: "mnoonm"