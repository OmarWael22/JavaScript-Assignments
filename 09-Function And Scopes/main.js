function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    let modName = zName.split(" ");
    return "Hello " + modName[0] + " " + modName[1][0].toUpperCase() + ".";
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
    let modAge = parseInt(zAge);
    return `Your Age Is ${modAge}`;
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
    let modCountry = zCountry.slice(0, 2).toUpperCase();
    return `You Live In ${modCountry}`;
  }
  function fullDetails() {
    // Write Your Code Here
    return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(
      zCountry
    )}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

/* Assignmnet 2-1 */
// function itsMe() {
//   return `Iam A Normal Function`;
// }
itsMe = () => `Iam An Arrow Function`;
console.log(itsMe()); // Iam A Normal Function
/* Assignmnet 2-2 */
// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }
urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

/* Assignmnet 3 */
/* Function Currying */
// function checker(zName) {
//     return function (status) {
//       return function (salary) {
//         return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//       };
//     };
//   }
checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

/* Assignment 4 */
function specialMix(...data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++){
        if (isNaN(parseInt(data[i]))) continue;
        // console.log(parseInt(data[i]));
        sum += parseInt(data[i]);
    }
    return sum === 0 ? `All Is String` : sum;
  }  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

/* Function Arrow Challenges */


// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names = (...Arg) => `[${Arg.join("], [")}]`;
    // Parameter ?

  
  console.log(names("Osama", "Mohamed", "Ali", "Ibrahim", "Hamo"));
  // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
  
