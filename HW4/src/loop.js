// Цикл від 0 до 9 (for)
console.log("Cycle from 0 to 9:");
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Цикл від 100 до 0 з кроком 10 (for)
console.log("\n Cycle from 100 to 0 with step 10:");
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

// Цикл while від 0 до 9
console.log("\n while (0-9):");
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

// Цикл do...while
console.log("\n do...while (від 50 до 40):");
let k = 50;
do {
    console.log(k);
    k -= 2;
} while (k >= 40);

// Цикл for...of для масиву
console.log("\n for...of (масив чисел від 1 до 5):");
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}
