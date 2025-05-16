/* Asignmnet 1 */
function sayHello(theName, theGender) {
  let greeting =
    theGender === undefined
      ? `Hello ${theName}`
      : theGender === "Male"
      ? `Hello Mr ${theName}`
      : `Hello Miss ${theName}`;
  console.log(greeting);
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

/* Assignmnet 2 */
function calculate(firstNum, secondNum, operation = "add") {
  // Your Code Here
    if (secondNum === undefined) return console.log("Second Number Not Found");
    switch (operation) {
        case "add":
        console.log(firstNum + secondNum);
        break;
        case "subtract":
        console.log(firstNum - secondNum);
        break;
        case "multiply":
        console.log(firstNum * secondNum);
        break;
    }
    }
// Needed Output
// calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

/* Assignmnet 4 */
function checkStatus(...Arg) {
  // Your Code Here
    let name, age, stat;
    for (let i = 0; i < Arg.length; i++) {
        typeof Arg[i] === "string"
        ? (name = Arg[i])
        : typeof Arg[i] === "number"
        ? (age = Arg[i])
        : (stat = Arg[i]);
    }
    stat === true ?
        console.log(`Hello ${name}, your age is ${age}, ur available for hire`) :
        console.log(`Hello ${name}, your age is ${age}, ur not available`);

}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

/* Assignmnet 5 */
function createSelectBox(startYear, endYear) {
    // Your Code Here
    document.write(`<select>`)
    for (let i = startYear; i <= endYear; i++){
        document.write(`<option value="${i}">${i}</option>`)
    }
    document.write(`</select>`)
}
createSelectBox(2000, 2002);

/* Assignmnet 6 */
function multiply(...Arg) {
    let result = 1;
    for (let i = 0; i < Arg.length; i++){
        if (typeof Arg[i] !== "number") continue;
        result *= Math.trunc(Arg[i]);
    }
    console.log(result)
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000