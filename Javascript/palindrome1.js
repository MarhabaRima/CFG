// Palindrome Substring Challenge -- SOLUTION

// Please watch the demo video, which explains how to approach and solve
// this challenge.

// This is one of the multiple possible solutions (there might be many others)

// This one is:
// O(n^3) time | O(n) space


// Helper function to check if a string is a palindrome
function isPalindrome(str) {
    let leftIdx = 0;
    let rightIdx = str.length - 1;

    // Check characters from both ends moving toward the center
    while (leftIdx < rightIdx) {
        if (str[leftIdx] !== str[rightIdx]) {
            return false;
        }
        leftIdx++;
        rightIdx--;
    }
    return true;
}

// Main function to find the longest palindrome substring
function palindromeSubstring(str) {
    let currentLongest = "";

    // Loop through all possible substrings of the input string
    for (let num1 = 0; num1 < str.length; num1++) {
        for (let num2 = num1; num2 < str.length; num2++) {
            let substring = str.slice(num1, num2 + 1);  // Get substring

            // Check if the substring is a palindrome and longer than current longest
            if (substring.length > currentLongest.length && isPalindrome(substring)) {
                currentLongest = substring;
            }
        }
    }
    return currentLongest;
}

// Example usage
let testString = "abaxyzzyxf";
console.log(palindromeSubstring(testString));  // Output: "xyzzyx"

