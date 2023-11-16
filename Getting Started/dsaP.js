
                    // MANACHER's Algorithm 

function longestPalindromicSubstring(str) {
    // Preprocess the input string to handle even-length palindromes
    const preprocessedStr = "#$" + str.split("").join("#") + "#";
  
    const n = preprocessedStr.length;
    const P = Array(n).fill(0); // P[i] will store the radius of the palindrome centered at i
    let center = 0; // Center of the palindrome with the rightmost right boundary
    let rightBoundary = 0; // Right boundary of the palindrome centered at center
    let maxRadius = 0; // Length of the longest palindromic substring found
    let maxCenter = 0; // Center of the longest palindromic substring found
  
    for (let i = 1; i < n - 1; i++) {
      // Calculate the mirror index of i with respect to the center
      const mirror = 2 * center - i;
  
      // If i is within the right boundary of the current palindrome, use mirror's value
      if (i < rightBoundary) {
        P[i] = Math.min(rightBoundary - i, P[mirror]);
      }
  
      // Attempt to expand the palindrome centered at i
      let left = i - (1 + P[i]);
      let right = i + (1 + P[i]);
  
      while (preprocessedStr[left] === preprocessedStr[right]) {
        P[i]++;
        left--;
        right++;
      }
  
      // Update right boundary and center if palindrome centered at i expands past the current right boundary
      if (i + P[i] > rightBoundary) {
        center = i;
        rightBoundary = i + P[i];
  
        if (P[i] > maxRadius) {
          maxRadius = P[i];
          maxCenter = i;
        }
      }
    }
  
    // Extract the longest palindromic substring from the preprocessed string
    const longestPalindrome = preprocessedStr.slice(maxCenter - maxRadius, maxCenter + maxRadius + 1).split("#").join("");
  
    return longestPalindrome;
  }