/* Assignmnet 2 */
// Method One
// Create Your Object Here
console.log("############ Assignmnet 2 ################")
objMethodOne = {
  property: "Method one",
};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
objMethodTwo = new Object({ property: "Method Two" });

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
objMethodThree = Object.create(objMethodOne);
objMethodThree.property = "Method Three";

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
objMethodFour = Object.assign({}, objMethodOne);
objMethodFour.property = "Method Four";

console.log(objMethodFour.property); // "Method Four"

/* Assignmnet 3 */
console.log("############ Assignmnet 3 ################");
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({}, { a }, threeNums, twoNums);
console.log(finalObject);

/* Assignmnet 4 */
console.log("############ Assignmnet 4 ################");
// // The Object To Work With
let myFavGames = {
    "Trinity Universe": {
        publisher: "NIS America",
        price: 40,
    },
    "Titan Quest": {
        publisher: "THQ",
        bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
        },
        price: 50,
    },
    YS: {
        publisher: "Falcom",
        bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
        },
        price: 40,
    },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
let objKeys = Object.keys(myFavGames);
// console.log(objKeys)

for (let i = 0; i < objectLength; i++) {
    let game = myFavGames[objKeys[i]]
    console.log(`The Game Name Is ${objKeys[i]}`);
    console.log(`The Publisher Is ${game.publisher}`);
    console.log(`The Price Is ${game.price}`);

  // Check If Nested Object Has Property (bestThree)
  if ( game.bestThree !== undefined) {
    console.log("- Game Has Releases");
    console.log(`First => ${game.bestThree.one}`);
    console.log(`Second => ${game.bestThree.two}`);
    console.log(`Third => ${game.bestThree.three}`);
  }
    console.log("#".repeat(20));
}

// Ouput

("The Game Name Is Trinity Universe");
("The Publisher Is NIS America");
("The Price Is 40");
("####################");
("The Game Name Is Titan Quest");
("The Publisher Is THQ");
("The Price Is 50");
("- Game Has Releases");
("First => Immortal Throne");
("Second => Ragnarök");
("Third => Atlantis");
("####################");
("The Game Name Is YS");
("The Publisher Is Falcom");
("The Price Is 40");
("- Game Has Releases");
("First => Oath in Felghana");
("Second => Ark Of Napishtim");
("Third => origin");
("####################");
