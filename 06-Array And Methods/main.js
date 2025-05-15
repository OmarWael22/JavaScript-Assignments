/* Assignment 1 */
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0,num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

/* Assignment 2 */
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends.slice(1, friends.length - 1)); // ["Eman", "Osama"]

/* Assignmnet 3 */
let arrOne = ["C", "D", "X"]; 
let arrTwo = ["A", "B", "Z"];  
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse()
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

/* Assignment 4 */
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
/* required to print ZERO using one line of code
/* soln */
website = words[words.length - 1][0].slice([words[words.length - 1][0].indexOf("zero")]).toUpperCase();
console.log(website); // ZERO

/* Assignment 5 */
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [arr2.pop(),arr1.pop(),arr2.pop()].reverse().join("").toLowerCase();

// Your Code Here

console.log(allArrs); // fxy

/* array challenge */
/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero,counter + true).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.indexOf("Mazero"),counter).reverse()); // ["Elham", "Mazero"]

