// Масиви різних типів
const strings = ["RENO", "AUDI", "CITROEN"];
const numbers = [1, 2, 3, 4, 5];
const booleans = [true, false, true, true];
const mixed = ["String", 10, true, { name: "object" }];

// Ітерація через forEach()
console.log("\n forEach():");
strings.forEach(item => console.log("String:", item));
numbers.forEach(item => console.log("Digit:", item));
booleans.forEach(item => console.log("Bool:", item));
mixed.forEach(item => console.log("Mixed type:", item));

// Використання map()
console.log("\n map():");
const doubledNumbers = numbers.map(item => item * 2);
console.log("Double digits:", doubledNumbers);

const uppercaseStrings = strings.map(item => item.toUpperCase());
console.log("Uppercase strings:", uppercaseStrings);

// Використання for...of
console.log("\n for...of:");
for (const num of numbers) {
    console.log("Number:", num);
}

// Використання for...in
console.log("\n for...in:");
for (const index in strings) {
    console.log(`Index ${index}: ${strings[index]}`);
}

// Використання while
console.log("\n while:");
let i = 0;
while (i < booleans.length) {
    console.log("Boolean value:", booleans[i]);
    i++;
}

// Використання filter()
console.log("\n filter() (тільки парні числа):");
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Використання reduce()
console.log("\n reduce() (сума чисел):");
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// Використання some() і every()
console.log("\n some() (чи є хоча б одне парне число?):", numbers.some(num => num % 2 === 0));
console.log("\n every() (чи всі числа більші за 0?):", numbers.every(num => num > 0));
