// Predicat what each line will print, then uncomment it and check you were right
let x = 1;
// Aritmetic Operators
console.log(5 + 5);
console.log(5 * 10);
console.log(10 % 3);
console.log(5 + 10 / 2 * 5 - 10);
console.log((6 + 10) / 2 * 5 - 10);

// Assignment Operators
console.log(x = x + 1);
console.log(x+= 1);
// Try and figure out the difference
console.log(x);
console.log(x++);
console.log(x);
console.log(++x);

// Relational Operators
console.log(5 > 3);
console.log(3 != 3);
console.log(!5>3);

// Mismatched Types
console.log(5 + "5");
console.log(5 + true);
console.log(5 * "5");
console.log(1 == true);
console.log(1 === true);

// Initial look at arrays
const myFamily = ['Adele', 'Luke', 'Herbie'];
console.log(myFamily)
console.log(myFamily[0])
console.log(myFamily[1])
console.log(myFamily[2])

//Push adds item to the end of the array
myFamily.push("Sasha");
console.log(myFamily);

//shift removes first element
myFamily.shift();
console.log(myFamily);

//unshift adds element at the start of the array 
myFamily.unshift("Adele");
console.log(myFamily);

//splice goes to that index, deletes that many, then can add
myFamily.splice(3,0,"Archie");
console.log(myFamily);

myFamily.splice(3,1)
console.log(myFamily);
