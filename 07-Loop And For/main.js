/* Assignment 1 */
let start = 10;
let end = 100;
let exclude = 40;

// Output
for (let i = start; i <= end; i += start){
    if (i == exclude) continue;
    console.log(i)
}

/* Assignmnet 2 */
let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i >= stop; i--){
    if (i < start) {
        console.log(end.toString() + i);
    }
    else {
        console.log(i);
    }
}

/* Assignmnet 3 */
let start = 1;
let end = 6;
let breaker = 2;

for (let i = start; i <= end; i++) {
    console.log(i);
    for (let j = breaker; j <= end - breaker; j += breaker) {
        console.log(`-- ${j}`);
    }
}

/* Assignment 4 */
let index = 10;
let jump = 2;

for (;;) {
    console.log(index);
    if (index == 4) break;
    index -= jump;
}

/* Assignmnet 5 */
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = 1;
console.log(friends[0]);
for (let i = 0; i < friends.length; i++) {
    if (friends[i].toLowerCase().startsWith(letter)) continue;
    else {
        console.log(`${counter} => ${friends[i]}`);
        counter++;
    }
}

/* Assignment 6 */
let start = 0;
let swappedName = "elZerO";
let temp =""
console.log(swappedName)
for (let i = 0; i < swappedName.length; i++){
    /* check if uppercase */
    if (swappedName[i].toUpperCase() === swappedName[i]) {
        temp += swappedName[i].toLowerCase();
    }
    else {
        temp += swappedName[i].toUpperCase();
    }
}
console.log(temp)

/* Assignmnet 7 */
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start; i < mix.length; i++) {
    if (typeof mix[i] === "number") console.log(mix[i]);
}

/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed" ,"Stop", "Samera"];
let myEmployees = [
    "Amgad",
    "Samah",
    "Ameer",
    "Oka",
    "Omar",
    "Othman",
    "Amany",
    "Samia",
    "Anwar",
];
let empCount = 1;
let nAdmins =
    myAdmins.indexOf("Stop") !== -1 ? myAdmins.indexOf("Stop") : myAdmins.length;
document.write(`<div>We Have ${nAdmins} Admins</div>
                <hr>`);

for (let i = 0; i < nAdmins; i++) {
    document.write(`<div> The Admin for Team ${i + 1} is ${myAdmins[i]}
                                <h3> Team Members : </h3>`);
    for (let j = 0; j < myEmployees.length; j++) {
        if (myAdmins[i][0] === myEmployees[j][0]) {
        document.write(`<p> - ${empCount} ${myEmployees[j]} </p>`);
        empCount++;
        }
    }
    empCount = 1;
    document.write(`</div>
                        <hr>`);
}
