// Arrays of different types
const strings = ["RENO", "AUDI", "CITROEN"];
const numbers = [1, 2, 3, 4, 5];
const booleans = [true, false, true, true];
const mixed = ["String", 10, true, { name: "object" }];

// Iterating through arrays using forEach()
console.log("\n forEach():");
strings.forEach(item => console.log("String:", item));
numbers.forEach(item => console.log("Digit:", item));
booleans.forEach(item => console.log("Bool:", item));
mixed.forEach(item => console.log("Mixed type:", item));


// Converting arrays using map()
console.log("\n map():");
const doubledNumbers = numbers.map(item => item * 2);
console.log("Double digits:", doubledNumbers);

const uppercaseStrings = strings.map(item => item.toUpperCase());
console.log("Uppercase strings:", uppercaseStrings);