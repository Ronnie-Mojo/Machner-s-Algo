/*
const digitsArray = (num) => {
    let ans = [];
     let numstr = String(num).split('')
    numstr.forEach(val => unshift.(Number(val)) )
    return ans;
    }
    output1 = digitsArray(9842);
    output2 = digitsArray(8195173);
    
    console.log(output1); // [9, 8, 4, 2]
     console.log(output2); // [8, 1, 9, 5, 1, 7, 3] */


//      const smallestInArray = (arr) => {
//         let ans = arr[0];
//         /*
// for (let i=1; i<arr.length; i++) {
//     if  ( arr[i] < ans)
//         ans = arr[i];

// }
//     return ans;
// }*/

//       arr.forEach(val => {
//             if   (val < ans )
//                 ans = val ;
//             })
//             return ans;
//      }

     
// output1 = smallestInArray( [29, 43, 15, 103, 64, 87] );
// output2 = smallestInArray( [7, 5, 3, 4, 8, 3, 8, 4, 8, 2, 2, 7, 6, 3, 2, 8, 9, 2, 3, 6, 7, 3, 9, 1] );
// // console.log(output1); // 15
// // console.log(output2); // 1






// const divisorList = (num) => {
//     let ans = [];
//     const sqrtNum = Math.sqrt(num);
//     console.log(sqrtNum)

//     for (let i = 1 ; i<=sqrtNum; i++){
//         if (num % i === 0){
//             ans.push(i);

//             if (i!==num/i){
//                 ans.push(num/i);
//             }
//         }
      
//     } 
//     return ans;
// }
   

// output1 = divisorList(36);
// output2 = divisorList(70);

// // NOTE 
// // your output array NEED NOT be sorted
// // you can put the divisors in ANY order

// console.log(output1); // [1, 2, 3, 4, 6, 9, 12, 18, 36]
// console.log(output2); // [5, 10, 7, 35, 2, 1, 70, 14]




// const myIndexOf= (arr,num) => {
//   let index = -1
// arr.forEach((val , i) => {
//         if  ( val === num && index === -1){
       
//             index = i
//         }
//         })
//         return  index;
// }
// output1 = myIndexOf( [5, 6, 1, 8, 4, 1, 9]  ,  1 );
// output2 = myIndexOf( [10, 11, 12, 13, 14]  , 6 );

// console.log(output1); // 2
// console.log(output2); // -1


// const divAndMulArray = arr => {
    
//     return arr.map(val => {
//         if (val% 2 === 0 ){
//            return val/2
//         }
//         else {
//            return val*2
//         }})
//     }
        
//     output1 = divAndMulArray([5, 6, 1, 8, 4, 1, 9]);
//     output2 = divAndMulArray([10, 11, 12, 13, 14]);
    
//     console.log(output1); // [10, 3, 2, 4, 2, 2, 18]
//     console.log(output2); // [5, 22, 6, 26, 7]



// const startsWithVowel=(personName) => {

//     let firstCharacter = personName.charAt(0);

//     let set = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
//   return set.has(firstCharacter);
// }


// output1 = startsWithVowel("Dhoni");
// output2 = startsWithVowel("Almabetter");
// output3 = startsWithVowel("ashwin");


// console.log(output1); // false
// console.log(output2); // true
// console.log(output3); // true




// function multiply(a, b) {
//     console.log("A");
//     return a * b;
// }

// function square(a) {
//     console.log("B");
//     return multiply(a, a);
// }

// function printSquare(n) {
//     console.log("C");
//     let ans = square(n);
//     console.log(ans);
// }

// printSquare(5);


//Classes and .bind and .call and .apply

// class music {

//    constructor ( genre , artist){

//    this.genre = genre;
//    this.artist = artist ;

// }
// }

// const music2 = new music("Rock" , "Avenged Sevenfold");
// console.log(music2)

// console.log( music1 = new music("grunge" , "Nirvana"));



// const music = {
//   genre : "Rock" ;
//   artist : "Linkin Park";
//   greatness=() => {
//    console.log(this.artist+ "is the greatest ever in " +this.genre );
//   }
// }

// function multiply(a, b ){
//   return a*b;
// }



// const multiply = function(a, b) {
//   return a * b;
// };

// multiply(3, 4); // Output: 12






// function coolString(stringList) {

//   let ans = "";

//  stringList.forEach((value , index) => {
//  let char = value[index];
//  ans += char;
//  })
// return ans;
// }
// output1 = coolString(["abcd", "efgh", "ijkl", "mnop"]);
// output2 = coolString(["dhoni", "rohit", "kohli", "raina", "jaddu"]);

// console.log(output1); // afkp
// console.log(output2); // dohnu







// const removeDuplicates = (arr) => {

//   let set = new Set ();

//   arr.forEach(val => {
//     set.add(val)
//   })

//  return Array.from(set);
// }

// output1 = removeDuplicates([4, 5, 1, 4, 2, 9, 7, 2, 8, 9, 1, 7, 8]);
// output2 = removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// console.log(output1); // [4, 5, 1, 2, 7, 8, 9]
// console.log(output2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]






// const numberCount = arr => { 

//   let count =  {};
   
//   arr.forEach((val ) => {
//    count[val] = count[val]? count[val]+1 : 1
// })
// return count ;
// }


// let dataStructure1 = numberCount([20, 12, 64, 12, 73, 20, 73, 20, 58]);
// let dataStructure2 = numberCount([4, 5, 1, 4, 2, 9, 7, 2, 8, 9, 1, 7, 8]);

// // console.log(dataStructure1); 
// // console.log(dataStructure2); 


// const noOfOccurrences = ((dataStructure , num) => {

//   return dataStructure[num] || 0 ;

// })

// output1 = noOfOccurrences(dataStructure1, 20); 
// output2 = noOfOccurrences(dataStructure2, 8);
// output3 = noOfOccurrences(dataStructure2, 10);

// console.log(output1); // 3
// console.log(output2); // 2
// console.log(output3); // 0





// const keyWithHighestValue = (dataStructure) => {
//  let highestKey = null;
//  let highestValue = -Infinity;

//  for (let key in dataStructure){
// const value= dataStructure[key]
//   if(value > highestValue){

//     highestValue = value;
//     highestKey = key;
//   }

//  }
// return { [highestKey] : highestValue}

// }


//    let = dataStructure1 = { '12': 2, '20': 3, '58': 1, '64': 1, '73': 2 }
// let result = (keyWithHighestValue(  dataStructure1))
// console.log(result);




// const staircase1 = (n) => {
//  let pattern= '';
//  for (let i =1 ; i<=n ; i++){
//   for (let j = n; j>i; j--){
//    pattern += "";
//   }
// for (let k = 1; k<=i; k++){
//   pattern+="#";
// }
// pattern += "\n";
//  }

//  return pattern;
// }
   

// console.log(staircase1(6));






// function staircase(n) {
//     let pattern = '';
//     for(let i = 1; i<=n ; i++){
//         for(let j = n; j>i; j--){
//             pattern += ' ';
//         }
//         for (let k = 1; k<=i ; k++){
//             pattern += '#';
//         }
//         pattern += '\n';
//     }
// return pattern;
// }

// console.log(staircase(6));






// let newStr = (str) => {
//   let words = str.split(" ");
//   console.log(words)
//   let capitalLetters = words.map(word => word.charAt(0).toUpperCase()+word.slice(1))
// console.log(capitalLetters)
//   let newCapitalStr = capitalLetters.join(" ");
//     return newCapitalStr
 
// }

// console.log(newStr("love and lamha ye jo"))







// function reversestr(str){
//     let a=str.split("");
//     console.log(a)
//     let b = a.reverse().join("")
//     console.log(b)
//     return b;
// }

// // console.log(reversestr("hello")) // output --> 'olleh'
// console.log(reversestr("hello world")) // output --> 'dlrow olleh'

// for even place char to be returned

// function reversesEven(str){
//     let a=str.split("").reverse().filter((ele,index)=>index%2==0).join("")
//     return a
// }
// console.log(reversesEven("hello")) // output ---> olh
// console.log(reversesEven("hello world")) // output --> 'd





// function findSecondSmallest(numbers) {
//     if (numbers.length < 2){
//         return numbers;
//     }
//     let smallest = Infinity;
//     let secondSmallest = Infinity;
//     for (let i = 0; i< numbers.length ; i++){
//         if (numbers[i] < smallest){
//         secondSmallest = smallest;
//         smallest = numbers[i];
//         } 
//         else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
//             secondSmallest = numbers [i];
//         }  
//     }

//     if (secondSmallest === Infinity){
//         return "no second smallest number";
//     }
// return secondSmallest;
// }
    
// console.log(findSecondSmallest([5, 10, 8, 2, 1, 0 , 3, 9]));





// Binary Search


// const binarySearch = (arr , target) => {
//  let leftIndex = 0;
//  let rightIndex = arr.length;

//  while (leftIndex <= rightIndex){
// let middleIndex = Math.floor((leftIndex + rightIndex)/2);

// if (target === arr[middleIndex]){
//     return middleIndex;
// }else if(target < arr[middleIndex]){
//     rightIndex = middleIndex -1;
//   }else{
//     leftIndex = middleIndex +1
//   }
//  }
// return leftIndex;
// }

// console.log(binarySearch([-3, 4 , 3 , 8 ,10] , 3));   // 2
// console.log(binarySearch([-3, 4 , 3 , 8 ,10] , 8));  //3
// console.log(binarySearch([-3, 4 , 3 , 8 , 10 , 12 , 13] , 13));  //6
// console.log(binarySearch([-3, 4 , 3 , 8 , 10 , 12 , 13] , 5));  //-1



// T E R N A R Y      S E A R C H   :

// const ternarySearch = (arr , target) => {
//  let left = 0;
//  let right = arr.length-1;

//  while (left <= right){
//     let mid1 = left + Math.floor((right -left) /3);
//     let mid2 = right - Math.floor((right - left) /3);

//     if (arr[mid1] === target){
//         return mid1;
//     }
//     if (arr[mid2] === target) {
//         return mid2;
//     }
    
//     if (target < arr[mid1]){
//         right = mid1-1;
//     }else if (target > arr[mid2]){
//         left = mid2+1;
//     }else {
//         left = mid1+1;
//         right = mid2-1;
//     }
//  }
//  return -1;
// }

// var arr = [1, 2, 3, 4, 5, 6, 7];
// var target = 3;
// console.log(ternarySearch(arr, target)); // Output: 4 





// Jump Search : 
 
const jumpSearch = (arr , t) => {
    const n = arr.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    while (arr[Math.min(step , n) - 1 ] < t){
        prev = step;
        step += Math.sqrt(n);

    if (prev >=n){
        return -1;
    }
}
    while (arr[prev] < t){
        prev++;
    
    if (prev === Math.min(step , n)){
        return -1;
    }
}
    if (arr[prev]===target){
    return prev;
}
        return -1;
}
var arr = [1, 2, 3, 4, 5, 6, 7];
var target = 5;
// console.log(jumpSearch(arr, target)); // Output: 4 


 

const arrayRotations = (N,K) => {
   let arr = Array.from({length : N},(_ , index) => index+1);
    K = K % N;

    if (N===0 || K===0){
        return arr;
    }

    let lastIndexElements = arr.slice( N-K);
    console.log(lastIndexElements)
    for (let i = N-1 ; i >= K ; i--){
        arr[i] = arr[i-K];
     
    }
    

    for (let i=0 ; i< K ; i++){
        arr[i] = lastIndexElements[i]
    }

    return arr;
}
 console.log(...arrayRotations(5 , 2))