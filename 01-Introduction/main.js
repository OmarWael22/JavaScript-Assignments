/* Assignmet-2 */
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.fontFamily = "Arial";


/* Assignmet-3*/
console.log("%cElZero %cweb %cschool","color:red;","color:green;","background-color:blue;color:white;")

/* Assignment-4*/
console.group("Group 1");
console.log("message 1");
console.log("message 2");
console.log("message 3");
console.group("child group");
console.log("message 1");
console.log("message 2");
console.group("grand child  group");
console.log("message 1");
console.log("message 2");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("message 1");
console.log("message 2");
console.log("message 3");
console.groupEnd();



/* Assignment-5*/
console.table(["Elzero","ahmed","sameh","gamal","aya"])


/* Assignment-6*/
console.log("Iam In Console");
document.write("Iam In Page");

// console.clear();
// document.body.innerHTML = "";