
                        // ***********BASIC   DSA  QUESTIONS*****************


// const climbingStairs = (n) => {
//     if(n <= 0){
//         return 0 ;
//     } else if (n ===1){
//         return 1;
//     } else if(n === 2){
//         return 2;
//     }
    
//     let dp = new Array(n+1);

//     dp[1] = 1;
//     dp[2] = 2;

//     for (let i = 3; i<=n; i++ ){
//         dp[i] =  dp[i-1] + dp[i-2];
//     }
//     return dp[n];
// }

// console.log(climbingStairs(10));



// function climbStairs(n) {
//     if (n <= 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else if (n === 2) {
//         return 2;
//     }

//     let step1 = 1; // Number of ways to reach step 1
//     let step2 = 2; // Number of ways to reach step 2
//     let totalWays;

//     for (let i = 3; i <= n; i++) {
//         totalWays = step1 + step2; // Total ways to reach the current step
//         step1 = step2; // Update for the next iteration
//         step2 = totalWays;
//     }

//     return totalWays;
// }

// console.log(climbStairs(10));





// const fibonacci = (n) => { 
//     if (n <= 0) {
//         return [];
//     } else if (n === 1) {
//         return [0];
//     }

//     // let fib = new Array(n + 1);

//     // fib[0] = 0;
//     // fib[1] = 1;

//     let fib = [0 , 1];

//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib;
    
// }
// console.log(fibonacci(10));





// TREASURE  QUEST 

// const treasureQuest =(arr) => {
//    if(arr.length === 0){
//     return 0;
//    }
//    let weight=0 ;
//    arr.forEach(val => {
//     weight += val;
//    })
//    return weight;
// }
// console.log(treasureQuest([1,2,3,4,5]));





// FRUIT FREQUENCY


// const sortFruitsForChef = (fruits) => {
//     // Create an array of objects where each object contains fruit name, frequency, and index
//     const fruitObjects = fruits.map((fruit, index) => ({ name: fruit, frequency: 1, index }));
//     console.log(fruitObjects);

//     // Count the frequency of each fruit
//     const fruitFrequency = {};
//     fruitObjects.forEach(obj => {
//         const { name } = obj;
//         if (fruitFrequency[name]) {
//             fruitFrequency[name]++;
//         } else {
//             fruitFrequency[name] = 1;
//         }
//     });
//     console.log(fruitFrequency);

//     // Update the frequency in the fruit objects
//     fruitObjects.forEach(obj => {
//         const { name } = obj;
//         obj.frequency = fruitFrequency[name];
//     });
//     console.log(fruitObjects);
   

//     // Sort the fruit objects based on frequency (decreasing) and original index (increasing)
//     fruitObjects.sort((a, b) => b.frequency - a.frequency || a.index - b.index);
//     console.log(fruitObjects)

//     // Extract the fruit names from the sorted objects
//     const sortedFruits = fruitObjects.map(obj => obj.name);
//     console.log(sortedFruits)
     
//     return Array.from(new Set(sortedFruits));
   
// };

// const fruits = ["apple", "banana", "cherry", "apple", "banana", "banana", "cherry", "date", "date"];
// const sortedFruits = sortFruitsForChef(fruits);
// console.log(sortedFruits);




        //  2ND way  =>
// const sortedFruitsForChef = (fruits) => {
//     const fruitFrequency1 = new Map();

//     for (fruit of fruits){
//         fruitFrequency1.set(fruit , (fruitFrequency1.get(fruit) || 0) +1);
//     }
//     // console.log(fruitFrequency1);

//   const sortedFruits1 = fruits.slice().sort((a,b) => {
//     if (fruitFrequency1.get(b) !== fruitFrequency1.get(a)){
//         return fruitFrequency1.get(b) - fruitFrequency1.get(a);
//     }else{
//         return fruits.indexOf(b) - fruits.indexOf(a);
//     }
//   });
//  return Array.from(new Set(sortedFruits1));
// };
 

// const fruits = ["apple", "banana", "cherry", "apple", "banana", "banana", "cherry", "date", "date"];
// console.log(sortedFruitsForChef(fruits)); // Corrected Output: ["banana", "cherry", "apple", "date"]





                    //    PASCAL'S  TRIANGLE

//  const generatePascalTrianngle = (n) => {
       
//     let triangle =[];

//     for(let i = 0; i < n; i++){
//         let row = [];

//         for (let j = 0; j <= i; j++){
//             if(j===0 || j===i){
//                 row.push(1);
//             }else{
//                 row.push(triangle[i-1][j-1] + triangle[i-1][j]);
//             }
//         }
//         triangle.push(row);
//     }
//   return triangle;
//  }

//  console.log(generatePascalTrianngle(5));




        //   CONSECUTIVE  ARRAY  MAKING:

// const consecutiveArray = (arr) => {

//     if (arr.length < 1){
//         return -1;
//     }

// arr.sort((a,b) => a-b);
// let count= 0;

// // for(let i = 1 ; i < arr.length; i++){
// //     const diff =  arr[i] - arr[i-1] -1 ;

// for( let i = 0; i < arr.length-1; i++){
//     const diff =  arr[i+1] - arr[i] -1 ;
//   count+= diff;
// }
//  return count;
 
// }

// console.log(consecutiveArray([-5 , 5 , 10]));
// console.log(consecutiveArray([4, 8, 6 ]));



//                     //   EXCEL TO  NUMBER
// const titleToNumber  = (columnTitle) => {
//     const base = 26;
//     let columnNumber = 0;

//     for (let i = 0; i < columnTitle.length; i++) {
//         let digit = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
//         columnNumber = columnNumber * base + digit;
//     }
//     return columnNumber;
// }

// console.log (titleToNumber('ZY'));




                //   LONGEST SUBSTRING

// const PalindromicSubstring = (str) => {
      
//     let longest = "";

//     for(let i = 0; i < str.length; i++){
//         for(let j = i+1; j <= str.length; j++){

//             let subString = str.slice(i , j);

//             if(isPalindrome(subString)  && subString.length > longest.length){
//                 longest = subString  ;
//             }
//         }
//     }

//     return longest.length> 2? longest : none ; 
   
//     function isPalindrome(str){
//        return str === str.split("").reverse().join("");
//     }
    
// }
console.log(longestPalindromicSubstring('racecar'));
console.log(longestPalindromicSubstring('racecarcar'));
console.log(longestPalindromicSubstring('carracecarcar'));



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
   