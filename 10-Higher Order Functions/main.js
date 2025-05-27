/* Assignmnet 1 */
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// Elzero
/* using map + reduce */
let mixMapped = mix
  .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
  .reduce((acc, current) => `${acc}${current}`);

console.log(mixMapped);

/* Assignmnet 2 */
let myString = "EElllzzzzzzzeroo";
/* Using Filter */
// Elzero
let myStringFilter = myString
  .split("")
  .filter(function (ele, index, arr) {
    return arr[index] !== arr[index - 1];
  })
  .reduce((acc, ele) => `${acc}${ele}`);

console.log(myStringFilter);

/* Assignmnet 3 */
let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero
let word = myArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(word);

/* Assignmnet 4 */
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let final = numsAndStrings
    .filter((ele) => !isNaN(ele))
    .map((ele) => -ele);
console.log(final);
// [-1, -10, 10, 20, -5, -3]

/* Assignmnet 5 */
let nums = [2, 12, 11, 5, 10, 1, 99];

let numReduced = nums.reduce(function (acc, curr) {
    return curr % 2 === 0 ? acc * curr : acc + curr;
}, 1);

console.log(numReduced);
// 500

/*
Higher Order Functions Challenges

You Can Use
- ,
- _
- Space
- True => 1 => One Time Only In The Code

You Cannot Use
- Numbers
- Letters

- You Must Use [Filter + Map + Reduce + Your Knowledge]
- Order Is Not Important
- All In One Chain

*/

let myStrings = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myStrings.split(",")
    .filter(ele => isNaN(ele))
    .map(ele => ele === "_" ? " " : ele)
    .reduce((acc, ele) => acc + ele)
    .slice(1,-1);

console.log(solution); // Elzero Web School