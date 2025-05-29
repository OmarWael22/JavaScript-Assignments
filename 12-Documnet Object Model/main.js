/* Assignmnet 1 */
console.log("############### Assignment 1 #############");

console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByTagName("div")[0]);
console.log(document.getElementsByName("js")[0]);

console.log(document.querySelector("#elzero"));
console.log(document.querySelector("div"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("[name = js]"));

console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll("div")[0]);
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("[name = js]")[0]);

console.log(document.body.children[0]);
console.log(document.body.firstElementChild);
console.log(document.body.childNodes[1]);

/* Assignment 2 */
console.log("############### Assignment 2 #############");
let nLength = document.body.children.length;
// console.log(document.body.children[0].children[0])
for (let i = 0; i < nLength - 1; i++) {
    let imgElement = document.body.children[i].firstElementChild;
    imgElement.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    imgElement.alt = "Elzero Logo";
    
}

/* Assignmnet 3 */
console.log("############### Assignment 3 #############");

let myForm = document.forms[0];
let myInput = myForm.querySelector("input");
let mydiv = myForm.querySelector("div");

myForm.oninput = function () {
    let USDValue = myInput.value;
    let myText = `{ ${USDValue} } USD Dollar = { ${(USDValue * 15.6).toFixed(2)} } Egyptian Pound`;
    mydiv.innerText = myText;
}

/* Assignmnet 4 */
let firstDiv = document.body.querySelectorAll("div")[0];
let secondDiv = document.body.querySelectorAll("div")[1];

let tempDiv = document.createElement("div")

temptitle = secondDiv.title;
tempinnerText = secondDiv.innerText;

secondDiv.title = firstDiv.title;
secondDiv.innerText = firstDiv.innerText + " 2";

firstDiv.title = temptitle;
firstDiv.innerText = tempinnerText;

/* Assignmnet 5 */
let imgs = document.images;
for (let i = 0; i < document.images.length; i++){
    if (imgs[i].hasAttribute("alt"))
        imgs[i].setAttribute("alt", "Old");
    else
        imgs[i].setAttribute("alt","Elzero New")
}

/* Assignmnet 6 */

let myForm = document.forms[0];
let resultDiv = document.body.querySelector(".results");
myForm.onsubmit = function (event) {

    resultDiv.innerHTML = "";
    let nElement = myForm.querySelector("input").value;
    let textElement = myForm.querySelectorAll("input")[1].value;
    let elementType = myForm.querySelector("select").value;
    for (let i = 0; i < nElement; i++){
        let myElement = document.createElement(elementType);
        myElement.setAttribute("id", `id-${i + 1}`);
        myElement.innerText = textElement;
        resultDiv.appendChild(myElement);
    }

    event.preventDefault();
}
