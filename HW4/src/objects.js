const complexObject = {
    name: "Complex Object",
    details: {
        version: 1.0,
        author: "Maks Sloboda"
    },
    data: [1, 2, 3, 4, 5],
    printData: function() {
        console.log("\n Data:", this.data);
    }
};

// Виведення об'єкта
console.log("\n Object:");
console.log("Name:", complexObject.name);
console.log("Version:", complexObject.details.version);
console.log("Author:", complexObject.details.author);
complexObject.printData();

// Використання for...in для деталей
console.log("\n for...in (details):");
for (const key in complexObject.details) {
    console.log(`${key}: ${complexObject.details[key]}`);
}

// Використання Object.keys()
console.log("\n Object.keys():");
console.log(Object.keys(complexObject));

// Використання Object.values()
console.log("\n Object.values():");
console.log(Object.values(complexObject));

// Використання Object.entries()
console.log("\n Object.entries():");
Object.entries(complexObject).forEach(([key, value]) => {
    console.log(`${key}:`, value);
});
