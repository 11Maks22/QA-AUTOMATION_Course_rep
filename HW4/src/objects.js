const complexObject = {
    name: "Complex Object",
    details: {
        version: 1.0,
        author: "Your name"
    },
    data: [1, 2, 3, 4, 5],
    printData: function() {
        console.log("\n Data:", this.data);
    }
};

// Print object values
console.log("\n Object:");
console.log("Name:", complexObject.name);
console.log("Version:", complexObject.details.version);
console.log("Author:", complexObject.details.author);
complexObject.printData();
