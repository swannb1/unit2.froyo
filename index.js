// The user is prompted for froyo flavors upon entering the website.
const userInput = prompt(
    "Enter the flavors you want to order. Seperate each flavor by a comma.",
    " vanilla, vanilla, vanilla, strawberry, coffee, coffee" 
);
console.log(userInput);

// The user's input string is split into an array of strings
const flavArr = userInput.split(",");
console.log(flavArr);

// A loop is used to iterate through the array of flavors
for(let i=0; i<flavArr.length; i++){
    console.log(flavArr[i]);
}

// An object is used to keep count of how many orders there are of each flavor
// const flavors = {
//     coffee: 0,
//     strawberry: 0,
//     vanilla: 0,
// };
// console.log(flavors);

// The program correctly counts the number of each flavor in the user's input
// console.table(flavors);

// The console output changes depending on the user's iput
const flavors = {};
flavArr.forEach(element => {
    if(flavors.hasOwnProperty(element)){
        flavors[element]++;
    }  else{
        flavors[element] = 1;
    }
});
console.table(flavors);